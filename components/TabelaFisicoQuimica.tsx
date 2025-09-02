import React from 'react';
import { Text, View } from 'react-native';

interface TabelaFisicoQuimicaProps {
  umidade: any;
  cinzas: number;
  pH: number;
  proteinas: number;
  gorduras: number;
  lipidos: number;
  fibras: number;
  acidezTitulaveis: number;
  minerais: number;
  vitaminas: number;
  acucares: number;
  styles: any;
}

export default function TabelaFisicoQuimica({ umidade, cinzas, pH, proteinas, gorduras, lipidos, fibras, acidezTitulaveis, minerais, vitaminas, acucares, styles }: TabelaFisicoQuimicaProps) {
  return (
    <View style={styles.secaoFisicoQuimica}>
      <Text style={styles.subtitulo}>Composição Físico-Química</Text>
      <View style={styles.tabelaFisicoQuimica}>
        <View style={styles.linhaFisicoQuimica}>
          <Text style={styles.labelFisicoQuimica}>Umidade</Text>
          <Text style={styles.valorFisicoQuimica}>{umidade ?? '-'}</Text>
        </View>
        <View style={styles.linhaFisicoQuimica}>
          <Text style={styles.labelFisicoQuimica}>Cinzas</Text>
          <Text style={styles.valorFisicoQuimica}>{cinzas ?? '-'}</Text>
        </View>
        <View style={styles.linhaFisicoQuimica}>
          <Text style={styles.labelFisicoQuimica}>pH</Text>
          <Text style={styles.valorFisicoQuimica}>{pH ?? '-'}</Text>
        </View>
        <View style={styles.linhaFisicoQuimica}>
          <Text style={styles.labelFisicoQuimica}>Proteínas</Text>
          <Text style={styles.valorFisicoQuimica}>{proteinas ?? '-'}</Text>
        </View>
        <View style={styles.linhaFisicoQuimica}>
          <Text style={styles.labelFisicoQuimica}>Gorduras</Text>
          <Text style={styles.valorFisicoQuimica}>{gorduras ?? '-'}</Text>
        </View>
        <View style={styles.linhaFisicoQuimica}>
          <Text style={styles.labelFisicoQuimica}>Lipídeos</Text>
          <Text style={styles.valorFisicoQuimica}>{lipidos ?? '-'}</Text>
        </View>
        <View style={styles.linhaFisicoQuimica}>
          <Text style={styles.labelFisicoQuimica}>Fibras</Text>
          <Text style={styles.valorFisicoQuimica}>{fibras ?? '-'}</Text>
        </View>
        <View style={styles.linhaFisicoQuimica}>
          <Text style={styles.labelFisicoQuimica}>Acidez titulável</Text>
          <Text style={styles.valorFisicoQuimica}>{acidezTitulaveis ?? '-'}</Text>
        </View>
        <View style={styles.linhaFisicoQuimica}>
          <Text style={styles.labelFisicoQuimica}>Minerais</Text>
          <Text style={styles.valorFisicoQuimica}>{minerais ?? '-'}</Text>
        </View>
        <View style={styles.linhaFisicoQuimica}>
          <Text style={styles.labelFisicoQuimica}>Vitaminas</Text>
          <Text style={styles.valorFisicoQuimica}>{vitaminas ?? '-'}</Text>
        </View>
        <View style={styles.linhaFisicoQuimica}>
          <Text style={styles.labelFisicoQuimica}>Açúcares</Text>
          <Text style={styles.valorFisicoQuimica}>{acucares ?? '-'}</Text>
        </View>
      </View>
    </View>
  );
}
