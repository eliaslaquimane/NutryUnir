import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FoodItem, getAllFoodItems } from '../database/foodService';
import { RootStackParamList } from '../navigation/types';

type CategoriaScreenRouteProp = RouteProp<RootStackParamList, 'CategoriaScreen'>;

/**
 * Ecrã que exibe todos os alimentos pertencentes a uma determinada categoria.
 * Mostra um cabeçalho com a imagem da categoria e uma lista de cartões dos alimentos.
 * Permite navegar para a descrição detalhada de cada alimento ao clicar num cartão.
 */
export default function CategoriaScreen() {
  const navigation = useNavigation();
  const route = useRoute<CategoriaScreenRouteProp>();
  const { categoria, imagem } = route.params;

  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState(true);

  /**
   * Busca os alimentos da categoria selecionada e actualiza o estado.
   */
  const fetchFoodItems = React.useCallback(async () => {
    try {
      setLoading(true);
      const items = await getAllFoodItems(categoria);
      setFoodItems(items);
    } catch (error) {
      console.error('Erro ao buscar os itens:', error);
    } finally {
      setLoading(false);
    }
  }, [categoria]);

  useEffect(() => {
    fetchFoodItems();
  }, [fetchFoodItems]);

  if (loading) {
    return (
      <SafeAreaView style={styles.carregandoTela}>
        <ActivityIndicator size="large" color="#2563eb" />
        <Text>Carregando itens...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.telaCategoria}>
      <Image 
        source={imagem}
        style={styles.imagemCabecalho} 
        resizeMode="cover" 
      />
      <FlatList
        data={foodItems}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listaItens} 
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.cardItem}
            onPress={() => navigation.navigate('DescricaoAlimentoScreen', {
              name: item.nome,
              image: item.image,
              description: item.descricao || 'Descrição não disponível',
              umidade: String(item.umidade),
              cinzas: String(item.cinzas),
              pH: String(item.pH),
              proteinas: String(item.proteinas),
              gorduras: String(item.gorduras),
              lipidos: String(item.lipidos),
              fibras: String(item.fibras),
              minerais: String(item.minerais),
              acidezTitulaveis: String(item.acidezTitulaveis),
              vitaminas: String(item.vitaminas),
              acucares: String(item.acucares),
              idComposition: item.idCompostos
            })}
          >
            <Image source={item.image} style={styles.imagemItem} />
            <View style={styles.conteudoCard}>
              <Text style={styles.nomeItem}>{item.nome}</Text>
              <Text style={styles.descricaoItem}>{item.resumoConteudo}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  telaCategoria: {
    flex: 1,
    backgroundColor: '#f1f5f9',
  },
  imagemCabecalho: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  listaItens: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  cardItem: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 0.2,
  },
  imagemItem: {
    width: 90,
    height: 60,
    borderRadius: 13,
    marginRight: 16,
  },
  conteudoCard: {
    flex: 1,
  },
  nomeItem: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  descricaoItem: {
    fontSize: 14,
    color: '#475569',
    marginTop: 4,
  },
  carregandoTela: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
  },
});