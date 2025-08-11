import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectPage from './pages/SelectPage';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import RandomGradientPage from './pages/RandomGradientPage';
import PickAnimatedPage from './pages/PickAnimatedPage';
import HomeGradientPage from './pages/HomeGradientPage';
import WithdrawConceptStack from './pages/WithdrawConceptPage/navigation';
import BlurEffectPage from './pages/BlurEffectPage';
import QRPage from './pages/QRPage';

const RootStack = createNativeStackNavigator({
  screens: {
    SelectPage: SelectPage,
    RandomGradientPage: RandomGradientPage,
    PickAnimatedPage: PickAnimatedPage,
    HomeGradientPage: HomeGradientPage,
    WithdrawConceptPage: WithdrawConceptStack,
    BlurEffectPage: BlurEffectPage,
    QRPage: QRPage,
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