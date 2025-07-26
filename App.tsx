import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectPage from './pages/SelectPage';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import RandomGradientPage from './pages/RandomGradientPage';
import PickAnimatedPage from './pages/PickAnimatedPage';
import HomeGradientPage from './pages/HomeGradientPage';

const RootStack = createNativeStackNavigator({
  screens: {
    SelectPage: SelectPage,
    RandomGradientPage: RandomGradientPage,
    PickAnimatedPage: PickAnimatedPage,
    HomeGradientPage: HomeGradientPage,
  },
  screenOptions: {
    headerShown: false,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar />
      <Navigation />
    </SafeAreaProvider>
  );
}