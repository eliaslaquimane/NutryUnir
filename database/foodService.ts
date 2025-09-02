import { initialeData } from './initialData';
import { FoodItem } from './interfaces';
import storage from './storage';

/**
 * Adiciona um novo alimento ao banco de dados local.
 * Verifica se o item já existe pelo ID antes de adicionar.
 */
export const addFoodItem = async (foodItem: FoodItem) => {
    try {
        const foodDatabase = (await storage.load({ key: 'foodDatabase' }).catch(() => [])) as FoodItem[];

        const exists = foodDatabase.some((item) => item.id === foodItem.id);
        if (exists) {
            console.log(`O item com ID ${foodItem.id} já existe no banco de dados.`);
            return;
        }

        foodDatabase.push(foodItem);
        await storage.save({ key: 'foodDatabase', data: foodDatabase });
        console.log('Item adicionado com sucesso:', foodItem);
    } catch (error) {
        console.error('Erro ao adicionar o item:', error);
    }
};

/**
 * Busca um alimento pelo seu ID no banco de dados local.
 * Retorna o item encontrado ou undefined se não existir.
 */
export const getFoodItemById = async (id: number): Promise<FoodItem | undefined> => {
    try {
        const foodDatabase = (await storage.load({ key: 'foodDatabase' }).catch(() => [])) as FoodItem[];
        return foodDatabase.find((item) => item.id === id);
    } catch (error) {
        console.error('Erro ao buscar o item:', error);
        return undefined;
    }
};

/**
 * Retorna todos os alimentos do banco de dados local.
 * Se uma categoria for informada, retorna apenas os itens dessa categoria.
 * Inicializa o banco de dados com dados padrão se estiver vazio.
 */
export const getAllFoodItems = async (categoria?: string): Promise<FoodItem[]> => {
    try {
        console.log('Carregando banco de dados...');
        let foodDatabase = (await storage.load({ key: 'foodDatabase' }).catch(() => [])) as FoodItem[];

        // Verifica se o banco de dados está vazio
        if (foodDatabase.length === 0) {
            console.log('Banco de dados vazio. Inicializando com dados padrão...');
            foodDatabase = initialeData;
            await storage.save({ key: 'foodDatabase', data: foodDatabase });
        }

        if (categoria) {
            const filteredItems = foodDatabase.filter((item) => item.categoria === categoria);
            console.log(`Itens filtrados pela categoria "${categoria}":`, filteredItems);
            return filteredItems;
        }

        console.log('Todos os itens carregados:', foodDatabase);
        return foodDatabase;
    } catch (error) {
        console.error('Erro ao buscar todos os itens:', error);
        return [];
    }
};



export { FoodItem };

