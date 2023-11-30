/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable jsx-quotes */
/* eslint-disable semi */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from 'react'
import { View, Text, StyleSheet } from "react-native"
import { Picker } from '@react-native-picker/picker';


const Filtro = ({ filtro, setFiltro, setGastosFiltrados, gastos }) => {

    useEffect(() => {
        if (filtro === '') {
            setGastosFiltrados([])
        }
        else {
            const gastosFiltrados = gastos.filter(gasto => gasto.categoriaGasto === filtro);
            setGastosFiltrados(gastosFiltrados)

        }
    }, [filtro])
    return (
        <View style={styles.contendor}>
            <Text style={styles.textFilter}>Filtrar Gastos</Text>
            <View>
                <Picker
                    selectedValue={filtro}
                    onValueChange={(value) => {
                        setFiltro(value)
                    }}>
                    <Picker.Item style={styles.textoInput} label='--seleccione--' value='' />
                    <Picker.Item style={styles.textoInput} label='Ahorro' value='ahorro' />
                    <Picker.Item style={styles.textoInput} label='Comida' value='comida' />
                    <Picker.Item style={styles.textoInput} label='Suscripcion' value='suscripciones' />
                    <Picker.Item style={styles.textoInput} label='Casa' value='casa' />
                    <Picker.Item style={styles.textoInput} label='Salud' value='salud' />

                </Picker>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    contendor: {
        backgroundColor: '#fff',
        marginHorizontal: 20,
        paddingVertical: 20,
        marginTop: 70,
        paddingHorizontal: 10,
        borderRadius: 10,
        shadowColor: "#000",

        shadowOffset: {
            width: 0,
            height: 2,
        },

        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        transform: [{
            translateY: 0,
        }],
    },
    textFilter : {
        color : '#000',
        textAlign : 'center',
        fontWeight : 'bold'
    },
    textoInput: {
        textAlign : 'center',
    },
})
export default Filtro
