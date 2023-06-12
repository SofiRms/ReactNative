import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableHighlight } from 'react-native';
import SlyFondo from '../components/SlyFondo';

export const Slytherin = () => {
const [personajes, setPersonajes]= useState([])
  const [slytherin, setSlytherin]= useState([]);
  //este UseState lo utilizo para saber el estado del array de personajes. 
  //Si está vacio es xq aun no se terminó de realizar el fetch
  const [estado, setEstado] = useState(false);

//función para borrar personajes. Recibe como parámetro el index del elemento. 
  const deletePersonajes = (index) => {
    //Se genera un nuevo array NuevoPerson a paritr de filtrar, en el array de personajes, el elemento con id distinto al index recibido
    //el index que se recibe por parámetro proviene del onPress en el const RenderItem
    setSlytherin((nuevoPerson) => nuevoPerson.filter((_, i) => i !== index))
  }

//este hook ejecutará la función FecthPersonajes
  useEffect(() => {
    fetchPersonajes();
  }, []);
 useEffect(() => {
  for(let i=0; i<personajes.length; i++){
    console.log(personajes.length)
    console.log(personajes[i])
    const personajesCasa = []
    if( personajes[i].casaDeHogwarts === casaslytherin){
      personajesCasa.push(personajes[i]) 
      
    }
    console.log(personajesCasa)
    setSlytherin(personajesCasa);
    return setEstado(false);

  }
 },[personajes])

  const fetchPersonajes = async () => {
    try {
      //seteo el estado a true 
      setEstado(true)
      const response = await fetch("https://harry-potter-api.onrender.com/db");
      const data = await response.json();
      setPersonajes(data.personajes);
      const casaslytherin= "Slytherin"

      // for(const personaje of personajes){
      //   if( personaje[personaje].casaDeHogwarts === casaslytherin){
          
      //     console.log(setSlytherin(personaje));
          
      //   }
   
      // return setEstado(false);

      // }
  
    } catch (error) {
      console.log(error);
    }
  };



  const renderItem = ({ item, index }) => (
    <View >
      <Image source={{ uri: item.imagen }} style={styles.image} />
      <Text style={styles.nombre}> {item.personaje} </Text>

      <TouchableHighlight style={styles.buton}
        onPress={() => deletePersonajes(index)}>
        <Text style={styles.eliminar} >Eliminar</Text>
      </TouchableHighlight>
    </View>);

   if (estado) return (
    <View>
      <SlyFondo />
    </View>
  ) 

  return (
    <View>
        <View style={styles.container}>
          <FlatList
            data={slytherin}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.listContainer}
          />

        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  listContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 400,
    height: 500,
    marginVertical: 10,
  },
  buton: {
    width: 60,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 170,
    backgroundColor: 'black'
  },
  eliminar: {
    color: 'white'
  },
  nombre: {
    marginLeft: 20,
    backgroundColor: 'black',
    color: 'white',
    height: 20,
    width:100
  }
});
