/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable jsx-quotes */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import { View, TextInput, Text, StyleSheet, Pressable } from 'react-native'

const NuevoPresupuesto = ({ handlePresupuesto, presupuesto, setPresupuesto }) => {


    return (

            <View style={styles.contendor} >
                <Text style={styles.titulo}>Definir Presupuesto</Text>
                <TextInput style={styles.input}
                    placeholder='agregar presupuesto' keyboardType='numeric'
                    value={presupuesto.toString()}
                    onChangeText={setPresupuesto}
                    placeholderTextColor='gray'
           />
                <Pressable style={styles.boton}
                    onPress={() => handlePresupuesto(presupuesto)}
                >
                    <Text style={styles.botonTexto}>Agregar Presupuesto</Text>
                </Pressable>
            </View>
    )
};

const styles = StyleSheet.create({
    contendor: {
        backgroundColor: '#fff',
        marginHorizontal: 20,
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 10,
        shadowColor: "#000",
        display : 'flex',
        flex : 1,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        transform: [{
            translateY: 10,
        }],
        marginBottom: 20,
    },
    titulo: {
        color: '#0DAFF6',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
    input: {
        textAlign: 'center',
        borderRadius: 10,
        padding: 4,
        color: '#000',
    },
    boton: {
        backgroundColor: '#074BD3',
        paddingVertical: 10,
        marginTop: 20,
        borderRadius: 10,

    },
    botonTexto: {
        textAlign: 'center',
        color: '#fff',
        textTransform: 'uppercase',
        fontSize: 20,
        fontWeight: 'bold',


    },
})

export default NuevoPresupuesto
