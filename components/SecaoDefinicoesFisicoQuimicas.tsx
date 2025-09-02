import React from 'react';
import { Text, View } from 'react-native';

type DefinicaoFisicoQuimica = { nome: string; descricao: string; };

export default function SecaoDefinicoesFisicoQuimicas({ definicoes, styles }: { definicoes: DefinicaoFisicoQuimica[], styles: any }) {
  return (
    <View style={styles.secao}>
      <Text style={styles.titulo}>Definições </Text>
      {definicoes.map((def, idx) => (
        <View key={idx} style={styles.item}>
          <Text style={styles.nome}>{def.nome}:</Text>
          <Text style={styles.descricao}>{def.descricao}</Text>
        </View>
      ))}
    </View>
  );
}
