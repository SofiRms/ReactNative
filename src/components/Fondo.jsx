import React from 'react'
import { View, Text,StyleSheet, ActivityIndicator, ImageBackground } from 'react-native';

const Fondo = () => {
  return (
   <View>
       <ImageBackground source={require('../img/Ravenclaw.jpg')} style={styles.fondo}>
      <View style={styles.error}>
        <ActivityIndicator size="large" color="#E63F34" />
      </View>
      <View style={styles.textfondo}>
        <Text style={styles.fuente}>Cargando personajes</Text>
      </View>
    </ImageBackground>
   </View>
  )
}

export default Fondo

const styles = StyleSheet.create({
error: {
    display: 'flex',
    marginTop: 200,
    marginRight: 40,

  },
  textfondo: {
    marginLeft: 100,
    alignContent: 'center',
    justifyContent: 'center',
    width: 200,
    height: 60,
    fontSize: 20

  },
  fondo: {

    width: 400,
    height: 600,
  },
  fuente: {
    backgroundColor: '#283747',
    color: '#FFFFFF',
    width:150,
    height: 20,
  }

})