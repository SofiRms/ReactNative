import React from 'react';
import {  StyleSheet, ImageBackground } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeView, Personajes, ShowScrollView } from './src/views/Exports';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="home" component={HomeView} />
        <Stack.Screen name="scroll" component={ShowScrollView} />
        <Stack.Screen name="api" component={Personajes} />
        </Stack.Navigator>
    
      <ImageBackground
        source={{ uri: 'https://www.mundodeportivo.com/alfabeta/hero/2023/05/1366_2000.1683047091.4697.jpeg?width=768&aspect_ratio=16:9&format=nowebp' }}
        style={styles.backgroundImage}
      >
      </ImageBackground>
      </NavigationContainer>

      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'relative',
  },
  text: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
});
