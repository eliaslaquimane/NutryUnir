import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

/**
 * Exibe uma barra de pesquisa animada.
 * Ao clicar no ícone de busca, exibe o campo de texto para digitar a pesquisa.
 * Permite pesquisar alimentos e fecha automaticamente ao esconder o teclado.
 */
export default function SearchBar({
  searchText,
  setSearchText,
  onSearch,
}: {
  searchText: string;
  setSearchText: (text: string) => void;
  onSearch: () => void;
}) {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const textInputRef = useRef<TextInput>(null);
  const inputOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setIsSearchActive(false);
      Animated.timing(inputOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });

    return () => {
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleSearchIconPress = () => {
    setIsSearchActive(true);
    Animated.timing(inputOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      textInputRef.current?.focus();
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.searchContainer}>
          <TouchableOpacity onPress={handleSearchIconPress} style={styles.searchIcon}>
            <Ionicons name="search" size={24} color="#64748b" />
          </TouchableOpacity>
          {isSearchActive && (
            <Animated.View style={[styles.inputContainer, { opacity: inputOpacity }]}>
              <TextInput
                ref={textInputRef}
                style={styles.input}
                placeholder="Pesquise o alimento ..."
                placeholderTextColor="#64748b"
                value={searchText}
                onChangeText={setSearchText}
                onSubmitEditing={onSearch}
                returnKeyType="search"
                blurOnSubmit={true}
              />
            </Animated.View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    padding: 8,
    backgroundColor: '#ffffff',
    borderRadius: 24,
    elevation: 2,
  },
  inputContainer: {
    flex: 1,
    marginLeft: 8,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    elevation: 2,
  },
  input: {
    padding: 12,
    fontSize: 16,
    color: '#000000',
  },
});