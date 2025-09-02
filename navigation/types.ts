
export type RootStackParamList = {
  CategoriaScreen: { categoria: string; imagem: any };
  DescricaoAlimentoScreen: { name: string; 
    image: any; 
    description: string,
    umidade: string,
    cinzas: string, 
    pH: string, 
    proteinas: string, 
    gorduras: string, 
    lipidos:string,
    fibras: string,
    minerais: string;
    acidezTitulaveis: string,
    vitaminas: string,
    acucares: string
    idComposition: any[],};
  Explorar: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}