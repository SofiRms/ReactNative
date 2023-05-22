import { FlatList, View } from 'react-native'
import React from 'react'
import ButtonTitle from '../components/ButtonTitle'



export const HomeView = ({ navigation }) => {
  const views = [

    { title: 'Scroll', path: 'scroll' },
    {title: 'Personajes', path: 'api' },
    {title: 'Hechizos', path: 'hechizos'}

  ]

  const renderItem = ({ item }) => <ButtonTitle title={item.title} action={() => navigation.navigate(item.path)} />

  return (
  
    <View>
      <FlatList data={views} renderItem={renderItem} />
    </View>

  )
}

