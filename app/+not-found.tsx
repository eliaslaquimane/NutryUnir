import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

/**
 * Componente que exibe o ecrã de "Não Encontrado".
 * Mostra uma mensagem de erro e um link para voltar ao ecrã inicial.
 */
export default function NotFoundScreen() {
  return (
    <>
      {/* Configura o título da tela */}
      <Stack.Screen options={{ title: 'Ops!' }} />
      <View style={styles.container}>
        {/* Mensagem de erro */}
        <Text style={styles.text}>Esta tela não existe.</Text>
        {/* Link para voltar à tela inicial */}
        <Link href="./" style={styles.link}>
          <Text>Ir para a tela inicial!</Text>
        </Link>
      </View>
    </>
  );
}

// Estilos para os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 600,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
