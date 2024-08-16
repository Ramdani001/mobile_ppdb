import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { RootNavigator } from './src/views/onboarding/navigation';

export default function App() {
  return (
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
  );
}
