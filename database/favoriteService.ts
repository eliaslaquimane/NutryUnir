import { FoodItem } from './interfaces';
import storage from './storage';

/**
 * Atualiza o status de favorito de um alimento pelo ID.
 * @param id ID do alimento
 * @param isFavorite Novo status de favorito
 */
export const setFavoriteStatus = async (id: number, isFavorite: boolean): Promise<void> => {
  try {
    const foodDatabase = (await storage.load({ key: 'foodDatabase' }).catch(() => [])) as FoodItem[];
    const idx = foodDatabase.findIndex((item) => item.id === id);
    if (idx !== -1) {
      foodDatabase[idx].favorites = isFavorite;
      await storage.save({ key: 'foodDatabase', data: foodDatabase });
    }
  } catch (error) {
    console.error('Erro ao atualizar favorito:', error);
  }
};
