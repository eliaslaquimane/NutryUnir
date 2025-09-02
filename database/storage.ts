import AsyncStorage from '@react-native-async-storage/async-storage';
import Storage from 'react-native-storage';

/**
 * Inicializa uma instância de armazenamento persistente usando react-native-storage
 * e AsyncStorage como backend. Permite salvar e recuperar dados localmente no app.
 */
const storage = new Storage({
    size: 30000,
    storageBackend: AsyncStorage,
    defaultExpires: null,
    enableCache: false,
});

/**
 * Exporta a instância de armazenamento para ser utilizada em outras partes do aplicativo.
 */
export default storage;