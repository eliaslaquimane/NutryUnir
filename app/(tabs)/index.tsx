import Categories from '@/components/Categories';
import FoodList from '@/components/FoodList';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import Suggestions from '@/components/Suggestions';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../../navigation/types';
import { FoodItem, getAllFoodItems } from './../../database/foodService';

/**
 * Ecrã principal de exploração dos alimentos.
 * Permite pesquisar, filtrar, visualizar categorias e navegar para detalhes dos alimentos.
 */
export default function TelaExplorar() {
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);
  const [filteredFoodItems, setFilteredFoodItems] = useState<FoodItem[]>([]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(true);
  const scrollViewRef = useRef<ScrollView>(null); 
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  /**
   * Carrega todos os alimentos do banco de dados ao iniciar o ecrã.
   */
  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        setLoading(true);
        const items = await getAllFoodItems(); 
        setFoodItems(items);
        setFilteredFoodItems(items);
      } catch (error) {
        console.error('Erro ao carregar os alimentos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFoodItems();
  }, []);

  /**
   * Filtra os alimentos de acordo com o texto pesquisado.
   * Actualiza o estado dos alimentos filtrados.
   */
  const handleSearch = (text: string) => {
    setSearchText(text);

    if (text.trim() === '') {
      setFilteredFoodItems(foodItems);
      return;
    }

    const filteredItems = foodItems.filter((item) =>
      item.nome.toLowerCase().includes(text.toLowerCase()) ||
      (item.nomeCientificoAlimento && item.nomeCientificoAlimento.toLowerCase().includes(text.toLowerCase())) ||
      (item.categoria && item.categoria.toLowerCase().includes(text.toLowerCase()))
    );
    setFilteredFoodItems(filteredItems);
  };

  /**
   * Trata a selecção de uma sugestão de alimento.
   * Actualiza o texto de pesquisa e mostra apenas o item seleccionado.
   * Faz scroll até ao final da lista.
   */
  const handleSuggestionSelect = (item: FoodItem) => {
    setSearchText(item.nome);
    setFilteredFoodItems([item]);
    scrollViewRef.current?.scrollToEnd({
      animated: true,
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top', 'left', 'right']}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            ref={scrollViewRef}
            style={styles.container}
            keyboardShouldPersistTaps="handled"
          >
            <Header />
            <SearchBar
              searchText={searchText}
              setSearchText={(text) => {
                setSearchText(text);
                handleSearch(text);
              }}
              onSearch={() => {
                console.log('Pesquisa realizada:', searchText);
                handleSearch(searchText);
              }}
            />
            <Suggestions
              searchText={searchText}
              filteredFoodItems={filteredFoodItems}
              onSelect={handleSuggestionSelect}
            />
            <Categories navigation={navigation} />
            <FoodList
              filteredFoodItems={filteredFoodItems}
              navigation={navigation}
              loading={loading}
            />
            <Footer />
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  suggestionItem: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    marginVertical: 5,
    borderRadius: 5,
  },
  suggestionText: {
    fontSize: 16,
    color: '#333',
  },
});