import { FlatList, View } from 'react-native'
import React from 'react'
import ButtonTitle from '../components/ButtonTitle'



export const HomeView = ({ navigation }) => {
  const views = [

    { title: 'Scroll', path: 'scroll' },
<<<<<<< HEAD
    {title: 'Api', path: 'api' },
    
=======
    {title: 'Personajes', path: 'api' },
    {title: 'Hechizos', path: 'hechizos'}
>>>>>>> 598de79 (api pj y hechizos)

  ]

  const renderItem = ({ item }) => <ButtonTitle title={item.title} action={() => navigation.navigate(item.path)} />

  return (
  
    <View>
      <FlatList data={views} renderItem={renderItem} />
    </View>

  )
}

