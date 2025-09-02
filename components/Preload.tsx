import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

interface PreloadProps {
  loading: boolean;
  children: React.ReactNode;
}

/**
 * Exibe um indicador de carregamento enquanto a propriedade "loading" for verdadeira.
 * Quando o carregamento termina, renderiza os filhos recebidos como props.
 */
export default function Preload({ loading, children }: PreloadProps) {
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2563eb" />
        <Text style={styles.loadingText}>Carregando...</Text>
      </View>
    );
  }

  return <>{children}</>;
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
  },
  loadingText: {
    marginTop: 8,
    fontSize: 16,
    color: '#2563eb',
    fontFamily: 'Inter-SemiBold',
  },
});