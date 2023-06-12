import React from 'react'
import { View,StyleSheet, ImageBackground } from 'react-native';

const Hogwarts = () => {
  return (
   <View>
       <ImageBackground source={require('../img/Hogwarts_Legacy.png')} style={styles.fondo}>

    </ImageBackground>
   </View>
  )
}

export default Hogwarts

const styles = StyleSheet.create({

  fondo: {

    width: 0,
    height: 40,
  }

})