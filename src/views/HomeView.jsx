import { FlatList, View } from 'react-native'
import React from 'react'
import ButtonTitle from '../components/ButtonTitle'



export const HomeView = ({ navigation }) => {
  //creo un conjunto de datos que serán renderizados
  const views = [
    //defino titulo y dirección de la ruta para cada component
    { title: 'Scroll', path: 'scroll' },
    { title: 'Personajes', path: 'personajes' },
    {title: 'slytherin', path: 'slytherin' },
  


  ]

  //se renderizan los items del conjunto de datos. El componente buton accede al title de cada dato del conjunto
  // Se accede al path de cada item para definir la dirección de del navigate en el action
  const renderItem = ({ item }) => <ButtonTitle title={item.title} action={() => navigation.navigate(item.path)} />

  return (

    <View>
      {/* el flatlist recibe el conjunto de datos en la propiedad data */}
      {/* la propiedad renderItem reliza las acciones definidas en la constante renderItem. De esta manera el código es menos extenso  */}
      <FlatList data={views}
        renderItem={renderItem} />
    </View>

  )
}

