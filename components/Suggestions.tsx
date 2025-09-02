import { FoodItem } from '@/database/interfaces';
import React from 'react';
import { Keyboard, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

interface SuggestionsProps {
  searchText: string;
  filteredFoodItems: FoodItem[];
  onSelect: (item: FoodItem) => void;
}

/**
 * Exibe sugestões de alimentos com base no texto pesquisado.
 * Mostra até 4 sugestões e permite selecionar uma delas.
 * Ao clicar fora, o teclado é fechado.
 */
export default function Suggestions({ searchText, filteredFoodItems, onSelect }: SuggestionsProps) {
  if (searchText.length === 0) return null;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.suggestions}>
        {filteredFoodItems.slice(0, 4).map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.suggestionItem}
            onPress={() => onSelect(item)} // Chama onSelect ao pressionar uma sugestão
          >
            <Text style={styles.suggestionText}>{item.nome}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  suggestions: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginHorizontal: 16,
    marginTop: -8,
    padding: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  suggestionItem: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  suggestionText: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#1e293b',
  },
});