import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/**
 * Exibe o cabeçalho do aplicativo com o título e o subtítulo.
 */
export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.betaBanner}>
        <Text style={styles.betaText}>BETA - Versão de Teste</Text>
      </View>
      <Text style={styles.title}>NutryUniR</Text>
      <Text style={styles.subtitle}>Explore a Química dos Alimentos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 24,
    paddingTop: 60,
    backgroundColor: '#ffffff',
  },
  betaBanner: {
    backgroundColor: '#fbbf24',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  betaText: {
    color: '#92400e',
    fontWeight: 'bold',
    fontSize: 12,
    letterSpacing: 1,
  },
  title: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 32,
    color: '#1e293b',
    marginBottom: 4,
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#64748b',
  },
});