import { Ionicons } from '@expo/vector-icons';
import { useEffect, useRef, useState } from 'react';
import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Preload from './../../components/Preload';
import { getAllCompostos } from './../../database/compostosService';
import { CompostosFood } from './../../database/interfaces';

const ITEMS_PER_PAGE = 10;

/**
 * Ecrã que exibe a lista de compostos químicos alimentares.
 * Permite filtrar por categoria, ordenar e paginar os resultados.
 */
export default function TelaCompostos() {
  const [compostos, setCompostos] = useState<CompostosFood[]>([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos');
  const [favoritos, setFavoritos] = useState<string[]>([]);
  const [criterioOrdenacao] = useState<keyof CompostosFood>('nome');
  const [loading, setLoading] = useState(true);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    /**
     * Busca todos os compostos do banco de dados e actualiza o estado.
     */
    const fetchCompostos = async () => {
      try {
        setLoading(true);
        const data = await getAllCompostos(); // Busca os dados do banco
        setCompostos(data);
      } catch (error) {
        console.error('Erro ao carregar compostos:', error);
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    };

    fetchCompostos();
  }, []);

  /**
   * Alterna o estado de favorito de um composto.
   * Se já for favorito, remove; caso contrário, adiciona.
   */
  const toggleFavorito = (nome: string) => {
    setFavoritos((prev) =>
      prev.includes(nome) ? prev.filter((item) => item !== nome) : [...prev, nome]
    );
  };

  // Filtra compostos pela categoria seleccionada
  const compostosFiltrados = categoriaSelecionada === 'Todos'
    ? compostos
    : compostos.filter((composto) => composto.categoria === categoriaSelecionada);

  // Ordena os compostos pelo critério seleccionado
  const compostosOrdenados = [...compostosFiltrados].sort((a, b) => {
    const valueA = a[criterioOrdenacao];
    const valueB = b[criterioOrdenacao];
    if (typeof valueA === 'string' && typeof valueB === 'string') {
      return valueA.localeCompare(valueB);
    }
    return 0;
  });

  // Paginação dos compostos
  const totalPaginas = Math.ceil(compostosOrdenados.length / ITEMS_PER_PAGE);
  const compostosPaginados = compostosOrdenados.slice(
    (paginaAtual - 1) * ITEMS_PER_PAGE,
    paginaAtual * ITEMS_PER_PAGE
  );

  /**
   * Avança para a próxima página de compostos.
   */
  const handleProximaPagina = () => {
    if (paginaAtual < totalPaginas) {
      setPaginaAtual(paginaAtual + 1);
      scrollRef.current?.scrollTo({ y: 0, animated: true });
    }
  };

  /**
   * Volta para a página anterior de compostos.
   */
  const handlePaginaAnterior = () => {
    if (paginaAtual > 1) {
      setPaginaAtual(paginaAtual - 1);
      scrollRef.current?.scrollTo({ y: 0, animated: true });
    }
  };

  return (
    <Preload loading={loading}>
      <View style={{ flex: 1 }}>
        <ScrollView
          ref={scrollRef}
          style={estilos.container}
          contentContainerStyle={{ paddingBottom: 80 }}
        >
          <View style={estilos.secaoCabecalho}>
            <Text style={estilos.tituloCabecalho}>Compostos Químicos</Text>
            <Text style={estilos.subtituloCabecalho}>Explore compostos alimentares e seus efeitos</Text>
          </View>

          {/* Filtro por Categoria */}
          <ScrollView style={estilos.secaoCategorias} horizontal>
            {Array.from(new Set(compostos.map((composto) => composto.categoria))).map((categoria, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  estilos.botaoFiltroCategoria,
                  categoriaSelecionada === categoria && { backgroundColor: '#2563eb' },
                ]}
                onPress={() => setCategoriaSelecionada((prev) => (prev === categoria ? 'Todos' : categoria))}
              >
                <Text style={[
                  estilos.textoFiltroCategoria,
                  categoriaSelecionada === categoria && { color: '#ffffff' },
                ]}>
                  {categoria}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Lista de Compostos */}
          <View style={estilos.secaoListaCompostos}>
            {compostosPaginados.map((composto, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  estilos.cardComposto,
                  composto.toxico && { borderColor: '#dc2626', backgroundColor: '#fee2e2' },
                ]}
              >
                <View style={estilos.iconeFavorito}>
                  <TouchableOpacity onPress={() => toggleFavorito(composto.nome)}>
                    <Ionicons name="beaker" size={24} color={favoritos.includes(composto.nome) ? '#f59e0b' : '#2563eb'} />
                  </TouchableOpacity>
                </View>
                <View style={estilos.infoComposto}>
                  <Text style={[
                    estilos.nomeComposto,
                    composto.toxico && { color: '#dc2626' },
                  ]}>
                    {composto.nome}
                  </Text>
                  <Text style={estilos.formulaComposto}>{composto.formula}</Text>
                  <Text style={estilos.categoriaComposto}>{composto.categoria}</Text>
                  <Text style={estilos.descricaoComposto}>{composto.descricao}</Text>
                  <Text
                    style={{ color: '#2563eb', textDecorationLine: 'underline' }}
                    onPress={() => {
                      if (composto.referencias) {
                        Linking.openURL(composto.referencias);
                      }
                    }}
                  >
                    {composto.referencias}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/* Controles de Paginação Flutuante */}
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
      </View>
    </Preload>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
  },
  loadingText: {
    marginTop: 8,
    fontSize: 16,
    color: '#2563eb',
    fontFamily: 'Inter-SemiBold',
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
  secaoCategorias: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  botaoFiltroCategoria: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f1f5f9',
    marginRight: 8,
  },
  textoFiltroCategoria: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#64748b',
  },
  secaoListaCompostos: {
    padding: 16,
  },
  cardComposto: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  iconeFavorito: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#eff6ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  infoComposto: {
    flex: 1,
  },
  nomeComposto: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 18,
    color: '#1e293b',
    marginBottom: 2,
  },
  formulaComposto: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#2563eb',
    marginBottom: 4,
  },
  categoriaComposto: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#64748b',
    marginBottom: 4,
  },
  descricaoComposto: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#64748b',
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