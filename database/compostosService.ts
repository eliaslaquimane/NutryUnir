import { getAllFoodItems } from './foodService';
import { initialCompostosData } from './initialData';
import { CompostosFood } from './interfaces';

/**
 * Retorna todos os compostos químicos cadastrados.
 * Utiliza os dados iniciais definidos em initialCompostosData.
 */
export const getAllCompostos = async (): Promise<CompostosFood[]> => {
    try {
        return Promise.resolve(initialCompostosData);
    } catch (error) {
        console.error('Erro ao buscar compostos:', error);
        return [];
    }
};

/**
 * Relaciona cada alimento com seus compostos químicos correspondentes.
 * Retorna um array de objetos contendo o nome do alimento e os compostos associados.
 */
export const getCompostosByFood = async (): Promise<
    { foodName: string; compostos: CompostosFood[] }[]
> => {
    try {
        const foodItems = await getAllFoodItems();
        const compostos = await getAllCompostos();

        return foodItems.map((food) => ({
            foodName: food.nome,
            compostos: compostos.filter((composto) =>
                food.idCompostos.includes(composto.id)
            ),
        }));
    } catch (error) {
        console.error('Erro ao relacionar compostos com alimentos:', error);
        return [];
    }
};