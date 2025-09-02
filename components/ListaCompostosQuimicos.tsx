import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';

interface Composto {
  nome: string;
  formula: string;
  toxico: boolean;
  categoria: string;
  descricao: string;
}

interface ListaCompostosQuimicosProps {
  loading: boolean;
  compostos: Composto[];
  currentCompostos: Composto[];
  expandedIndex: number | null;
  setExpandedIndex: (idx: number | null) => void;
  styles: any;
}

export default function ListaCompostosQuimicos({ loading, compostos, currentCompostos, expandedIndex, setExpandedIndex, styles }: ListaCompostosQuimicosProps) {
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2563eb" />
        <Text>Carregando Os dados...</Text>
      </View>
    );
  }
  return (
    <View style={styles.secaoListaCompostos}>
      <Text style={styles.subtitulo}>Composição Química do Alimento</Text>
      {currentCompostos.map((composto, index) => {
        const isExpanded = expandedIndex === index;
        const borderColor = composto.toxico
          ? (isExpanded ? '#dc2626' : '#e2e8f0')
          : (isExpanded ? '#22c55e' : '#e2e8f0');
        const backgroundColor = composto.toxico && isExpanded ? '#fee2e2' : '#ffffff';
        return (
          <TouchableOpacity
            key={index}
            style={[
              styles.cardComposto,
              { borderColor, backgroundColor }
            ]}
            onPress={() => setExpandedIndex(isExpanded ? null : index)}
            activeOpacity={0.9}
          >
            <Ionicons name="beaker" size={24} color={composto.toxico ? '#dc2626' : '#2563eb'} />
            <View style={styles.infoComposto}>
              <Text style={[styles.nomeComposto, composto.toxico && { color: '#dc2626' }]}>
                {composto.nome}
              </Text>
              <Text style={styles.descricaoComposto}>{composto.categoria}</Text>
              <Text style={styles.formulaComposto}>{composto.formula}</Text>
              {isExpanded && (
                <View style={{ marginTop: 8 }}>
                  <Text style={{ color: '#475569', fontSize: 14, marginBottom: 4, textAlign: 'justify' }}>
                    <Text style={{ fontWeight: 'bold', textAlign: 'justify' }}>Descrição: </Text>
                    {composto.descricao || 'Não informada'}
                  </Text>
                  <Text style={{ color: composto.toxico ? '#dc2626' : '#22c55e', fontSize: 14 }}>
                    {composto.toxico ? 'Tóxico' : 'Não tóxico'}
                  </Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
