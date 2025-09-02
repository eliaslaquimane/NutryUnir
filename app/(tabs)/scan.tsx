  import React, { useState } from 'react';
  import { ActivityIndicator, Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
  import { Ionicons } from '@expo/vector-icons';
  import { useNetInfo } from '@react-native-community/netinfo';
  import * as ImagePicker from 'expo-image-picker';


  const ScanScreen = () => {
    const [image, setImage] = useState<string | null>(null);
    const [scanning, setScanning] = useState(false);
    const [result, setResult] = useState<string | null>(null);
    const netInfo = useNetInfo();

    

    const handleScan = async () => {
      setResult(null);
      setScanning(true);
      if (image) {
        const markdownResult = await analyzeWithGemini(image);
        setResult(markdownResult);
      }
      setScanning(false);
    };

    const pickImage = async () => {
      setResult(null);
      setImage(null);
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permissão Negada', 'Acesso à câmara foi negado.');
        return;
      }
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.7,
      });
      if (!result.canceled && result.assets.length > 0) {
        setImage(result.assets[0].uri);
      }
    };

    if (!netInfo.isConnected) {
      return (
        <View style={styles.telaScan}>
          <Ionicons size={100} name={"warning"} style={{ width: 120, height: 120, marginBottom: 24, color: '#2563eb' }} />
          <Text style={styles.noInternetText}>
            Para usar o Scan de Alimentos, é necessário estar ligado à internet.
          </Text>
          <Text style={styles.noInternetSubtext}>
            Verifica a tua ligação e tenta novamente.
          </Text>
        </View>
      );
    }

    return (
      <View style={styles.telaScan}>
        <Text style={styles.tituloMensagem}>Scan de Alimentos</Text>
        <Text style={styles.subtituloMensagem}>
          Fotografa um alimento para identificar o que é e a sua composição.
        </Text>
        <TouchableOpacity style={styles.scanButton} onPress={pickImage}>
          <Ionicons name="camera" size={28} color="#fff" />
          <Text style={styles.scanButtonText}>Abrir Câmara</Text>
        </TouchableOpacity>
        {image && (
          <View style={styles.imagePreviewContainer}>
            <Image source={{ uri: image }} style={styles.imagePreview} />
            <TouchableOpacity style={styles.analyzeButton} onPress={handleScan}>
              <Ionicons name="search" size={22} color="#fff" />
              <Text style={styles.analyzeButtonText}>Analisar Alimento</Text>
            </TouchableOpacity>
          </View>
        )}
        {scanning && (
          <View style={styles.resultContainer}>
            <ActivityIndicator size="large" color="#2563eb" />
            <Text style={styles.resultText}>A analisar alimento com IA...</Text>
          </View>
        )}
        {result && (
          <ScrollView style={styles.resultScroll} contentContainerStyle={styles.resultContainer}>
            <Ionicons name="checkmark-circle" size={32} color="#22c55e" />
            <Text style={styles.resultText}>{result}</Text>
          </ScrollView>
        )}
      </View>
    );
  };

  const styles = StyleSheet.create({
    telaScan: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f8fafc',
      paddingHorizontal: 16,
    },
    tituloMensagem: {
      fontFamily: 'SpaceGrotesk-Bold',
      fontSize: 24,
      color: '#1e293b',
      marginBottom: 8,
      textAlign: 'center',
    },
    subtituloMensagem: {
      fontFamily: 'Inter-Regular',
      fontSize: 16,
      color: '#64748b',
      textAlign: 'center',
      marginBottom: 18,
    },
    scanButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#2563eb',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 16,
      marginBottom: 16,
      elevation: 2,
    },
    scanButtonText: {
      color: '#fff',
      fontSize: 16,
      fontFamily: 'Inter-SemiBold',
      marginLeft: 8,
    },
    imagePreviewContainer: {
      alignItems: 'center',
      marginBottom: 16,
    },
    imagePreview: {
      width: 180,
      height: 180,
      borderRadius: 16,
      marginBottom: 12,
      borderWidth: 2,
      borderColor: '#38bdf8',
    },
    analyzeButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#38bdf8',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 14,
      elevation: 1,
    },
    analyzeButtonText: {
      color: '#fff',
      fontSize: 15,
      fontFamily: 'Inter-SemiBold',
      marginLeft: 6,
    },
    resultScroll: {
      maxHeight: 220,
      width: '100%',
      marginTop: 18,
      borderRadius: 12,
      backgroundColor: '#f1f5f9',
      borderWidth: 1,
      borderColor: '#e2e8f0',
      alignSelf: 'center',
    },
    resultContainer: {
      alignItems: 'center',
      padding: 16,
    },
    resultText: {
      fontFamily: 'Inter-Regular',
      fontSize: 16,
      color: '#334155',
      textAlign: 'justify',
      marginTop: 8,
    },
    noInternetText: {
      fontSize: 18,
      color: '#2563eb',
      textAlign: 'center',
      marginBottom: 8,
    },
    noInternetSubtext: {
      fontSize: 15,
      color: '#94a3b8',
      textAlign: 'center',
    },
  });

  export default ScanScreen;
