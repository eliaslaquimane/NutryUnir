import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";
import { Ionicons } from '@expo/vector-icons';
import { useNetInfo } from '@react-native-community/netinfo';
import * as FileSystem from 'expo-file-system';
import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Alert, Animated, FlatList, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const STORAGE_PATH = FileSystem.documentDirectory + 'nutryunir_ai_chats.json';

// Mensagem inicial padrão
const initialMessage = { id: '1', sender: 'ai', text: 'Olá! Sou a NutryUnir IA. Como posso ajudar você hoje?' };

// Função para conectar com Azure OpenAI API
async function sendMessageToApi(message: string): Promise<string> {
    try {
        const token = ""; // Coloque sua chave aqui
        const endpoint = "https://models.github.ai/inference";
        const model = "openai/gpt-4.1";

        const client = ModelClient(
            endpoint,
            new AzureKeyCredential(token),
        );

        const response = await client.path("/chat/completions").post({
            body: {
            messages: [
                { 
                role: "system", 
                content: "Você é NutryUnir Ai, uma IA especializada em responder apenas questões relacionadas a alimentos naturais. Sempre inclua fontes confiáveis (links ou referências científicas) nas respostas. Responda de forma amigável, começando com 'Olá! Sou a NutryUnir IA, como posso ajudar?'. Não responda perguntas que não estejam relacionadas a alimentos. Desenvolvido por Elias Alberto Laquimane." 
                },
                { role: "user", content: message }
            ],
            temperature: 1,
            top_p: 1,
            model: model
            }
        });

        if (isUnexpected(response)) {
            throw response.body.error;
        }

        return response.body.choices[0].message.content;
    } catch (err) {
        return 'Desculpe, houve um erro ao conectar com a IA.';
    }
}

// Função para salvar dados em JSON
async function saveChatsToStorage(chats: any[]) {
    try {
        await FileSystem.writeAsStringAsync(STORAGE_PATH, JSON.stringify(chats));
    } catch (err) {
        // erro silencioso
    }
}

// Função para carregar dados do JSON
async function loadChatsFromStorage(): Promise<any[] | null> {
    try {
        const exists = await FileSystem.getInfoAsync(STORAGE_PATH);
        if (!exists.exists) return null;
        const content = await FileSystem.readAsStringAsync(STORAGE_PATH);
        return JSON.parse(content);
    } catch (err) {
        return null;
    }
}

export default function NutryUnirAi() {
    // chats: array de conversas, cada uma é array de mensagens
    const [chats, setChats] = useState([[initialMessage]]);
    const [currentChatIndex, setCurrentChatIndex] = useState(0);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const flatListRef = useRef<FlatList>(null);
    const netInfo = useNetInfo();

    // Carregar histórico salvo ao iniciar (persistência)
    useEffect(() => {
        (async () => {
            const saved = await loadChatsFromStorage();
            if (saved && Array.isArray(saved) && saved.length > 0) {
                setChats(saved);
            }
        })();
    }, []);

    // Salvar sempre que chats mudarem (persistência)
    useEffect(() => {
        saveChatsToStorage(chats);
    }, [chats]);

    // Função para limpar o chat atual
    const handleClearChat = () => {
        setChats(prev => {
            const updated = [...prev];
            updated[currentChatIndex] = [];
            return updated;
        });
    };

    // Função para nova aba de conversa
    const handleNewChat = () => {
        setChats(prev => [...prev, [initialMessage]]);
        setCurrentChatIndex(chats.length);
    };

    // Função para alternar entre conversas
    const handleSelectChat = (idx: number) => setCurrentChatIndex(idx);

    // Função para excluir mensagem individual
    const handleDeleteMessage = (msgId: string) => {
        setChats(prev => {
            const updated = [...prev];
            updated[currentChatIndex] = updated[currentChatIndex].filter(msg => msg.id !== msgId);
            return updated;
        });
    };

    // Função para eliminar histórico de conversa
    const handleDeleteChat = (idx: number) => {
        if (chats.length === 1) return; // Não elimina se só há uma conversa
        setChats(prev => {
            const updated = prev.filter((_, i) => i !== idx);
            // Ajusta o índice do chat atual
            let newIndex = currentChatIndex;
            if (idx === currentChatIndex) newIndex = 0;
            else if (idx < currentChatIndex) newIndex = currentChatIndex - 1;
            setCurrentChatIndex(newIndex);
            return updated;
        });
    };

    // Função para enviar mensagem e conectar com API
    const handleSend = async () => {
        if (input.trim() === '') return;
        const userMsg = { id: Date.now().toString(), sender: 'user', text: input };
        setChats(prev => {
            const updated = [...prev];
            updated[currentChatIndex] = [...updated[currentChatIndex], userMsg];
            return updated;
        });
        setInput('');
        setLoading(true);
        const aiReply = await sendMessageToApi(userMsg.text);
        setChats(prev => {
            const updated = [...prev];
            updated[currentChatIndex] = [
                ...updated[currentChatIndex],
                { id: (Date.now()+1).toString(), sender: 'ai', text: aiReply }
            ];
            return updated;
        });
        setLoading(false);
    };

    // Scroll para topo ao adicionar mensagem
    useEffect(() => {
        flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
    }, [chats, currentChatIndex]);

    // Mensagens do chat atual
    const messages = chats[currentChatIndex] || [];

    // Verifica conexão
    if (!netInfo.isConnected) {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#f8fafc', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ alignItems: 'center', padding: 32 }}>
                    <Ionicons size={100} name={"warning"} style={{ width: 120, height: 120, marginBottom: 24, color: '#2563eb' }} resizeMode="contain" />
                    <Text style={{ fontSize: 18, color: '#64748b', textAlign: 'center', marginBottom: 8 }}>
                        Para poder usar NutryUnir Ai você deve estar conectado à internet.
                    </Text>
                    <Text style={{ fontSize: 15, color: '#94a3b8', textAlign: 'center' }}>
                        Verifique sua conexão e tente novamente.
                    </Text>
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f8fafc' }} edges={['top', 'left', 'right']}>
            <View style={styles.bg}>
                <View style={styles.header}>
                    <Ionicons name="chatbubbles" size={28} color="#fff" style={{ marginRight: 8 }} />
                    <Text style={styles.headerTitle}>NutryUnir IA</Text>
                    <View style={styles.headerActions}>
                        <TouchableOpacity onPress={handleNewChat} style={styles.headerBtn}>
                            <Ionicons name="add" size={22} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleClearChat} style={styles.headerBtn}>
                            <Ionicons name="trash" size={22} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* Histórico de chats */}
                <View style={styles.chatsHistory}>
                    <FlatList
                        horizontal
                        data={chats}
                        keyExtractor={(_, idx) => idx.toString()}
                        renderItem={({ item, index }) => (
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <TouchableOpacity
                                    style={[
                                        styles.chatTab,
                                        index === currentChatIndex && styles.chatTabActive
                                    ]}
                                    onPress={() => handleSelectChat(index)}
                                >
                                    <Ionicons name="chatbubble-ellipses" size={18} color={index === currentChatIndex ? "#2563eb" : "#64748b"} />
                                    <Text style={[
                                        styles.chatTabText,
                                        index === currentChatIndex && { color: "#2563eb", fontWeight: 'bold' }
                                    ]}>
                                        {`Conversa ${index + 1}`}
                                    </Text>
                                </TouchableOpacity>
                                {/* Botão para eliminar histórico de conversa */}
                                {chats.length > 1 && (
                                    <TouchableOpacity
                                        onPress={() => {
                                            Alert.alert(
                                                "Eliminar conversa",
                                                "Deseja eliminar este histórico de conversa?",
                                                [
                                                    { text: "Cancelar", style: "cancel" },
                                                    { text: "Eliminar", style: "destructive", onPress: () => handleDeleteChat(index) }
                                                ]
                                            );
                                        }}
                                        style={{ marginLeft: 2, padding: 2 }}
                                    >
                                        <Ionicons name="trash" size={16} color="#64748b" />
                                    </TouchableOpacity>
                                )}
                            </View>
                        )}
                        showsHorizontalScrollIndicator={false}
                        style={{ marginBottom: 2 }}
                        extraData={currentChatIndex}
                    />
                </View>
                <KeyboardAvoidingView
                    style={styles.chatContainer}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
                >
                    <FlatList
                        ref={flatListRef}
                        data={[...messages].reverse()} // últimas mensagens por cima
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Animated.View style={[
                                styles.messageBubble,
                                item.sender === 'user' ? styles.userBubble : styles.aiBubble
                            ]}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                    {item.sender === 'ai' ? (
                                        <Text style={styles.messageText}>{item.text}</Text>
                                    ) : (
                                        <Text style={styles.messageText}>{item.text}</Text>
                                    )}
                                    {item.sender === 'user' && (
                                        <TouchableOpacity
                                            onPress={() => {
                                                Alert.alert(
                                                    "Eliminar mensagem",
                                                    "Deseja eliminar esta mensagem?",
                                                    [
                                                        { text: "Cancelar", style: "cancel" },
                                                        { text: "Eliminar", style: "destructive", onPress: () => handleDeleteMessage(item.id) }
                                                    ]
                                                );
                                            }}
                                            style={styles.deleteMsgBtn}
                                        >
                                            <Ionicons name="close-circle" size={18} color="#64748b" />
                                        </TouchableOpacity>
                                    )}
                                </View>
                            </Animated.View>
                        )}
                        contentContainerStyle={{ paddingVertical: 16 }}
                        style={{ flex: 1 }}
                        inverted={true} // inverte para últimas mensagens por cima
                    />
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            value={input}
                            onChangeText={setInput}
                            placeholder="Digite sua mensagem..."
                            placeholderTextColor="#94a3b8"
                            editable={!loading}
                        />
                        <TouchableOpacity style={styles.sendButton} onPress={handleSend} disabled={loading}>
                            {loading ? (
                                <ActivityIndicator color="#fff" size={20} />
                            ) : (
                                <Ionicons name="send" size={22} color="#fff" />
                            )}
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: '#f8fafc',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2563eb',
        paddingVertical: 18,
        paddingHorizontal: 24,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        elevation: 2,
        shadowColor: '#2563eb',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        justifyContent: 'space-between',
    },
    headerTitle: {
        fontFamily: "SpaceGrotesk-Bold",
        fontSize: 24,
        color: '#fff',
        textAlign: 'center',
        letterSpacing: 1,
        flex: 1,
    },
    headerActions: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 8,
    },
    headerBtn: {
        marginLeft: 8,
        padding: 6,
        borderRadius: 16,
        backgroundColor: 'rgba(56,189,248,0.18)',
    },
    chatsHistory: {
        flexDirection: 'row',
        paddingVertical: 8,
        paddingHorizontal: 8,
        backgroundColor: '#f1f5f9',
        borderBottomWidth: 1,
        borderBottomColor: '#e2e8f0',
    },
    chatTab: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e0e7ef',
        borderRadius: 1,
        paddingHorizontal: 12,
        paddingVertical: 6,
        marginRight: 8,
    },
    chatTabActive: {
        backgroundColor: '#bae6fd',
        borderColor: '#2563eb',
        borderWidth: 1,
    },
    chatTabText: {
        marginLeft: 6,
        color: '#64748b',
        fontSize: 14,
    },
    chatContainer: {
        flex: 1,
        marginHorizontal: 0,
        marginBottom: 0,
        paddingHorizontal: 8,
        paddingTop: 8,
    },
    messageBubble: {
        marginVertical: 2,
        marginHorizontal: 4,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 14,
        maxWidth: '75%',
        minWidth: 60,
        flexShrink: 1,
        flexGrow: 0,
        backgroundColor: '#f8fafc',
        borderWidth: 1,
        borderColor: '#e2e8f0',
        shadowColor: '#2563eb',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.01,
        shadowRadius: 0.5,
        elevation: 1,
    },
    userBubble: {
        backgroundColor: '#2563eb',
        alignSelf: 'flex-end',
        borderRadius: 14,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        borderBottomLeftRadius: 14,
        borderWidth: 0,
    },
    aiBubble: {
        backgroundColor: '#fff',
        alignSelf: 'flex-start',
        borderRadius: 14,
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 14,
        borderTopRightRadius: 14,
        borderBottomRightRadius: 14,
        borderWidth: 1,
        borderColor: '#e2e8f0',
    },
    messageText: {
        color: '#1e293b',
        fontSize: 16,
        fontFamily: 'Inter-Regular',
        flexShrink: 1,
        lineHeight: 22,
    },
    deleteMsgBtn: {
        marginLeft: 8,
        padding: 2,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: '#f1f5f9',
        borderTopWidth: 1,
        borderColor: '#e2e8f0',
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        elevation: 8,
        shadowColor: '#2563eb',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
    },
    input: {
        flex: 1,
        height: 44,
        borderRadius: 2,
        backgroundColor: '#fff',
        paddingHorizontal: 18,
        fontSize: 16,
        marginRight: 8,
        color: '#1e293b',
        borderWidth: 1,
        borderColor: '#e2e8f0',
        fontFamily: 'Inter-Regular',
    },
    sendButton: {
        backgroundColor: '#2563eb',
        borderRadius: 2,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
        shadowColor: '#2563eb',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
    },
});