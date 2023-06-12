import React from 'react'
import { View,StyleSheet, ImageBackground } from 'react-native';

const RavenFondo = () => {
  return (
   <View>
       <ImageBackground source={require('../img/Ravenclaw.jpg')} style={styles.fondo}>
    </ImageBackground>
   </View>
  )
}

export default RavenFondo

const styles = StyleSheet.create({

  fondo: {

    width: 400,
    height: 60,
  }

})