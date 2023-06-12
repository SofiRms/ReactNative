import { StyleSheet,View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeView, Personajes, ShowScrollView } from './src/views/Exports'
import { Slytherin } from './src/views/Slytherin';
import Formulario from './src/views/FormView/Formulario';
import Hogwarts from './src/components/CasasFondo';
import { StatusBar } from 'expo-status-bar';
export default function App() {
  //creo contexto de la navegación
  const Stack = createNativeStackNavigator();

  return (
    
<>
     
      <Hogwarts />
    

        <NavigationContainer>

          {/* defino ruta inicial Home */}
          <Stack.Navigator initialRouteName='Home'>

            {/* definición de las rutas en la navegación y los componentes a renderizar */}
            <Stack.Screen name="home" component={HomeView} />
            <Stack.Screen name="scroll" component={ShowScrollView} />
            <Stack.Screen name="personajes" component={Personajes} />
            <Stack.Screen name="slytherin" component={Slytherin} />
            <Stack.Screen name="registro" component={Formulario} />



          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto"/>

    
        </>

      );

}

      const styles = StyleSheet.create({
        container: {
        flex: 1,
      backgroundColor: '#red',
      alignItems: 'center',
      justifyContent: 'center',
  },
});
