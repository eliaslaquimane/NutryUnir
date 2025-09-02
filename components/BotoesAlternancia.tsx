import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface BotoesAlternanciaProps {
  viewMode: 'descricao' | 'composicao';
  setViewMode: (mode: 'descricao' | 'composicao') => void;
}

export default function BotoesAlternancia({ viewMode, setViewMode }: BotoesAlternanciaProps) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 12, marginBottom: 4 }}>
      <TouchableOpacity
        style={{
          backgroundColor: viewMode === 'descricao' ? '#2563eb' : '#e0e7ef',
          paddingVertical: 8,
          paddingHorizontal: 18,
          borderRadius: 8,
          marginRight: 8,
        }}
        onPress={() => setViewMode('descricao')}
      >
        <Text style={{ color: viewMode === 'descricao' ? '#fff' : '#2563eb', fontWeight: 'bold' }}>Descrição</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: viewMode === 'composicao' ? '#2563eb' : '#e0e7ef',
          paddingVertical: 8,
          paddingHorizontal: 18,
          borderRadius: 8,
        }}
        onPress={() => setViewMode('composicao')}
      >
        <Text style={{ color: viewMode === 'composicao' ? '#fff' : '#2563eb', fontWeight: 'bold' }}>Ver mais</Text>
      </TouchableOpacity>
    </View>
  );
}
