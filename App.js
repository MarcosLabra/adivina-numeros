import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import StartGameScreen from './src/components/screens/StartGameScreen';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title='Adivina el numero' />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
