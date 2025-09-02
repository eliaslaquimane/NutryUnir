import { CompostosFood, FoodItem } from './interfaces';

// Dados iniciais de alimentos

export const initialCompostosData: CompostosFood[] = [
{
    "id": 2,
  "nome": "(+)-Pinoresinol",
  "formula": "C20H22O6",
  "categoria": "Lignana",
  "descricao": "Lignana com propriedades antioxidantes, atua na neutralização de radicais livres e pode contribuir para a proteção celular e saúde cardiovascular.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Pinoresinol"
  },
  {
  "id": 3,
  "nome": "(+)-Siringaresinol",
  "formula": "C22H26O8",
  "categoria": "Lignana",
  "descricao": "Lignana antioxidante, auxilia na defesa do organismo contra o estresse oxidativo e pode ter efeito protetor sobre o sistema cardiovascular.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Syringaresinol"
  },
  {
  "id": 4,
  "nome": "(+/–)-alfa-Tujeno",
  "formula": "C10H16",
  "categoria": "Monoterpeno",
  "descricao": "Monoterpeno volátil com propriedades aromáticas, pode atuar como repelente natural e contribuir para o aroma de óleos essenciais.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Alpha-Thujene"
  },
  {
  "id": 5,
  "nome": "(-)-Matairesinol",
  "formula": "C20H22O6",
  "categoria": "Lignana",
  "descricao": "Lignana antioxidante, pode modular processos inflamatórios e contribuir para a proteção das células contra danos oxidativos.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Matairesinol"
  },
  {
  "id": 6,
  "nome": "(13Z)-Beta-caroteno",
  "formula": "C40H56",
  "categoria": "Carotenoide",
  "descricao": "Carotenoide precursor da vitamina A, fundamental para a visão, imunidade e manutenção da integridade das mucosas e pele.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Beta-Carotene"
  },
  {
  "id": 7,
  "nome": "(3E,6E)-alfa-Farneseno",
  "formula": "C15H24",
  "categoria": "Sesquiterpeno",
  "descricao": "Sesquiterpeno volátil, contribui para o aroma e pode atuar como sinalizador químico em processos biológicos.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Alpha-Farnesene"
  },
  {
  "id": 8,
  "nome": "(3R,3'R, all-E)-Zeaxantina",
  "formula": "C40H56O2",
  "categoria": "Carotenoide",
  "descricao": "Carotenoide antioxidante, importante para a saúde ocular, especialmente na proteção da mácula contra danos causados pela luz.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Zeaxanthin"
  },
  {
  "id": 9,
  "nome": "(9Z)-Licopeno",
  "formula": "C40H56",
  "categoria": "Carotenoide",
  "descricao": "Carotenoide com forte ação antioxidante, auxilia na proteção das células contra radicais livres e pode contribuir para a saúde cardiovascular.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Lycopene"
  },
  {
  "id": 11,
  "nome": "xi-Carotene",
  "formula": "C40H60",
  "categoria": "Carotenoide",
  "descricao": "Carotenoide com propriedades antioxidantes, atua na proteção celular e pode ser precursor de outros compostos bioativos.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/5280788"
  },
  {
  "id": 12,
  "nome": "(E)-2,6,10-Bisabolatrieno",
  "formula": "C15H24",
  "categoria": "Sesquiterpeno",
  "descricao": "Sesquiterpeno aromático, pode atuar como composto volátil em aromas e apresentar propriedades bioativas.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Bisabolene"
  },
  {
  "id": 13,
  "nome": "Benzilideneacetonona",
  "formula": "C10H10O",
  "categoria": "Aldeído aromático",
  "descricao": "Aldeído aromático utilizado como intermediário em síntese química, pode contribuir para aromas e fragrâncias.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Benzylideneacetone"
  },
  {
  "id": 14,
  "nome": "(E)-2-Hexen-1-ol",
  "formula": "C6H12O",
  "categoria": "Álcool insaturado",
  "descricao": "Álcool insaturado com odor característico, utilizado em fragrâncias e aromas, pode atuar como composto volátil em alimentos.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Trans-2-Hexen-1-ol"
  },
  {
  "id": 15,
  "nome": "Farnesol",
  "formula": "C15H26O",
  "categoria": "Terpenoide",
  "descricao": "Terpenoide com propriedades aromáticas, pode atuar como intermediário na biossíntese de outros compostos e apresentar atividade antimicrobiana.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Farnesol"
  },
  {
  "id": 16,
  "nome": "(R)-Oxipeucedanina",
  "formula": "C16H14O5",
  "categoria": "Cumarina",
  "descricao": "Cumarina com potencial fototoxicidade, pode causar reações adversas na pele quando exposta à luz UV, devendo ser evitada em grandes quantidades.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Oxypeucedanin"
  },
  {
  "id": 17,
  "nome": "(R)-alfa-Tocotrienol",
  "formula": "C29H44O2",
  "categoria": "Vitamina E",
  "descricao": "Forma de vitamina E com potente ação antioxidante, protege as membranas celulares contra danos oxidativos e contribui para a saúde cardiovascular.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Alpha-Tocotrienol"
  },
  {
  "id": 18,
  "nome": "(S)-Naringenina",
  "formula": "C15H12O5",
  "categoria": "Flavanona",
  "descricao": "Flavonoide com propriedades antioxidantes e anti-inflamatórias, auxilia na proteção celular e pode modular processos metabólicos.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Naringenin"
  },
  {
  "id": 19,
  "nome": "(Z)-2,6,10-Bisabolatrieno",
  "formula": "C15H24",
  "categoria": "Sesquiterpeno",
  "descricao": "Isômero de sesquiterpeno aromático, pode atuar como composto volátil em aromas e apresentar propriedades bioativas.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Bisabolene"
  },
  {
  "id": 20,
  "nome": "(Z,Z)-9,12-Octadecadienoico",
  "formula": "C18H32O2",
  "categoria": "Ácido graxo",
  "descricao": "Ácido graxo essencial, fundamental para a formação de membranas celulares e produção de moléculas sinalizadoras, importante para a saúde cardiovascular.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Linoleic-acid"
  },
  {
  "id": 21,
  "nome": "(±)-Alanina",
  "formula": "C3H7NO2",
  "categoria": "Aminoácido",
  "descricao": "Aminoácido não essencial, participa da síntese de proteínas e do metabolismo energético, importante para o funcionamento muscular.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Alanine"
  },
  {
  "id": 22,
  "nome": "(±)-Cistina",
  "formula": "C6H12N2O4S2",
  "categoria": "Aminoácido",
  "descricao": "Aminoácido formado pela ligação de duas cisteínas, essencial para a estrutura de proteínas e manutenção da saúde dos tecidos.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Cystine"
  },
  {
  "id": 23,
  "nome": "(±)-Fenilalanina",
  "formula": "C9H11NO2",
  "categoria": "Aminoácido",
  "descricao": "Aminoácido essencial, precursor de neurotransmissores importantes para o sistema nervoso e para a síntese de proteínas.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Phenylalanine"
  },
  {
  "id": 24,
  "nome": "(±)-Isoleucina",
  "formula": "C6H13NO2",
  "categoria": "Aminoácido",
  "descricao": "Aminoácido essencial de cadeia ramificada, fundamental para a síntese proteica e recuperação muscular.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Isoleucine"
  },
  {
  "id": 25,
  "nome": "(±)-Leucina",
  "formula": "C6H13NO2",
  "categoria": "Aminoácido",
  "descricao": "Aminoácido essencial de cadeia ramificada, importante para o crescimento e manutenção da massa muscular.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Leucine"
  },
  {
  "id": 26,
  "nome": "(±)-Leucine",
  "formula": "C6H13NO2",
  "categoria": "Aminoácido",
  "descricao": "Aminoácido essencial, atua na síntese de proteínas e na regulação do metabolismo energético.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Leucine"
  },
  {
  "id": 27,
  "nome": "(±)-Prolina",
  "formula": "C5H9NO2",
  "categoria": "Aminoácido",
  "descricao": "Aminoácido não essencial, fundamental para a formação do colágeno e manutenção da estrutura dos tecidos.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Proline"
  },
  {
  "id": 28,
  "nome": "(±)-Triptofano",
  "formula": "C11H12N2O2",
  "categoria": "Aminoácido",
  "descricao": "Aminoácido essencial, precursor da serotonina e melatonina, importante para o humor, sono e síntese proteica.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Tryptophan"
  },
  {
  "id": 29,
  "nome": "(±)-Valina",
  "formula": "C5H11NO2",
  "categoria": "Aminoácido",
  "descricao": "Aminoácido essencial de cadeia ramificada, atua na recuperação muscular e no metabolismo energético.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Valine"
  },
  {
  "id": 30,
  "nome": "(±)-Valine",
  "formula": "C5H11NO2",
  "categoria": "Aminoácido",
  "descricao": "Aminoácido essencial, importante para a síntese de proteínas e manutenção do tecido muscular.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Valine"
  },
  {
  "id": 31,
  "nome": "(±)-eritro-Isoleucina",
  "formula": "C6H13NO2",
  "categoria": "Aminoácido",
  "descricao": "Isômero da isoleucina, participa da síntese de proteínas e pode ser utilizado em estudos bioquímicos.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Isoleucine"
  },
  {
  "id": 32,
  "nome": "1-Hexanol",
  "formula": "C6H14O",
  "categoria": "Álcool",
  "descricao": "Álcool primário utilizado em fragrâncias e como solvente, pode atuar como composto volátil em alimentos.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/1-Hexanol"
  },
  {
  "id": 33,
  "nome": "1-Isopropil-4-metilbenzeno",
  "formula": "C10H14",
  "categoria": "Hidrocarboneto aromático",
  "descricao": "Hidrocarboneto aromático utilizado em fragrâncias e óleos essenciais, pode contribuir para o aroma de produtos naturais.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/p-Cymene"
  },
  {
  "id": 34,
  "nome": "1-Isopropyl-4-methylbenzene",
  "formula": "C10H14",
  "categoria": "Hidrocarboneto aromático",
  "descricao": "Hidrocarboneto aromático volátil, utilizado em fragrâncias e como marcador químico em óleos essenciais.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/p-Cymene"
  },
  {
  "id": 35,
  "nome": "1-Nonanol",
  "formula": "C9H20O",
  "categoria": "Álcool",
  "descricao": "Álcool primário de cadeia longa, utilizado em perfumes e aromas, pode atuar como composto volátil em alimentos.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/1-Nonanol"
  },
  {
  "id": 36,
  "nome": "Cinnamoyl glucose",
  "formula": "C15H18O7",
  "categoria": "Glicosídeo",
  "descricao": "Glicosídeo derivado do ácido cinâmico, pode atuar como antioxidante e contribuir para o sabor e aroma de alimentos.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Cinnamoyl-glucose"
  },
  {
  "id": 37,
  "nome": "Bilobalide",
  "formula": "C15H18O8",
  "categoria": "Glicosídeo",
  "descricao": "Glicosídeo com propriedades antioxidantes, pode atuar na proteção celular e contribuir para a defesa contra o estresse oxidativo.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/73581"
  },
  {
  "id": 38,
  "nome": "1-Propilamina",
  "formula": "C3H9N",
  "categoria": "Amina",
  "descricao": "Amina primária utilizada em síntese química, pode ser irritante em altas concentrações, devendo ser manuseada com cuidado.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Propylamine"
  },
  {
  "id": 39,
  "nome": "17alfa-Etinilestradiol",
  "formula": "C20H24O2",
  "categoria": "Estrogênio sintético",
  "descricao": "Hormônio sintético utilizado em medicamentos, pode causar disrupção endócrina se presente no ambiente em concentrações elevadas.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Ethinylestradiol"
  },
  {
  "id": 40,
  "nome": "17alpha-Etinilestradiol",
  "formula": "C20H24O2",
  "categoria": "Estrogênio sintético",
  "descricao": "Estrogênio sintético, utilizado em terapias hormonais, pode afetar o sistema endócrino se ingerido em excesso ou por exposição ambiental.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Ethinylestradiol"
  },
  {
  "id": 41,
  "nome": "17alpha-Etnilestradiol",
  "formula": "C20H24O2",
  "categoria": "Estrogênio sintético",
  "descricao": "Hormônio sintético, pode causar efeitos adversos ao sistema endócrino em exposições inadequadas.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Ethinylestradiol"
  },
  {
  "id": 42,
  "nome": "2,6,10-Bisabolatrieno",
  "formula": "C15H24",
  "categoria": "Sesquiterpeno",
  "descricao": "Sesquiterpeno volátil, contribui para o aroma e pode apresentar propriedades bioativas em processos biológicos.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Bisabolene"
  },
  {
  "id": 43,
  "nome": "Temol",
  "formula": "C10H14O",
  "categoria": "Álcool aromático",
  "descricao": "Álcool aromático utilizado em fragrâncias e síntese química, pode atuar como composto volátil em alimentos.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/6989"
  },
  {
  "id": 44,
  "nome": "2-Feniletilamina",
  "formula": "C8H11N",
  "categoria": "Amina",
  "descricao": "Amina natural com efeito estimulante em baixas doses, atua como modulador do humor e neurotransmissor.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Phenylethylamine"
  },
  {
  "id": 45,
  "nome": "2-Metil-1-propanol",
  "formula": "C4H10O",
  "categoria": "Álcool",
  "descricao": "Álcool utilizado como solvente e em fragrâncias, pode atuar como composto volátil em alimentos.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Isobutanol"
  },
  {
  "id": 46,
  "nome": "2-Metóxi-4-vinilfenol",
  "formula": "C9H10O2",
  "categoria": "Fenólico",
  "descricao": "Composto fenólico aromático, contribui para o aroma e pode apresentar propriedades antioxidantes.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/2-Methoxy-4-vinylphenol"
  },
  {
  "id": 47,
  "nome": "3,4-Dicafecoilquínico",
  "formula": "C25H24O12",
  "categoria": "Ácido fenólico",
  "descricao": "Derivado do ácido cafeico, possui propriedades antioxidantes e pode contribuir para a proteção celular contra radicais livres.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Dicaffeoylquinic-acid"
  },
  {
  "id": 48,
  "nome": "3,5-Di-O-cafeoilquínico",
  "formula": "C25H24O12",
  "categoria": "Ácido fenólico",
  "descricao": "Isômero do ácido dicafeoilquínico, apresenta propriedades antioxidantes e pode atuar na modulação de processos inflamatórios.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/3-5-Dicaffeoylquinic-acid"
  },
  {
  "id": 49,
  "nome": "3,5,6,7,8,3',4'-Heptamethphoxyflavone",
  "formula": "C22H24O9",
  "categoria": "Flavonoide",
  "descricao": "Flavonoide metoxilado com propriedades antioxidantes, pode contribuir para a proteção contra o estresse oxidativo.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/150893"
  },
  {
  "id": 50,
  "nome": "Nobiletin",
  "formula": "C21H22O8",
  "categoria": "Flavonoide",
  "descricao": "Flavonoide antioxidante, auxilia na proteção celular e pode modular processos inflamatórios e metabólicos.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/72344"
  },
  {
  "id": 51,
  "nome": "4(10)-Thujeno",
  "formula": "C10H16",
  "categoria": "Monoterpeno",
  "descricao": "Monoterpeno volátil, contribui para o aroma e pode atuar como repelente natural.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Thujene"
  },
  {
  "id": 52,
  "nome": "4(10)-Tujeno",
  "formula": "C10H16",
  "categoria": "Monoterpeno",
  "descricao": "Monoterpeno aromático, presente em óleos essenciais, pode atuar como composto volátil em fragrâncias.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Thujene"
  },
  {
  "id": 53,
  "nome": "4,5-Di-O-cafeoilquínico",
  "formula": "C25H24O12",
  "categoria": "Ácido fenólico",
  "descricao": "Isômero do ácido dicafeoilquínico, apresenta propriedades antioxidantes e pode contribuir para a defesa contra radicais livres.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/4-5-Dicaffeoylquinic-acid"
  },
  {
  "id": 54,
  "nome": "1-(1,3-Benzodioxol-5-ylcarbonyl)piperidine",
  "formula": "C13H15NO3",
  "categoria": "Cetona",
  "descricao": "Composto sintético utilizado em química orgânica, pode atuar como intermediário em síntese de moléculas bioativas.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/1370"
  },
  {
  "id": 55,
  "nome": "4-Butil-gama-butirolactona",
  "formula": "C8H14O2",
  "categoria": "Lactona",
  "descricao": "Lactona utilizada em síntese química, pode ser tóxica se ingerida em grandes quantidades, causando efeitos adversos ao sistema nervoso.",
  "toxico": true,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/17816"
  },
  {
  "id": 56,
  "nome": "2,5-Hexanedione",
  "formula": "C6H10O2",
  "categoria": "Lactona",
  "descricao": "Lactona usada como intermediário químico, pode ser tóxica em exposições elevadas, afetando o sistema nervoso periférico.",
  "toxico": true,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/8035"
  },
  {
  "id": 57,
  "nome": "4-Hidroxiprolina",
  "formula": "C5H9NO3",
  "categoria": "Aminoácido",
  "descricao": "Aminoácido derivado da prolina, essencial para a formação e estabilidade do colágeno, importante para a saúde dos tecidos conjuntivos.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/4-Hydroxyproline"
  },
  {
  "id": 58,
  "nome": "4-Hidroxiprolina (cis)",
  "formula": "C5H9NO3",
  "categoria": "Aminoácido",
  "descricao": "Isômero cis da 4-hidroxiprolina, participa da estrutura do colágeno e contribui para a resistência dos tecidos.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/4-Hydroxyproline"
  },
  {
  "id": 59,
  "nome": "5,3',4'-Trihidroxi-3-metóxi-6,7-metileniodioxi-flavona 4'-glucuronídeo",
  "formula": "C22H20O13",
  "categoria": "Flavonoide",
  "descricao": "Flavonoide conjugado com ácido glucurônico, apresenta propriedades antioxidantes e pode auxiliar na defesa contra o estresse oxidativo.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov"
  },
  {
  "id": 60,
  "nome": "5,4'-Dihidroxi-3,3'-dimetóxi-6,7-metilenodioxi-flavona 4'-glucuronídeo",
  "formula": "C23H22O13",
  "categoria": "Flavonoide",
  "descricao": "Derivado de flavona com propriedades antioxidantes, pode contribuir para a proteção das células contra danos oxidativos.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov"
  },
  {
  "id": 61,
  "nome": "5,8-Epoxidaucano",
  "formula": "C15H26O",
  "categoria": "Terpenoide",
  "descricao": "Terpenoide com estrutura epóxida, pode atuar como composto volátil e apresentar propriedades bioativas.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov"
  },
  {
  "id": 62,
  "nome": "5-Formiltetra-hidrofolato",
  "formula": "C20H23N7O7",
  "categoria": "Vitamina B",
  "descricao": "Derivado do ácido fólico, fundamental para o metabolismo de carbono único e síntese de DNA, importante para a divisão celular.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/5-Formyltetrahydrofolate"
  },
  {
  "id": 63,
  "nome": "5-Metiltetra-hidrofolato",
  "formula": "C20H25N7O6",
  "categoria": "Vitamina B",
  "descricao": "Forma ativa do ácido fólico, essencial para a síntese de DNA e funcionamento do sistema nervoso.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/5-Methyltetrahydrofolate"
  },
  {
  "id": 64,
  "nome": "7-Metil-3-metileno-1,6-octadieno",
  "formula": "C10H16",
  "categoria": "Monoterpeno",
  "descricao": "Monoterpeno volátil, contribui para o aroma e pode atuar como repelente natural.",
  "toxico": false,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Myrcene"
  },
  {
  "id": 65,
  "nome": "Acetaldeído",
  "formula": "C2H4O",
  "categoria": "Aldeído",
  "descricao": "Composto volátil tóxico em altas doses, pode causar irritação, danos celulares e está associado a efeitos adversos no fígado e sistema nervoso.",
  "toxico": true,
  "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Acetaldehyde"
  },
  {
    "id": 66,
    "nome": "Acetato de alfa-terpinila",
    "formula": "C12H20O2",
    "categoria": "Éster",
    "descricao": "Éster terpênico utilizado principalmente em fragrâncias devido ao seu aroma agradável. Atua como agente aromatizante e fixador em formulações. Apresenta baixa toxicidade, sendo considerado seguro para uso em produtos de consumo.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Alpha-Terpinyl-acetate"
  },
  {
    "id": 67,
    "nome": "Acetato de bornila",
    "formula": "C12H20O2",
    "categoria": "Éster",
    "descricao": "Éster amplamente empregado em perfumes e fragrâncias devido ao seu aroma refrescante. Contribui para a estabilidade e fixação do aroma em formulações. Não apresenta toxicidade significativa em concentrações usuais.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Bornyl-acetate"
  },
  {
    "id": 68,
    "nome": "Acetato de citronelila",
    "formula": "C12H22O2",
    "categoria": "Éster",
    "descricao": "Éster com odor floral, utilizado em fragrâncias, cosméticos e repelentes de insetos. Atua como agente aromatizante e pode contribuir para propriedades repelentes. Considerado seguro para uso, sem toxicidade relevante.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Citronellyl-acetate"
  },
  {
    "id": 69,
    "nome": "Acetato de etila",
    "formula": "C4H8O2",
    "categoria": "Éster",
    "descricao": "Solvente orgânico volátil com odor frutado, amplamente utilizado em tintas, adesivos e extração de compostos. Importante por sua eficiência como solvente e baixo custo. Não apresenta toxicidade significativa em exposições controladas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Ethyl-acetate"
  },
  {
    "id": 70,
    "nome": "Acetato de nerila",
    "formula": "C12H20O2",
    "categoria": "Éster",
    "descricao": "Éster com aroma floral, empregado em perfumes e cosméticos para conferir notas olfativas suaves. Atua como agente aromatizante e fixador. Não apresenta toxicidade relevante.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Neryl-acetate"
  },
  {
    "id": 71,
    "nome": "Acetato de octila",
    "formula": "C10H20O2",
    "categoria": "Éster",
    "descricao": "Éster com odor frutado, utilizado como aromatizante em formulações alimentícias e fragrâncias. Atua como agente de sabor e aroma. Não apresenta toxicidade significativa.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Octyl-acetate"
  },
  {
    "id": 72,
    "nome": "Acrilato de etila",
    "formula": "C5H8O2",
    "categoria": "Éster",
    "descricao": "Monômero utilizado na produção de polímeros e plásticos. Pode causar irritação em contato com a pele ou mucosas, devendo ser manipulado com precaução. Não é considerado tóxico em baixas concentrações ambientais.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Ethyl-acrylate"
  },
  {
    "id": 73,
    "nome": "Alfa-Humuleno",
    "formula": "C15H24",
    "categoria": "Sesquiterpeno",
    "descricao": "Terpeno com propriedades anti-inflamatórias e potencial uso em formulações terapêuticas e aromáticas. Contribui para o aroma e pode apresentar benefícios à saúde.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Alpha-Humulene"
  },
  {
    "id": 74,
    "nome": "Alfa-carena",
    "formula": "C10H16",
    "categoria": "Monoterpeno",
    "descricao": "Monoterpeno utilizado em fragrâncias e formulações aromáticas devido ao seu odor característico. Pode atuar como agente aromatizante e fixador. Não apresenta toxicidade relevante.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Carene"
  },
  {
    "id": 75,
    "nome": "Alfa-caroteno",
    "formula": "C40H56",
    "categoria": "Carotenoide",
    "descricao": "Pigmento carotenoide precursor da vitamina A, essencial para funções biológicas como visão e imunidade. Atua como antioxidante e contribui para a coloração de produtos naturais.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Alpha-Carotene"
  },
  {
    "id": 76,
    "nome": "Alfa-catequina",
    "formula": "C15H14O6",
    "categoria": "Flavonoide",
    "descricao": "Polifenol com propriedades antioxidantes, contribuindo para a proteção celular contra radicais livres. Importante em formulações funcionais e suplementos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Catechin"
  },
  {
    "id": 77,
    "nome": "Alfa-elemol",
    "formula": "C15H26O",
    "categoria": "Sesquiterpeno",
    "descricao": "Álcool terpênico com odor amadeirado, utilizado em fragrâncias e formulações aromáticas. Atua como agente aromatizante e fixador.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Elemol"
  },
  {
    "id": 78,
    "nome": "Alfa-tocoferol",
    "formula": "C29H50O2",
    "categoria": "Vitamina E",
    "descricao": "Principal forma da vitamina E, antioxidante essencial para a proteção das células contra danos oxidativos. Fundamental para a manutenção da saúde e prevenção de doenças relacionadas ao estresse oxidativo.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Alpha-Tocopherol"
  },
  {
    "id": 79,
    "nome": "Alfa-tocoferol (Vitamina E)",
    "formula": "C29H50O2",
    "categoria": "Vitamina E",
    "descricao": "Sinônimo de alfa-tocoferol, atua como antioxidante biológico, protegendo lipídios e membranas celulares contra oxidação.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Alpha-Tocopherol"
  },
  {
    "id": 80,
    "nome": "Alfa-tocotrienol",
    "formula": "C29H44O2",
    "categoria": "Vitamina E",
    "descricao": "Forma de vitamina E com propriedades antioxidantes, importante para a proteção celular e manutenção da integridade das membranas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Alpha-Tocotrienol"
  },
  {
    "id": 81,
    "nome": "Alliofuroside-A",
    "formula": "C27H44O12",
    "categoria": "Glicosídeo",
    "descricao": "Glicosídeo esteroidal com propriedades bioativas, podendo atuar em processos fisiológicos diversos e apresentar potencial farmacológico.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Alliofuroside-A"
  },
  {
    "id": 82,
    "nome": "Alliospiroside-A",
    "formula": "C27H44O12",
    "categoria": "Glicosídeo",
    "descricao": "Glicosídeo esteroidal com potencial atividade farmacológica, podendo atuar em processos biológicos relevantes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Alliospiroside-A"
  },
  {
    "id": 83,
    "nome": "Alliospiroside-B",
    "formula": "C27H44O13",
    "categoria": "Glicosídeo",
    "descricao": "Derivado de alliospiroside A, apresenta estrutura esteroidal e potencial bioatividade em aplicações farmacêuticas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Alliospiroside-B"
  },
  {
    "id": 84,
    "nome": "Alliospiroside-C",
    "formula": "C27H44O14",
    "categoria": "Glicosídeo",
    "descricao": "Glicosídeo esteroidal com estrutura semelhante a outros alliospirosides, podendo apresentar atividades biológicas relevantes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov"
  },
  {
    "id": 85,
    "nome": "Alliospiroside-D",
    "formula": "C27H44O15",
    "categoria": "Glicosídeo",
    "descricao": "Composto relacionado aos alliospirosides, com potencial bioatividade e interesse farmacológico.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Alliospiroside-D"
  },
  {
    "id": 86,
    "nome": "Alumínio",
    "formula": "Al",
    "categoria": "Metal",
    "descricao": "Metal leve amplamente utilizado em ligas, embalagens e utensílios. Em exposições crônicas elevadas, pode ser neurotóxico, afetando o sistema nervoso e estando associado a distúrbios neurológicos. O controle da exposição é fundamental para evitar efeitos adversos.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Aluminum"
  },
  {
    "id": 87,
    "nome": "Amido",
    "formula": "(C6H10O5)n",
    "categoria": "Polissacarídeo",
    "descricao": "Polímero de glicose que atua como principal reserva energética em organismos vegetais. Muito utilizado como espessante, estabilizante e fonte de energia em formulações alimentícias e industriais.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Starch"
  },
  {
    "id": 88,
    "nome": "Amido pregelatinizado",
    "formula": "(C6H10O5)n",
    "categoria": "Polissacarídeo",
    "descricao": "Forma processada de amido que facilita sua dispersão e solubilidade em água fria. Utilizado como excipiente em formulações farmacêuticas e alimentícias.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Starch"
  },
  {
    "id": 89,
    "nome": "Amido pré-gelatinizado",
    "formula": "(C6H10O5)n",
    "categoria": "Polissacarídeo",
    "descricao": "Variante do amido pregelatinizado, empregado como agente de volume e estabilizante em formulações diversas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Starch"
  },
  {
    "id": 90,
    "nome": "Amônia",
    "formula": "NH3",
    "categoria": "Composto inorgânico",
    "descricao": "Gás incolor com odor pungente, utilizado em fertilizantes, limpeza e síntese química. Tóxico em altas concentrações, podendo causar irritação respiratória, ocular e danos ao sistema respiratório. O manuseio requer precauções adequadas.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Ammonia"
  },
  {
    "id": 91,
    "nome": "Angelical",
    "formula": "C10H14O",
    "categoria": "Cetonas",
    "descricao": "Composto cetônico com propriedades aromáticas, utilizado em fragrâncias e formulações aromáticas. Pode apresentar atividade biológica em determinadas aplicações.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Angelicin"
  },
  {
    "id": 92,
    "nome": "Anilina",
    "formula": "C6H7N",
    "categoria": "Amina aromática",
    "descricao": "Composto aromático utilizado como intermediário em síntese química, corantes e plásticos. É tóxico, podendo causar meta-hemoglobinemia, danos neurológicos e efeitos adversos à saúde em exposições elevadas. O uso requer controle rigoroso.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Aniline"
  },
  {
    "id": 93,
    "nome": "Antimônio",
    "formula": "Sb",
    "categoria": "Metalóide",
    "descricao": "Elemento utilizado em ligas metálicas e retardantes de chama. É tóxico, podendo causar danos respiratórios, hepáticos e outros efeitos adversos à saúde. A exposição deve ser minimizada.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Antimony"
  },
  {
    "id": 94,
    "nome": "Apigenina",
    "formula": "C15H10O5",
    "categoria": "Flavonoide",
    "descricao": "Flavonoide com propriedades anti-inflamatórias e antioxidantes, podendo contribuir para a proteção celular e redução de processos inflamatórios.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Apigenin"
  },
  {
    "id": 95,
    "nome": "Arginina",
    "formula": "C6H14N4O2",
    "categoria": "Aminoácido",
    "descricao": "Aminoácido semi-essencial, precursor do óxido nítrico, fundamental para a regulação da função vascular, imunidade e síntese proteica.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Arginine"
  },
  {
    "id": 96,
    "nome": "Arsênio",
    "formula": "As",
    "categoria": "Metalóide",
    "descricao": "Elemento altamente tóxico e carcinogênico, presente em minerais e contaminantes ambientais. A exposição pode causar efeitos graves à saúde, incluindo câncer, distúrbios neurológicos e danos a órgãos internos. O controle rigoroso da exposição é essencial.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Arsenic"
  },
  {
    "id": 97,
    "nome": "Auroxantina",
    "formula": "C40H56O4",
    "categoria": "Carotenoide",
    "descricao": "Carotenoide oxidado com propriedades antioxidantes, contribuindo para a proteção celular contra danos oxidativos e para a coloração de produtos naturais.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Auroxanthin"
  },
  {
    "id": 98,
    "nome": "Açúcares",
    "formula": "Cn(H2O)m",
    "categoria": "Carboidrato",
    "descricao": "Classe de carboidratos simples, como glicose e frutose, que atuam como fonte primária de energia para processos metabólicos em organismos vivos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Sugars"
  },
  {
    "id": 101,
    "nome": "Benzilamina",
    "formula": "C7H9N",
    "categoria": "Amina",
    "descricao": "Amina aromática utilizada como intermediário em síntese orgânica. Pode ser irritante em altas concentrações, devendo ser manipulada com precaução.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Benzylamine"
  },
  {
    "id": 102,
    "nome": "Bergaptene",
    "formula": "C12H8O4",
    "categoria": "Cumarina",
    "descricao": "Cumarina fotossensibilizante, utilizada em fragrâncias e formulações cosméticas. Pode causar reações cutâneas em contato com a pele exposta à luz solar.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Bergapten"
  },
  {
    "id": 103,
    "nome": "Berílio",
    "formula": "Be",
    "categoria": "Metal alcalino-terroso",
    "descricao": "Metal leve utilizado em ligas especiais e componentes eletrônicos. É tóxico, especialmente por inalação, podendo causar doenças pulmonares graves. O manuseio requer controle rigoroso.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Beryllium"
  },
  {
    "id": 104,
    "nome": "Beta-D-Glucopiranose",
    "formula": "C6H12O6",
    "categoria": "Monossacarídeo",
    "descricao": "Forma cíclica da glicose, unidade básica de carboidratos, essencial para o metabolismo energético de organismos vivos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Beta-D-Glucopyranose"
  },
  {
    "id": 105,
    "nome": "Beta-Sitosterol",
    "formula": "C29H50O",
    "categoria": "Esterol",
    "descricao": "Esterol de origem vegetal, conhecido por auxiliar na redução dos níveis de colesterol e contribuir para a saúde cardiovascular.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Beta-Sitosterol"
  },
  {
    "id": 106,
    "nome": "Beta-caroteno",
    "formula": "C40H56",
    "categoria": "Carotenoide",
    "descricao": "Pigmento carotenoide precursor da vitamina A, essencial para funções biológicas como visão, imunidade e proteção antioxidante.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Beta-Carotene"
  },
  {
    "id": 107,
    "nome": "Beta-criptoxantina",
    "formula": "C40H56O",
    "categoria": "Carotenoide",
    "descricao": "Carotenoide com atividade pró-vitamina A, contribuindo para funções biológicas essenciais e proteção antioxidante.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Beta-Cryptoxanthin"
  },
  {
    "id": 108,
    "nome": "Beta-tocoferol",
    "formula": "C28H48O2",
    "categoria": "Vitamina E",
    "descricao": "Forma menos comum de vitamina E, atua como antioxidante, protegendo células contra danos oxidativos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Beta-Tocopherol"
  },
  {
    "id": 110,
    "nome": "Betaína",
    "formula": "C5H11NO2",
    "categoria": "Composto de amônio quaternário",
    "descricao": "Composto natural com função osmoprotetora, auxiliando na regulação do equilíbrio osmótico celular e apresentando benefícios metabólicos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Betaine"
  },
  {
    "id": 111,
    "nome": "Biotina",
    "formula": "C10H16N2O3S",
    "categoria": "Vitamina B",
    "descricao": "Vitamina essencial (B7) para o metabolismo de gorduras, carboidratos e proteínas. Importante para a manutenção da saúde da pele, cabelo e unhas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Biotin"
  },
  {
    "id": 112,
    "nome": "Biotina (Vitamina B7)",
    "formula": "C10H16N2O3S",
    "categoria": "Vitamina B",
    "descricao": "Sinônimo de biotina, fundamental para processos metabólicos e manutenção da integridade de tecidos como pele e cabelo.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Biotin"
  },
  {
    "id": 113,
    "nome": "Bifenilo",
    "formula": "C12H10",
    "categoria": "Hidrocarboneto aromático",
    "descricao": "Composto aromático utilizado como conservante e intermediário químico. É tóxico, podendo causar danos hepáticos, irritação e outros efeitos adversos à saúde. O uso requer precauções adequadas.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Biphenyl"
  },
  {
    "id": 114,
    "nome": "Boro",
    "formula": "B",
    "categoria": "Metalóide",
    "descricao": "Elemento utilizado em vidros, cerâmicas e fertilizantes. Em altas doses, pode ser tóxico, causando irritação e efeitos adversos à reprodução. O uso deve ser controlado.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Boron"
  },
  {
    "id": 115,
    "nome": "Bromo",
    "formula": "Br2",
    "categoria": "Halogênio",
    "descricao": "Elemento halogênio líquido à temperatura ambiente, utilizado em síntese química e desinfecção. É tóxico, podendo causar irritação severa, danos respiratórios e outros efeitos adversos. O manuseio exige precaução.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Bromine"
  },
  {
    "id": 116,
    "nome": "Butirato de etila",
    "formula": "C6H12O2",
    "categoria": "Éster",
    "descricao": "Éster com aroma frutado, utilizado como aromatizante em formulações alimentícias e fragrâncias. Considerado seguro para uso em concentrações usuais.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Ethyl-butyrate"
  },
  {
    "id": 117,
    "nome": "Bário",
    "formula": "Ba",
    "categoria": "Metal alcalino-terroso",
    "descricao": "Metal utilizado em ligas e pirotecnia. Compostos solúveis de bário são tóxicos, podendo causar arritmias cardíacas, distúrbios musculares e outros efeitos adversos. O controle da exposição é fundamental.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Barium"
  },
  {
    "id": 118,
    "nome": "C18:1 n-9 (ácido oleico)",
    "formula": "C18H34O2",
    "categoria": "Ácido graxo",
    "descricao": "Ácido graxo monoinsaturado, importante para a saúde cardiovascular e presente em diversas formulações alimentícias e cosméticas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Oleic-acid"
  },
  {
    "id": 119,
    "nome": "CE(18:2(9Z,12Z)) (éster de colesterol com ácido linoleico)",
    "formula": "C45H76O2",
    "categoria": "Éster de colesterol",
    "descricao": "Éster formado por colesterol e ácido linoleico, componente de lipídios celulares e envolvido no metabolismo lipídico.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Cholesteryl-linoleate"
  },
  {
    "id": 120,
    "nome": "Camfeno",
    "formula": "C10H16",
    "categoria": "Monoterpeno",
    "descricao": "Monoterpeno utilizado em fragrâncias, formulações aromáticas e como plastificante. Contribui para o aroma e estabilidade de produtos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Camphene"
  },
  {
    "id": 121,
    "nome": "Campesterol",
    "formula": "C28H48O",
    "categoria": "Esterol",
    "descricao": "Esterol vegetal com propriedades de redução do colesterol, contribuindo para a saúde cardiovascular.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Campesterol"
  },
  {
    "id": 122,
    "nome": "Caprilato de metila",
    "formula": "C9H18O2",
    "categoria": "Éster",
    "descricao": "Éster com odor frutado, utilizado como aromatizante e em fragrâncias. Considerado seguro para uso em concentrações usuais.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Methyl-caprylate"
  },
  {
    "id": 123,
    "nome": "Capsaicina",
    "formula": "C18H27NO3",
    "categoria": "Capsaicinóide",
    "descricao": "Composto responsável pela sensação de pungência em formulações picantes. Utilizado em medicamentos tópicos para alívio da dor e em produtos alimentícios. Não é tóxico em doses normais.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Capsaicin"
  },
  {
    "id": 124,
    "nome": "Capsiamida",
    "formula": "C18H29NO3",
    "categoria": "Capsaicinóide",
    "descricao": "Análogo da capsaicina, apresenta propriedades pungentes e pode ser utilizado em formulações farmacêuticas. Em concentrações elevadas, pode ser tóxico, causando irritação e desconforto.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/8-Methyl-N-vanillyl-trans-6-nonenamide"
  },
  {
    "id": 125,
    "nome": "Capsiansida A",
    "formula": "C27H44O12",
    "categoria": "Glicosídeo",
    "descricao": "Glicosídeo com potencial atividade bioativa, podendo atuar em processos fisiológicos e aplicações farmacêuticas.",
    "toxico": false,
    "referencias": "https://www.guidechem.com/encyclopedia/poly-r-3-hydroxybutyric-acid-c-dic362019.html"
  },
  {
    "id": 126,
    "nome": "Capsiansida-B",
    "formula": "C27H44O13",
    "categoria": "Glicosídeo",
    "descricao": "Derivado de capsiansida, apresenta estrutura complexa e potencial bioatividade, embora suas propriedades ainda sejam pouco estudadas.",
    "toxico": false,
    "referencias": "https://www.guidechem.com/encyclopedia/e-4r-5s-5-s-3-hydroxy-butyrylo-dic4586948.html"
  },
  {
    "id": 127,
    "nome": "Capsiansida-C",
    "formula": "C27H44O14",
    "categoria": "Glicosídeo",
    "descricao": "Glicosídeo com estrutura semelhante às demais capsiansidas, podendo apresentar atividades biológicas relevantes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Capsianside-C"
  },
  {
    "id": 128,
    "nome": "Capsiansida-D",
    "formula": "C27H44O15",
    "categoria": "Glicosídeo",
    "descricao": "Composto relacionado às capsiansidas, com potencial bioatividade em aplicações farmacêuticas e biológicas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Capsianside-D"
  },
  {
    "id": 129,
    "nome": "Capsiansida-E",
    "formula": "C27H44O16",
    "categoria": "Glicosídeo",
    "descricao": "Glicosídeo com estrutura complexa, potencialmente bioativo e de interesse para pesquisas farmacológicas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Capsianside-E"
  },
  {
    "id": 130,
    "nome": "Capsiansida-F",
    "formula": "C27H44O17",
    "categoria": "Glicosídeo",
    "descricao": "Derivado de capsiansida com estrutura complexa, podendo apresentar atividades biológicas de interesse.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Capsianside-F"
  },
  {
    "id": 131,
    "nome": "Capsiansida-I",
    "formula": "C27H44O12",
    "categoria": "Glicosídeo",
    "descricao": "Glicosídeo com estrutura esteroidal, potencialmente envolvido em processos fisiológicos e aplicações farmacológicas. Suas propriedades bioativas ainda são pouco documentadas, mas pode apresentar interesse para pesquisas em biotecnologia e saúde.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Capsianside-I"
  },
  {
    "id": 132,
    "nome": "Capsiansida-II",
    "formula": "C27H44O13",
    "categoria": "Glicosídeo",
    "descricao": "Variação estrutural de glicosídeo esteroidal, podendo atuar em processos biológicos e apresentar potencial bioatividade. Suas funções específicas ainda são pouco exploradas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Capsianside-II"
  },
  {
    "id": 133,
    "nome": "Capsiansida-III",
    "formula": "C27H44O14",
    "categoria": "Glicosídeo",
    "descricao": "Composto glicosídico com potencial farmacológico, podendo atuar em processos fisiológicos e apresentar interesse para desenvolvimento de novos fármacos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Capsianside-III"
  },
  {
    "id": 134,
    "nome": "Capsiansida-IV",
    "formula": "C27H44O15",
    "categoria": "Glicosídeo",
    "descricao": "Derivado de glicosídeo com estrutura complexa, potencialmente bioativo e de interesse para pesquisas em farmacologia e biotecnologia.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Capsianside-IV"
  },
  {
    "id": 135,
    "nome": "Capsiansida-V",
    "formula": "C27H44O16",
    "categoria": "Glicosídeo",
    "descricao": "Glicosídeo com estrutura esteroidal, cujas propriedades e funções biológicas ainda são pouco estudadas, mas pode apresentar potencial bioatividade.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Capsianside-V"
  },
  {
    "id": 136,
    "nome": "Capsicosídeo-A1",
    "formula": "C33H54O17",
    "categoria": "Glicosídeo",
    "descricao": "Glicosídeo complexo com potencial atividade antioxidante, podendo contribuir para a proteção celular contra danos oxidativos e apresentar interesse em aplicações farmacêuticas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Capsicoside-A1"
  },
  {
    "id": 137,
    "nome": "Capsicosídeo-B1",
    "formula": "C33H54O18",
    "categoria": "Glicosídeo",
    "descricao": "Derivado de capsicosídeo, apresenta propriedades bioativas e pode atuar em processos fisiológicos, sendo de interesse para pesquisas em saúde e biotecnologia.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Capsicoside-B1"
  },
  {
    "id": 138,
    "nome": "Capsicosídeo-C1",
    "formula": "C33H54O19",
    "categoria": "Glicosídeo",
    "descricao": "Glicosídeo de estrutura complexa, com potencial bioatividade e interesse para estudos farmacológicos e antioxidantes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Capsicoside-C1"
  },
  {
    "id": 139,
    "nome": "Capsidiol",
    "formula": "C15H24O2",
    "categoria": "Sesquiterpeno",
    "descricao": "Sesquiterpeno com propriedades antifúngicas, atuando como composto de defesa em organismos vegetais. Pode ser explorado em formulações para proteção contra patógenos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Capsidiol"
  },
  {
    "id": 140,
    "nome": "Capsorubina",
    "formula": "C40H56O4",
    "categoria": "Carotenoide",
    "descricao": "Carotenoide responsável pela coloração vermelha intensa, com propriedades antioxidantes que contribuem para a proteção celular contra radicais livres.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Capsorubin"
  },
  {
    "id": 141,
    "nome": "Carbonato",
    "formula": "CO3^2-",
    "categoria": "Ânion inorgânico",
    "descricao": "Íon amplamente presente em minerais e utilizado em formulações antiácidas, construção civil e processos industriais. Atua na regulação do pH e em reações químicas diversas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Carbonate"
  },
  {
    "id": 142,
    "nome": "Carotol",
    "formula": "C15H26O",
    "categoria": "Sesquiterpeno",
    "descricao": "Álcool terpênico com odor característico, utilizado em fragrâncias e formulações aromáticas. Pode apresentar propriedades bioativas em determinadas aplicações.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Carotol"
  },
  {
    "id": 143,
    "nome": "Carvona",
    "formula": "C10H14O",
    "categoria": "Monoterpeno",
    "descricao": "Cetona terpênica utilizada em aromas e fragrâncias devido ao seu odor característico. Pode atuar como agente aromatizante e apresentar propriedades biológicas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Carvone"
  },
  {
    "id": 144,
    "nome": "Catequina",
    "formula": "C15H14O6",
    "categoria": "Flavonoide",
    "descricao": "Polifenol com propriedades antioxidantes e anti-inflamatórias, contribuindo para a proteção celular e redução de processos oxidativos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Catechin"
  },
  {
    "id": 145,
    "nome": "Celulose",
    "formula": "(C6H10O5)n",
    "categoria": "Polissacarídeo",
    "descricao": "Polímero estrutural fundamental em organismos vegetais, utilizado na produção de papel, têxteis e como fibra alimentar, promovendo benefícios à saúde digestiva.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Cellulose"
  },
  {
    "id": 146,
    "nome": "Chavicol",
    "formula": "C9H10O",
    "categoria": "Fenólico",
    "descricao": "Composto aromático presente em óleos essenciais, utilizado em fragrâncias e formulações aromáticas. Pode apresentar propriedades bioativas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Chavicol"
  },
  {
    "id": 147,
    "nome": "Chumbo",
    "formula": "Pb",
    "categoria": "Metal pesado",
    "descricao": "Metal pesado altamente tóxico, podendo causar danos neurológicos, renais, hematológicos e ser carcinogênico. A exposição deve ser rigorosamente controlada para evitar efeitos adversos graves à saúde.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Lead"
  },
  {
    "id": 148,
    "nome": "Chumbo (Lead)",
    "formula": "Pb",
    "categoria": "Metal pesado",
    "descricao": "Nome alternativo para chumbo, metal pesado extremamente tóxico, capaz de afetar o sistema nervoso, rins e causar efeitos crônicos graves. O contato e ingestão devem ser evitados.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Lead"
  },
  {
    "id": 149,
    "nome": "Cianidina",
    "formula": "C15H11O6+",
    "categoria": "Antocianina",
    "descricao": "Pigmento natural com propriedades antioxidantes, contribuindo para a proteção celular contra radicais livres e promovendo benefícios à saúde.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Cyanidin"
  },
  {
    "id": 150,
    "nome": "Cianidina 3,5-diglicosídeo",
    "formula": "C27H31O16+",
    "categoria": "Antocianina",
    "descricao": "Derivado glicosilado da cianidina, atua como pigmento antioxidante, protegendo células contra danos oxidativos e contribuindo para a coloração de produtos naturais.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Cyanidin-3-5-diglucoside"
  },
  {
    "id": 151,
    "nome": "Cianidina 3-glucosídeo",
    "formula": "C21H21O11+",
    "categoria": "Antocianina",
    "descricao": "Antocianina comum, pigmento com propriedades antioxidantes, importante para a proteção celular e coloração de produtos naturais.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Cyanidin-3-glucoside"
  },
  {
    "id": 152,
    "nome": "Cianidina 3-sophorosídeo 5-glicosídeo",
    "formula": "C33H41O21+",
    "categoria": "Antocianina",
    "descricao": "Antocianina complexa, atua como pigmento antioxidante, protegendo células e contribuindo para a coloração de produtos naturais.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Cyanidin-3-sophoroside-5-glucoside"
  },
  {
    "id": 153,
    "nome": "Cianocobalamina (Vitamina B12)",
    "formula": "C63H88CoN14O14P",
    "categoria": "Vitamina B",
    "descricao": "Vitamina essencial para a formação de glóbulos vermelhos, síntese de DNA e funcionamento neurológico adequado. Deficiências podem causar anemia e distúrbios neurológicos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Cyanocobalamin"
  },
  {
    "id": 154,
    "nome": "Matairesinol",
    "formula": "C20H22O6",
    "categoria": "Diterpeno",
    "descricao": "Diterpeno com potencial atividade biológica, podendo atuar como antioxidante e apresentar interesse para pesquisas em saúde.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Matairesinol"
  },
  {
    "id": 155,
    "nome": "Cistina",
    "formula": "C6H12N2O4S2",
    "categoria": "Aminoácido",
    "descricao": "Aminoácido formado por duas moléculas de cisteína, fundamental para a estrutura de proteínas e manutenção da integridade celular.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Cystine"
  },
  {
    "id": 156,
    "nome": "Citracridona-I",
    "formula": "C15H11NO4",
    "categoria": "Alcaloide",
    "descricao": "Alcaloide com potencial atividade farmacológica, podendo atuar em processos biológicos relevantes e ser de interesse para desenvolvimento de novos fármacos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Citracridone-I"
  },
  {
    "id": 157,
    "nome": "Citrato",
    "formula": "C6H8O7",
    "categoria": "Ácido orgânico",
    "descricao": "Ácido orgânico utilizado como conservante, regulador de acidez e intermediário metabólico no ciclo de Krebs, fundamental para a produção de energia celular.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Citric-acid"
  },
  {
    "id": 158,
    "nome": "Citronellal",
    "formula": "C10H18O",
    "categoria": "Monoterpeno",
    "descricao": "Aldeído terpênico com odor cítrico, utilizado em perfumes, fragrâncias e repelentes de insetos. Pode apresentar propriedades bioativas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Citronellal"
  },
  {
    "id": 159,
    "nome": "Citrusinina-I",
    "formula": "C15H11NO3",
    "categoria": "Alcaloide",
    "descricao": "Alcaloide com propriedades bioativas ainda pouco estudadas, podendo apresentar interesse para pesquisas farmacológicas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Citrusina-I"
  },
  {
    "id": 160,
    "nome": "isoxadifen",
    "formula": "C16H13NO3",
    "categoria": "Alcaloide",
    "descricao": "Derivado de alcaloide com potencial farmacológico, podendo atuar em processos biológicos e ser de interesse para desenvolvimento de novos compostos bioativos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Isoxadifen"
  },
  {
    "id": 161,
    "nome": "Cloreto de S-metil-L-metionina",
    "formula": "C6H14ClNO2S",
    "categoria": "Derivado de aminoácido",
    "descricao": "Composto derivado da metionina, atua como agente protetor celular e pode ser utilizado em formulações alimentícias e farmacêuticas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/S-Methyl-L-methionine"
  },
  {
    "id": 162,
    "nome": "Cloreto de tiamina",
    "formula": "C12H18Cl2N4OS",
    "categoria": "Vitamina B",
    "descricao": "Forma de vitamina B1, essencial para o metabolismo de carboidratos e funcionamento adequado do sistema nervoso.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Thiamine-chloride"
  },
  {
    "id": 163,
    "nome": "Cloro",
    "formula": "Cl2",
    "categoria": "Halogênio",
    "descricao": "Gás halogênio altamente reativo, utilizado em processos de desinfecção e síntese química. É tóxico, podendo causar danos respiratórios graves, irritação ocular e efeitos sistêmicos em exposições elevadas.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Chlorine"
  },
  {
    "id": 164,
    "nome": "Cloro (Chlorine)",
    "formula": "Cl2",
    "categoria": "Halogênio",
    "descricao": "Nome alternativo para cloro, gás tóxico e irritante, capaz de causar lesões respiratórias e efeitos adversos graves à saúde em exposições elevadas.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Chlorine"
  },
  {
    "id": 165,
    "nome": "Cobalto",
    "formula": "Co",
    "categoria": "Metal de transição",
    "descricao": "Elemento essencial em pequenas quantidades, fundamental para a síntese de vitamina B12 e funcionamento enzimático. Em excesso, pode ser tóxico, causando efeitos adversos à saúde.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Cobalt"
  },
  {
    "id": 166,
    "nome": "Cobre",
    "formula": "Cu",
    "categoria": "Metal de transição",
    "descricao": "Metal essencial para o funcionamento de diversas enzimas e processos biológicos. Em altas doses, pode ser tóxico, causando danos hepáticos e outros efeitos adversos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Copper"
  },
  {
    "id": 167,
    "nome": "Colina",
    "formula": "C5H14NO+",
    "categoria": "Composto de amônio quaternário",
    "descricao": "Nutriente essencial para a função hepática, síntese de neurotransmissores e manutenção da integridade das membranas celulares.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Choline"
  },
  {
    "id": 168,
    "nome": "Coumestrol",
    "formula": "C15H8O5",
    "categoria": "Fitoestrógeno",
    "descricao": "Composto com atividade estrogênica, podendo atuar na regulação hormonal e apresentar benefícios à saúde óssea e cardiovascular.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Coumestrol"
  },
  {
    "id": 169,
    "nome": "Creatinina",
    "formula": "C4H7N3O",
    "categoria": "Composto nitrogenado",
    "descricao": "Produto metabólico resultante da degradação da creatina, utilizado como marcador da função renal em exames clínicos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Creatinine"
  },
  {
    "id": 170,
    "nome": "Cromo",
    "formula": "Cr",
    "categoria": "Metal de transição",
    "descricao": "Elemento essencial em pequenas quantidades para o metabolismo de carboidratos e lipídios. O cromo hexavalente, porém, é tóxico e carcinogênico, devendo-se evitar a exposição a essa forma.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Chromium"
  },
  {
    "id": 171,
    "nome": "Cyanidin 3-(6''-malonylglucoside)",
    "formula": "C24H23O14+",
    "categoria": "Antocianina",
    "descricao": "Derivado de cianidina com grupo malonil, atua como pigmento antioxidante, protegendo células contra danos oxidativos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Cyanidin-3-malonylglucoside"
  },
  {
    "id": 172,
    "nome": "Cyanidin 3-glucoside",
    "formula": "C21H21O11+",
    "categoria": "Antocianina",
    "descricao": "Nome alternativo para cianidina 3-glucosídeo, pigmento natural com propriedades antioxidantes, importante para a proteção celular.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Cyanidin-3-glucoside"
  },
  {
    "id": 173,
    "nome": "Cádmio",
    "formula": "Cd",
    "categoria": "Metal pesado",
    "descricao": "Metal pesado altamente tóxico e carcinogênico, capaz de causar danos renais, ósseos e efeitos adversos crônicos graves. A exposição deve ser rigorosamente evitada.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Cadmium"
  },
  {
    "id": 174,
    "nome": "Cálcio",
    "formula": "Ca",
    "categoria": "Metal alcalino-terroso",
    "descricao": "Elemento essencial para a formação e manutenção de ossos e dentes, além de atuar em processos de contração muscular e coagulação sanguínea. Não é tóxico em doses normais.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Calcium"
  },
  {
    "id": 175,
    "nome": "Cério",
    "formula": "Ce",
    "categoria": "Lantanídeo",
    "descricao": "Metal utilizado em catalisadores e ligas especiais. Compostos solúveis de cério são tóxicos, podendo causar danos pulmonares e outros efeitos adversos à saúde.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Cerium"
  },
  {
    "id": 176,
    "nome": "Césio",
    "formula": "Cs",
    "categoria": "Metal alcalino",
    "descricao": "Metal utilizado em aplicações tecnológicas como relógios atômicos. Em altas doses, é tóxico, podendo causar irritação e efeitos adversos sistêmicos.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Cesium"
  },
  {
    "id": 177,
    "nome": "D-4-O-Metil-mio-inositol",
    "formula": "C7H14O6",
    "categoria": "Cicloexanol",
    "descricao": "Derivado do mio-inositol, atua como osmoprotetor celular, auxiliando na regulação do equilíbrio osmótico e proteção contra estresse ambiental.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/D-Pinitol"
  },
  {
    "id": 178,
    "nome": "D-Aspartato",
    "formula": "C4H7NO4",
    "categoria": "Aminoácido",
    "descricao": "Aminoácido não proteico, envolvido em funções sinalizadoras e processos metabólicos em organismos vivos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/D-Aspartic-acid"
  },
  {
    "id": 179,
    "nome": "D-Fructose",
    "formula": "C6H12O6",
    "categoria": "Monossacarídeo",
    "descricao": "Açúcar simples utilizado como adoçante e fonte de energia em formulações alimentícias e produtos naturais.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/D-Fructose"
  },
  {
    "id": 180,
    "nome": "D-Frutose",
    "formula": "C6H12O6",
    "categoria": "Monossacarídeo",
    "descricao": "Variação ortográfica de D-fructose, atua como açúcar simples e fonte de energia em processos metabólicos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/D-Fructose"
  },
  {
    "id": 181,
    "nome": "D-Galactose",
    "formula": "C6H12O6",
    "categoria": "Monossacarídeo",
    "descricao": "Açúcar simples, componente da lactose, fundamental para o metabolismo energético e síntese de biomoléculas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/D-Galactose"
  },
  {
    "id": 182,
    "nome": "D-Glicose",
    "formula": "C6H12O6",
    "categoria": "Monossacarídeo",
    "descricao": "Variação ortográfica de D-glucose, principal fonte de energia para células e processos metabólicos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/D-Glucose"
  },
  {
    "id": 183,
    "nome": "D-Glucose",
    "formula": "C6H12O6",
    "categoria": "Monossacarídeo",
    "descricao": "Açúcar essencial para o metabolismo energético, amplamente utilizado como fonte de energia em organismos vivos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/D-Glucose"
  },
  {
    "id": 184,
    "nome": "D-Pinitol",
    "formula": "C7H14O6",
    "categoria": "Cicloexanol",
    "descricao": "Composto semelhante ao mio-inositol, atua como osmoprotetor celular e pode apresentar benefícios metabólicos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/D-Pinitol"
  },
  {
    "id": 185,
    "nome": "Dauceno",
    "formula": "C15H24",
    "categoria": "Sesquiterpeno",
    "descricao": "Sesquiterpeno com propriedades aromáticas, utilizado em fragrâncias e formulações aromáticas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Daucene"
  },
  {
    "id": 186,
    "nome": "Daucol",
    "formula": "C15H26O",
    "categoria": "Sesquiterpeno",
    "descricao": "Álcool terpênico com odor característico, utilizado em fragrâncias e formulações aromáticas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Daucol"
  },
  {
    "id": 187,
    "nome": "Dec-2-en-1-al (aldeído volátil)",
    "formula": "C10H18O",
    "categoria": "Aldeído",
    "descricao": "Aldeído volátil com odor verde, utilizado em fragrâncias, aromas e formulações aromáticas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Dec-2-enal"
  },
  {
    "id": 188,
    "nome": "Decanal",
    "formula": "C10H20O",
    "categoria": "Aldeído",
    "descricao": "Aldeído com odor cítrico, utilizado em perfumes, fragrâncias e aromas alimentícios.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Decanal"
  },
  {
    "id": 189,
    "nome": "Di-N-propilamina",
    "formula": "C6H15N",
    "categoria": "Amina",
    "descricao": "Amina secundária utilizada como intermediário em síntese química. Pode ser irritante em altas concentrações, devendo ser manipulada com precaução.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Dipropylamine"
  },
  {
    "id": 190,
    "nome": "Didymin",
    "formula": "C28H34O14",
    "categoria": "Flavonoide",
    "descricao": "Flavonoide glicosilado com propriedades antioxidantes, contribuindo para a proteção celular contra radicais livres.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Didymin"
  },
  {
    "id": 191,
    "nome": "Difenilamina",
    "formula": "C12H11N",
    "categoria": "Amina aromática",
    "descricao": "Composto utilizado como antioxidante em borrachas e outros materiais. É tóxico, podendo causar danos hepáticos, renais e efeitos adversos à saúde em exposições elevadas. O uso requer precauções rigorosas.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Diphenylamine"
  },
  {
    "id": 192,
    "nome": "Dihidrocapsaicina",
    "formula": "C18H29NO3",
    "categoria": "Capsaicinóide",
    "descricao": "Análogo da capsaicina, contribui para a sensação de pungência em formulações picantes e pode ser utilizado em produtos farmacêuticos e alimentícios.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Dihydrocapsaicin"
  },
  {
    "id": 193,
    "nome": "Dimeticona",
    "formula": "(C2H6OSi)n",
    "categoria": "Polímero de silicone",
    "descricao": "Polímero de silicone utilizado em cosméticos, medicamentos e formulações industriais. Não é absorvido pelo organismo e é considerado seguro para uso tópico e oral.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Dimethicone"
  },
  {
    "id": 194,
    "nome": "Dimetilamina",
    "formula": "C2H7N",
    "categoria": "Amina",
    "descricao": "Amina secundária volátil, utilizada em síntese química. É tóxica por inalação, podendo causar irritação das vias respiratórias e efeitos adversos sistêmicos. O manuseio requer precaução.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Dimethylamine"
  },
  {
    "id": 195,
    "nome": "Diosgenina",
    "formula": "C27H42O3",
    "categoria": "Saponina esteroidal",
    "descricao": "Composto utilizado como precursor na síntese de hormônios esteroides e em formulações farmacêuticas. Apresenta interesse para a indústria de medicamentos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Diosgenin"
  },
  {
    "id": 196,
    "nome": "Disprósio",
    "formula": "Dy",
    "categoria": "Lantanídeo",
    "descricao": "Metal raro usado em ímãs. Baixa toxicidade, mas pode ser irritante em compostos solúveis.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Dysprosium"
  },
  {
    "id": 197,
    "nome": "Dopamina",
    "formula": "C8H11NO2",
    "categoria": "Catecolamina",
    "descricao": "Neurotransmissor essencial para o sistema nervoso, também usado como medicamento.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Dopamine"
  },
  {
    "id": 198,
    "nome": "Elemicina",
    "formula": "C12H16O3",
    "categoria": "Fenólico",
    "descricao": "Composto aromático encontrado em noz-moscada, com propriedades psicoativas em altas doses.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Elemicin"
  },
  {
    "id": 199,
    "nome": "Enxofre",
    "formula": "S",
    "categoria": "Não metal",
    "descricao": "Elemento essencial para aminoácidos como cisteína, usado em fertilizantes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Sulfur"
  },
  {
    "id": 200,
    "nome": "Enxofre",
    "formula": "S",
    "categoria": "Não metal",
    "descricao": "Nome alternativo para enxofre, não tóxico em formas elementares.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Sulfur"
  },
  {
    "id": 201,
    "nome": "Epigalocatequina",
    "formula": "C15H14O7",
    "categoria": "Flavonoide",
    "descricao": "Polifenol encontrado no chá verde, com propriedades antioxidantes e anti-inflamatórias.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Epigallocatechin"
  },
  {
    "id": 202,
    "nome": "Epsilon-Polilisina",
    "formula": "(C6H12N2O)n",
    "categoria": "Polímero de aminoácido",
    "descricao": "Polímero natural usado como conservante alimentar, com propriedades antimicrobianas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Epsilon-Polylysine"
  },
  {
    "id": 203,
    "nome": "Epsilon-tocoferol",
    "formula": "C27H46O2",
    "categoria": "Vitamina E",
    "descricao": "Forma rara de vitamina E, com propriedades antioxidantes, encontrada em óleos vegetais.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Epsilon-Tocopherol"
  },
  {
    "id": 204,
    "nome": "Eriodictyol 7-rutinosídeo",
    "formula": "C27H32O15",
    "categoria": "Flavonoide",
    "descricao": "Flavonoide glicosilado encontrado em cítricos, com atividade antioxidante.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Eriodictyol-7-rutinoside"
  },
  {
    "id": 205,
    "nome": "Eritro-Isoleucina",
    "formula": "C6H13NO2",
    "categoria": "Aminoácido",
    "descricao": "Isômero da isoleucina, menos comum, usado em estudos bioquímicos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Isoleucine"
  },
  {
    "id": 206,
    "nome": "Escoparona",
    "formula": "C11H10O4",
    "categoria": "Cumarina",
    "descricao": "Cumarina encontrada em plantas, com potenciais propriedades anti-inflamatórias.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Scoparone"
  },
  {
    "id": 207,
    "nome": "Estachiose",
    "formula": "C24H42O21",
    "categoria": "Oligossacarídeo",
    "descricao": "Carboidrato presente em leguminosas, atua como prebiótico no intestino.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Stachyose"
  },
  {
    "id": 208,
    "nome": "Estanho",
    "formula": "Sn",
    "categoria": "Metal",
    "descricao": "Metal usado em ligas e revestimentos. Compostos orgânicos são tóxicos, afetando o sistema nervoso.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Tin"
  },
  {
    "id": 209,
    "nome": "Estigmasterol",
    "formula": "C29H48O",
    "categoria": "Esterol",
    "descricao": "Esterol vegetal encontrado em óleos, com propriedades redutoras de colesterol.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Stigmasterol"
  },
  {
    "id": 210,
    "nome": "Estrôncio",
    "formula": "Sr",
    "categoria": "Metal alcalino-terroso",
    "descricao": "Metal usado em fogos de artifício. Pode causar toxicidade óssea em doses elevadas.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Strontium"
  },
  {
    "id": 211,
    "nome": "Etanol",
    "formula": "C2H5OH",
    "categoria": "Álcool",
    "descricao": "Álcool presente em bebidas. Tóxico em doses altas, causando danos hepáticos e neurológicos.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Ethanol"
  },
  {
    "id": 212,
    "nome": "Ethanamina",
    "formula": "C2H7N",
    "categoria": "Amina",
    "descricao": "Amina primária com odor forte, usada em síntese química. Irritante e tóxica em altas doses.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Ethylamine"
  },
  {
    "id": 213,
    "nome": "Etil metilamina",
    "formula": "C3H9N",
    "categoria": "Amina",
    "descricao": "Amina secundária, usada em síntese química. Tóxica e irritante por inalação ou contato.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Ethylmethylamine"
  },
  {
    "id": 214,
    "nome": "Etilsuberenol",
    "formula": "C17H30O",
    "categoria": "Terpenoide",
    "descricao": "Composto terpenoide derivado, com propriedades aromáticas, pouco documentado.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Ethylsuberenol"
  },
  {
    "id": 215,
    "nome": "Eugenol",
    "formula": "C10H12O2",
    "categoria": "Fenólico",
    "descricao": "Composto aromático encontrado no cravo, usado em odontologia e fragrâncias.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Eugenol"
  },
  {
    "id": 216,
    "nome": "Európio",
    "formula": "Eu",
    "categoria": "Lantanídeo",
    "descricao": "Metal raro usado em eletrônicos. Baixa toxicidade, mas compostos podem ser irritantes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Europium"
  },
  {
    "id": 217,
    "nome": "Falcarindiol",
    "formula": "C17H24O2",
    "categoria": "Políino",
    "descricao": "Composto encontrado em cenouras, com propriedades antifúngicas e anti-inflamatórias.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Falcarindiol"
  },
  {
    "id": 218,
    "nome": "Fenilalanina",
    "formula": "C9H11NO2",
    "categoria": "Aminoácido",
    "descricao": "Aminoácido essencial, precursor de neurotransmissores como dopamina.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Phenylalanine"
  },
  {
    "id": 219,
    "nome": "Ferro",
    "formula": "Fe",
    "categoria": "Metal de transição",
    "descricao": "Metal essencial para hemoglobina, mas tóxico em excesso, causando danos hepáticos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Iron"
  },
  {
    "id": 220,
    "nome": "Fitoene",
    "formula": "C40H64",
    "categoria": "Carotenoide",
    "descricao": "Precursor de carotenoides, encontrado em tomates, com propriedades antioxidantes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Phytoene"
  },
  {
    "id": 221,
    "nome": "Fitoeno",
    "formula": "C40H64",
    "categoria": "Carotenoide",
    "descricao": "Variação ortográfica de fitoene, precursor de pigmentos vegetais.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Phytoene"
  },
  {
    "id": 222,
    "nome": "Fitoflueno",
    "formula": "C40H62",
    "categoria": "Carotenoide",
    "descricao": "Intermediário na biossíntese de carotenoides, presente em frutas e vegetais.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Phytofluene"
  },
  {
    "id": 223,
    "nome": "Fitomenadiona",
    "formula": "C31H46O2",
    "categoria": "Vitamina K",
    "descricao": "Vitamina K1, essencial para a coagulação sanguínea, encontrada em vegetais verdes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Phylloquinone"
  },
  {
    "id": 224,
    "nome": "Fitomenadiona (Vitamina K)",
    "formula": "C31H46O2",
    "categoria": "Vitamina K",
    "descricao": "Nome alternativo para fitomenadiona, importante para a saúde óssea e vascular.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Phylloquinone"
  },
  {
    "id": 225,
    "nome": "Fitomenadiona (Vitamina K1)",
    "formula": "C31H46O2",
    "categoria": "Vitamina K",
    "descricao": "Variação de nome para fitomenadiona, usada em suplementos e medicamentos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Phylloquinone"
  },
  {
    "id": 226,
    "nome": "Fitosterol",
    "formula": "C29H50O",
    "categoria": "Esterol",
    "descricao": "Classe de esteróis vegetais, como beta-sitosterol, que reduzem o colesterol.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Phytosterol"
  },
  {
    "id": 227,
    "nome": "Floglucinol",
    "formula": "C6H6O3",
    "categoria": "Fenólico",
    "descricao": "Composto usado em farmacologia e síntese química, presente em algas e plantas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Phloroglucinol"
  },
  {
    "id": 228,
    "nome": "Fluoreto",
    "formula": "F^-",
    "categoria": "Ânion inorgânico",
    "descricao": "Íon usado em odontologia. Tóxico em altas doses, causando fluorose.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Fluoride"
  },
  {
    "id": 229,
    "nome": "Flúor",
    "formula": "F2",
    "categoria": "Halogênio",
    "descricao": "Gás reativo, altamente tóxico por inalação, causa danos severos aos tecidos.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Fluorine"
  },
  {
    "id": 231,
    "nome": "Formato de nerila",
    "formula": "C11H18O2",
    "categoria": "Éster",
    "descricao": "Éster com odor floral, usado em fragrâncias e aromas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Neryl-formate"
  },
  {
    "id": 232,
    "nome": "Furaneol",
    "formula": "C6H8O3",
    "categoria": "Composto heterocíclico",
    "descricao": "Composto com odor de caramelo, usado em aromas alimentícios.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Furaneol"
  },
  {
    "id": 233,
    "nome": "Fósforo",
    "formula": "P",
    "categoria": "Não metal",
    "descricao": "Elemento essencial para ossos e DNA, mas formas como fósforo branco são tóxicas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Phosphorus"
  },
  {
    "id": 234,
    "nome": "Gadoleico",
    "formula": "C20H38O2",
    "categoria": "Ácido graxo",
    "descricao": "Ácido graxo monoinsaturado, encontrado em óleos de peixe e vegetais.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Gadoleic-acid"
  },
  {
    "id": 235,
    "nome": "Gadolínio",
    "formula": "Gd",
    "categoria": "Lantanídeo",
    "descricao": "Metal usado em imagens médicas. Baixa toxicidade, mas compostos podem ser irritantes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Gadolinium"
  },
  {
    "id": 236,
    "nome": "Feruloil glicose",
    "formula": "C16H20O9",
    "categoria": "Glicosídeo",
    "descricao": "Glicosídeo derivado do ácido ferúlico, encontrado em plantas, com propriedades antioxidantes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Feruloyl-glucose"
  },
  {
    "id": 237,
    "nome": "Gama-tocoferol",
    "formula": "C28H48O2",
    "categoria": "Vitamina E",
    "descricao": "Forma de vitamina E, com propriedades antioxidantes, encontrada em óleos vegetais.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Gamma-Tocopherol"
  },
  {
    "id": 238,
    "nome": "Geranial",
    "formula": "C10H16O",
    "categoria": "Monoterpeno",
    "descricao": "Aldeído terpênico com odor cítrico, componente do óleo de lemongrass.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Geranial"
  },
  {
    "id": 239,
    "nome": "Geranil isobutirato",
    "formula": "C14H24O2",
    "categoria": "Éster",
    "descricao": "Éster com odor floral, usado em perfumes e aromas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Geranyl-isobutyrate"
  },
  {
    "id": 240,
    "nome": "Geranilacetona",
    "formula": "C13H22O",
    "categoria": "Terpenoide",
    "descricao": "Cetona terpênica com odor floral, usada em fragrâncias.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Geranylacetone"
  },
  {
    "id": 241,
    "nome": "Geraniol",
    "formula": "C10H18O",
    "categoria": "Monoterpeno",
    "descricao": "Álcool terpênico com odor de rosa, usado em perfumes e repelentes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Geraniol"
  },
  {
    "id": 242,
    "nome": "Germânio",
    "formula": "Ge",
    "categoria": "Metalóide",
    "descricao": "Elemento usado em semicondutores. Baixa toxicidade, mas compostos orgânicos podem ser tóxicos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Germanium"
  },
  {
    "id": 243,
    "nome": "Glicina",
    "formula": "C2H5NO2",
    "categoria": "Aminoácido",
    "descricao": "Aminoácido não essencial, importante para a síntese de proteínas e neurotransmissores.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Glycine"
  },
  {
    "id": 244,
    "nome": "Glicose de feruloil",
    "formula": "C16H20O9",
    "categoria": "Glicosídeo",
    "descricao": "Glicosídeo derivado do ácido ferúlico, com propriedades antioxidantes, encontrado em plantas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Feruloyl-glucose"
  },
  {
    "id": 245,
    "nome": "Glucosídeo do ácido 4-hidroxibenzóico",
    "formula": "C13H16O8",
    "categoria": "Glicosídeo",
    "descricao": "Glicosídeo derivado do ácido 4-hidroxibenzóico, presente em plantas, com atividade antioxidante.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/4-Hydroxybenzoic-acid-glucoside"
  },
  {
    "id": 246,
    "nome": "Glutationa",
    "formula": "C10H17N3O6S",
    "categoria": "Tripéptido",
    "descricao": "Antioxidante celular, essencial para a desintoxicação e proteção contra estresse oxidativo.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Glutathione"
  },
  {
    "id": 247,
    "nome": "Grossamida",
    "formula": "C18H16N2O4",
    "categoria": "Amida fenólica",
    "descricao": "Composto fenólico encontrado em plantas, com propriedades antioxidantes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Grossamide"
  },
  {
    "id": 248,
    "nome": "Gálio",
    "formula": "Ga",
    "categoria": "Metal",
    "descricao": "Metal usado em semicondutores. Baixa toxicidade, mas pode ser irritante em compostos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Gallium"
  },
  {
    "id": 249,
    "nome": "Hentriacontano",
    "formula": "C31H64",
    "categoria": "Hidrocarboneto",
    "descricao": "Alcano de cadeia longa, encontrado em ceras vegetais, usado em cosméticos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Hentriacontane"
  },
  {
    "id": 250,
    "nome": "Heptanal",
    "formula": "C7H14O",
    "categoria": "Aldeído",
    "descricao": "Aldeído com odor frutado, usado em fragrâncias e aromas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Heptanal"
  },
  {
    "id": 251,
    "nome": "Hesperetina",
    "formula": "C16H14O6",
    "categoria": "Flavanona",
    "descricao": "Flavonoide encontrado em cítricos, com propriedades antioxidantes e anti-inflamatórias.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Hesperetin"
  },
  {
    "id": 252,
    "nome": "Hesperetina 7-neohesperidosídeo",
    "formula": "C28H34O15",
    "categoria": "Flavonoide",
    "descricao": "Glicosídeo de hesperetina, presente em laranjas, com atividade antioxidante.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Hesperetin-7-neohesperidoside"
  },
  {
    "id": 253,
    "nome": "Hesperidina",
    "formula": "C28H34O15",
    "categoria": "Flavonoide",
    "descricao": "Flavonoide comum em cítricos, com propriedades antioxidantes e vasoprotetoras.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Hesperidin"
  },
  {
    "id": 254,
    "nome": "Hexanal",
    "formula": "C6H12O",
    "categoria": "Aldeído",
    "descricao": "Aldeído com odor verde, usado em aromas alimentícios e fragrâncias.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Hexanal"
  },
  {
    "id": 255,
    "nome": "Hexanoato de etila",
    "formula": "C8H16O2",
    "categoria": "Éster",
    "descricao": "Éster com odor frutado, usado em aromas e perfumes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Ethyl-hexanoate"
  },
  {
    "id": 256,
    "nome": "Hidroquinona",
    "formula": "C6H6O2",
    "categoria": "Fenólico",
    "descricao": "Composto usado em cosméticos e fotografia. Tóxica, pode causar danos hepáticos e ser carcinogênica.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Hydroquinone"
  },
  {
    "id": 257,
    "nome": "Hiperina",
    "formula": "C21H20O12",
    "categoria": "Flavonoide",
    "descricao": "Glicosídeo de quercetina, encontrado em plantas como Hypericum, com propriedades antioxidantes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Hyperin"
  },
  {
    "id": 258,
    "nome": "Histamina",
    "formula": "C5H9N3",
    "categoria": "Amina biogênica",
    "descricao": "Composto envolvido em respostas alérgicas e regulação gástrica, presente em alimentos fermentados.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Histamine"
  },
  {
    "id": 259,
    "nome": "Homocapsaicina",
    "formula": "C19H29NO3",
    "categoria": "Capsaicinóide",
    "descricao": "Análogo da capsaicina, presente em pimentas, contribui para a picância.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Homocapsaicin"
  },
  {
    "id": 260,
    "nome": "Homodihidrocapsaicina",
    "formula": "C19H31NO3",
    "categoria": "Capsaicinóide",
    "descricao": "Derivado da dihidrocapsaicina, encontrado em pimentas, com propriedades picantes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Homodihydrocapsaicin"
  },
  {
    "id": 261,
    "nome": "Homoserina",
    "formula": "C4H9NO3",
    "categoria": "Aminoácido",
    "descricao": "Aminoácido não proteico, intermediário na biossíntese de metionina e treonina.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Homoserine"
  },
  {
    "id": 262,
    "nome": "Háfnio",
    "formula": "Hf",
    "categoria": "Metal de transição",
    "descricao": "Metal usado em reatores nucleares. Baixa toxicidade, mas poeira pode ser irritante.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Hafnium"
  },
  {
    "id": 263,
    "nome": "Iodo",
    "formula": "I2",
    "categoria": "Halogênio",
    "descricao": "Elemento essencial para a tireoide, mas tóxico em excesso, causando irritação e danos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Iodine"
  },
  {
    "id": 264,
    "nome": "Isoquercitrina",
    "formula": "C21H20O12",
    "categoria": "Flavonoide",
    "descricao": "Glicosídeo de quercetina, encontrado em frutas e vegetais, com propriedades antioxidantes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Isoquercitrin"
  },
  {
    "id": 265,
    "nome": "Isorhamnetina",
    "formula": "C16H12O7",
    "categoria": "Flavonoide",
    "descricao": "Flavonoide encontrado em cebolas e frutas, com propriedades antioxidantes e anti-inflamatórias.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Isorhamnetin"
  },
  {
    "id": 266,
    "nome": "Isovalerato de etila",
    "formula": "C7H14O2",
    "categoria": "Éster",
    "descricao": "Éster com odor frutado, usado em aromas alimentícios e fragrâncias.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Ethyl-isovalerate"
  },
  {
    "id": 267,
    "nome": "Itérbio",
    "formula": "Yb",
    "categoria": "Lantanídeo",
    "descricao": "Metal raro usado em lasers. Baixa toxicidade, mas compostos podem ser irritantes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Ytterbium"
  },
  {
    "id": 268,
    "nome": "Kaempferol",
    "formula": "C15H10O6",
    "categoria": "Flavonoide",
    "descricao": "Flavonoide encontrado em vegetais como brócolis, com propriedades antioxidantes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Kaempferol"
  },
  {
    "id": 269,
    "nome": "Kynurenina",
    "formula": "C10H12N2O3",
    "categoria": "Metabólito",
    "descricao": "Metabólito do triptofano, envolvido em processos neurológicos e imunológicos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Kynurenine"
  },
  {
    "id": 270,
    "nome": "L-Alanina",
    "formula": "C3H7NO2",
    "categoria": "Aminoácido",
    "descricao": "Aminoácido não essencial, componente de proteínas e peptídeos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/L-Alanine"
  },
  {
    "id": 271,
    "nome": "L-Arginina",
    "formula": "C6H14N4O2",
    "categoria": "Aminoácido",
    "descricao": "Aminoácido semi-essencial, precursor do óxido nítrico, importante para a função vascular.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/L-Arginine"
  },
  {
    "id": 272,
    "nome": "L-Asparagina",
    "formula": "C4H8N2O3",
    "categoria": "Aminoácido",
    "descricao": "Aminoácido não essencial, importante para a biossíntese de proteínas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/L-Asparagine"
  },
  {
    "id": 273,
    "nome": "L-Aspartato",
    "formula": "C4H7NO4",
    "categoria": "Aminoácido",
    "descricao": "Aminoácido não essencial, envolvido no ciclo da ureia e neurotransmissão.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/L-Aspartic-acid"
  },
  {
    "id": 274,
    "nome": "L-Cistina",
    "formula": "C6H12N2O4S2",
    "categoria": "Aminoácido",
    "descricao": "Aminoácido formado por duas cisteínas, essencial para a estrutura de proteínas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/L-Cystine"
  },
  {
    "id": 275,
    "nome": "L-Citrulina",
    "formula": "C6H13N3O3",
    "categoria": "Aminoácido",
    "descricao": "Aminoácido não proteico, envolvido no ciclo da ureia e produção de óxido nítrico.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/L-Citrulline"
  },
  {
    "id": 276,
    "nome": "L-DOPA",
    "formula": "C9H11NO4",
    "categoria": "Catecolamina",
    "descricao": "Precursor da dopamina, usado no tratamento de Parkinson.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/L-DOPA"
  },
  {
    "id": 277,
    "nome": "L-Glutamato",
    "formula": "C5H9NO4",
    "categoria": "Aminoácido",
    "descricao": "Aminoácido não essencial, neurotransmissor excitatório no sistema nervoso.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/L-Glutamate"
  },
  {
    "id": 278,
    "nome": "L-Glutâmico",
    "formula": "C5H9NO4",
    "categoria": "Aminoácido",
    "descricao": "Nome alternativo para L-glutamato, usado como intensificador de sabor.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/L-Glutamic-acid"
  },
  {
    "id": 279,
    "nome": "L-Histidina",
    "formula": "C6H9N3O2",
    "categoria": "Aminoácido",
    "descricao": "Aminoácido essencial, precursor da histamina, importante para o crescimento.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/L-Histidine"
  },
  {
    "id": 280,
    "nome": "L-Isoleucina",
    "formula": "C6H13NO2",
    "categoria": "Aminoácido",
    "descricao": "Aminoácido essencial de cadeia ramificada, essencial para a síntese proteica.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/L-Isoleucine"
  },
  {
    "id": 281,
    "nome": "L-Leucina",
    "formula": "C6H13NO2",
    "categoria": "Aminoácido",
    "descricao": "Aminoácido essencial de cadeia ramificada, importante para o crescimento muscular.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/L-Leucine"
  },
  {
    "id": 282,
    "nome": "L-Lisina",
    "formula": "C6H14N2O2",
    "categoria": "Aminoácido",
    "descricao": "Aminoácido essencial, importante para a formação de colágeno e enzimas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/L-Lysine"
  },
  {
    "id": 283,
    "nome": "L-Metionina",
    "formula": "C5H11NO2S",
    "categoria": "Aminoácido",
    "descricao": "Aminoácido essencial, precursor da cisteína e importante para o metabolismo.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/L-Methionine"
  },
  {
    "id": 284,
    "nome": "L-Prolina",
    "formula": "C5H9NO2",
    "categoria": "Aminoácido",
    "descricao": "Aminoácido não essencial, essencial para a estrutura do colágeno.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/L-Proline"
  },
  {
    "id": 285,
    "nome": "L-Serina",
    "formula": "C3H7NO3",
    "categoria": "Aminoácido",
    "descricao": "Aminoácido não essencial, importante para a biossíntese de proteínas e lipídios.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/L-Serine"
  },
  {
    "id": 286,
    "nome": "L-Tirosina",
    "formula": "C9H11NO3",
    "categoria": "Aminoácido",
    "descricao": "Aminoácido semi-essencial, precursor de catecolaminas como dopamina.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/L-Tyrosine"
  },
  {
    "id": 287,
    "nome": "L-Treonina",
    "formula": "C4H9NO3",
    "categoria": "Aminoácido",
    "descricao": "Aminoácido essencial, importante para a formação de mucinas e colágeno.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/L-Threonine"
  },
  {
    "id": 288,
    "nome": "L-Triptofano",
    "formula": "C11H12N2O2",
    "categoria": "Aminoácido",
    "descricao": "Aminoácido essencial, precursor da serotonina e melatonina.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/L-Tryptophan"
  },
  {
    "id": 289,
    "nome": "Lantânio",
    "formula": "La",
    "categoria": "Lantanídeo",
    "descricao": "Metal usado em catalisadores. Baixa toxicidade, mas pode ser irritante em compostos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Lanthanum"
  },
  {
    "id": 290,
    "nome": "Lariciresinol",
    "formula": "C20H24O6",
    "categoria": "Lignana",
    "descricao": "Lignana encontrada em sementes, com propriedades antioxidantes e anticancerígenas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Lariciresinol"
  },
  {
    "id": 291,
    "nome": "Leucina",
    "formula": "C6H13NO2",
    "categoria": "Aminoácido",
    "descricao": "Aminoácido essencial de cadeia ramificada, essencial para a síntese proteica.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Leucine"
  },
  {
    "id": 292,
    "nome": "Levoglutamida",
    "formula": "C5H10N2O3",
    "categoria": "Aminoácido",
    "descricao": "Também conhecida como L-glutamina, importante para o sistema imunológico e intestino.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/L-Glutamine"
  },
  {
    "id": 293,
    "nome": "Licopeno",
    "formula": "C40H56",
    "categoria": "Carotenoide",
    "descricao": "Pigmento vermelho encontrado em tomates, com propriedades antioxidantes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Lycopene"
  },
  {
    "id": 294,
    "nome": "Limoneno",
    "formula": "C10H16",
    "categoria": "Monoterpeno",
    "descricao": "Terpeno encontrado em cascas de cítricos, usado em fragrâncias e como solvente.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Limonene"
  },
  {
    "id": 295,
    "nome": "Linalol",
    "formula": "C10H18O",
    "categoria": "Monoterpeno",
    "descricao": "Álcool terpênico com odor floral, usado em perfumes e cosméticos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Linalool"
  },
  {
    "id": 296,
    "nome": "Luteolina",
    "formula": "C15H10O6",
    "categoria": "Flavonoide",
    "descricao": "Flavonoide encontrado em vegetais como aipo, com propriedades antioxidantes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Luteolin"
  },
  {
    "id": 297,
    "nome": "Luteolina 7-O-(2-apiosil-6-malonil)-glicosídeo",
    "formula": "C27H28O17",
    "categoria": "Flavonoide",
    "descricao": "Glicosídeo complexo de luteolina, encontrado em plantas, com atividade antioxidante.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Luteolin-7-O-(2-apiosyl-6-malonyl)-glucoside"
  },
  {
    "id": 298,
    "nome": "Luteolina 7-glicosídeo",
    "formula": "C21H20O11",
    "categoria": "Flavonoide",
    "descricao": "Glicosídeo de luteolina, presente em ervas, com propriedades anti-inflamatórias.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Luteolin-7-glucoside"
  },
  {
    "id": 299,
    "nome": "Luteolina 7-glucuronídeo",
    "formula": "C21H18O12",
    "categoria": "Flavonoide",
    "descricao": "Metabólito de luteolina, encontrado em plantas, com propriedades antioxidantes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Luteolin-7-glucuronide"
  },
  {
    "id": 300,
    "nome": "Luteína",
    "formula": "C40H56O2",
    "categoria": "Carotenoide",
    "descricao": "Pigmento encontrado em vegetais verdes, importante para a saúde ocular.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Lutein"
  },
  {
    "id": 301,
    "nome": "Lítio",
    "formula": "Li",
    "categoria": "Metal alcalino",
    "descricao": "Metal usado em baterias e medicamentos. Tóxico em doses elevadas, causando danos renais.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Lithium"
  },
  {
    "id": 302,
    "nome": "Magnésio",
    "formula": "Mg",
    "categoria": "Metal alcalino-terroso",
    "descricao": "Elemento essencial para enzimas e músculos, não tóxico em doses normais.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Magnesium"
  },
  {
    "id": 303,
    "nome": "Malato",
    "formula": "C4H6O5",
    "categoria": "Ácido orgânico",
    "descricao": "Ácido presente em frutas, envolvido no ciclo de Krebs, usado como suplemento.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Malic-acid"
  },
  {
    "id": 304,
    "nome": "Malonato de dimetila",
    "formula": "C5H8O4",
    "categoria": "Éster",
    "descricao": "Éster usado em síntese química, com baixa toxicidade em aplicações normais.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Dimethyl-malonate"
  },
  {
    "id": 305,
    "nome": "Maltose",
    "formula": "C12H22O11",
    "categoria": "Dissacarídeo",
    "descricao": "Açúcar formado por duas unidades de glicose, encontrado em cereais e usado como adoçante.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Maltose"
  },
  {
    "id": 306,
    "nome": "Manganês",
    "formula": "Mn",
    "categoria": "Metal de transição",
    "descricao": "Elemento essencial para enzimas, mas tóxico em excesso, causando danos neurológicos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Manganese"
  },
  {
    "id": 307,
    "nome": "Medioresinol",
    "formula": "C21H24O7",
    "categoria": "Lignana",
    "descricao": "Lignana encontrada em plantas, com propriedades antioxidantes e potenciais benefícios à saúde.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Medioresinol"
  },
  {
    "id": 308,
    "nome": "Mercúrio",
    "formula": "Hg",
    "categoria": "Metal pesado",
    "descricao": "Metal altamente tóxico, causa danos neurológicos, renais e é bioacumulativo.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Mercury"
  },
  {
    "id": 309,
    "nome": "Metanol",
    "formula": "CH3OH",
    "categoria": "Álcool",
    "descricao": "Álcool simples, altamente tóxico, causa cegueira e danos neurológicos graves.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Methanol"
  },
  {
    "id": 310,
    "nome": "Metil 3-metilbutanoato",
    "formula": "C6H12O2",
    "categoria": "Éster",
    "descricao": "Éster com odor frutado, usado em aromas alimentícios.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Methyl-3-methylbutanoate"
  },
  {
    "id": 311,
    "nome": "4-Hydroxy-2E-nonenal",
    "formula": "C9H16O2",
    "categoria": "Éster",
    "descricao": "Éster insaturado, usado em fragrâncias, com baixa toxicidade.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/4-Hydroxy-2E-nonenal"
  },
  {
    "id": 312,
    "nome": "Metil butirato",
    "formula": "C5H10O2",
    "categoria": "Éster",
    "descricao": "Éster com odor de maçã, usado em aromas e perfumes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Methyl-butyrate"
  },
  {
    "id": 313,
    "nome": "Metil-beta-hidroxibutirato",
    "formula": "C5H10O3",
    "categoria": "Éster",
    "descricao": "Composto metabólico, usado como suplemento para melhorar o desempenho muscular.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Methyl-beta-hydroxybutyrate"
  },
  {
    "id": 314,
    "nome": "Metil-beta-hidroxihexanoato",
    "formula": "C7H14O3",
    "categoria": "Éster",
    "descricao": "Éster usado em síntese química, com propriedades pouco documentadas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Methyl-beta-hydroxyhexanoate"
  },
  {
    "id": 315,
    "nome": "Metil 3 (metiltio)butanoato",
    "formula": "C6H12O2S",
    "categoria": "Éster",
    "descricao": "Éster com odor característico, usado em aromas, com baixa toxicidade.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Methyl-3-(methylthio)butanoate"
  },
  {
    "id": 316,
    "nome": "Metilamina",
    "formula": "CH5N",
    "categoria": "Amina",
    "descricao": "Amina primária com odor forte, usada em síntese química. Tóxica por inalação.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Methylamine"
  },
  {
    "id": 317,
    "nome": "Metilisocaproato",
    "formula": "C7H14O2",
    "categoria": "Éster",
    "descricao": "Éster com odor frutado, usado em fragrâncias e aromas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Methyl-isocaproate"
  },
  {
    "id": 318,
    "nome": "Metionina",
    "formula": "C5H11NO2S",
    "categoria": "Aminoácido",
    "descricao": "Aminoácido essencial, precursor da cisteína, importante para o metabolismo.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Methionine"
  },
  {
    "id": 319,
    "nome": "Metionina sulfóxido",
    "formula": "C5H11NO3S",
    "categoria": "Derivado de aminoácido",
    "descricao": "Produto de oxidação da metionina, presente em condições de estresse oxidativo.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Methionine-sulfoxide"
  },
  {
    "id": 320,
    "nome": "Mg2+",
    "formula": "Mg^2+",
    "categoria": "Cátion inorgânico",
    "descricao": "Íon magnésio, essencial para funções enzimáticas e musculares.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Magnesium-ion"
  },
  {
    "id": 321,
    "nome": "Mg²⁺",
    "formula": "Mg^2+",
    "categoria": "Cátion inorgânico",
    "descricao": "Notação alternativa para o íon magnésio, não tóxico em doses normais.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Magnesium-ion"
  },
  {
    "id": 322,
    "nome": "Mio-inositol",
    "formula": "C6H12O6",
    "categoria": "Cicloexanol",
    "descricao": "Composto presente em alimentos, importante para a sinalização celular.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Myo-inositol"
  },
  {
    "id": 323,
    "nome": "Miricetina",
    "formula": "C15H10O8",
    "categoria": "Flavonoide",
    "descricao": "Flavonoide encontrado em frutas como uvas, com propriedades antioxidantes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Myricetin"
  },
  {
    "id": 324,
    "nome": "Miristicina",
    "formula": "C11H12O3",
    "categoria": "Fenólico",
    "descricao": "Composto encontrado em noz-moscada, com propriedades psicoativas em altas doses.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Myristicin"
  },
  {
    "id": 325,
    "nome": "Molibdênio",
    "formula": "Mo",
    "categoria": "Metal de transição",
    "descricao": "Elemento essencial para enzimas, mas tóxico em excesso, causando danos metabólicos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Molybdenum"
  },
  {
    "id": 326,
    "nome": "Moupinamida",
    "formula": "C17H19NO3",
    "categoria": "Amida",
    "descricao": "Composto encontrado em plantas, com propriedades bioativas pouco estudadas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Moupinamide"
  },
  {
    "id": 327,
    "nome": "Mutatoxantina",
    "formula": "C40H56O3",
    "categoria": "Carotenoide",
    "descricao": "Carotenoide oxidado, encontrado em frutas, com propriedades antioxidantes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Mutatoxanthin"
  },
  {
    "id": 328,
    "nome": "Myricetina",
    "formula": "C15H10O8",
    "categoria": "Flavonoide",
    "descricao": "Variação ortográfica de miricetina, flavonoide com atividade antioxidante.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Myricetin"
  },
  {
    "id": 329,
    "nome": "N-Acetilorinitina",
    "formula": "C7H14N2O3",
    "categoria": "Derivado de aminoácido",
    "descricao": "Intermediário no metabolismo da arginina, encontrado em plantas e microrganismos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/N-Acetylornithine"
  },
  {
    "id": 330,
    "nome": "N-Metilanilina",
    "formula": "C7H9N",
    "categoria": "Amina aromática",
    "descricao": "Amina usada em síntese química. Tóxica, pode causar meta-hemoglobinemia.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/N-Methylaniline"
  },
  {
    "id": 331,
    "nome": "N-Metilbenzilamina",
    "formula": "C8H11N",
    "categoria": "Amina",
    "descricao": "Amina usada em síntese química. Irritante e potencialmente tóxica em altas doses.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/N-Methylbenzylamine"
  },
  {
    "id": 332,
    "nome": "N-Metilfenetilamina",
    "formula": "C9H13N",
    "categoria": "Amina",
    "descricao": "Amina com efeitos estimulantes. Tóxica em doses elevadas, pode afetar o sistema nervoso.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/N-Methylphenylethylamine"
  },
  {
    "id": 333,
    "nome": "N-cis-Feruloil-tiramina",
    "formula": "C18H19NO4",
    "categoria": "Amida fenólica",
    "descricao": "Composto fenólico encontrado em plantas, com propriedades antioxidantes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/N-cis-Feruloyltyramine"
  },
  {
    "id": 334,
    "nome": "N-trans-Feruloil-octopamina",
    "formula": "C18H19NO5",
    "categoria": "Amida fenólica",
    "descricao": "Derivado fenólico, presente em plantas, com potencial atividade antioxidante.",
    "toxico": false,
    "referencias": "https://foodb.ca/compounds/FDB010779"
  },
  {
    "id": 335,
    "nome": "N-trans-p-Coumaroil-octopamina",
    "formula": "C17H17NO4",
    "categoria": "Amida fenólica",
    "descricao": "Composto fenólico encontrado em plantas, com propriedades bioativas.",
    "toxico": false,
    "referencias": "https://foodb.ca/compounds/FDB010778"
  },
  {
    "id": 336,
    "nome": "NG,NG-Dimetil-L-arginina",
    "formula": "C8H18N4O2",
    "categoria": "Derivado de aminoácido",
    "descricao": "Metabólito da arginina, envolvido na regulação do óxido nítrico.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/NG-NG-Dimethyl-L-arginine"
  },
  {
    "id": 337,
    "nome": "Naringina",
    "formula": "C27H32O14",
    "categoria": "Flavonoide",
    "descricao": "Flavonoide encontrado em toranjas, com propriedades antioxidantes e amargas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Naringin"
  },
  {
    "id": 338,
    "nome": "Narirutina",
    "formula": "C27H32O14",
    "categoria": "Flavonoide",
    "descricao": "Glicosídeo de naringenina, presente em cítricos, com atividade antioxidante.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Narirutin"
  },
  {
    "id": 339,
    "nome": "Neodímio",
    "formula": "Nd",
    "categoria": "Lantanídeo",
    "descricao": "Metal usado em ímãs. Baixa toxicidade, mas compostos podem ser irritantes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Neodymium"
  },
  {
    "id": 340,
    "nome": "Neoxantina",
    "formula": "C40H56O4",
    "categoria": "Carotenoide",
    "descricao": "Carotenoide encontrado em vegetais verdes, importante para a fotossíntese.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Neoxanthin"
  },
  {
    "id": 341,
    "nome": "Neral",
    "formula": "C10H16O",
    "categoria": "Monoterpeno",
    "descricao": "Isômero do geranial, aldeído terpênico com odor cítrico, usado em fragrâncias.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Neral"
  },
  {
    "id": 342,
    "nome": "Niacina",
    "formula": "C6H5NO2",
    "categoria": "Vitamina B",
    "descricao": "Vitamina B3, essencial para o metabolismo energético, encontrada em carnes e cereais.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Niacin"
  },
  {
    "id": 343,
    "nome": "Nicotinamida",
    "formula": "C6H6N2O",
    "categoria": "Vitamina B",
    "descricao": "Forma de vitamina B3, usada em suplementos e cosméticos, essencial para NAD+.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Nicotinamide"
  },
  {
    "id": 344,
    "nome": "Nitrato",
    "formula": "NO3^-",
    "categoria": "Ânion inorgânico",
    "descricao": "Íon presente em fertilizantes e alimentos, não tóxico em doses normais.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Nitrate"
  },
  {
    "id": 345,
    "nome": "Nitrogênio",
    "formula": "N2",
    "categoria": "Gás inerte",
    "descricao": "Gás abundante na atmosfera, não tóxico, mas pode causar asfixia em ambientes fechados.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Nitrogen"
  },
  {
    "id": 346,
    "nome": "Nióbio",
    "formula": "Nb",
    "categoria": "Metal de transição",
    "descricao": "Metal usado em ligas. Baixa toxicidade, mas poeira pode ser irritante.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Niobium"
  },
  {
    "id": 347,
    "nome": "Nobiletina",
    "formula": "C21H22O8",
    "categoria": "Flavonoide",
    "descricao": "Flavonoide encontrado em cítricos, com propriedades antioxidantes e anti-inflamatórias.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Nobiletin"
  },
  {
    "id": 348,
    "nome": "Nonanal",
    "formula": "C9H18O",
    "categoria": "Aldeído",
    "descricao": "Aldeído com odor cítrico, usado em perfumes e aromas alimentícios.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Nonanal"
  },
  {
    "id": 349,
    "nome": "Nonivamida",
    "formula": "C17H27NO3",
    "categoria": "Capsaicinóide",
    "descricao": "Análogo sintético da capsaicina, usado em sprays de pimenta e medicamentos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Nonivamide"
  },
  {
    "id": 350,
    "nome": "Nootkatona",
    "formula": "C15H22O",
    "categoria": "Sesquiterpeno",
    "descricao": "Cetona terpênica encontrada em toranjas, usada em fragrâncias e repelentes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Nootkatone"
  },
  {
    "id": 351,
    "nome": "Nordentatina",
    "formula": "C19H20O4",
    "categoria": "Cumarina",
    "descricao": "Cumarina encontrada em plantas cítricas, com propriedades antioxidantes e potenciais efeitos farmacológicos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Nordentatin"
  },
  {
    "id": 352,
    "nome": "Nordihidrocapsaicina",
    "formula": "C18H29NO3",
    "categoria": "Capsaicinóide",
    "descricao": "Análogo da capsaicina, presente em pimentas, contribui para a sensação de picância.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Nordihydrocapsaicin"
  },
  {
    "id": 353,
    "nome": "Níquel",
    "formula": "Ni",
    "categoria": "Metal de transição",
    "descricao": "Metal usado em ligas e baterias. Tóxico, pode causar dermatite e é carcinogênico por inalação prolongada.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Nickel"
  },
  {
    "id": 354,
    "nome": "O-Acetilhomoserina",
    "formula": "C6H11NO4",
    "categoria": "Derivado de aminoácido",
    "descricao": "Intermediário na biossíntese de metionina, encontrado em plantas e microrganismos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/O-Acetylhomoserine"
  },
  {
    "id": 355,
    "nome": "Octanal",
    "formula": "C8H16O",
    "categoria": "Aldeído",
    "descricao": "Aldeído com odor cítrico, usado em fragrâncias e aromas alimentícios.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Octanal"
  },
  {
    "id": 356,
    "nome": "Octopamina",
    "formula": "C8H11NO2",
    "categoria": "Amina biogênica",
    "descricao": "Neurotransmissor em invertebrados, presente em plantas cítricas, com efeitos estimulantes em humanos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Octopamine"
  },
  {
    "id": 357,
    "nome": "Ornitina",
    "formula": "C5H12N2O2",
    "categoria": "Aminoácido",
    "descricao": "Aminoácido não proteico, envolvido no ciclo da ureia e na síntese de poliaminas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Ornithine"
  },
  {
    "id": 358,
    "nome": "Osthol",
    "formula": "C15H16O3",
    "categoria": "Cumarina",
    "descricao": "Cumarina encontrada em plantas como Cnidium, com propriedades anti-inflamatórias e vasodilatadoras.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Osthole"
  },
  {
    "id": 359,
    "nome": "Oxalato de cálcio",
    "formula": "CaC2O4",
    "categoria": "Sal orgânico",
    "descricao": "Composto presente em vegetais. Tóxico em doses altas, pode causar cálculos renais.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Calcium-oxalate"
  },
  {
    "id": 360,
    "nome": "Paládio",
    "formula": "Pd",
    "categoria": "Metal de transição",
    "descricao": "Metal usado em catalisadores. Compostos podem ser irritantes e tóxicos em exposições prolongadas.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Palladium"
  },
  {
    "id": 361,
    "nome": "Pantotenato",
    "formula": "C9H17NO5",
    "categoria": "Vitamina B",
    "descricao": "Vitamina B5, essencial para a síntese de coenzima A, encontrada em alimentos como carne e grãos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Pantothenic-acid"
  },
  {
    "id": 362,
    "nome": "Patuletina 3-(2''-apiosil-[2'''-feruloilgentiobiosídeo)",
    "formula": "C35H44O22",
    "categoria": "Flavonoide",
    "descricao": "Glicosídeo complexo de patuletina, encontrado em plantas, com propriedades antioxidantes.",
    "toxico": false,
    "referencias": "https://pubchemlite.lcsb.uni.lu/e/compound/102370511"
  },
  {
    "id": 363,
    "nome": "Patuletina 3-(2''-apiosilgentiobiosídeo)",
    "formula": "C32H38O20",
    "categoria": "Flavonoide",
    "descricao": "Glicosídeo de patuletina, presente em plantas, com atividade antioxidante.",
    "toxico": false,
    "referencias": "https://pubchemlite.lcsb.uni.lu/e/compound/90658401"
  },
  {
    "id": 364,
    "nome": "Pentilamina",
    "formula": "C5H13N",
    "categoria": "Amina",
    "descricao": "Amina alifática com odor forte, usada em síntese química. Irritante e tóxica por inalação.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Pentylamine"
  },
  {
    "id": 365,
    "nome": "Perillaldeído",
    "formula": "C10H14O",
    "categoria": "Monoterpeno",
    "descricao": "Aldeído terpênico encontrado em perilla, com odor herbáceo, usado em aromas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Perillaldehyde"
  },
  {
    "id": 366,
    "nome": "Phlorin",
    "formula": "C12H16O8",
    "categoria": "Glicosídeo",
    "descricao": "Glicosídeo derivado do floglicinol, encontrado em plantas, com propriedades antioxidantes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Phlorin"
  },
  {
    "id": 367,
    "nome": "Piperidina",
    "formula": "C5H11N",
    "categoria": "Amina cíclica",
    "descricao": "Amina usada em síntese química. Tóxica em doses altas, com efeitos neurológicos.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Piperidine"
  },
  {
    "id": 368,
    "nome": "Piridoxina",
    "formula": "C8H11NO3",
    "categoria": "Vitamina B",
    "descricao": "Vitamina B6, essencial para o metabolismo de aminoácidos, encontrada em cereais e carnes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Pyridoxine"
  },
  {
    "id": 369,
    "nome": "Piridoxina (Vitamina B6)",
    "formula": "C8H11NO3",
    "categoria": "Vitamina B",
    "descricao": "Nome alternativo para piridoxina, usada em suplementos e tratamentos neurológicos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Pyridoxine"
  },
  {
    "id": 370,
    "nome": "Platina",
    "formula": "Pt",
    "categoria": "Metal de transição",
    "descricao": "Metal usado em joias e catalisadores. Compostos como cisplatina são tóxicos.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Platinum"
  },
  {
    "id": 371,
    "nome": "Potássio",
    "formula": "K",
    "categoria": "Metal alcalino",
    "descricao": "Elemento essencial para funções celulares, não tóxico em doses normais.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Potassium"
  },
  {
    "id": 372,
    "nome": "Praseodímio",
    "formula": "Pr",
    "categoria": "Lantanídeo",
    "descricao": "Metal raro usado em ímãs. Baixa toxicidade, mas compostos podem ser irritantes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Praseodymium"
  },
  {
    "id": 373,
    "nome": "Prata",
    "formula": "Ag",
    "categoria": "Metal de transição",
    "descricao": "Metal usado em joias e medicina. Tóxica em doses altas, causa argiria.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Silver"
  },
  {
    "id": 374,
    "nome": "Procianidina B2",
    "formula": "C30H26O12",
    "categoria": "Flavonoide",
    "descricao": "Proantocianidina encontrada em uvas e cacau, com propriedades antioxidantes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Procyanidin-B2"
  },
  {
    "id": 375,
    "nome": "Prodelphinidina B3",
    "formula": "C30H26O14",
    "categoria": "Flavonoide",
    "descricao": "Proantocianidina encontrada em frutas, com atividade antioxidante e benefícios cardiovasculares.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Prodelphinidin-B3"
  },
  {
    "id": 376,
    "nome": "Prolina",
    "formula": "C5H9NO2",
    "categoria": "Aminoácido",
    "descricao": "Aminoácido não essencial, essencial para a estrutura do colágeno.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Proline"
  },
  {
    "id": 377,
    "nome": "Propanoato de etil 3-(metiltio)",
    "formula": "C6H12O2S",
    "categoria": "Éster",
    "descricao": "Éster com odor característico, usado em aromas alimentícios, com baixa toxicidade.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Ethyl-3-methylthiopropionate"
  },
  {
    "id": 378,
    "nome": "Prostaglandina A-1",
    "formula": "C20H32O4",
    "categoria": "Eicosanóide",
    "descricao": "Lipídio bioativo envolvido em processos inflamatórios e regulação vascular.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Prostaglandin-A1"
  },
  {
    "id": 379,
    "nome": "Putrescina",
    "formula": "C4H12N2",
    "categoria": "Poliamina",
    "descricao": "Amina biogênica associada ao crescimento celular. Tóxica em altas doses.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Putrescine"
  },
  {
    "id": 380,
    "nome": "Quercetina",
    "formula": "C15H10O7",
    "categoria": "Flavonoide",
    "descricao": "Flavonoide encontrado em cebolas e maçãs, com propriedades antioxidantes e anti-inflamatórias.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Quercetin"
  },
  {
    "id": 381,
    "nome": "Quercetina 3-(6''-malonilglicosídeo)",
    "formula": "C24H22O14",
    "categoria": "Flavonoide",
    "descricao": "Glicosídeo de quercetina, presente em plantas, com atividade antioxidante.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Quercetin-3-malonylglucoside"
  },
  {
    "id": 382,
    "nome": "Quercetina 3-O-(6''-malonil-glicosídeo) 7-O-glicosídeo",
    "formula": "C30H32O19",
    "categoria": "Flavonoide",
    "descricao": "Glicosídeo complexo de quercetina, encontrado em plantas, com propriedades antioxidantes.",
    "toxico": false,
    "referencias": "https://foodb.ca/compounds/FDB007995"
  },
  {
    "id": 383,
    "nome": "Quercetina 3-O-malonilglicosídeo",
    "formula": "C24H22O14",
    "categoria": "Flavonoide",
    "descricao": "Variação do glicosídeo de quercetina, com atividade antioxidante, presente em vegetais.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Quercetin-3-malonylglucoside"
  },
  {
    "id": 384,
    "nome": "Quercetina 3-ramnosídeo",
    "formula": "C21H20O11",
    "categoria": "Flavonoide",
    "descricao": "Glicosídeo de quercetina, também conhecido como quercitrina, com propriedades antioxidantes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Quercetin-3-rhamnoside"
  },
  {
    "id": 385,
    "nome": "Quercetina 3-rutinosídeo",
    "formula": "C27H30O16",
    "categoria": "Flavonoide",
    "descricao": "Também conhecida como rutina, flavonoide com propriedades antioxidantes e vasoprotetoras.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Rutin"
  },
  {
    "id": 386,
    "nome": "Quercetina 4'-glucosídeo",
    "formula": "C21H20O12",
    "categoria": "Flavonoide",
    "descricao": "Glicosídeo de quercetina, presente em plantas, com atividade antioxidante.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Quercetin-4-glucoside"
  },
  {
    "id": 387,
    "nome": "Quercetrina",
    "formula": "C21H20O11",
    "categoria": "Flavonoide",
    "descricao": "Nome alternativo para quercetina 3-ramnosídeo, com propriedades antioxidantes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Quercitrin"
  },
  {
    "id": 388,
    "nome": "Quercitrina",
    "formula": "C21H20O11",
    "categoria": "Flavonoide",
    "descricao": "Variação ortográfica de quercetrina, flavonoide com atividade antioxidante.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Quercitrin"
  },
  {
    "id": 389,
    "nome": "Racemetionina",
    "formula": "C5H11NO2S",
    "categoria": "Aminoácido",
    "descricao": "Mistura racêmica de metionina, usada como suplemento nutricional.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/DL-Methionine"
  },
  {
    "id": 390,
    "nome": "Rafinose",
    "formula": "C18H32O16",
    "categoria": "Oligossacarídeo",
    "descricao": "Carboidrato presente em leguminosas, atua como prebiótico no intestino.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Raffinose"
  },
  {
    "id": 391,
    "nome": "Retinol",
    "formula": "C20H30O",
    "categoria": "Vitamina A",
    "descricao": "Vitamina A, essencial para visão e imunidade. Tóxica em doses altas, causando hipervitaminose.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Retinol"
  },
  {
    "id": 392,
    "nome": "Retinol (Vitamina A)",
    "formula": "C20H30O",
    "categoria": "Vitamina A",
    "descricao": "Nome alternativo para retinol, usada em suplementos. Tóxica em excesso.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Retinol"
  },
  {
    "id": 393,
    "nome": "Riboflavina",
    "formula": "C17H20N4O6",
    "categoria": "Vitamina B",
    "descricao": "Vitamina B2, essencial para o metabolismo energético, encontrada em laticínios e cereais.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Riboflavin"
  },
  {
    "id": 394,
    "nome": "Riboflavina (Vitamina B2)",
    "formula": "C17H20N4O6",
    "categoria": "Vitamina B",
    "descricao": "Nome alternativo para riboflavina, usada em suplementos e fortificação de alimentos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Riboflavin"
  },
  {
    "id": 395,
    "nome": "Rishitonina",
    "formula": "C20H26O4",
    "categoria": "Diterpenoide",
    "descricao": "Diterpenoide encontrado em plantas, com propriedades bioativas pouco estudadas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Rishitinone"
  },
  {
    "id": 396,
    "nome": "Rubber, natural-smoked sheet",
    "formula": "(C5H8)n",
    "categoria": "Polímero natural",
    "descricao": "Borracha natural processada, usada em pneus e produtos industriais. Não tóxica em uso comum.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Natural-rubber"
  },
  {
    "id": 397,
    "nome": "Rubídio",
    "formula": "Rb",
    "categoria": "Metal alcalino",
    "descricao": "Metal com propriedades químicas similares ao potássio. Tóxico em doses altas, substitui potássio em células.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Rubidium"
  },
  {
    "id": 398,
    "nome": "Rutênio",
    "formula": "Ru",
    "categoria": "Metal de transição",
    "descricao": "Metal usado em catalisadores. Baixa toxicidade, mas compostos podem ser irritantes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Ruthenium"
  },
  {
    "id": 399,
    "nome": "S-beta-Bisaboleno",
    "formula": "C15H24",
    "categoria": "Sesquiterpeno",
    "descricao": "Terpeno encontrado em óleos essenciais, com odor balsâmico, usado em fragrâncias.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Beta-Bisabolene"
  },
  {
    "id": 400,
    "nome": "Sacarose",
    "formula": "C12H22O11",
    "categoria": "Dissacarídeo",
    "descricao": "Açúcar de mesa, encontrado em cana-de-açúcar e beterraba, usado como adoçante.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Sucrose"
  },
  {
    "id": 401,
    "nome": "Samário",
    "formula": "Sm",
    "categoria": "Lantanídeo",
    "descricao": "Metal raro usado em ímãs. Baixa toxicidade, mas compostos podem ser irritantes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Samarium"
  },
  {
    "id": 402,
    "nome": "Secoisolariciresinol",
    "formula": "C20H26O6",
    "categoria": "Lignana",
    "descricao": "Lignana encontrada em sementes de linhaça, com propriedades antioxidantes e estrogênicas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Secoisolariciresinol"
  },
  {
    "id": 403,
    "nome": "Selênio",
    "formula": "Se",
    "categoria": "Metalóide",
    "descricao": "Elemento essencial em traços, mas tóxico em doses altas, causando selenose.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Selenium"
  },
  {
    "id": 404,
    "nome": "Serotonina",
    "formula": "C10H12N2O",
    "categoria": "Neurotransmissor",
    "descricao": "Neurotransmissor envolvido na regulação do humor e sono, presente em alimentos como bananas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Serotonin"
  },
  {
    "id": 405,
    "nome": "Silício",
    "formula": "Si",
    "categoria": "Metalóide",
    "descricao": "Elemento abundante usado em semicondutores. Não tóxico em formas inertes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Silicon"
  },
  {
    "id": 406,
    "nome": "Silício (Silicon)",
    "formula": "Si",
    "categoria": "Metalóide",
    "descricao": "Nome alternativo para silício, usado em eletrônicos e materiais de construção.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Silicon"
  },
  {
    "id": 407,
    "nome": "Sinensetina",
    "formula": "C20H20O7",
    "categoria": "Flavonoide",
    "descricao": "Flavonoide encontrado em cítricos, com propriedades antioxidantes e anti-inflamatórias.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Sinensetin"
  },
  {
    "id": 408,
    "nome": "Solanidina",
    "formula": "C27H43NO",
    "categoria": "Alcaloide",
    "descricao": "Alcaloide presente em batatas, precursor de glicoalcaloides, com baixa toxicidade em doses normais.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Solanidine"
  },
  {
    "id": 409,
    "nome": "Solanolona",
    "formula": "C15H22O",
    "categoria": "Sesquiterpeno",
    "descricao": "Sesquiterpeno encontrado em plantas, com propriedades bioativas pouco documentadas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Solanolone"
  },
  {
    "id": 410,
    "nome": "Solavetivona",
    "formula": "C15H22O",
    "categoria": "Sesquiterpeno",
    "descricao": "Sesquiterpeno presente em plantas, com potencial atividade antifúngica.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Solavetivone"
  },
  {
    "id": 411,
    "nome": "Spinacetina 3-(2''-apiosilgentiobiosídeo)",
    "formula": "C32H38O20",
    "categoria": "Flavonoide",
    "descricao": "Glicosídeo de spinacetina, encontrado em espinafre, com propriedades antioxidantes.",
    "toxico": false,
    "referencias": "https://foodb.ca/compounds/FDB021357"
  },
  {
    "id": 412,
    "nome": "Spinacetina 3-[feruloil-(→2)-glicosil-(1→6)-[apiosil-(1→2)]-glicosídeo",
    "formula": "C35H44O22",
    "categoria": "Flavonoide",
    "descricao": "Glicosídeo complexo de spinacetina, com atividade antioxidante, presente em plantas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/101673968"
  },
  {
    "id": 413,
    "nome": "Spinacetina 3-[p-coumaroil-(→2)-glicosil-(1→6)-[apiosil-(1→2)]-glicosídeo",
    "formula": "C34H42O21",
    "categoria": "Flavonoide",
    "descricao": "Glicosídeo de spinacetina, encontrado em plantas, com propriedades antioxidantes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/5481665"
  },
  {
    "id": 414,
    "nome": "Spinacetina 3-gentiobiosídeo",
    "formula": "C29H34O18",
    "categoria": "Flavonoide",
    "descricao": "Glicosídeo de spinacetina, presente em vegetais, com atividade antioxidante.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Spinacetin-3-gentiobioside"
  },
  {
    "id": 415,
    "nome": "Subafilina",
    "formula": "C15H16O5",
    "categoria": "Cumarina",
    "descricao": "Cumarina encontrada em plantas, com propriedades bioativas pouco estudadas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Subaphyllin"
  },
  {
    "id": 416,
    "nome": "Sódio",
    "formula": "Na",
    "categoria": "Metal alcalino",
    "descricao": "Elemento essencial para funções celulares, não tóxico em doses normais.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Sodium"
  },
  {
    "id": 417,
    "nome": "Tangeritina",
    "formula": "C20H20O7",
    "categoria": "Flavonoide",
    "descricao": "Flavonoide encontrado em tangerinas, com propriedades antioxidantes e anticancerígenas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Tangeretin"
  },
  {
    "id": 418,
    "nome": "Tanino chinês",
    "formula": "C76H52O46",
    "categoria": "Tanino",
    "descricao": "Tanino hidrolisável, também conhecido como ácido tânico, usado em medicamentos e curtimento.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Tannic-acid"
  },
  {
    "id": 419,
    "nome": "Tannino chinês",
    "formula": "C76H52O46",
    "categoria": "Tanino",
    "descricao": "Variação ortográfica de tanino chinês, com propriedades adstringentes e antioxidantes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Tannic-acid"
  },
  {
    "id": 420,
    "nome": "Taurina",
    "formula": "C2H7NO3S",
    "categoria": "Aminoácido",
    "descricao": "Aminoácido não proteico, essencial para funções cardiovasculares e neurológicas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Taurine"
  },
  {
    "id": 421,
    "nome": "Telúrio",
    "formula": "Te",
    "categoria": "Metalóide",
    "descricao": "Metalóide tóxico, causa danos neurológicos e hepáticos, com odor forte em compostos.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Tellurium"
  },
  {
    "id": 422,
    "nome": "Terpinoleno",
    "formula": "C10H16",
    "categoria": "Monoterpeno",
    "descricao": "Terpeno encontrado em óleos essenciais, com odor herbal, usado em fragrâncias.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Terpinolene"
  },
  {
    "id": 423,
    "nome": "Tetradecanal",
    "formula": "C14H28O",
    "categoria": "Aldeído",
    "descricao": "Aldeído de cadeia longa, usado em fragrâncias, com baixa toxicidade.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Tetradecanal"
  },
  {
    "id": 424,
    "nome": "Tetrametilscutelareína",
    "formula": "C19H18O6",
    "categoria": "Flavonoide",
    "descricao": "Flavonoide encontrado em plantas como Scutellaria, com propriedades antioxidantes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Tetramethylscutellarein"
  },
  {
    "id": 425,
    "nome": "Tiamina",
    "formula": "C12H17N4OS",
    "categoria": "Vitamina B",
    "descricao": "Vitamina B1, essencial para o metabolismo de carboidratos, encontrada em cereais e carnes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Thiamine"
  },
  {
    "id": 426,
    "nome": "Tiamina (Vitamina B1)",
    "formula": "C12H17N4OS",
    "categoria": "Vitamina B",
    "descricao": "Nome alternativo para tiamina, usada em suplementos e fortificação de alimentos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Thiamine"
  },
  {
    "id": 427,
    "nome": "Tiramina",
    "formula": "C8H11NO",
    "categoria": "Amina biogênica",
    "descricao": "Amina presente em alimentos fermentados, pode causar hipertensão em doses altas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Tyramine"
  },
  {
    "id": 428,
    "nome": "Titânio",
    "formula": "Ti",
    "categoria": "Metal de transição",
    "descricao": "Metal usado em implantes e ligas. Baixa toxicidade, mas poeira pode ser irritante.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Titanium"
  },
  {
    "id": 429,
    "nome": "Trigonelina",
    "formula": "C7H7NO2",
    "categoria": "Alcaloide",
    "descricao": "Alcaloide encontrado em café, com propriedades antioxidantes e hipoglicemiantes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Trigonelline"
  },
  {
    "id": 430,
    "nome": "Triptofano",
    "formula": "C11H12N2O2",
    "categoria": "Aminoácido",
    "descricao": "Aminoácido essencial, precursor da serotonina e melatonina.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Tryptophan"
  },
  {
    "id": 431,
    "nome": "Tryptophan",
    "formula": "C11H12N2O2",
    "categoria": "Aminoácido",
    "descricao": "Variação ortográfica de triptofano, essencial para a síntese de proteínas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Tryptophan"
  },
  {
    "id": 432,
    "nome": "Tungstênio",
    "formula": "W",
    "categoria": "Metal de transição",
    "descricao": "Metal usado em ligas e filamentos. Baixa toxicidade, mas compostos podem ser irritantes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Tungsten"
  },
  {
    "id": 433,
    "nome": "Tálio",
    "formula": "Tl",
    "categoria": "Metal pesado",
    "descricao": "Metal altamente tóxico, causa neuropatia, alopécia e danos sistêmicos graves.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Thallium"
  },
  {
    "id": 434,
    "nome": "Tântalo",
    "formula": "Ta",
    "categoria": "Metal de transição",
    "descricao": "Metal usado em implantes e eletrônicos. Baixa toxicidade, mas poeira pode ser irritante.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Tantalum"
  },
  {
    "id": 435,
    "nome": "Urânio",
    "formula": "U",
    "categoria": "Actinídeo",
    "descricao": "Metal radioativo, tóxico e carcinogênico, causa danos renais e bioacumulação.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Uranium"
  },
  {
    "id": 436,
    "nome": "Valenceno",
    "formula": "C15H24",
    "categoria": "Sesquiterpeno",
    "descricao": "Terpeno encontrado em laranjas, com odor cítrico, usado em fragrâncias.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Valencene"
  },
  {
    "id": 437,
    "nome": "Valenciaxantina",
    "formula": "C40H56O4",
    "categoria": "Carotenoide",
    "descricao": "Carotenoide presente em frutas cítricas, com propriedades antioxidantes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Valenciaxanthin"
  },
  {
    "id": 438,
    "nome": "Valina",
    "formula": "C5H11NO2",
    "categoria": "Aminoácido",
    "descricao": "Aminoácido essencial de cadeia ramificada, importante para o crescimento muscular.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Valine"
  },
  {
    "id": 439,
    "nome": "Vanádio",
    "formula": "V",
    "categoria": "Metal de transição",
    "descricao": "Elemento essencial em traços, mas tóxico em doses altas, causando danos pulmonares.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Vanadium"
  },
  {
    "id": 440,
    "nome": "Verbascose",
    "formula": "C30H52O26",
    "categoria": "Oligossacarídeo",
    "descricao": "Carboidrato presente em sementes, atua como prebiótico, com baixa toxicidade.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Verbascose"
  },
  {
    "id": 441,
    "nome": "Vicenina 2",
    "formula": "C27H30O15",
    "categoria": "Flavonoide",
    "descricao": "Flavonoide C-glicosídico, encontrado em plantas como manjericão, com propriedades antioxidantes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Vicenin-2"
  },
  {
    "id": 442,
    "nome": "Violaxantina",
    "formula": "C40H56O4",
    "categoria": "Carotenoide",
    "descricao": "Carotenoide encontrado em vegetais verdes, importante para a fotossíntese e saúde ocular.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Violaxanthin"
  },
  {
    "id": 443,
    "nome": "Vitamina K1 epóxido-1,4-diol",
    "formula": "C31H46O4",
    "categoria": "Derivado de vitamina K",
    "descricao": "Metabólito da vitamina K1, envolvido no ciclo de coagulação sanguínea.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/9805290"
  },
  {
    "id": 444,
    "nome": "Xantiletina",
    "formula": "C14H14O3",
    "categoria": "Cumarina",
    "descricao": "Cumarina encontrada em plantas, com propriedades bioativas pouco documentadas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Xanthyletin"
  },
  {
    "id": 445,
    "nome": "Xantoxiletina",
    "formula": "C14H14O3",
    "categoria": "Cumarina",
    "descricao": "Variação ortográfica de xantiletina, presente em plantas como Zanthoxylum, com atividade antioxidante.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Xanthyletin"
  },
  {
    "id": 446,
    "nome": "Zeaxantina",
    "formula": "C40H56O2",
    "categoria": "Carotenoide",
    "descricao": "Carotenoide presente em milho e vegetais, essencial para a saúde ocular.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Zeaxanthin"
  },
  {
    "id": 447,
    "nome": "Zinco",
    "formula": "Zn",
    "categoria": "Metal de transição",
    "descricao": "Elemento essencial para enzimas e imunidade, não tóxico em doses normais.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Zinc"
  },
  {
    "id": 448,
    "nome": "Zircônio",
    "formula": "Zr",
    "categoria": "Metal de transição",
    "descricao": "Metal usado em implantes e reatores. Baixa toxicidade, mas poeira pode ser irritante.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Zirconium"
  },
  {
    "id": 449,
    "nome": "alfa-Bergamoteno",
    "formula": "C15H24",
    "categoria": "Sesquiterpeno",
    "descricao": "Terpeno encontrado em óleos cítricos, com odor amadeirado, usado em fragrâncias.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Alpha-Bergamotene"
  },
  {
    "id": 450,
    "nome": "alfa-Sinensal",
    "formula": "C15H22O",
    "categoria": "Sesquiterpeno",
    "descricao": "Aldeído terpênico encontrado em laranjas, com odor cítrico, usado em aromas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Alpha-Sinensal"
  },
  {
    "id": 451,
    "nome": "alfa-Terpineol",
    "formula": "C10H18O",
    "categoria": "Monoterpeno",
    "descricao": "Álcool terpênico com odor floral, encontrado em óleos essenciais, usado em fragrâncias e cosméticos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Alpha-Terpineol"
  },
  {
    "id": 452,
    "nome": "beta-Cariofileno",
    "formula": "C15H24",
    "categoria": "Sesquiterpeno",
    "descricao": "Terpeno encontrado em cravo e pimenta, com propriedades anti-inflamatórias e analgésicas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Beta-Caryophyllene"
  },
  {
    "id": 453,
    "nome": "beta-Cubebene",
    "formula": "C15H24",
    "categoria": "Sesquiterpeno",
    "descricao": "Sesquiterpeno presente em óleos essenciais, com odor amadeirado, usado em aromaterapia.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Beta-Cubebene"
  },
  {
    "id": 454,
    "nome": "beta-D-Glucopiranosídeo",
    "formula": "C6H12O6",
    "categoria": "Glicosídeo",
    "descricao": "Unidade básica de glicosídeos, derivada da glicose, presente em muitos compostos naturais.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Beta-D-Glucopyranoside"
  },
  {
    "id": 455,
    "nome": "beta-Elemene",
    "formula": "C15H24",
    "categoria": "Sesquiterpeno",
    "descricao": "Terpeno encontrado em plantas medicinais, com potencial atividade anticancerígena.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Beta-Elemene"
  },
  {
    "id": 456,
    "nome": "beta-Felandreno",
    "formula": "C10H16",
    "categoria": "Monoterpeno",
    "descricao": "Terpeno com odor herbal, presente em óleos essenciais de eucalipto e manjericão.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Beta-Phellandrene"
  },
  {
    "id": 457,
    "nome": "beta-Ionona",
    "formula": "C13H20O",
    "categoria": "Cetonoterpeno",
    "descricao": "Composto com odor floral, usado em perfumes e como precursor de vitamina A.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Beta-Ionone"
  },
  {
    "id": 458,
    "nome": "beta-Pineno",
    "formula": "C10H16",
    "categoria": "Monoterpeno",
    "descricao": "Terpeno com odor de pinho, encontrado em resinas de coníferas, usado em fragrâncias.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Beta-Pinene"
  },
  {
    "id": 459,
    "nome": "beta-Selineno",
    "formula": "C15H24",
    "categoria": "Sesquiterpeno",
    "descricao": "Sesquiterpeno presente em óleos essenciais, com odor amadeirado, usado em aromaterapia.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Beta-Selinene"
  },
  {
    "id": 460,
    "nome": "beta-Sinensal",
    "formula": "C15H22O",
    "categoria": "Sesquiterpeno",
    "descricao": "Aldeído terpênico encontrado em laranjas, com odor cítrico, usado em aromas alimentícios.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Beta-Sinensal"
  },
  {
    "id": 461,
    "nome": "cis-4-Hidroxiprolina",
    "formula": "C5H9NO3",
    "categoria": "Aminoácido",
    "descricao": "Derivado da prolina, encontrado no colágeno, usado em suplementos para saúde articular.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/cis-4-Hydroxyproline"
  },
  {
    "id": 462,
    "nome": "d-Tocoferol",
    "formula": "C27H46O2",
    "categoria": "Vitamina E",
    "descricao": "Forma de vitamina E, antioxidante, presente em óleos vegetais, com menor atividade biológica.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Delta-Tocopherol"
  },
  {
    "id": 463,
    "nome": "d-Tocoferol (Vitamina E)",
    "formula": "C27H46O2",
    "categoria": "Vitamina E",
    "descricao": "Nome alternativo para delta-tocoferol, usado em suplementos antioxidantes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Delta-Tocopherol"
  },
  {
    "id": 464,
    "nome": "gama-Muuroleno",
    "formula": "C15H24",
    "categoria": "Sesquiterpeno",
    "descricao": "Terpeno presente em óleos essenciais, com propriedades anti-inflamatórias e aromáticas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Gamma-Muurolene"
  },
  {
    "id": 465,
    "nome": "gama-Terpinene",
    "formula": "C10H16",
    "categoria": "Monoterpeno",
    "descricao": "Terpeno com odor cítrico, encontrado em óleos essenciais, usado em fragrâncias.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Gamma-Terpinene"
  },
  {
    "id": 466,
    "nome": "gama-Terpineno",
    "formula": "C10H16",
    "categoria": "Monoterpeno",
    "descricao": "Variação ortográfica de gama-terpinene, presente em óleos de cítricos e especiarias.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Gamma-Terpinene"
  },
  {
    "id": 467,
    "nome": "gama-Tocoferol (Vitamina E)",
    "formula": "C28H48O2",
    "categoria": "Vitamina E",
    "descricao": "Forma de vitamina E, antioxidante, encontrada em óleos vegetais como soja e milho.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Gamma-Tocopherol"
  },
  {
    "id": 468,
    "nome": "p-Aminobenzaldeído",
    "formula": "C7H7NO",
    "categoria": "Aldeído aromático",
    "descricao": "Composto usado em síntese química, irritante para pele e vias respiratórias, potencialmente tóxico.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/p-Aminobenzaldehyde"
  },
  {
    "id": 469,
    "nome": "p-Ment-1-en-4-ol",
    "formula": "C10H18O",
    "categoria": "Monoterpeno",
    "descricao": "Também conhecido como terpinen-4-ol, com odor herbal, usado em óleos essenciais.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Terpinen-4-ol"
  },
  {
    "id": 470,
    "nome": "p-Mentha-1-en-4-ol",
    "formula": "C10H18O",
    "categoria": "Monoterpeno",
    "descricao": "Sinônimo de terpinen-4-ol, presente em óleo de melaleuca, com propriedades antimicrobianas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Terpinen-4-ol"
  },
  {
    "id": 471,
    "nome": "trans-Isoasarona",
    "formula": "C12H16O3",
    "categoria": "Fenilpropanoide",
    "descricao": "Composto com odor doce, encontrado em plantas. Tóxico em doses altas, com potencial carcinogenicidade.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Trans-Isoasarone"
  },
  {
    "id": 472,
    "nome": "trans-Ácido sinápico",
    "formula": "C11H12O5",
    "categoria": "Ácido fenólico",
    "descricao": "Ácido fenólico encontrado em plantas, com propriedades antioxidantes e anti-inflamatórias.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Trans-Sinapic-Acid"
  },
  {
    "id": 473,
    "nome": "Ácido (Z,Z)-9,12-Octadecadienoico",
    "formula": "C18H32O2",
    "categoria": "Ácido graxo",
    "descricao": "Sinônimo de ácido linoleico, ômega-6 essencial, presente em óleos vegetais.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Linoleic-Acid"
  },
  {
    "id": 474,
    "nome": "Ácido (Z,Z)-9,12-Octadecadienoico (ácido linoleico)",
    "formula": "C18H32O2",
    "categoria": "Ácido graxo",
    "descricao": "Ácido graxo poli-insaturado, essencial para saúde cardiovascular, encontrado em óleos de soja e girassol.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Linoleic-Acid"
  },
  {
    "id": 475,
    "nome": "Ácido 2,3-dihidroxibenzoico",
    "formula": "C7H6O4",
    "categoria": "Ácido fenólico",
    "descricao": "Derivado do ácido benzoico, encontrado em plantas, com propriedades antioxidantes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/2,3-Dihydroxybenzoic-Acid"
  },
  {
    "id": 476,
    "nome": "Ácido 2,3-dihidroxibenzóico",
    "formula": "C7H6O4",
    "categoria": "Ácido fenólico",
    "descricao": "Variação ortográfica de ácido 2,3-dihidroxibenzoico, presente em plantas medicinais.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/2,3-Dihydroxybenzoic-Acid"
  },
  {
    "id": 477,
    "nome": "Ácido 2,4,6-trihidroxibenzóico",
    "formula": "C7H6O5",
    "categoria": "Ácido fenólico",
    "descricao": "Ácido fenólico raro, encontrado em plantas, com atividade antioxidante.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/2,4,6-Trihydroxybenzoic-Acid"
  },
  {
    "id": 478,
    "nome": "Ácido 3-feruloilquínico",
    "formula": "C17H20O9",
    "categoria": "Ácido fenólico",
    "descricao": "Éster de ácido quínico e ferúlico, presente em café, com propriedades antioxidantes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/3-Feruloylquinic-Acid"
  },
  {
    "id": 479,
    "nome": "Ácido 4-aminobenzoico",
    "formula": "C7H7NO2",
    "categoria": "Ácido aromático",
    "descricao": "Também conhecido como PABA, usado em protetores solares e suplementos vitamínicos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/4-Aminobenzoic-Acid"
  },
  {
    "id": 480,
    "nome": "Ácido 4-aminobutírico",
    "formula": "C4H9NO2",
    "categoria": "Aminoácido",
    "descricao": "Também chamado GABA, neurotransmissor inibitório, encontrado em plantas e suplementos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Gamma-Aminobutyric-Acid"
  },
  {
    "id": 481,
    "nome": "Ácido 4-hidroxibenzóico",
    "formula": "C7H6O3",
    "categoria": "Ácido fenólico",
    "descricao": "Ácido fenólico comum em plantas, usado como conservante e em cosméticos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/4-Hydroxybenzoic-Acid"
  },
  {
    "id": 482,
    "nome": "Ácido 5-feruloilquínico",
    "formula": "C17H20O9",
    "categoria": "Ácido fenólico",
    "descricao": "Isômero do ácido feruloilquínico, encontrado em café e frutas, com atividade antioxidante.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/5-Feruloylquinic-Acid"
  },
  {
    "id": 483,
    "nome": "Ácido D-aspartico",
    "formula": "C4H7NO4",
    "categoria": "Aminoácido",
    "descricao": "Enantiômero do ácido aspártico, usado em suplementos para aumentar testosterona.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/D-Aspartic-Acid"
  },
  {
    "id": 484,
    "nome": "Ácido D-aspártico",
    "formula": "C4H7NO4",
    "categoria": "Aminoácido",
    "descricao": "Variação ortográfica de ácido D-aspartico, presente em tecidos animais e suplementos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/D-Aspartic-Acid"
  },
  {
    "id": 485,
    "nome": "Ácido L-ascórbico",
    "formula": "C6H8O6",
    "categoria": "Vitamina C",
    "descricao": "Vitamina C, antioxidante essencial, encontrada em frutas cítricas e vegetais.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/L-Ascorbic-Acid"
  },
  {
    "id": 486,
    "nome": "Ácido L-ascórbico (Vitamina C)",
    "formula": "C6H8O6",
    "categoria": "Vitamina C",
    "descricao": "Nome alternativo para vitamina C, usada em suplementos e fortificação de alimentos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/L-Ascorbic-Acid"
  },
  {
    "id": 487,
    "nome": "Ácido L-aspartico",
    "formula": "C4H7NO4",
    "categoria": "Aminoácido",
    "descricao": "Aminoácido não essencial, envolvido no ciclo da ureia e síntese de proteínas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/L-Aspartic-Acid"
  },
  {
    "id": 488,
    "nome": "Ácido L-aspártico",
    "formula": "C4H7NO4",
    "categoria": "Aminoácido",
    "descricao": "Variação ortográfica de ácido L-aspartico, usado em suplementos e alimentos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/L-Aspartic-Acid"
  },
  {
    "id": 489,
    "nome": "Ácido L-glutâmico",
    "formula": "C5H9NO4",
    "categoria": "Aminoácido",
    "descricao": "Aminoácido excitatório, precursor do GABA, encontrado em alimentos ricos em proteínas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/L-Glutamic-Acid"
  },
  {
    "id": 490,
    "nome": "Ácido acético",
    "formula": "C2H4O2",
    "categoria": "Ácido orgânico",
    "descricao": "Ácido presente no vinagre, usado como conservante e em síntese química.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Acetic-Acid"
  },
  {
    "id": 491,
    "nome": "Ácido alfa-linoleico",
    "formula": "C18H30O2",
    "categoria": "Ácido graxo",
    "descricao": "Ácido graxo ômega-3, essencial, encontrado em sementes de linhaça e chia.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Alpha-Linolenic-Acid"
  },
  {
    "id": 492,
    "nome": "Ácido alfa-linolênico",
    "formula": "C18H30O2",
    "categoria": "Ácido graxo",
    "descricao": "Variação ortográfica de ácido alfa-linoleico, essencial para saúde cardiovascular.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Alpha-Linolenic-Acid"
  },
  {
    "id": 493,
    "nome": "Ácido alfa-linolênico (ômega-3)",
    "formula": "C18H30O2",
    "categoria": "Ácido graxo",
    "descricao": "Nome alternativo para ácido alfa-linoleico, usado em suplementos ômega-3.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Alpha-Linolenic-Acid"
  },
  {
    "id": 494,
    "nome": "Ácido aminoadipico",
    "formula": "C6H11NO4",
    "categoria": "Aminoácido",
    "descricao": "Aminoácido não proteico, intermediário no metabolismo da lisina.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Aminoadipic-Acid"
  },
  {
    "id": 495,
    "nome": "Ácido aminoadípico",
    "formula": "C6H11NO4",
    "categoria": "Aminoácido",
    "descricao": "Variação ortográfica de ácido aminoadipico, encontrado em tecidos biológicos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Aminoadipic-Acid"
  },
  {
    "id": 496,
    "nome": "Ácido araquidônico",
    "formula": "C20H32O2",
    "categoria": "Ácido graxo",
    "descricao": "Ácido graxo ômega-6, precursor de eicosanoides, presente em carnes e óleos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Arachidonic-Acid"
  },
  {
    "id": 497,
    "nome": "Ácido aspártico",
    "formula": "C4H7NO4",
    "categoria": "Aminoácido",
    "descricao": "Sinônimo de ácido L-aspartico, usado em síntese de proteínas e suplementos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/L-Aspartic-Acid"
  },
  {
    "id": 498,
    "nome": "Ácido benzóico",
    "formula": "C7H6O2",
    "categoria": "Ácido aromático",
    "descricao": "Conservante alimentar, presente em frutas como cranberry, com baixa toxicidade.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Benzoic-Acid"
  },
  {
    "id": 499,
    "nome": "Ácido cafeico",
    "formula": "C9H8O4",
    "categoria": "Ácido fenólico",
    "descricao": "Ácido fenólico encontrado em café e vegetais, com propriedades antioxidantes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Caffeic-Acid"
  },
  {
    "id": 500,
    "nome": "Ácido cinâmico",
    "formula": "C9H8O2",
    "categoria": "Ácido fenólico",
    "descricao": "Precursor de compostos fenólicos, presente em canela, com atividade antioxidante.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Cinnamic-Acid"
  },
  {
    "id": 501,
    "nome": "Ácido clorogênico",
    "formula": "C16H18O9",
    "categoria": "Ácido fenólico",
    "descricao": "Éster de ácido quínico e cafeico, encontrado em café, com propriedades antioxidantes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Chlorogenic-Acid"
  },
  {
    "id": 502,
    "nome": "Ácido criptoclorogênico",
    "formula": "C16H18O9",
    "categoria": "Ácido fenólico",
    "descricao": "Isômero do ácido clorogênico, presente em frutas e café, com atividade antioxidante.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Cryptochlorogenic-Acid"
  },
  {
    "id": 503,
    "nome": "Ácido cítrico",
    "formula": "C6H8O7",
    "categoria": "Ácido orgânico",
    "descricao": "Ácido presente em frutas cítricas, usado como acidulante e conservante alimentar.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Citric-Acid"
  },
  {
    "id": 504,
    "nome": "Ácido decanoico",
    "formula": "C10H20O2",
    "categoria": "Ácido graxo",
    "descricao": "Ácido graxo saturado, também chamado ácido cáprico, presente em óleo de coco.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Decanoic-Acid"
  },
  {
    "id": 505,
    "nome": "Ácido desidroascórbico",
    "formula": "C6H6O6",
    "categoria": "Derivado de vitamina C",
    "descricao": "Forma oxidada da vitamina C, presente em alimentos, com atividade antioxidante.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Dehydroascorbic-Acid"
  },
  {
    "id": 506,
    "nome": "Ácido dodecanoico",
    "formula": "C12H24O2",
    "categoria": "Ácido graxo",
    "descricao": "Ácido graxo saturado, também chamado ácido láurico, presente em óleo de coco.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Dodecanoic-Acid"
  },
  {
    "id": 507,
    "nome": "Ácido dodecanoico (ácido láurico)",
    "formula": "C12H24O2",
    "categoria": "Ácido graxo",
    "descricao": "Nome alternativo para ácido láurico, usado em cosméticos e alimentos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Dodecanoic-Acid"
  },
  {
    "id": 508,
    "nome": "Ácido eicosanoico",
    "formula": "C20H40O2",
    "categoria": "Ácido graxo",
    "descricao": "Ácido graxo saturado, também chamado ácido araquídico, presente em óleos vegetais.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Eicosanoic-Acid"
  },
  {
    "id": 509,
    "nome": "Ácido feruloico",
    "formula": "C10H10O4",
    "categoria": "Ácido fenólico",
    "descricao": "Ácido fenólico encontrado em cereais, com propriedades antioxidantes e fotoprotetoras.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Ferulic-Acid"
  },
  {
    "id": 510,
    "nome": "Ácido ferúlico",
    "formula": "C10H10O4",
    "categoria": "Ácido fenólico",
    "descricao": "Variação ortográfica de ácido feruloico, usado em cosméticos e suplementos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Ferulic-Acid"
  },
  {
    "id": 511,
    "nome": "Ácido férulico",
    "formula": "C10H10O4",
    "categoria": "Ácido fenólico",
    "descricao": "Outra variação ortográfica de ácido feruloico, presente em grãos e vegetais.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Ferulic-Acid"
  },
  {
    "id": 512,
    "nome": "Ácido fítico",
    "formula": "C6H18O24P6",
    "categoria": "Ácido orgânico",
    "descricao": "Composto presente em grãos e sementes, atua como quelante de minerais, mas não tóxico em doses normais.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Phytic-Acid"
  },
  {
    "id": 513,
    "nome": "Ácido fólico",
    "formula": "C19H19N7O6",
    "categoria": "Vitamina B",
    "descricao": "Vitamina B9, essencial para síntese de DNA, encontrada em vegetais verdes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Folic-Acid"
  },
  {
    "id": 514,
    "nome": "Ácido fólico (Vitamina B9)",
    "formula": "C19H19N7O6",
    "categoria": "Vitamina B",
    "descricao": "Nome alternativo para ácido fólico, usado em suplementos e fortificação de alimentos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Folic-Acid"
  },
  {
    "id": 515,
    "nome": "Ácido gama-aminobutírico (GABA)",
    "formula": "C4H9NO2",
    "categoria": "Aminoácido",
    "descricao": "Sinônimo de ácido 4-aminobutírico, neurotransmissor usado em suplementos relaxantes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Gamma-Aminobutyric-Acid"
  },
  {
    "id": 516,
    "nome": "Ácido gamolênico",
    "formula": "C18H30O2",
    "categoria": "Ácido graxo",
    "descricao": "Ácido graxo ômega-6, encontrado em óleos de prímula e borragem, com propriedades anti-inflamatórias.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Gamma-Linolenic-Acid"
  },
  {
    "id": 517,
    "nome": "Ácido glutâmico",
    "formula": "C5H9NO4",
    "categoria": "Aminoácido",
    "descricao": "Sinônimo de ácido L-glutâmico, usado em alimentos como glutamato monossódico.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/L-Glutamic-Acid"
  },
  {
    "id": 518,
    "nome": "Ácido gálico",
    "formula": "C7H6O5",
    "categoria": "Ácido fenólico",
    "descricao": "Ácido fenólico presente em chás e frutas, com forte atividade antioxidante.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Gallic-Acid"
  },
  {
    "id": 519,
    "nome": "Ácido heptanoico",
    "formula": "C7H14O2",
    "categoria": "Ácido graxo",
    "descricao": "Ácido graxo saturado, também chamado ácido enântico, usado em fragrâncias.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Heptanoic-Acid"
  },
  {
    "id": 520,
    "nome": "Ácido hexadecanoico",
    "formula": "C16H32O2",
    "categoria": "Ácido graxo",
    "descricao": "Ácido graxo saturado, também chamado ácido palmítico, presente em óleos de palma e gorduras animais.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Hexadecanoic-Acid"
  },
  {
    "id": 521,
    "nome": "Ácido hexadecanoico (ácido palmítico)",
    "formula": "C16H32O2",
    "categoria": "Ácido graxo",
    "descricao": "Nome alternativo para ácido palmítico, usado em cosméticos e alimentos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Hexadecanoic-Acid"
  },
  {
    "id": 522,
    "nome": "Ácido hidrocianídrico",
    "formula": "HCN",
    "categoria": "Ácido inorgânico",
    "descricao": "Composto altamente tóxico, presente em sementes de frutas, inibe a respiração celular.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Hydrocyanic-Acid"
  },
  {
    "id": 523,
    "nome": "Ácido linoelaidico",
    "formula": "C18H32O2",
    "categoria": "Ácido graxo",
    "descricao": "Isômero trans do ácido linoleico, encontrado em óleos parcialmente hidrogenados.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Linoelaidic-Acid"
  },
  {
    "id": 524,
    "nome": "Ácido linoleico",
    "formula": "C18H32O2",
    "categoria": "Ácido graxo",
    "descricao": "Ácido graxo ômega-6 essencial, presente em óleos vegetais, importante para saúde da pele.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Linoleic-Acid"
  },
  {
    "id": 525,
    "nome": "Ácido láurico",
    "formula": "C12H24O2",
    "categoria": "Ácido graxo",
    "descricao": "Sinônimo de ácido dodecanoico, usado em sabões e cosméticos, presente em óleo de coco.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Dodecanoic-Acid"
  },
  {
    "id": 526,
    "nome": "Ácido mevalônico",
    "formula": "C6H12O4",
    "categoria": "Ácido orgânico",
    "descricao": "Intermediário na biossíntese de isoprenoides, presente em processos metabólicos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Mevalonic-Acid"
  },
  {
    "id": 527,
    "nome": "Ácido málico",
    "formula": "C4H6O5",
    "categoria": "Ácido orgânico",
    "descricao": "Ácido presente em frutas como maçãs, usado como acidulante em alimentos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Malic-Acid"
  },
  {
    "id": 528,
    "nome": "Ácido nicotínico",
    "formula": "C6H5NO2",
    "categoria": "Vitamina B",
    "descricao": "Vitamina B3, essencial para metabolismo energético, encontrada em carnes e grãos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Nicotinic-Acid"
  },
  {
    "id": 529,
    "nome": "Ácido nicotínico (Niacina / Vitamina B3)",
    "formula": "C6H5NO2",
    "categoria": "Vitamina B",
    "descricao": "Nome alternativo para niacina, usado em suplementos e tratamentos de colesterol.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Nicotinic-Acid"
  },
  {
    "id": 530,
    "nome": "Ácido nicotínico (Vitamina B3)",
    "formula": "C6H5NO2",
    "categoria": "Vitamina B",
    "descricao": "Outra variação de ácido nicotínico, essencial para saúde da pele e sistema nervoso.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Nicotinic-Acid"
  },
  {
    "id": 531,
    "nome": "Ácido octadecanoico",
    "formula": "C18H36O2",
    "categoria": "Ácido graxo",
    "descricao": "Ácido graxo saturado, também chamado ácido esteárico, presente em gorduras animais.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Octadecanoic-Acid"
  },
  {
    "id": 532,
    "nome": "Ácido octadecanoico (ácido esteárico)",
    "formula": "C18H36O2",
    "categoria": "Ácido graxo",
    "descricao": "Nome alternativo para ácido esteárico, usado em cosméticos e velas.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Octadecanoic-Acid"
  },
  {
    "id": 533,
    "nome": "Ácido octanoico",
    "formula": "C8H16O2",
    "categoria": "Ácido graxo",
    "descricao": "Ácido graxo saturado, também chamado ácido caprílico, presente em leite de cabra.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Octanoic-Acid"
  },
  {
    "id": 534,
    "nome": "Ácido oleico",
    "formula": "C18H34O2",
    "categoria": "Ácido graxo",
    "descricao": "Ácido graxo monoinsaturado ômega-9, presente em azeite de oliva, benéfico para saúde cardiovascular.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Oleic-Acid"
  },
  {
    "id": 535,
    "nome": "Ácido oleico (ômega-9)",
    "formula": "C18H34O2",
    "categoria": "Ácido graxo",
    "descricao": "Nome alternativo para ácido oleico, usado em suplementos e cosméticos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Oleic-Acid"
  },
  {
    "id": 536,
    "nome": "Ácido oxálico",
    "formula": "C2H2O4",
    "categoria": "Ácido orgânico",
    "descricao": "Ácido presente em espinafre e ruibarbo, tóxico em doses altas, causa cálculos renais.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Oxalic-Acid"
  },
  {
    "id": 537,
    "nome": "Ácido p-cumárico",
    "formula": "C9H8O3",
    "categoria": "Ácido fenólico",
    "descricao": "Ácido fenólico encontrado em frutas e grãos, com propriedades antioxidantes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/p-Coumaric-Acid"
  },
  {
    "id": 538,
    "nome": "Ácido palmitoleico",
    "formula": "C16H30O2",
    "categoria": "Ácido graxo",
    "descricao": "Ácido graxo monoinsaturado ômega-7, presente em óleos de macadâmia e peixes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Palmitoleic-Acid"
  },
  {
    "id": 539,
    "nome": "Ácido pantotênico",
    "formula": "C9H17NO5",
    "categoria": "Vitamina B",
    "descricao": "Vitamina B5, essencial para síntese de coenzima A, encontrada em carnes e grãos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Pantothenic-Acid"
  },
  {
    "id": 540,
    "nome": "Ácido pantotênico (Vitamina B5)",
    "formula": "C9H17NO5",
    "categoria": "Vitamina B",
    "descricao": "Nome alternativo para ácido pantotênico, usado em suplementos e cosméticos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Pantothenic-Acid"
  },
  {
    "id": 541,
    "nome": "Ácido pentadecanoico",
    "formula": "C15H30O2",
    "categoria": "Ácido graxo",
    "descricao": "Ácido graxo saturado, presente em laticínios e óleos vegetais, com baixa toxicidade.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Pentadecanoic-Acid"
  },
  {
    "id": 542,
    "nome": "Ácido petroselínico",
    "formula": "C18H34O2",
    "categoria": "Ácido graxo",
    "descricao": "Ácido graxo monoinsaturado, encontrado em sementes de umbelíferas como salsa.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Petroselinic-Acid"
  },
  {
    "id": 543,
    "nome": "Ácido pirúvico",
    "formula": "C3H4O3",
    "categoria": "Ácido orgânico",
    "descricao": "Intermediário no metabolismo, presente no ciclo de Krebs, usado em suplementos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Pyruvic-Acid"
  },
  {
    "id": 544,
    "nome": "Ácido péctico",
    "formula": "(C6H10O7)n",
    "categoria": "Polissacarídeo",
    "descricao": "Componente da pectina, presente em frutas, usado como espessante em alimentos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Pectic-Acid"
  },
  {
    "id": 545,
    "nome": "Ácido pético",
    "formula": "(C6H10O7)n",
    "categoria": "Polissacarídeo",
    "descricao": "Variação ortográfica de ácido péctico, derivado da pectina, usado em geleias.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Pectic-Acid"
  },
  {
    "id": 546,
    "nome": "Ácido siríngico",
    "formula": "C9H10O5",
    "categoria": "Ácido fenólico",
    "descricao": "Ácido fenólico presente em frutas e vinhos, com propriedades antioxidantes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Syringic-Acid"
  },
  {
    "id": 547,
    "nome": "Ácido tartárico",
    "formula": "C4H6O6",
    "categoria": "Ácido orgânico",
    "descricao": "Ácido presente em uvas, usado como acidulante e estabilizante em alimentos.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Tartaric-Acid"
  },
  {
    "id": 548,
    "nome": "Ácido tetradecanoico",
    "formula": "C14H28O2",
    "categoria": "Ácido graxo",
    "descricao": "Ácido graxo saturado, também chamado ácido mirístico, presente em óleos tropicais.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Tetradecanoic-Acid"
  },
  {
    "id": 549,
    "nome": "Ácido tetradecanoico (ácido mirístico)",
    "formula": "C14H28O2",
    "categoria": "Ácido graxo",
    "descricao": "Nome alternativo para ácido mirístico, usado em cosméticos e sabões.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Tetradecanoic-Acid"
  },
  {
    "id": 550,
    "nome": "Ácido trans-p-cumárico",
    "formula": "C9H8O3",
    "categoria": "Ácido fenólico",
    "descricao": "Isômero trans do ácido p-cumárico, encontrado em plantas, com atividade antioxidante.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Trans-p-Coumaric-Acid"
  },
  {
    "id": 551,
    "nome": "Ácido trans-sinápico",
    "formula": "C11H12O5",
    "categoria": "Ácido fenólico",
    "descricao": "Sinônimo de trans-ácido sinápico, presente em vegetais, com propriedades antioxidantes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Trans-Sinapic-Acid"
  },
  {
    "id": 552,
    "nome": "Ácido vanílico",
    "formula": "C8H8O4",
    "categoria": "Ácido fenólico",
    "descricao": "Ácido fenólico derivado da vanilina, presente em grãos, com atividade antioxidante.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Vanillic-Acid"
  },
  {
    "id": 553,
    "nome": "Água",
    "formula": "H2O",
    "categoria": "Solvente",
    "descricao": "Molécula essencial para a vida, usada como solvente universal, não tóxica em doses normais.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Water"
  },
  {
    "id": 554,
    "nome": "Érbio",
    "formula": "Er",
    "categoria": "Lantanídeo",
    "descricao": "Metal raro usado em lasers e fibras ópticas. Baixa toxicidade, mas compostos podem ser irritantes.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Erbium"
  },
  {
    "id": 555,
    "nome": "Ésteres",
    "formula": "Variável",
    "categoria": "Classe química",
    "descricao": "Classe de compostos derivados de ácidos e álcoois, usados em fragrâncias e plásticos. Toxicidade depende do composto específico.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov"
  },
  {
    "id": 556,
    "nome": "Ítrio",
    "formula": "Y",
    "categoria": "Metal de transição",
    "descricao": "Metal usado em supercondutores e LEDs. Baixa toxicidade, mas poeira pode ser irritante.",
    "toxico": false,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Yttrium"
  },
  {
    "id": 557,
    "nome": "Ósmio",
    "formula": "Os",
    "categoria": "Metal de transição",
    "descricao": "Metal raro, cujos compostos como tetróxido de ósmio são altamente tóxicos, causando danos pulmonares.",
    "toxico": true,
    "referencias": "https://pubchem.ncbi.nlm.nih.gov/compound/Osmium"
  }
];

// nao remova esses informacoes
// Dados iniciais para o banco de dados
// // Frutas
export const initialeData: FoodItem[] = [
  {
    nome: "Banana",
    id: 1,
    favorites: false,
    image: require('./../assets/foodImg/banana.jpg'),
    nomeCientificoAlimento: "Musa spp.",
    resumoConteudo: "Fruta tropical rica em hidratos de carbono, potássio e vitaminas.",
    categoria: "Frutas",
    descricao: "A banana é uma fruta de sabor adocicado, rica em potássio, fibras, vitaminas do complexo B e vitamina C. Ajuda a regular a pressão arterial, fornece energia rápida e contribui para a saúde digestiva e muscular. O consumo regular de banana previne cãibras musculares devido ao seu elevado teor de potássio, apoia o sistema nervoso e promove uma digestão saudável graças às fibras solúveis. É especialmente benéfica para mulheres grávidas, pois o potássio ajuda a reduzir o inchaço e as cãibras comuns durante a gestação, além de fornecer energia de fácil absorção. Para pessoas idosas, a banana é de fácil mastigação e digestão, ajudando a manter a regularidade intestinal. Para atletas e pessoas fisicamente ativas, é uma excelente fonte de energia antes ou após o exercício físico, ajudando na recuperação muscular. Quantidade recomendada: uma a duas bananas médias por dia.",
    idCompostos: [
      371, 75, 391, 106, 226, 302, 167, 513, 233, 446, 553, 87, 183, 403, 179, 416, 228, 400, 174, 144, 518, 485, 306, 443, 517, 539, 484, 219, 528, 375, 110, 78, 166, 279, 291, 447, 368, 305, 268, 282, 271, 218, 438, 80, 285, 270, 243, 380, 376, 287, 280, 237, 425, 462, 76, 286, 288, 274, 283, 323, 201
    ],
    "umidade": 74.5,
  "cinzas": 1.2,
  "pH": 4.8,
  "proteinas": 1.1,
  "gorduras": 0.2,
  "lipidos": 0.2,
  "fibras": 2.5,
  "acidezTitulaveis": 0.3,
  "vitaminas": 9.12,
  "acucares": 13.0,
  "minerais": 412
  },
  {
    nome: "Manga",
    id: 2,
    favorites: false,
    image: require('./../assets/foodImg/manga.jpg'),
    nomeCientificoAlimento: "Mangifera indica",
    resumoConteudo: "Fruta tropical suculenta, rica em vitaminas A e C.",
    categoria: "Frutas",
    descricao: "A manga é uma fruta tropical de polpa doce e fibrosa, rica em vitaminas A, C e E, fibras e antioxidantes. Fortalece o sistema imunitário, contribui para a saúde da pele e da visão, possui ação antioxidante e auxilia na digestão. O consumo de manga é especialmente benéfico para mulheres grávidas, pois a vitamina A é essencial para o desenvolvimento saudável do feto, e a vitamina C melhora a absorção de ferro, prevenindo a anemia gestacional. Para pessoas com problemas digestivos, as fibras presentes na manga ajudam a regular o trânsito intestinal e a prevenir a obstipação. Para crianças em fase de crescimento, a manga contribui para o desenvolvimento do sistema imunitário e da visão. Quantidade recomendada: metade a uma manga média por dia.",
    idCompostos: [
      87, 553, 518, 98, 418, 400, 104, 527, 179, 174, 489, 183, 391, 371, 488, 106, 534, 199, 520, 270, 345, 281, 233, 492, 282, 141, 485, 95, 285, 284, 13, 280, 287, 20, 243, 202, 39, 286, 536, 446, 302, 279, 491, 548, 484, 163, 75, 288, 513, 205, 107, 16, 283, 274, 531, 167, 219, 443, 300, 430, 416, 293, 506, 528, 6, 144, 114, 78, 166, 403, 539, 447, 306, 368, 393, 149, 517, 291, 438, 425, 376, 218, 80, 203, 108, 237, 263
    ],
    "umidade": 83.5,
  "cinzas": 0.55,
  "pH": 4.1,
  "proteinas": 0.9,
  "gorduras": 0.25,
  "lipidos": 0.25,
  "fibras": 1.8,
  "acidezTitulaveis": 0.25,
  "vitaminas": 37.35,
  "acucares": 15.0,
  "minerais": 200
  },
  {
    nome: "Laranja",
    id: 3,
    favorites: false,
    image: require('./../assets/foodImg/laranja.jpg'),
    nomeCientificoAlimento: "Citrus sinensis",
    resumoConteudo: "Fruta cítrica rica em vitamina C e antioxidantes.",
    categoria: "Frutas",
    descricao: "A laranja é uma fruta cítrica com elevado teor de vitamina C, fibras e antioxidantes. Reforça o sistema imunitário, previne gripes e constipações, melhora a absorção de ferro e contribui para a saúde da pele. O consumo diário de laranja é fundamental para mulheres grávidas, pois a vitamina C aumenta a absorção de ferro, prevenindo a anemia, e contribui para o desenvolvimento saudável do bebé. Para crianças e idosos, a laranja fortalece as defesas naturais do organismo e ajuda a manter a pele saudável. Para pessoas com colesterol elevado, as fibras solúveis presentes na laranja ajudam a reduzir os níveis de colesterol no sangue. Quantidade recomendada: uma a duas laranjas médias por dia.",
    idCompostos: [
      553, 98, 400, 444, 77, 445, 104, 18, 179, 39, 183, 503, 294, 544, 345, 488, 371, 489, 527, 272, 284, 491, 243, 95, 174, 20, 282, 214, 15, 534, 484, 199, 110, 485, 270, 13, 253, 156, 520, 285, 480, 280, 233, 292, 492, 281, 351, 202, 469, 211, 251, 279, 283, 287, 302, 286, 238, 416, 16, 206, 205, 64, 288, 274, 391, 536, 86, 256, 159, 167, 91, 338, 531, 210, 513, 54, 441, 309, 160, 510, 190, 158, 241, 431, 366, 163, 34, 537, 171, 188, 451, 36, 114, 172, 499, 348, 525, 551, 341, 422, 71, 231, 70, 453, 35, 65, 117, 320, 436, 423, 143, 460, 449, 465, 455, 78, 7, 111, 380, 250, 106, 397, 539, 219, 437, 450, 517, 415, 347, 407, 221, 365, 327, 97, 8, 428, 447, 204, 528, 300, 166, 221, 350, 10, 306, 254, 368, 301, 448, 393, 147, 116, 75, 218, 424, 443, 427, 356, 49, 229, 107, 50, 425, 268, 417, 69, 500, 325, 337, 252, 376, 353, 32, 403, 96, 170, 51, 173, 312, 14, 323, 373, 291, 45, 165, 438, 263, 308
    ],
    "umidade": 86.0,
  "cinzas": 0.5,
  "pH": 3.5,
  "proteinas": 0.9,
  "gorduras": 0.1,
  "lipidos": 0.1,
  "fibras": 2.4,
  "acidezTitulaveis": 0.3,
  "vitaminas": 53.41,
  "acucares": 9.0,
  "minerais": 245
  },
  {
    nome: "Ananás",
    id: 4,
    favorites: false,
    image: require('./../assets/foodImg/ananas.jpg'),
    nomeCientificoAlimento: "Ananas comosus",
    resumoConteudo: "Fruta tropical rica em vitamina C e enzimas digestivas.",
    categoria: "Frutas",
    descricao: "O ananás é uma fruta de sabor doce e ácido, com textura fibrosa, rica em vitamina C, manganês e bromelina, uma enzima que auxilia na digestão das proteínas. Fortalece o sistema imunitário, tem ação anti-inflamatória e é um diurético natural, ajudando a eliminar toxinas do organismo. O consumo de ananás é especialmente benéfico para pessoas com problemas digestivos, pois a bromelina facilita a digestão de alimentos proteicos. Para mulheres grávidas, pode ajudar a aliviar a sensação de inchaço e melhorar a digestão. Para pessoas com retenção de líquidos, o ananás contribui para a eliminação do excesso de líquidos do corpo. Quantidade recomendada: duas a três fatias médias por dia (cerca de 150 a 200 gramas).",
    idCompostos: [
      553, 400, 503, 179, 104, 183, 145, 473, 527, 488, 371, 489, 272, 544, 492, 491, 534, 345, 344, 537, 485, 510, 282, 163, 520, 284, 405, 285, 281, 233, 484, 302, 292, 280, 174, 270, 531, 95, 243, 286, 16, 226, 287, 283, 555, 480, 202, 13, 279, 513, 320, 199, 69, 167, 536, 205, 416, 106, 391, 404, 306, 211, 274, 430, 219, 87, 528, 443, 539, 78, 166, 111, 317, 368, 447, 232, 65, 3, 517, 255, 72, 122, 290, 315, 393, 310, 479, 490, 425, 266, 55, 146, 353, 438, 291, 218, 114, 17, 263, 376, 403, 56, 5, 377, 402, 304, 170, 288, 2, 307, 314, 223, 313, 311
    ],
    "umidade": 86.5,
  "cinzas": 0.55,
  "pH": 3.6,
  "proteinas": 0.55,
  "gorduras": 0.15,
  "lipidos": 0.15,
  "fibras": 1.5,
  "acidezTitulaveis": 0.15,
  "vitaminas": 47.90,
  "acucares": 11.5,
  "minerais": 142
  },
  {
    nome: "Abacate",
    id: 5,
    favorites: false,
    image: require('./../assets/foodImg/abacate.jpg'),
    nomeCientificoAlimento: "Persea americana",
    resumoConteudo: "Fruta rica em gorduras saudáveis e vitaminas.",
    categoria: "Frutas",
    descricao: "O abacate é um fruto de polpa cremosa, rico em gorduras saudáveis, especialmente ácidos gordos monoinsaturados, além de vitaminas E, C, K, do complexo B e ácido fólico. Contribui para a saúde do coração, reduz o colesterol LDL, fornece antioxidantes e melhora a absorção de nutrientes lipossolúveis. O consumo regular de abacate é altamente recomendado para mulheres grávidas, pois o ácido fólico é fundamental para a formação do tubo neural do bebé, prevenindo defeitos congénitos. Para pessoas com colesterol elevado, as gorduras saudáveis ajudam a equilibrar os níveis de colesterol no sangue. Para quem procura saciedade e controlo do peso, o abacate proporciona sensação de plenitude devido ao seu teor de fibras e gorduras saudáveis. Quantidade recomendada: metade de um abacate médio por dia.",
    idCompostos: [
      553, 473, 534, 520, 418, 491, 492, 371, 487, 278, 345, 13, 483, 281, 270, 284, 400, 531, 282, 40, 8, 180, 202, 285, 233, 243, 280, 287, 95, 302, 31, 286, 182, 89, 16, 283, 513, 279, 391, 107, 75, 288, 174, 547, 106, 105, 485, 274, 496, 167, 416, 28, 321, 229, 443, 528, 111, 539, 219, 78, 300, 114, 368, 447, 121, 76, 149, 166, 393, 517, 306, 237, 181, 26, 30, 403, 376, 23, 425, 87, 353, 109, 108, 374, 17, 462, 223, 170
    ],
    "umidade": 74.0,
  "cinzas": 1.3,
  "pH": 6.45,
  "proteinas": 2.25,
  "gorduras": 15.5,
  "lipidos": 15.5,
  "fibras": 6.35,
  "acidezTitulaveis": 0.25,
  "vitaminas": 12.11,
  "acucares": 0.85,
  "minerais": 578
  },
  {
    nome: "Tomate",
    id: 6,
    favorites: false,
    image: require('./../assets/foodImg/tomate.jpg'),
    nomeCientificoAlimento: "Solanum lycopersicum",
    resumoConteudo: "Fruto usado como legume, rico em licopeno e vitaminas.",
    categoria: "Legumes",
    descricao: "O tomate é um fruto rico em licopeno, vitamina C, potássio e fibras. Protege contra doenças cardiovasculares, fortalece o sistema imunitário e contribui para a saúde da pele. O licopeno é um antioxidante que ajuda a proteger as células do corpo contra danos, sendo especialmente benéfico para homens, pois estudos indicam que pode reduzir o risco de problemas na próstata. Para mulheres grávidas, o tomate fornece vitamina C, importante para a absorção de ferro, e para pessoas com problemas de circulação, o potássio ajuda a regular a pressão arterial. Quantidade recomendada: um a dois tomates médios por dia.",
    idCompostos: [
      553, 400, 13, 180, 483, 345, 182, 371, 491, 416, 293, 534, 202, 281, 520, 285, 270, 31, 287, 95, 243, 16, 284, 286, 279, 89, 274, 283, 9, 302, 531, 300, 174, 492, 106, 28, 233, 485, 167, 8, 528, 446, 219, 321, 111, 548, 443, 78, 551, 518
    ],
    "umidade": 94.5,
  "cinzas": 0.55,
  "pH": 4.35,
  "proteinas": 0.95,
  "gorduras": 0.25,
  "lipidos": 0.25,
  "fibras": 1.35,
  "acidezTitulaveis": 0.25,
  "vitaminas": 13.58,
  "acucares": 2.8,
  "minerais": 282
  },
  {
    nome: "Cebola",
    id: 7,
    favorites: false,
    image: require('./../assets/foodImg/cebola.jpg'),
    nomeCientificoAlimento: "Allium cepa",
    resumoConteudo: "Bolbo aromático rico em compostos sulfurados.",
    categoria: "Legumes",
    descricao: "A cebola é um vegetal aromático, com ação anti-inflamatória e antioxidante, auxilia na saúde cardiovascular e fortalece o sistema imunitário. Rica em compostos sulfurados, vitamina C e flavonoides. O consumo de cebola é benéfico para pessoas com colesterol elevado, pois ajuda a reduzir o colesterol LDL, e para quem sofre de hipertensão, pois contribui para a regulação da pressão arterial. Para pessoas com tendência a infeções, a cebola reforça as defesas do organismo. Quantidade recomendada: uma cebola média por dia.",
    idCompostos: [
      553, 454, 400, 180, 380, 345, 386, 191, 292, 82, 95, 371, 284, 199, 487, 517, 485, 520, 270, 534, 281, 282, 543, 233, 243, 280, 174, 285, 274, 286, 287, 83, 84, 226, 167, 279, 288, 283, 23, 302, 416, 81, 551, 481, 389, 227, 477, 40, 376, 552, 219, 85, 86, 357, 513, 548, 275, 321, 8, 405, 106, 210, 329, 528, 264, 494, 114, 447, 429, 536, 306, 115, 393, 182, 498, 391, 379, 476, 428, 117, 384, 403, 368, 78, 265, 166, 539, 518, 443, 319, 170, 169, 276, 397, 511, 420, 378, 228, 109, 57, 483, 258, 353, 461, 165, 336, 17, 526, 229, 325, 499, 197, 448, 25, 147, 29, 425, 301, 173, 208, 373, 434, 96, 557, 346, 360, 432, 421, 439, 248, 175, 93, 308
    ],
    "umidade": 90.0,
  "cinzas": 0.55,
  "pH": 5.55,
  "proteinas": 1.1,
  "gorduras": 0.15,
  "lipidos": 0.15,
  "fibras": 1.35,
  "acidezTitulaveis": 0.15,
  "vitaminas": 7.42,
  "acucares": 4.35,
  "minerais": 208
  },
  {
    nome: "Pimento",
    id: 8,
    favorites: false,
    image: require('./../assets/foodImg/pimento.jpg'),
    nomeCientificoAlimento: "Capsicum spp.",
    resumoConteudo: "Fruto usado como legume, rico em vitamina C e capsaicina.",
    categoria: "Legumes",
    descricao: "O pimento é um vegetal colorido, consumido cru ou cozinhado, rico em vitamina C, antioxidantes e capsaicina. Auxilia na imunidade, metabolismo e saúde cardiovascular. O consumo de pimento é especialmente benéfico para pessoas com anemia, pois a vitamina C aumenta a absorção de ferro dos alimentos, e para quem procura acelerar o metabolismo, a capsaicina pode ajudar a aumentar o gasto energético. Para pessoas com problemas de circulação, o pimento contribui para a saúde dos vasos sanguíneos. Quantidade recomendada: metade a um pimento médio por dia.",
    idCompostos: [
      553, 123, 192, 99, 505, 40, 352, 345, 180, 182, 474, 489, 487, 371, 292, 486, 392, 521, 281, 284, 259, 95, 282, 285, 200, 270, 287, 243, 493, 535, 280, 523, 517, 532, 536, 274, 400, 233, 265, 286, 137, 279, 138, 136, 408, 283, 29, 90, 25, 302, 288, 21, 87, 167, 174, 416, 23, 124, 125, 376, 508, 513, 132, 226, 329, 118, 537, 275, 22, 127, 389, 133, 115, 28, 260, 128, 139, 57, 219, 237, 349, 548, 79, 388, 529, 297, 268, 131, 405, 357, 296, 129, 518, 380, 330, 552, 326, 499, 126, 86, 134, 428, 169, 462, 106, 114, 447, 468, 494, 369, 550, 367, 130, 306, 511, 397, 300, 244, 323, 364, 247, 394, 166, 506, 210, 325, 144, 546, 38, 426, 420, 336, 333, 135, 117, 208, 540, 334, 8, 107, 37, 551, 335, 319, 276, 258, 109, 75, 353, 429, 448, 229, 162, 147, 224, 189, 475, 108, 301, 170, 173, 373, 165, 228, 432, 403, 96, 263, 176, 439, 433, 557, 248, 360, 434, 175, 308, 398, 346, 93, 289, 556, 262, 339, 370
    ],
    "umidade": 92.5,
  "cinzas": 0.65,
  "pH": 5.05,
  "proteinas": 1.1,
  "gorduras": 0.25,
  "lipidos": 0.25,
  "fibras": 1.75,
  "acidezTitulaveis": 0.25,
  "vitaminas": 80.43,
  "acucares": 3.75,
  "minerais": 253
  },
  {
    nome: "Cenoura",
    id: 9,
    favorites: true,
    image: require('./../assets/foodImg/cenoura.jpg'),
    nomeCientificoAlimento: "Daucus carota",
    resumoConteudo: "Raiz rica em betacaroteno e fibras.",
    categoria: "Legumes",
    descricao: "A cenoura é um vegetal de cor alaranjada, consumido cru ou cozinhado, rico em betacaroteno (precursor da vitamina A), fibras, vitamina K e antioxidantes. Melhora a saúde ocular, fortalece o sistema imunitário, contribui para a saúde da pele e tem ação antioxidante. O consumo de cenoura é fundamental para crianças em fase de crescimento, pois a vitamina A é essencial para o desenvolvimento da visão, e para mulheres grávidas, pois contribui para o desenvolvimento saudável do feto. Para pessoas com problemas de pele, o betacaroteno ajuda a manter a pele saudável e protegida. Quantidade recomendada: uma a duas cenouras médias por dia.",
    idCompostos: [
      553, 542, 545, 454, 512, 400, 534, 182, 474, 180, 87, 489, 43, 215, 195, 40, 504, 241, 46, 316, 292, 548, 487, 371, 464, 345, 142, 198, 491, 520, 13, 517, 449, 516, 270, 178, 458, 416, 200, 186, 422, 66, 506, 233, 399, 280, 358, 52, 281, 282, 226, 239, 95, 285, 174, 284, 287, 471, 243, 202, 493, 294, 16, 31, 240, 457, 12, 459, 42, 452, 286, 302, 466, 185, 23, 279, 86, 456, 68, 288, 295, 531, 106, 376, 64, 508, 283, 298, 501, 102, 329, 274, 486, 389, 79, 499, 74, 536, 167, 33, 405, 28, 443, 169, 120, 494, 109, 92, 275, 217, 470, 451, 481, 117, 111, 210, 67, 75, 48, 321, 219, 552, 324, 296, 331, 428, 268, 53, 248, 73, 4, 245, 114, 420, 529, 19, 355, 526, 113, 319, 482, 380, 115, 392, 475, 101, 57, 265, 397, 336, 353, 369, 478, 166, 119, 187, 502, 236, 250, 448, 348, 58, 513, 61, 426, 147, 498, 96, 25, 301, 197, 29, 170, 325, 237, 173, 108, 546, 225, 308, 263, 432, 165, 439, 433, 403, 360, 557, 434, 175, 346, 370, 262, 216, 176, 289, 93, 556, 242, 398
    ],
    "umidade": 88.5,
  "cinzas": 0.75,
  "pH": 6.05,
  "proteinas": 0.95,
  "gorduras": 0.25,
  "lipidos": 0.25,
  "fibras": 2.65,
  "acidezTitulaveis": 0.15,
  "vitaminas": 7.395,
  "acucares": 4.75,
  "minerais": 400
  },
  {
    nome: "Ervilhas",
    id: 10,
    favorites: false,
    image: require('./../assets/foodImg/ervilhas.jpg'),
    nomeCientificoAlimento: "Pisum sativum",
    resumoConteudo: "Leguminosa rica em proteínas e fibras.",
    categoria: "Legumes",
    descricao: "As ervilhas são leguminosas de sabor suave, fonte de proteína vegetal, fibras, vitaminas do complexo B, ferro e magnésio. Melhoram a saúde digestiva, auxiliam no controlo glicémico e fornecem energia de forma gradual. São ideais para vegetarianos e veganos, pois fornecem proteína de origem vegetal, e para pessoas com diabetes, pois ajudam a controlar os níveis de açúcar no sangue. Para crianças e idosos, as ervilhas contribuem para uma alimentação equilibrada e variada. Quantidade recomendada: meia chávena (cerca de 80 gramas) por dia.",
    idCompostos: [
      553, 249, 87, 88, 145, 100, 440, 400, 545, 489, 207, 345, 487, 13, 282, 95, 178, 371, 281, 280, 390, 202, 285, 243, 270, 474, 287, 492, 376, 31, 286, 233, 279, 174, 200, 16, 288, 521, 226, 274, 283, 167, 302, 492, 534, 261, 322, 486, 184, 182, 354, 180, 164, 28, 514, 268, 532, 515, 168, 416, 392, 219, 109, 429, 536, 406, 112, 530, 467, 549, 447, 540, 306, 509, 114, 86, 546, 507, 115, 397, 505, 426, 166, 177, 106, 369, 394, 325, 463, 353, 343, 230, 225, 149, 148, 79, 107, 173, 165, 403, 96, 308, 263, 144, 76, 153
    ],
    "umidade": 79.0,
  "cinzas": 1.55,
  "pH": 5.75,
  "proteinas": 5.25,
  "gorduras": 0.45,
  "lipidos": 0.45,
  "fibras": 5.25,
  "acidezTitulaveis": 0.25,
  "vitaminas": 40.138,
  "acucares": 4.75,
  "minerais": 410
  },
  {
    nome: "Couve",
    id: 11,
    favorites: false,
    image: require('./../assets/foodImg/couve.jpg'),
    nomeCientificoAlimento: "Brassica oleracea var. acephala",
    resumoConteudo: "Folha verde rica em vitaminas A, C e K.",
    categoria: "Verduras",
    descricao: "A couve é um vegetal de folhas verdes, com propriedades antioxidantes e anti-inflamatórias, rica em fibras, vitaminas A, C, K e minerais como cálcio e ferro. Contribui para a saúde óssea, imunitária e cardiovascular. O consumo de couve é especialmente importante para mulheres grávidas, pois é rica em ácido fólico, essencial para o desenvolvimento do bebé, e para pessoas com osteoporose, devido ao seu teor de cálcio. Para idosos, a couve ajuda a manter a saúde dos ossos e a prevenir doenças crónicas. Quantidade recomendada: uma chávena de folhas cruas ou meia chávena cozinhada por dia.",
    idCompostos: [
      553, 400, 180, 182, 178, 281, 202, 285, 243, 287, 270, 31, 286, 279, 283, 274, 28, 492, 524, 520, 106, 8, 107, 391, 13, 16, 371, 174, 302, 321, 233, 416, 219, 447, 306, 166, 403, 353, 263, 111, 485, 443, 223, 78, 237, 528, 513, 425, 393, 368
    ],
    "umidade": 90.0,
  "cinzas": 1.5,
  "pH": 6.3,
  "proteinas": 2.5,
  "gorduras": 0.3,
  "lipidos": 0.3,
  "fibras": 2.0,
  "acidezTitulaveis": 0.4,
  "vitaminas": 120,
  "acucares": 3.0,
  "minerais": 1.2
  },
  {
    nome: "Espinafre",
    id: 12,
    favorites: false,
    image: require('./../assets/foodImg/espinafre.jpg'),
    nomeCientificoAlimento: "Spinacia oleracea",
    resumoConteudo: "Folha verde rica em ferro e vitaminas.",
    categoria: "Verduras",
    descricao: "O espinafre é um vegetal de folhas verdes escuras, fonte de ferro, ácido fólico, vitamina K, vitamina C e antioxidantes. Fortalece ossos, músculos e sistema imunitário. O consumo de espinafre é recomendado para mulheres grávidas, pois o ácido fólico é fundamental para o desenvolvimento do sistema nervoso do bebé, para pessoas com anemia, devido ao seu teor de ferro, e para idosos, pois contribui para a saúde óssea. Quantidade recomendada: uma chávena de folhas cruas ou meia chávena cozinhada por dia.",
    idCompostos: [
      553, 182, 180, 400, 305, 88, 181, 489, 488, 281, 280, 282, 279, 286, 270, 243, 287, 285, 283, 288, 274, 357, 329, 276, 178, 292, 284, 27, 25, 24, 23, 29, 319, 57, 461, 169, 420, 246, 336, 95, 202, 275, 495, 197, 404, 258, 269, 492, 524, 534, 520, 548, 531, 536, 106, 8, 75, 414, 411, 412, 413, 363, 362, 380, 385, 296, 268, 509, 537, 328, 60, 59, 371, 174, 302, 416, 233, 163, 199, 219, 447, 166, 403, 114, 170, 306, 405, 210, 117, 397, 165, 325, 353, 173, 147, 96, 308, 433, 428, 448, 432, 248, 289, 339, 556, 360, 346, 175, 434, 267, 372, 401, 235, 557, 176, 93, 196, 370, 216, 398, 435, 262, 554, 103, 485, 78, 237, 223, 443, 391, 393, 368, 539, 528, 111, 425
    ],
    "umidade": 91.0,
  "cinzas": 1.6,
  "pH": 6.5,
  "proteinas": 2.9,
  "gorduras": 0.4,
  "lipidos": 0.4,
  "fibras": 2.2,
  "acidezTitulaveis": 0.3,
  "vitaminas": 99.0,
  "acucares": 1.4,
  "minerais": 2.0
  },
  {
    nome: "Repolho",
    id: 13,
    favorites: false,
    image: require('./../assets/foodImg/repolho.jpg'),
    nomeCientificoAlimento: "Brassica oleracea var. capitata",
    resumoConteudo: "Folha verde rica em fibras e vitamina C.",
    categoria: "Verduras",
    descricao: "O repolho é um vegetal de folhas compactas, consumido cru em saladas ou cozinhado, rico em fibras, vitamina C, antioxidantes e compostos anti-inflamatórios. Melhora a digestão, fortalece o sistema imunitário, possui ação antioxidante e anti-inflamatória. O consumo de repolho é benéfico para pessoas com problemas digestivos, pois as fibras ajudam a regular o trânsito intestinal, e para quem procura reforçar a flora intestinal, especialmente quando consumido fermentado. Para mulheres grávidas, o repolho fornece vitamina C e fibras essenciais. Quantidade recomendada: uma chávena de folhas cruas ou meia chávena cozinhada por dia.",
    idCompostos: [
      553, 180, 182, 400, 305, 178, 25, 29, 23, 277, 273, 285, 270, 243, 284, 376, 281, 280, 287, 279, 286, 288, 283, 282, 95, 274, 285, 167, 161, 109, 44, 330, 101, 92, 316, 194, 213, 364, 212, 332, 90, 517, 202, 505, 406, 392, 106, 79, 394, 369, 530, 426, 540, 226, 514, 443, 237, 462, 17, 150, 268, 380, 499, 509, 537, 551, 152, 497, 517, 166, 447, 302, 371, 174, 233, 219, 306, 403, 325, 170, 165, 210, 117, 114, 397, 200, 439, 301, 373, 147, 96, 308, 173, 86, 267, 428, 448, 289, 93, 398, 360, 557, 434, 353
    ],
    "umidade": 92.0,
  "cinzas": 0.8,
  "pH": 6.0,
  "proteinas": 1.3,
  "gorduras": 0.2,
  "lipidos": 0.2,
  "fibras": 2.5,
  "acidezTitulaveis": 0.2,
  "vitaminas": 75.0,
  "acucares": 3.2,
  "minerais": 1.0
  },
  {
    nome: "Alface",
    id: 14,
    favorites: false,
    image: require('./../assets/foodImg/alface.jpg'),
    nomeCientificoAlimento: "Lactuca sativa",
    resumoConteudo: "Folha verde leve, rica em água e fibras.",
    categoria: "Verduras",
    descricao: "A alface é um vegetal de folhas verdes, consumida principalmente crua em saladas, com textura crocante, baixo teor calórico, rica em fibras, vitaminas A, C, K e minerais. Hidrata, auxilia na digestão, é fonte de fibras e vitaminas, e tem efeito calmante. O consumo de alface é ideal para pessoas que procuram controlar o peso, pois promove saciedade com poucas calorias, e para quem tem dificuldades em dormir, devido ao seu efeito relaxante. Para pessoas com problemas digestivos, a alface contribui para o bom funcionamento do intestino. Quantidade recomendada: uma a duas chávenas de folhas cruas por dia.",
    idCompostos: [
      553, 400, 180, 182, 88, 545, 303, 157, 489, 488, 281, 280, 282, 270, 287, 243, 285, 286, 279, 95, 178, 288, 202, 318, 155, 357, 31, 28, 23, 246, 420, 495, 336, 275, 292, 376, 29, 25, 492, 524, 534, 520, 531, 548, 506, 541, 538, 106, 8, 107, 391, 300, 446, 140, 442, 340, 75, 380, 387, 381, 382, 501, 149, 151, 299, 268, 257, 264, 94, 328, 385, 383, 371, 233, 174, 302, 321, 416, 163, 199, 219, 447, 306, 166, 403, 263, 353, 170, 114, 405, 428, 210, 117, 397, 165, 325, 86, 173, 147, 96, 308, 433, 448, 432, 248, 289, 339, 556, 360, 346, 175, 554, 103, 242, 485, 443, 223, 425, 393, 368, 513, 63, 62, 539, 528, 111, 78, 108, 237, 462, 17, 109, 167, 193, 13, 20, 16
    ],
    "umidade": 95.0,
  "cinzas": 0.5,
  "pH": 6.0,
  "proteinas": 1.2,
  "gorduras": 0.2,
  "lipidos": 0.2,
  "fibras": 1.3,
  "acidezTitulaveis": 0.2,
  "vitaminas": 50.0,
  "acucares": 1.9,
  "minerais": 0.9
  },
  {
    nome: "Moringa",
    id: 15,
    favorites: false,
    image: require('./../assets/foodImg/moringa.jpg'),
    nomeCientificoAlimento: "Moringa oleifera",
    resumoConteudo: "Folha verde rica em nutrientes e antioxidantes.",
    categoria: "Verduras",
    descricao: "A moringa é uma planta de elevado valor nutricional, consumida em chás, pós ou pratos, rica em proteínas, vitaminas A, C, E, cálcio, ferro e antioxidantes. Tem ação anti-inflamatória, antioxidante e fortalece o sistema imunitário. O consumo de moringa é indicado para atletas, pois ajuda na recuperação muscular, para idosos, devido ao seu teor de cálcio e ferro, e para mulheres grávidas, pois contribui para a prevenção da anemia e para o desenvolvimento saudável do bebé. Quantidade recomendada: uma a duas colheres de sopa de folhas secas ou pó por dia.",
    idCompostos: [
      553, 489, 487, 281, 282, 270, 95, 243, 284, 280, 285, 287, 286, 279, 288, 283, 274, 534, 520, 508, 531, 106, 265, 371, 174, 302, 233, 416, 199, 219, 166, 229, 263, 485, 393, 342, 368, 167, 536
    ],
    "umidade": 75.0,
  "cinzas": 4.0,
  "pH": 6.5,
  "proteinas": 9.0,
  "gorduras": 1.4,
  "lipidos": 1.4,
  "fibras": 2.0,
  "acidezTitulaveis": 0.3,
  "vitaminas": 220.0,
  "acucares": 1.5,
  "minerais": 300.0
  },
  {
    nome: "Mandioca",
    id: 16,
    favorites: false,
    image: require('./../assets/foodImg/mandioca.jpg'),
    nomeCientificoAlimento: "Manihot esculenta",
    resumoConteudo: "Tubérculo rico em hidratos de carbono.",
    categoria: "Tubérculos",
    descricao: "A mandioca é uma raiz tuberosa, consumida cozida, frita ou como farinha, sendo uma importante fonte de energia. Rica em hidratos de carbono complexos, fibras, vitaminas do complexo B e minerais. Fornece energia, promove a saciedade e contribui para uma alimentação equilibrada. É indicada para pessoas com elevado gasto energético, como atletas, e para quem procura alternativas sem glúten, pois a mandioca não contém glúten. Para crianças em fase de crescimento, é uma boa fonte de energia. Quantidade recomendada: meia chávena (cerca de 100 gramas) cozida por dia.",
    idCompostos: [
      87, 553, 100, 489, 371, 487, 95, 13, 345, 174, 534, 485, 520, 281, 233, 282, 522, 284, 473, 536, 270, 302, 285, 280, 416, 287, 274, 243, 288, 202, 178, 279, 359, 286, 492, 491, 16, 31, 167, 283, 321, 219, 513, 199, 505, 531, 28, 106, 391, 86, 528, 443, 506, 447, 114, 109, 393, 403, 306, 517, 166, 539, 368, 425, 78, 25, 29, 376, 23
    ],
    "umidade": 60.0,
  "cinzas": 1.0,
  "pH": 5.8,
  "proteinas": 1.4,
  "gorduras": 0.3,
  "lipidos": 0.3,
  "fibras": 1.8,
  "acidezTitulaveis": 0.2,
  "vitaminas": 15.0,
  "acucares": 30.0,
  "minerais": 50.0
  },
  {
    nome: "Batata-doce",
    id: 17,
    favorites: false,
    image: require('./../assets/foodImg/batata_doce.jpg'),
    nomeCientificoAlimento: "Ipomoea batatas",
    resumoConteudo: "Tubérculo rico em hidratos de carbono e betacaroteno.",
    categoria: "Tubérculos",
    descricao: "A batata-doce é um tubérculo de sabor adocicado, rica em fibras, betacaroteno (vitamina A), vitamina C e antioxidantes. Contribui para a saúde ocular, digestiva e imunitária. É excelente para pessoas com diabetes, devido ao seu baixo índice glicémico, para mulheres grávidas, pois fornece vitamina A importante para o desenvolvimento do bebé, e para atletas, pois fornece energia de longa duração. Quantidade recomendada: uma batata-doce média (cerca de 100 gramas) por dia.",
    idCompostos: [
      553, 88, 87, 545, 391, 400, 106, 512, 371, 487, 489, 182, 180, 473, 345, 178, 536, 174, 13, 233, 282, 284, 520, 280, 285, 163, 202, 287, 270, 95, 491, 243, 75, 31, 16, 485, 492, 199, 283, 302, 279, 416, 359, 288, 226, 274, 28, 534, 531, 321, 219, 513, 528, 114, 167, 361, 86, 222, 220, 11, 447, 403, 166, 393, 368, 443, 111, 246, 357, 420, 292, 109, 286
    ],
    "umidade": 77.0,
  "cinzas": 0.8,
  "pH": 5.6,
  "proteinas": 1.6,
  "gorduras": 0.1,
  "lipidos": 0.1,
  "fibras": 3.0,
  "acidezTitulaveis": 0.2,
  "vitaminas": 20.0,
  "acucares": 4.2,
  "minerais": 55.0
  },
  {
    nome: "Inhame",
    id: 18,
    favorites: false,
    image: require('./../assets/foodImg/inhame.jpg'),
    nomeCientificoAlimento: "Dioscorea spp.",
    resumoConteudo: "Tubérculo rico em hidratos de carbono e fibras.",
    categoria: "Tubérculos",
    descricao: "O inhame é um tubérculo de elevado valor nutricional, utilizado em vários pratos, fonte de hidratos de carbono, fibras, vitamina C, potássio e antioxidantes. Auxilia na saúde digestiva, fortalece o sistema imunitário, é fonte de energia e possui ação anti-inflamatória. O consumo de inhame é indicado para pessoas com problemas digestivos, atletas que necessitam de energia prolongada e para mulheres grávidas, pois fornece nutrientes essenciais para o desenvolvimento do bebé. Quantidade recomendada: meia chávena (cerca de 100 gramas) cozido por dia.",
    idCompostos: [
      553, 371, 345, 13, 233, 174, 281, 302, 178, 95, 491, 202, 16, 284, 31, 285, 520, 270, 391, 106, 287, 243, 321, 86, 286, 279, 167, 165, 513, 492, 219, 283, 226, 274, 485, 416, 28, 534, 531, 306, 443, 447, 208, 170, 528, 403, 539, 368, 517, 166, 425, 25, 23, 29, 282, 280, 376
    ],
    "umidade": 70.0,
  "cinzas": 0.7,
  "pH": 5.7,
  "proteinas": 1.5,
  "gorduras": 0.2,
  "lipidos": 0.2,
  "fibras": 2.0,
  "acidezTitulaveis": 0.2,
  "vitaminas": 18.0,
  "acucares": 2.5,
  "minerais": 45.0
  },
  {
    nome: "Batata (Reno)",
    id: 19,
    favorites: false,
    image: require('./../assets/foodImg/batata_reno.png'),
    nomeCientificoAlimento: "Solanum tuberosum",
    resumoConteudo: "Tubérculo rico em hidratos de carbono e potássio.",
    categoria: "Tubérculos",
    descricao: "A batata é um alimento versátil e base em muitas refeições, fonte de energia, rica em potássio, vitamina C e fibras. Contribui para a saúde muscular e digestiva. É indicada para crianças, idosos, atletas e para quem procura saciedade em dietas equilibradas. Para pessoas com hipertensão, o potássio ajuda a regular a pressão arterial. Prefira métodos de cozedura saudáveis, como cozer ou assar. Quantidade recomendada: uma batata média (cerca de 100 gramas) por dia.",
    idCompostos: [
      553, 87, 545, 419, 473, 534, 520, 489, 487, 408, 292, 345, 178, 491, 531, 371, 13, 517, 503, 282, 281, 95, 280, 492, 202, 284, 527, 270, 285, 243, 287, 199, 233, 31, 23, 286, 167, 376, 288, 416, 279, 275, 283, 548, 302, 274, 501, 234, 105, 389, 28, 174, 16, 536, 499, 226, 121, 485, 519, 495, 504, 357, 508, 86, 209, 410, 329, 510, 506, 379, 163, 115, 219, 117, 210, 533, 428, 361, 114, 528, 541, 397, 405, 319, 447, 537, 472, 47, 57, 409, 169, 420, 41, 258, 336, 306, 166, 276, 461, 368, 147, 154, 268, 425, 395, 325, 208, 448, 78, 393, 246, 357, 420, 292, 109, 286
    ],
    "umidade": 79.0,
  "cinzas": 0.8,
  "pH": 5.6,
  "proteinas": 2.0,
  "gorduras": 0.1,
  "lipidos": 0.1,
  "fibras": 1.8,
  "acidezTitulaveis": 0.2,
  "vitaminas": 12.0,
  "acucares": 1.7,
  "minerais": 35.0
  },
  {
    nome: "Beterraba",
    id: 20,
    favorites: false,
    image: require('./../assets/foodImg/beterraba.jpg'),
    nomeCientificoAlimento: "Beta vulgaris",
    resumoConteudo: "Raiz rica em antioxidantes e nitratos.",
    categoria: "Tubérculos",
    descricao: "A beterraba é um vegetal de cor intensa, consumida crua, cozida ou em sumos, rica em antioxidantes, ferro, ácido fólico e nitratos naturais. Melhora a circulação sanguínea, reduz a pressão arterial, auxilia na saúde do fígado e contribui para a desintoxicação do organismo. É recomendada para mulheres grávidas, pois o ácido fólico é essencial para o desenvolvimento do bebé, para atletas, pois os nitratos naturais melhoram o desempenho físico, e para pessoas com anemia, devido ao seu teor de ferro. Quantidade recomendada: meia chávena (cerca de 80 gramas) por dia.",
    idCompostos: [
      553, 400, 292, 345, 536, 371, 489, 233, 13, 517, 182, 180, 416, 487, 174, 473, 109, 270, 226, 285, 199, 491, 282, 281, 284, 272, 280, 178, 302, 534, 287, 95, 492, 520, 485, 243, 286, 283, 274, 202, 16, 288, 31, 376, 197, 279, 23, 86, 106, 78, 439, 389, 219, 28, 405, 170, 531, 114, 117, 210, 306, 528, 447, 495, 319, 275, 115, 361, 397, 276, 393, 428, 379, 296, 420, 166, 513, 258, 57, 353, 380, 368, 461, 336, 208, 96, 147, 329, 404, 301, 242, 165, 173, 325, 448, 432, 308, 175, 554, 267, 339, 372, 235, 398, 93, 196, 346, 262, 370, 216, 403, 248, 556, 433, 557, 391, 289, 360, 223
    ],
     "umidade": 87.0,
  "cinzas": 1.0,
  "pH": 5.5,
  "proteinas": 1.6,
  "gorduras": 0.2,
  "lipidos": 0.2,
  "fibras": 2.0,
  "acidezTitulaveis": 0.2,
  "vitaminas": 13.0,
  "acucares": 6.8,
  "minerais": 40.0
  }
];
