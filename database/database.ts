import { initialCompostosData, initialData } from './initialData';
import { FoodItem } from './interfaces';
import storage from './storage';

let isDatabaseInitialized = false;

/**
 * Inicializa o banco de dados local caso ainda não tenha sido inicializado.
 * Carrega os dados do armazenamento e, se estiver vazio, salva os dados iniciais.
 */
export const initializeDatabase = async () => {
    if (isDatabaseInitialized) {
        console.log('Banco de dados já foi inicializado anteriormente.');
        return;
    }

    console.log('Inicializando o banco de dados...');
    try {
        const foodDatabase = (await storage.load({ key: 'foodDatabase' }).catch(() => [])) as FoodItem[];

        if (foodDatabase.length === 0) {
            console.log('Banco de dados vazio. Salvando dados iniciais...');
            await storage.save({ key: 'foodDatabase', data: initialCompostosData });
        }

        isDatabaseInitialized = true;
    } catch (error) {
        console.error('Erro ao inicializar o banco de dados:', error);
    }
};

/**
 * Reseta o banco de dados local, removendo os dados atuais e restaurando os dados iniciais.
 */
export const resetDatabase = async () => {
    try {
        console.log('Resetando o banco de dados...');
        await storage.remove({ key: 'foodDatabase' });
        await storage.save({ key: 'foodDatabase', data: initialData });
        console.log('Banco de dados resetado com sucesso.');
    } catch (error) {
        console.error('Erro ao resetar o banco de dados:', error);
    }
};