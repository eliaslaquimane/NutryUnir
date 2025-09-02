import { Ionicons } from '@expo/vector-icons';
import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Animated, Button, Image, Modal, Platform, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { RootStackParamList } from '../navigation/types';
import { getAllFoodItems } from '@/database/foodService';
import { getCompostosByFood } from '@/database/compostosService';
import { setFavoriteStatus } from '@/database/favoriteService';

type DescricaoAlimentoRouteProp = RouteProp<RootStackParamList, 'DescricaoAlimentoScreen'>;

/**

* Tela que exibe a descrição detalhada de um alimento, incluindo imagem, descrição,
* lista paginada e ordenada de compostos químicos, e fontes consultadas.
*/


export default function DescricaoAlimentoScreen() {
  const route = useRoute<DescricaoAlimentoRouteProp>();
  const { name, image, description, scientificName, umidade, cinzas, pH, proteinas, gorduras, lipidos,
    fibras,
    minerais,
    acidezTitulaveis,
    vitaminas,
    acucares,
   } = route.params as unknown as {
  name: string;
  image: string | { uri: string };
  description: string;
  scientificName: string;
  umidade: any,
  cinzas: number, 
  pH: number, 
  proteinas: number, 
  gorduras: number, 
  lipidos: number,
  fibras: number,
  minerais: number;
  acidezTitulaveis: number,
  vitaminas: number,
  acucares: number
  };

  interface Composto {
    nome: string;
    formula: string;
    toxico: boolean;
    categoria: string;
    descricao: string;
  }

  const [compostos, setCompostos] = useState<Composto[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

 const fontesConsultadas = [
  "FoodB.ca - O FooDB é o maior e mais abrangente recurso do mundo sobre constituintes alimentares, química e biologia.",
  "USDA FoodData Central - Base de dados oficial com composição nutricional detalhada de milhares de alimentos. https://fdc.nal.usda.gov",
  "IBGE - Tabela Brasileira de Composição de Alimentos (TBCA), 2011.",
  "Poisson, J. (2019). Ciência e Tecnologia dos Alimentos: Volume 2.",
  "Souci-Fachmann-Kraut, Food Composition and Nutrition Tables, 7.ª edição, 2016.",
  "FAO/INFOODS - International Network of Food Data Systems. https://www.fao.org/infoods/infoods/en/",
  "Codex Alimentarius - Alimentarium, padrões internacionais de alimentos. https://www.fao.org/fao-who-codexalimentarius/"
];


  const [showFontes, setShowFontes] = useState(false);
  const insets = useSafeAreaInsets();

  // Estado para controlar o composto expandido
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Estado para alternar entre descrição e composição química
  const [viewMode, setViewMode] = useState<'descricao' | 'composicao'>('descricao');

  /**
   * Busca os compostos químicos relacionados ao alimento selecionado,
   * ordena alfabeticamente e atualiza o estado.
   */
  useEffect(() => {
    const fetchCompostos = async () => {
      try {
        setLoading(true);
        const data = await getCompostosByFood();
        const relacionado = data.find((food) => food.foodName === name);
        if (!relacionado) {
          console.warn('Alimento não encontrado:', name, data.map(f => f.foodName));
        }
        const relacionados = relacionado?.compostos || [];
        relacionados.sort((a, b) => a.nome.localeCompare(b.nome));
        setCompostos(relacionados);
        setLoading(false);
      } catch {
        setLoading(false);
      }
    };
    fetchCompostos();
  }, [name]);

    const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [foodId, setFoodId] = useState<number | null>(null);
  
  useEffect(() => {
    const fetchFavorite = async () => {
      const allFoods = await getAllFoodItems();
      const found = allFoods.find(f => f.nome === name);
      if (found) {
        setIsFavorite(!!found.favorites);
        setFoodId(found.id);
      }
    };
    fetchFavorite();
  }, [name]);
  
  const toggleFavorite = async () => {
    if (foodId == null) return;
    const newStatus = !isFavorite;
    setIsFavorite(newStatus);
    await setFavoriteStatus(foodId, newStatus);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCompostos = compostos.slice(startIndex, endIndex);

  /**
   * Avança para a próxima página da lista de compostos, se houver.
   */
  const handleNextPage = () => {
    if (endIndex < compostos.length) {
      setCurrentPage((prevPage) => prevPage + 1);
      // Rola para o topo ao mudar de página
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ y: 0, animated: true });
      }
    }
  };

  /**
   * Retorna para a página anterior da lista de compostos, se houver.
   */
  const handlePreviousPage = () => {
    if (startIndex > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
      // Rola para o topo ao mudar de página
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ y: 0, animated: true });
      }
    }
  };

  // Animated value para scroll
  const scrollY = React.useRef(new Animated.Value(0)).current;

  // Tamanhos para animar
  const IMAGE_MAX_HEIGHT = 200;
  const IMAGE_MIN_HEIGHT = 86;
  const NAME_MAX_SIZE = 20;
  const NAME_MIN_SIZE = 13;

  // Animação da altura da imagem
  const imageHeight = scrollY.interpolate({
    inputRange: [0, 120],
    outputRange: [IMAGE_MAX_HEIGHT, IMAGE_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  // Animação do tamanho do nome
  const nameFontSize = scrollY.interpolate({
    inputRange: [0, 120],
    outputRange: [NAME_MAX_SIZE, NAME_MIN_SIZE],
    extrapolate: 'clamp',
  });

  // Animação da opacidade do header fixo
  const headerOpacity = scrollY.interpolate({
    inputRange: [100, 140],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  // Referência para o ScrollView
  const scrollViewRef = useRef<any>(null);

  const [form, setForm] = useState({ nome: "" });

  // Definições dos conceitos físico-químicos
const definicoesFisicoQuimicas = [
  { 
    nome: 'Umidade', 
    descricao: `Quantidade de água presente no alimento. A determinação da umidade é fundamental para avaliar a estabilidade, conservação e qualidade do alimento, pois altos teores podem favorecer o crescimento de microrganismos e a deterioração. No caso de ${name}, o valor informado no alimento é ${umidade ?? '-'}.`
  },
  { 
    nome: 'Cinzas', 
    descricao: `Resíduo mineral obtido após a queima do alimento. A análise de cinzas indica o conteúdo total de minerais, sendo importante para avaliar o valor nutricional e possíveis adulterações. Valor informado: ${cinzas ?? '-'}.`
  },
  { 
    nome: 'pH', 
    descricao: `Medida da acidez ou alcalinidade do alimento. O pH influencia o sabor, a conservação e a segurança microbiológica dos alimentos, além de afetar reações químicas durante o processamento. Valor informado: ${pH ?? '-'}.`
  },
  { 
    nome: 'Proteínas', 
    descricao: `Macronutrientes essenciais para funções biológicas. A análise de proteínas é importante para determinar o valor nutricional e a qualidade do alimento, além de ser um parâmetro exigido em rotulagens. Valor informado: ${proteinas ?? '-'}.`
  },
  { 
    nome: 'Gorduras', 
    descricao: `Lipídeos presentes no alimento, que são fonte de energia. A quantificação de gorduras é relevante para avaliação nutricional, controle de qualidade e atendimento à legislação. Valor informado: ${gorduras ?? '-'}.`
  },
  { 
    nome: 'Lipídeos', 
    descricao: `Grupo de compostos insolúveis em água, incluindo gorduras e óleos. A análise de lipídeos auxilia na caracterização do alimento e na identificação de adulterações ou deterioração. Valor informado: ${lipidos ?? '-'}.`
  },
  { 
    nome: 'Fibras', 
    descricao: `Componentes vegetais não digeríveis, importantes para o funcionamento do trato intestinal. A determinação de fibras é essencial para avaliação nutricional, rotulagem de alimentos e promoção da saúde digestiva. Valor informado: ${fibras ?? '-'}.`
  },
  { 
    nome: 'Minerais', 
    descricao: `Elementos inorgânicos essenciais ao organismo. A análise de minerais permite identificar deficiências ou excessos, sendo importante para a saúde e para o controle de qualidade dos alimentos. Valor informado: ${minerais ?? '-'}.`
  },
  { 
    nome: 'Acidez Titulável', 
    descricao: `Quantidade de ácidos presentes no alimento, determinada por titulação. A acidez titulável é importante para avaliar o frescor, a conservação e o sabor dos alimentos, além de ser um parâmetro de controle em diversos produtos. Valor informado: ${acidezTitulaveis ?? '-'}.`
  },
  { 
    nome: 'Vitaminas', 
    descricao: `Compostos orgânicos essenciais em pequenas quantidades para o funcionamento do organismo. A análise de vitaminas é fundamental para garantir o valor nutricional e a conformidade com padrões regulatórios. Valor informado: ${vitaminas ?? '-'}.`
  },
  { 
    nome: 'Açúcares', 
    descricao: `Carboidratos simples presentes nos alimentos, responsáveis pelo sabor adocicado e fonte rápida de energia. A quantificação de açúcares é importante para avaliação nutricional e rotulagem. Valor informado: ${acucares ?? '-'}.`
  },
];

// Componente para exibir definições
type DefinicaoFisicoQuimica = { nome: string; descricao: string; };

function SecaoDefinicoesFisicoQuimicas({ definicoes }: { definicoes: DefinicaoFisicoQuimica[] }) {
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

  return (
    <View style={{ flex: 1, backgroundColor: '#f8fafc' }}>
      {/* Header fixo com imagem e nome reduzidos */}
      <Animated.View
        style={{
          position: 'absolute',
          top: Platform.OS === 'android' ? 0 : 32,
          left: 0,
          right: 0,
          height: 86,
          backgroundColor: '#fff',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 16,
          borderBottomWidth: 1,
          borderBottomColor: '#e2e8f0',
          opacity: headerOpacity,
          zIndex: 10,
        }}
        pointerEvents="none"
      >
        <Image
          source={typeof image === 'string' ? { uri: image } : image}
          style={{ width: 40, height: 40, borderRadius: 8, marginRight: 12 }}
        />
        <Animated.Text style={{ fontSize: NAME_MIN_SIZE, fontWeight: 'bold', color: '#1e293b' }}>
          {name }
        </Animated.Text>
      </Animated.View>

      <Animated.ScrollView
        ref={scrollViewRef}
        style={{ flex: 1 }}
        keyboardShouldPersistTaps="handled"
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        {/* Imagem animada */}
        <Animated.Image
          source={typeof image === 'string' ? { uri: image } : image}
          style={[
            styles.imagemAlimento,
            { height: imageHeight }
          ]}
        />
        {/* Nome animado */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16 }}>
          <Animated.Text style={[styles.tituloAlimento, { fontSize: nameFontSize, padding: 0, marginBottom: 0 }]}>
            {name}
            {scientificName ? (
              <Text style={{ fontStyle: 'italic', color: '#64748b', fontSize: 18 }}>
                {'  |  '}{scientificName}
              </Text>
            ) : null}
          </Animated.Text>
          
        </View>
        
        {/* Botões de alternância */}
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 12, marginBottom: 4 }}>
          <TouchableOpacity
            style={{
              backgroundColor: viewMode === 'descricao' ? '#2563eb' : '#e0e7ef',
              paddingVertical: 8,
              paddingHorizontal: 18,
              borderRadius: 8,
              marginRight: 8,
            }}
            onPress={() => setViewMode('descricao')}
          >
            <Text style={{ color: viewMode === 'descricao' ? '#fff' : '#2563eb', fontWeight: 'bold' }}>Descrição</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: viewMode === 'composicao' ? '#2563eb' : '#e0e7ef',
              paddingVertical: 8,
              paddingHorizontal: 18,
              borderRadius: 8,
            }}
            onPress={() => setViewMode('composicao')}
          >
            <Text style={{ color: viewMode === 'composicao' ? '#fff' : '#2563eb', fontWeight: 'bold' }}>Ver mais</Text>
          </TouchableOpacity>
        </View>
        {viewMode === 'descricao' && (
            <>
            <Text style={styles.textoDescricao}>{description}</Text>

            {/* Secao de Definições */}
            <SecaoDefinicoesFisicoQuimicas definicoes={definicoesFisicoQuimicas} />

            {/* Secao de Informações Físico-Químicas */}
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
            {/* Seção de Fontes Consultadas */}
            <View style={styles.fonteInformacoesContainer}>
              <Text style={styles.fonteTitulo}>Fontes Consultadas</Text>
              {fontesConsultadas.map((fonte, idx) => (
              <Text key={idx} style={styles.fonteItem}>{fonte}</Text>
              ))}
            </View>
            </>
        )}
        {viewMode === 'composicao' && (
          <>
            {loading ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#2563eb" />
                <Text>Carregando Os dados...</Text>
              </View>
            ) : (
              <View style={styles.secaoListaCompostos}>
                <Text style={styles.subtitulo}>Composição Química do Alimento</Text>
                {currentCompostos.map((composto, index) => {
                  // Define cor da borda ao expandir
                  const isExpanded = expandedIndex === index;
                  const borderColor = composto.toxico
                    ? (isExpanded ? '#dc2626' : '#e2e8f0') // vermelho se tóxico e expandido
                    : (isExpanded ? '#22c55e' : '#e2e8f0'); // verde se não tóxico e expandido

                  const backgroundColor = composto.toxico && isExpanded ? '#fee2e2' : '#ffffff';

                  return (
                    <TouchableOpacity
                      key={index}
                      style={[
                        styles.cardComposto,
                        { borderColor, backgroundColor }
                      ]}
                      onPress={() => setExpandedIndex(isExpanded ? null : index)}
                      activeOpacity={0.9}
                    >
                      <Ionicons name="beaker" size={24} color={composto.toxico ? '#dc2626' : '#2563eb'} />
                      <View style={styles.infoComposto}>
                        <Text style={[styles.nomeComposto, composto.toxico && { color: '#dc2626' }]}>
                          {composto.nome}
                        </Text>
                        <Text style={styles.descricaoComposto}>{composto.categoria}</Text>
                        <Text style={styles.formulaComposto}>{composto.formula}</Text>
                        {isExpanded && (
                          <View style={{ marginTop: 8 }}>
                            <Text style={{ color: '#475569', fontSize: 14, marginBottom: 4, textAlign: 'justify' }}>
                              <Text style={{ fontWeight: 'bold', textAlign: 'justify' }}>Descrição: </Text>
                              {composto.descricao || 'Não informada'}
                            </Text>
                            <Text style={{ color: composto.toxico ? '#dc2626' : '#22c55e', fontSize: 14 }}>
                              {composto.toxico ? 'Tóxico' : 'Não tóxico'}
                            </Text>
                          </View>
                        )}
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            )}
          </>
        )}
       
      </Animated.ScrollView>
      {/* Paginação flutuante só para composição */}
      {viewMode === 'composicao' && (
        <View
          style={[
            styles.floatingPagination,
            { paddingBottom: 12 + insets.bottom }
          ]}
        >
          <Button title="Anterior" onPress={handlePreviousPage} disabled={currentPage === 1} />
          <Text style={styles.paginationText}>{`Página ${currentPage} de ${Math.ceil(compostos.length / itemsPerPage)}`}</Text>
          <Button title="Próxima" onPress={handleNextPage} disabled={endIndex >= compostos.length} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  telaDescricao: {
    flex: 1,
    backgroundColor: '#f8fafc',
    paddingBottom: 16,
  },
  imagemAlimento: {
    width: '100%',
    height: 200,
    borderRadius: 1,
    marginBottom: 16,
  },
  tituloAlimento: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
    padding: 16,
  },
  textoDescricao: {
    textAlign: 'justify',
    fontSize: 16,
    color: '#475569',
    lineHeight: 24,
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
  },
  secaoListaCompostos: {
    padding: 16,
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
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
  infoComposto: {
    marginLeft: 16,
    flex: 1,
  },
  nomeComposto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 4,
  },
  formulaComposto: {
    fontSize: 14,
    color: '#2563eb',
    marginBottom: 4,
  },
  descricaoComposto: {
    fontSize: 14,
    color: '#64748b',
  },
  fonteInformacoesContainer: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#f1f5f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  fonteTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
  },
  fonteLista: {
    marginTop: 8,
  },
  fonteItem: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 20,
    marginBottom: 8,
    textAlign: 'justify',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  paginationText: {
    fontSize: 16,
    color: '#475569',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fonteModalContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    minWidth: 280,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  floatingPagination: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
    elevation: 8,
    zIndex: 20,
  },
  secaoFisicoQuimica: {
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 16,
    backgroundColor: '#f1f5f9',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#38bdf8', // cor de destaque
  },
  tabelaFisicoQuimica: {
    marginTop: 8,
  },
  linhaFisicoQuimica: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
    borderBottomWidth: 0.5,
    borderBottomColor: '#e2e8f0',
  },
  labelFisicoQuimica: {
    fontWeight: 'bold',
    color: '#334155',
    fontSize: 15,
  },
  valorFisicoQuimica: {
    color: '#475569',
    fontSize: 15,
  },
   secao: {
    backgroundColor: '#e0f2fe',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#38bdf8',
    marginBottom: 24,
    marginHorizontal: 16,
    marginTop: 8,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#0c4a6e',
  },
  item: {
    marginBottom: 8,
  },
  nome: {
    fontWeight: 'bold',
    color: '#0369a1',
  },
  descricao: {
    color: '#334155',
    marginLeft: 4,
    textAlign: "justify",
  },
});
