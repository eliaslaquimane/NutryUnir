/**
 * Representa um alimento com suas propriedades principais,
 * incluindo nome, imagem, categoria, descrição e compostos associados.
 */
export interface FoodItem {
    nome: string;
    id: number;
    image: any;
    favorites: boolean
    nomeCientificoAlimento: string;
    resumoConteudo: string;
    categoria: string;
    descricao: string;
    umidade: number;
    cinzas: number;
    pH: number;
    proteinas: number;
    gorduras: number;
    lipidos: number;
    minerais: number;
    fibras: number;
    acidezTitulaveis: number;
    vitaminas: number;
    acucares: number;
    idCompostos: any[];
}

/**
 * Representa um composto químico presente em alimentos,
 * incluindo nome, fórmula, categoria, toxicidade e referências.
 */
export interface Composto {
  id: number;
  nome: string;
  formula: string; // Não pode ser opcional se todos usam como string
  categoria: string;
  descricao?: string;
  toxico: boolean;
}

