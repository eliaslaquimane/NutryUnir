import { Ionicons } from '@expo/vector-icons';
import React, { useRef, useState } from 'react';
import { Button, ScrollView, Text, TouchableOpacity, View } from 'react-native';

type Composto = {
  nome: string;
  categoria: string;
  formula: string;
  descricao?: string;
  toxico: boolean;
};

type ComposicaoQuimicaScreenProps = {
  route: {
    params: {
      compostos: Composto[];
    };
  };
  navigation: any;
};

export default function ComposicaoQuimicaScreen({ route, navigation }: ComposicaoQuimicaScreenProps) {
  const { compostos } = route.params;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCompostos = compostos.slice(startIndex, endIndex);

  // Para rolar ao topo ao mudar de página
  const scrollViewRef = useRef<ScrollView | null>(null);

  const handleNextPage = () => {
    if (endIndex < compostos.length) {
      setCurrentPage((prev) => prev + 1);
      scrollViewRef.current?.scrollTo({ y: 0, animated: true });
    }
  };

  const handlePreviousPage = () => {
    if (startIndex > 0) {
      setCurrentPage((prev) => prev - 1);
      scrollViewRef.current?.scrollTo({ y: 0, animated: true });
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#f8fafc' }}>
      <ScrollView ref={scrollViewRef} contentContainerStyle={{ padding: 16, paddingBottom: 80 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 16, color: '#1e293b' }}>
          Composição Química do Alimento
        </Text>
        {currentCompostos.map((composto, index) => {
          const isExpanded = expandedIndex === index;
          const borderColor = composto.toxico
            ? (isExpanded ? '#dc2626' : '#e2e8f0')
            : (isExpanded ? '#22c55e' : '#e2e8f0');
          const backgroundColor = composto.toxico && isExpanded ? '#fee2e2' : '#ffffff';

          return (
            <TouchableOpacity
              key={index}
              style={{
                backgroundColor,
                borderColor,
                borderWidth: 1,
                borderRadius: 16,
                padding: 16,
                marginBottom: 16,
                flexDirection: 'row',
                alignItems: 'center',
              }}
              onPress={() => setExpandedIndex(isExpanded ? null : index)}
              activeOpacity={0.9}
            >
              <Ionicons name="beaker" size={24} color={composto.toxico ? '#dc2626' : '#2563eb'} />
              <View style={{ marginLeft: 16, flex: 1 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18, color: composto.toxico ? '#dc2626' : '#1e293b' }}>
                  {composto.nome}
                </Text>
                <Text style={{ color: '#64748b', fontSize: 14 }}>{composto.categoria}</Text>
                <Text style={{ color: '#2563eb', fontSize: 14 }}>{composto.formula}</Text>
                {isExpanded && (
                  <View style={{ marginTop: 8 }}>
                    <Text style={{ color: '#475569', fontSize: 14, marginBottom: 4, textAlign: 'justify' }}>
                      <Text style={{ fontWeight: 'bold' }}>Descrição: </Text>
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
      </ScrollView>
      {/* Paginação flutuante */}
      <View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          paddingVertical: 12,
          paddingHorizontal: 16,
          backgroundColor: '#fff',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTopWidth: 1,
          borderTopColor: '#e2e8f0',
          elevation: 8,
          zIndex: 20,
        }}
      >
        <Button title="Anterior" onPress={handlePreviousPage} disabled={currentPage === 1} />
        <Text style={{ fontSize: 16, color: '#475569' }}>
          {`Página ${currentPage} de ${Math.ceil(compostos.length / itemsPerPage)}`}
        </Text>
        <Button title="Próxima" onPress={handleNextPage} disabled={endIndex >= compostos.length} />
      </View>
    </View>
  );
}