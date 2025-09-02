import { useNetInfo } from '@react-native-community/netinfo';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Linking, RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const PROGRAMMABLE_SEARCH_API_URL = "";
const PROGRAMMABLE_SEARCH_API_KEY = ""; // Chave da API do Google Custom Search
const SEARCH_ENGINE_ID = ""; 
const ITEMS_PER_PAGE = 10; // Número de itens por página
const MAX_RESULTS_PER_DAY = 100; // Limite diário de resultados

/**
 * Função que faz uma pesquisa customizada na API do Google Custom Search.
 * Recebe a query e o índice inicial, retorna os resultados formatados.
 */
const buscarCustomSearch = async (query: string, startIndex: number) => {
  try {
    const encodedQuery = encodeURIComponent(query);
    const url = `${PROGRAMMABLE_SEARCH_API_URL}?key=${PROGRAMMABLE_SEARCH_API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${encodedQuery}&start=${startIndex}`;
    console.log("Custom Search API URL:", url);

    const response = await fetch(url);

    if (!response.ok) {
      console.error("Erro na API Custom Search:", response.status, response.statusText);
      return [];
    }

    const data = await response.json();

    const results = data.items?.map((item: any) => ({
      title: item.title || "Título não disponível",
      link: item.link || "Link não disponível",
      snippet: item.snippet || "Resumo não disponível",
    })) || [];

    return results;
  } catch (error) {
    console.error("Erro ao buscar dados do Custom Search:", error);
    return [];
  }
};

/**
 * Ecrã que exibe pesquisas científicas sobre química dos alimentos.
 * Permite paginar resultados, actualizar a pesquisa e abrir links externos.
 * Mostra mensagem se não houver ligação à internet.
 */
export default function TelaAprender() {
  const [refreshing, setRefreshing] = useState(false);
  const [customSearchResults, setCustomSearchResults] = useState<
    { title: string; link: string; snippet: string }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const netInfo = useNetInfo();

  useEffect(() => {
    buscarPesquisasCustom();
  }, [paginaAtual]);

  /**
   * Busca os resultados da pesquisa customizada e actualiza o estado.
   */
  const buscarPesquisasCustom = async () => {
    setLoading(true);
    const startIndex = (paginaAtual - 1) * ITEMS_PER_PAGE + 1; // Índice inicial para a API
    const results = await buscarCustomSearch(
      "compostos químicos em alimentos OR composição química de alimentos OR monografias composição de alimentos OR revistas científicas composição de alimentos OR pesquisas científicas sobre composição de alimentos",
      startIndex
    );
    setCustomSearchResults(results);
    setLoading(false);
  };

  /**
   * Actualiza os resultados ao fazer pull-to-refresh.
   */
  const onRefresh = () => {
    setRefreshing(true);
    buscarPesquisasCustom().then(() => setRefreshing(false));
  };

  const totalPaginas = Math.ceil(MAX_RESULTS_PER_DAY / ITEMS_PER_PAGE);

  /**
   * Avança para a próxima página de resultados.
   */
  const handleProximaPagina = () => {
    if (paginaAtual < totalPaginas) {
      setPaginaAtual(paginaAtual + 1);
    }
  };

  /**
   * Volta para a página anterior de resultados.
   */
  const handlePaginaAnterior = () => {
    if (paginaAtual > 1) {
      setPaginaAtual(paginaAtual - 1);
    }
  };

  if (!netInfo.isConnected) {
    return (
      <View style={estilos.container}>
        <View style={estilos.messageContainer}>
          <Text style={estilos.title}>Sem Conexão com a Internet</Text>
          <Text style={estilos.subtitle}>
            Você precisa estar conectado à internet para acessar pesquisas científicas sobre alimentos.
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={estilos.container}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        <View style={estilos.secaoCabecalho}>
          <Text style={estilos.tituloCabecalho}>Pesquisas Científicas</Text>
          <Text style={estilos.subtituloCabecalho}>Explore pesquisas sobre química dos alimentos</Text>
        </View>
        {loading ? (
          <ActivityIndicator size="large" color="#2563eb" style={estilos.indicadorCarregamento} />
        ) : (
          customSearchResults.length > 0 ? (
            customSearchResults.map((result, index) => (
              <TouchableOpacity key={index} style={estilos.cardResultadoCustom} onPress={() => Linking.openURL(result.link)}>
                <View style={estilos.conteudoResultadoCustom}>
                  <Text style={estilos.tituloResultadoCustom}>{result.title}</Text>
                  <Text style={estilos.textoDetalhe}>Resumo: {result.snippet}</Text>
                  <Text style={estilos.textoDetalhe}>
                    Link: <Text style={estilos.textoLink}>{result.link}</Text>
                  </Text>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={estilos.textoNenhumaPesquisa}>Nenhuma pesquisa encontrada.</Text>
          )
        )}
      </ScrollView>

      {/* Controles de Paginação Flutuante */}
      {!loading && (
        <View style={estilos.controlesPaginacaoFlutuante}>
          <TouchableOpacity
            style={[estilos.botaoPaginacao, paginaAtual === 1 && { opacity: 0.5 }]}
            onPress={handlePaginaAnterior}
            disabled={paginaAtual === 1}
          >
            <Text style={estilos.textoBotaoPaginacao}>Anterior</Text>
          </TouchableOpacity>
          <Text style={estilos.textoPaginaAtual}>
            Página {paginaAtual} de {totalPaginas}
          </Text>
          <TouchableOpacity
            style={[estilos.botaoPaginacao, paginaAtual === totalPaginas && { opacity: 0.5 }]}
            onPress={handleProximaPagina}
            disabled={paginaAtual === totalPaginas}
          >
            <Text style={estilos.textoBotaoPaginacao}>Próxima</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    margin: 8,
  },
  messageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 24,
    color: '#1e293b',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
  },
  secaoCabecalho: {
    padding: 24,
    paddingTop: 60,
    backgroundColor: '#ffffff',
  },
  tituloCabecalho: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 32,
    color: '#1e293b',
    marginBottom: 4,
  },
  subtituloCabecalho: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#64748b',
  },
  indicadorCarregamento: {
    marginTop: 20,
  },
  textoNenhumaPesquisa: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
  },
  cardResultadoCustom: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    padding: 16,
  },
  conteudoResultadoCustom: {
    padding: 16,
  },
  tituloResultadoCustom: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 18,
    color: '#1e293b',
    marginBottom: 8,
    textAlign: 'justify',
  },
  textoDetalhe: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#64748b',
    marginBottom: 4,
  },
  textoLink: {
    color: '#2563eb',
    textDecorationLine: 'underline',
  },
  controlesPaginacaoFlutuante: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffffee', // leve transparência
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
    zIndex: 10,
  },
  botaoPaginacao: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#2563eb',
  },
  textoBotaoPaginacao: {
    color: '#ffffff',
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
  },
  textoPaginaAtual: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#64748b',
  },
});
