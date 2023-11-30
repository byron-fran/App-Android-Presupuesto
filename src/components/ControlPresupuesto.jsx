/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react'
import { View, Text,StyleSheet, Pressable } from 'react-native'
import { moneda } from '../helpers'

import CircularProgress from 'react-native-circular-progress-indicator';

const ControlPresupuesto = ({ presupuesto, gastos, resetApp }) => {
    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);
    const [porcentaje, setPorcentaje] = useState(0)

    useEffect(() => {

        const totalGastado = gastos.reduce((valor, gasto) => {
            return Number(gasto.cantidadGasto) + Number(valor)
        }, 0);

        const totalDisponible = presupuesto - totalGastado;
        const totalPorcentaje = () => {
            return ((presupuesto - totalDisponible) / presupuesto) * 100
        }

        setTimeout(() => {
            setPorcentaje(totalPorcentaje)
        }, 1000);
        setDisponible(totalDisponible)
        setGastado(totalGastado)
    }, [gastos])

    return (
        <View>
            <View style={styles.contendor}>
                <View style={styles.card}>
                    <CircularProgress
                        value={porcentaje}
                        duration={1500}
                        radius={120}
                        valueSuffix={'%'}
                        title='Gastado'
                        activeStrokeColor='#0DAFF6'
                        activeStrokeWidth={12}
                    />
                </View>
                <View style={styles.card_boton}>
                    <Pressable
                        onPress={resetApp}>
                        <Text style={styles.botonTexto}>Reniciar App</Text>
                    </Pressable>
                </View>
                <View style={styles.card_Presupuesto}>
                    <Text style={styles.card_Texto}>
                        <Text style={styles.card_Cantidad}>Presupuesto:{' '}</Text>
                        {moneda(presupuesto)}
                    </Text>
                    <Text style={styles.card_Texto}>
                        <Text style={styles.card_Cantidad}>Disponible:{' '}</Text>
                        {moneda(disponible)}
                    </Text>
                    <Text style={styles.card_Texto}>
                        <Text style={styles.card_Cantidad}>Gastado:{' '}</Text>
                        {moneda(gastado)}
                    </Text>
                </View>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({

    contendor: {
        backgroundColor: '#fff',
        marginHorizontal: 20,
        paddingVertical: 20,
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
            translateY: 50,
        }],
    },
    card: {
        alignItems: 'center',
    },
    card_Presupuesto: {
        marginTop: 30,

    },
    card_Cantidad: {
        color: '#0DAFF6',
    },
    card_Texto: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,

    },
    circulo: {
        backgroundColor: 'white',
    },
    card_boton: {
        backgroundColor: '#DC01AD',
        padding: 10,
        marginTop: 20,
        borderRadius: 10,
    },
    botonTexto: {
        color: 'white',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
})
export default ControlPresupuesto
