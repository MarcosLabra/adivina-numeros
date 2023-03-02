import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './src/components/Header';
import GameScreen from './src/components/screens/gameScreen';
import StartGameScreen from './src/components/screens/StartGameScreen';


export default function App() {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  return (
    <View style={styles.container}>
      <Header title="Adivina el numero" />
      {
        !userNumber
          ? <StartGameScreen onStartGame={startGameHandler} />
          : <GameScreen userOption={userNumber} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
