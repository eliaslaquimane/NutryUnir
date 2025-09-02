import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

/**
 * Exibe as categorias de alimentos em cartões horizontais.
 * Cada cartão mostra imagem, título e descrição da categoria.
 * Ao clicar, navega para a tela da categoria selecionada.
 */
export default function Categories({ navigation }: any) {
  const categories = [
    {
      titulo: 'Frutas',
      imagem: require('../assets/images/fruta.jpg'),
      descricao: 'Ricas em vitaminas e antioxidantes, fortalecem o sistema imunológico.',
    },
    {
      titulo: 'Verduras',
      imagem: require('../assets/images/verdura.jpg'),
      descricao: 'Fibras e minerais para saúde do coração e peso.',
    },
    {
      titulo: 'Legumes',
      imagem: require('../assets/images/legume.jpg'),
      descricao: 'Ricos em nutrientes essenciais, ajudam no metabolismo e saúde óssea.',
    },
    {
      titulo: 'Tubérculos',
      imagem: require('../assets/images/tubercolo.jpg'),
      descricao: 'Energéticos, ricos em carboidratos e fibras, melhoram a saúde intestinal.',
    },
  ];

  return (
    <View style={styles.categories}>
      <View style={styles.header}>
        <Ionicons name="layers" size={20} color="#2563eb" />
        <Text style={styles.title}>Categorias</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => navigation.navigate('CategoriaScreen', { categoria: item.titulo, imagem: item.imagem })}
          >
            <Image source={item.imagem} style={styles.image} />
            <LinearGradient colors={['transparent', 'rgba(0,0,0,0.8)']} style={styles.gradient} />
            <View style={styles.content}>
              <Text style={styles.cardTitle}>{item.titulo}</Text>
              <Text style={styles.cardDescription}>{item.descricao}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  categories: {
    marginBottom: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  title: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 20,
    color: '#1e293b',
    marginLeft: 8,
  },
  scroll: {
    paddingLeft: 16,
  },
  card: {
    width: 280,
    height: 180,
    marginRight: 16,
    borderRadius: 16,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '50%',
  },
  content: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
  },
  cardTitle: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 18,
    color: '#ffffff',
    marginBottom: 4,
  },
  cardDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#e2e8f0',
  },
});