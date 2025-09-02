import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, StackScreenProps } from "@react-navigation/stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import TelaExplorar from "./app/(tabs)/index";
import CategoriaScreen from "./app/CategoriaScreen";
import ComposicaoQuimicaScreen from "./app/ComposicaoQuimicaScreen";
import DescricaoAlimentoScreen from "./app/DescricaoAlimentoScreen";
import { Composto } from './database/interfaces';

// Stack para a tab Explorar
type ExplorarStackParamList = {
  Explorar: undefined;
  Categoria: undefined;
  DescricaoAlimentoScreen: undefined;
  ComposicaoQuimicaScreen: { compostos: Composto[] };
};

const Stack = createStackNavigator<ExplorarStackParamList>();

function ExplorarStack() {
  return (
    <Stack.Navigator initialRouteName="Explorar">
      <Stack.Screen name="Explorar" component={TelaExplorar} />
      <Stack.Screen name="Categoria" component={CategoriaScreen} />
      <Stack.Screen
        name="DescricaoAlimentoScreen"
        component={DescricaoAlimentoScreen}
      />
      <Stack.Screen
        name="ComposicaoQuimicaScreen"
        component={ComposicaoQuimicaScreen}
      />
    </Stack.Navigator>
  );
}

// Tab Navigator principal
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Explore" component={ExplorarStack} />
            {/* Adicione as outras tabs aqui */}
            {/* <Tab.Screen name="Scanear" component={ScanearScreen} /> */}
            {/* <Tab.Screen name="Compostos" component={CompostosScreen} /> */}
            {/* <Tab.Screen name="Investigar" component={InvestigarScreen} /> */}
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}