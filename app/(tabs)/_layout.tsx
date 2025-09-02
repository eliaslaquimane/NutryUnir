import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

/**
 * Define o layout das tabs de navegação da aplicação.
 * Configura os ícones, títulos e estilos de cada tab.
 */
export default function TabLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          ...styles.tabBar,
          paddingBottom: 8 + insets.bottom,
          height: 60 + insets.bottom,
        },
        safeAreaInsets: { bottom: insets.bottom },
        tabBarActiveTintColor: '#2563eb',
        tabBarInactiveTintColor: '#64748b',
        tabBarLabelStyle: styles.tabBarLabel,
        headerShown: false,
        tabBarShowLabel: false, // Adicione esta linha para esconder os labels
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, size }) => <Ionicons name="search" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: 'Scanear',
          tabBarIcon: ({ color, size }) => <Ionicons name="camera" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="compounds"
        options={{
          title: 'Compostos',
          tabBarIcon: ({ color, size }) => <Ionicons name="beaker" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="learn"
        options={{
          title: 'Investiga',
          tabBarIcon: ({ color, size }) => <Ionicons name="book" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name='nutryunir_ia'
        options={{
          title: 'NutryunirAi',
          tabBarIcon: ({ color, size }) => <Ionicons name={'rocket'} size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
    paddingTop: 8,
    height: 60,
  },
  tabBarLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
  },
});