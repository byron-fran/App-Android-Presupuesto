/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react'
import { View, Text, Pressable, TextInput, StyleSheet, StatusBar } from 'react-native'
import { Picker } from '@react-native-picker/picker';


const FormularioGasto = ({ setModal, agregarGasto, setGasto, gasto, eliminarGasto }) => {
    const [nombreGasto, setNombreGasto] = useState('');
    const [cantidadGasto, setCantidadGasto] = useState('');
    const [categoriaGasto, setCategoriaGasto] = useState('');
    const [id, setId] = useState('')
    const [fecha, setFecha] = useState('')

    useEffect(() => {
        if (gasto?.nombreGasto) {
            setNombreGasto(gasto.nombreGasto);
            setCantidadGasto(gasto.cantidadGasto);
            setCategoriaGasto(gasto.categoriaGasto);
            setId(gasto.id)
            setFecha(gasto.fecha)
            return
        }
        setCantidadGasto('')
        setNombreGasto('')
        setCantidadGasto('')
        setId('')
        setFecha('')
        return () => {
            setCantidadGasto('')
            setNombreGasto('')
            setCantidadGasto('')
            setId('')
            setFecha('')
        }
    }, [gasto])



    return (
        <View style={styles.screen}>
            <StatusBar backgroundColor='#033495' />
            <View style={styles.contendorBotones}>
                <Pressable style={styles.btnCerrar}
                    onPress={() => {
                        setModal(false)
                        setGasto({})
                    }}><Text style={styles.btnCerrarTexto}>Cancelar
                    </Text>
                </Pressable>

                {!!id && (

                    <Pressable style={{
                        ...styles.btnCerrar,
                        backgroundColor: 'red',
                    }}
                        onPress={() => {
                            eliminarGasto(id)
                        }}  ><Text style={styles.btnCerrarTexto}>Borrar
                        </Text>
                    </Pressable>

                )}

            </View>
            <View style={styles.contendor} >

                <Text style={styles.titulo}> {gasto?.nombreGasto ? 'Editar Gasto' : 'Nuevo Gasto'}</Text>
                <View>
                    <Text style={styles.textoLabel}>Nombre de gasto</Text>
                    <TextInput style={styles.textoInput} placeholder='nombre del gasto'
                        value={nombreGasto}
                        onChangeText={setNombreGasto} />
                </View>
                <View>
                    <Text style={styles.textoLabel}>Cantidad gasto</Text>
                    <TextInput style={styles.textoInput} placeholder='Cantidad del gasto' keyboardType='numeric'
                        value={cantidadGasto}
                        onChangeText={setCantidadGasto} />
                </View>
                <View>
                    <Text style={styles.textoLabel}>Categoria Gasto</Text>

                    <Picker
                        selectedValue={categoriaGasto}
                        onValueChange={(value) => {
                            setCategoriaGasto(value)
                        }}>
                        <Picker.Item style={styles.textoInput} label='--seleccione--' value='' />
                        <Picker.Item style={styles.textoInput} label='Ahorro' value='ahorro' />
                        <Picker.Item style={styles.textoInput} label='Comida' value='comida' />
                        <Picker.Item style={styles.textoInput} label='Suscripcion' value='suscripciones' />
                        <Picker.Item style={styles.textoInput} label='Casa' value='casa' />
                        <Picker.Item style={styles.textoInput} label='Otros Gastos' value='otrosGastos' />
                        <Picker.Item style={styles.textoInput} label='Salud' value='salud' />
                        <Picker.Item style={styles.textoInput} label='Ocio' value='ocio' />

                    </Picker>
                </View>
                <Pressable style={styles.btnSubmit}>
                    <Text style={styles.btnSubmitTexto}
                        onPress={() => {
                            agregarGasto({
                                nombreGasto,
                                cantidadGasto,
                                categoriaGasto,
                                fecha, id,
                            })
                            setModal(false)
                        }}>{gasto?.nombreGasto ? 'Guardar Cambios' : 'Agregar'}</Text>
                </Pressable>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#033495',
        flex: 1,
    },
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
    contendorBotones: {
        flexDirection: 'row',
        justifyContent: 'space-around',


    },
    titulo: {
        textAlign: 'center',
        fontSize: 20,
        textTransform: 'uppercase',
        marginVertical: 10,

    },
    textoLabel: {
        marginHorizontal: 20,
        textTransform: 'uppercase',
        color: 'gray',
        fontWeight: 'bold',
    },
    btnSubmit: {
        backgroundColor: '#033495',
        padding: 10,
        borderRadius: 10,
        marginVertical: 15,
    },
    btnSubmitTexto: {
        color: '#fff',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    textoInput: {
        marginHorizontal: 15,
        paddingVertical: 20,
    },
    btnCerrar: {
        backgroundColor: '#D00787',
        marginTop: 30,
        padding: 15,
        marginHorizontal: 15,
        borderRadius: 10,



    },
    btnCerrarTexto: {
        color: '#fff',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',

    },
})

export default FormularioGasto
