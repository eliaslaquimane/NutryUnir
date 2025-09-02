import { FoodItem } from '@/database/interfaces';
import React from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface FoodListProps {
  filteredFoodItems: FoodItem[];
  navigation: any;
  loading: boolean;
}

/**
 * Exibe uma lista de alimentos em formato de cartões.
 * Mostra indicador de carregamento enquanto busca os dados.
 * Exibe mensagem caso não haja alimentos encontrados.
 * Ao clicar em um alimento, navega para a tela de descrição do alimento.
 */
export default function FoodList({ filteredFoodItems, navigation, loading }: FoodListProps) {
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2563eb" />
        <Text style={styles.loadingText}>Carregando alimentos...</Text>
      </View>
    );
  }

  if (filteredFoodItems.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Nenhum alimento encontrado.</Text>
      </View>
    );
  }

  return (
    <View style={styles.foodList}>
       <Text style={styles.tituloListaAlimentos}>Lista de alimentos</Text>
      {filteredFoodItems.map((foodItem, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() =>
            navigation.navigate('DescricaoAlimentoScreen', {
              name: foodItem.nome,
              scientificName: foodItem.nomeCientificoAlimento,
              image: foodItem.image,
              description: foodItem.descricao || 'Descrição não disponível',
              umidade: foodItem.umidade,
              cinzas: foodItem.cinzas,
              pH: foodItem.pH,
              proteinas: foodItem.proteinas,
              gorduras: foodItem.gorduras,
              lipidos: foodItem.lipidos,
              fibras: foodItem.fibras,
              minerais: foodItem.minerais,
              acidezTitulaveis: foodItem.acidezTitulaveis,
              vitaminas: foodItem.vitaminas,
              acucares: foodItem.acucares,
              idComposition: foodItem.idCompostos || [],
            })
          }
        >
          <Image source={foodItem.image} style={styles.image} />
          <View style={styles.content}>
            <Text style={styles.title}>{foodItem.nome} | {foodItem.nomeCientificoAlimento}</Text>
            <Text style={styles.description}>{foodItem.resumoConteudo || 'Descrição não disponível'}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  foodList: {
    padding: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 16,
  },
  title: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 18,
    color: '#1e293b',
    marginBottom: 4,
  },
  tituloListaAlimentos: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 20,
    color: '#1e293b',
    marginBottom: 12,
  },
  description: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#64748b',
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  loadingText: {
    marginTop: 8,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#64748b',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  emptyText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#64748b',
  },
});