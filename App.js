import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import Navigator from './routes/router';

export default function App() {
  const [fontsLoaded] = Font.useFonts({
    'Nunito-Regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf'),
    'Nunito-ExtraBold': require('./assets/fonts/Nunito-ExtraBold.ttf'),
  });

  if (fontsLoaded) {
    return (
      <Navigator />
    )
  } else {
    return (
      <View style={styles.container}>
        {/* <Text style={{ fontFamily: 'Nunito-ExtraBold' }}>one punch men</Text> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
