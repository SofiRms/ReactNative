import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

export const Hechizos = () => {
  const [hechizos, setHechizos] = useState([]);

  useEffect(() => {
    fetchPersonajes();
  }, []);

  
  const fetchPersonajes = async () => {
    try {
      const response = await fetch("https://harry-potter-api.onrender.com/db");
      const data = await response.json();
      setHechizos(data.hechizos);
    } catch (error) {
      console.log(error);
    }
  };

  const renderItem = ({ item }) => (
    <Text>{item.hechizos}</Text>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={hechizos}
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
