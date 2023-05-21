import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, StyleSheet } from 'react-native';

export const Personajes = () => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    fetchPersonajes();
  }, []);

  const fetchPersonajes = async () => {
    try {
      const response = await fetch("https://harry-potter-api.onrender.com/db");
      const data = await response.json();
      setPersonajes(data.personajes);
    } catch (error) {
      console.log(error);
    }
  };

  const renderItem = ({ item }) => (
    <Image source={{ uri: item.imagen }} style={styles.image} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={personajes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
});
