import React from 'react';
import { Button, Text, View } from 'react-native';

interface PaginacaoFlutuanteProps {
  currentPage: number;
  compostosLength: number;
  itemsPerPage: number;
  endIndex: number;
  handlePreviousPage: () => void;
  handleNextPage: () => void;
  styles: any;
  insets: any;
}

export default function PaginacaoFlutuante({ currentPage, compostosLength, itemsPerPage, endIndex, handlePreviousPage, handleNextPage, styles, insets }: PaginacaoFlutuanteProps) {
  return (
    <View
      style={[
        styles.floatingPagination,
        { paddingBottom: 12 + insets.bottom }
      ]}
    >
      <Button title="Anterior" onPress={handlePreviousPage} disabled={currentPage === 1} />
      <Text style={styles.paginationText}>{`Página ${currentPage} de ${Math.ceil(compostosLength / itemsPerPage)}`}</Text>
      <Button title="Próxima" onPress={handleNextPage} disabled={endIndex >= compostosLength} />
    </View>
  );
}
