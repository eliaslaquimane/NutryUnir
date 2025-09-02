import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/**
 * Exibe o rodapé do aplicativo com informações de direitos autorais e desenvolvedor.
 */
export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>
        Desenvolvido por Elias Alberto Laquimane © {new Date().getFullYear()} Dr.Químico. Todos os direitos reservados.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8fafc',
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
  },
  text: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
  },
});