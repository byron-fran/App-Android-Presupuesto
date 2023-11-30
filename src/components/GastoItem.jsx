/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */

import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { moneda } from '../helpers';
import { formaterFecha } from '../helpers/fecha';
const iconos = {
    ahorro: require('../img/icono_ahorro.png'),
    comida: require('../img/icono_comida.png'),
    suscripciones: require('../img/icono_suscripciones.png'),
    casa: require('../img/icono_casa.png'),
    salud: require('../img/icono_salud.png'),
    otrosGastos: require('../img/icono_gastos.png'),
    ocio: require('../img/icono_ocio.png'),
}

const GastoItem = ({ gasto, setGasto, setModal }) => {
    const { nombreGasto, cantidadGasto, categoriaGasto, fecha } = gasto;

    const handleModal = () => {
        setModal(true);
        setGasto(gasto);
    }

    return (
        <Pressable onPress={handleModal}>

            <View style={styles.contenedor}>
                <View style={styles.card}>
                    <View style={styles.cardInfo}>
                        <View style={styles.cardImage} >
                            <View>
                                <Image style={styles.imagen} source={iconos[categoriaGasto]} />
                            </View>
                            <View>
                                <View style={styles.viewCardTitle}>
                                    <Text style={styles.cardTitulo}>{nombreGasto}</Text>
                                </View>

                                <Text style={styles.cardTexto}>{categoriaGasto}</Text>
                                <Text style={styles.textoFecha}>{formaterFecha(fecha)}</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.cardPrecio}>{moneda(cantidadGasto)}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </Pressable>
    )
};
const styles = StyleSheet.create({
    contenedor: {
       
        paddingBottom: 10,
    },
    card: {
        backgroundColor: '#fff',
        marginHorizontal: 20,
        paddingVertical: 30,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
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
        }]

    },
    cardInfo: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardImage: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    imagen: {
        width: 80,
        height: 80,
        marginRight: 10,
    },
    viewCardTitle: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    cardTitulo: {
        textTransform: 'uppercase',
        fontSize: 20,
        width : 150,

    },
    cardTexto: {
        fontSize: 18,
        color: '#959595',
        fontWeight: 'bold',
    },

    cardPrecio: {
        color: '#000',
        textTransform: 'uppercase',
        fontSize: 18,
        fontWeight: 'bold',
        display : 'flex'
    },
    textoFecha: {
        color: '#DC01AD',
        fontWeight: 'bold',
    },
})

export default GastoItem
