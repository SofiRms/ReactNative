import { StyleSheet, Button, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'


const Formulario = () => {
    const { form, updateForm, clearForm, addPersona } = useContext(FormularioContext)
    const [show, setShow] = useState(false)

    const handlesavePersona = () => {
        addPersona(form)
        clearForm()
    }

    return (
        <View>
            {
                show &&
                <View style={StyleSheet.container}>
                    <TextInput
                        value={form.nya || ''}
                        style={styles.input} placeholder='Nombre y Apellido'
                        onChangeText={(text) => updateForm('nya', text)}
                    />
                    {/* keyboardType modifica el teclado virtual que se mostrará al escribir en el input */}
                    <TextInput
                        value={form.email || ''}
                        style={styles.input} placeholder='Email'
                        keyboardType='email-address'
                        onChangeText={(text) => updateForm('email', text)}
                    />
                    <TextInput value={form.telefono || ''}
                        style={styles.input} placeholder='Numero de telefono'
                        keyboardType='numeric'
                        onChangeText={(text) => updateForm('telefono', text)}
                    />
                    <Button title='guardar' onPress={handleSavePersona} />
                </View>
            }
            <Button title={!show ? 'agregar' : 'cancelar'} onPress={() => setShow(!show)} />
        </View>
    )
}

export default Formulario

const styles = StyleSheet.create({
    container: {
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        margin: 5,
    },
})



