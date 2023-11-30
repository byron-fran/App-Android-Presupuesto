/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { View, StyleSheet, Alert, Pressable, Image, Modal, ScrollView, StatusBar, Text } from 'react-native'
import Header from './src/components/Header'
import NuevoPresupuesto from './src/components/NuevoPresupuesto'
import ControlPresupuesto from './src/components/ControlPresupuesto'
import FormularioGasto from './src/components/FormularioGasto'
import { generarID } from './src/helpers/generarId';
import ListaGastos from './src/components/ListaGastos'
import Filtro from './src/components/Filtro'
const App = () => {
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [presupuesto, setPresupuesto] = useState(0);
  const [modal, setModal] = useState(false);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [filtro, setFiltro] = useState('');
  const [gastosFiltrados, setGastosFiltrados] = useState([]);


  useEffect(() => {
    const obtenerPresupuesto = async () => {
      try {
        const presupuestoObtenido = await AsyncStorage.getItem('presupuesto') ?? 0;
        if (presupuestoObtenido > 0) {
          setPresupuesto(presupuestoObtenido);
          setIsValidPresupuesto(true)
        }
      }
      catch (erro) {
        console.log(erro);
      }

    }
    obtenerPresupuesto()

  }, [])

  useEffect(() => {
    const obtenerGastos = async () => {
      try {
        const gastosObtenidos = await AsyncStorage.getItem('gastos');
        setGastos(gastosObtenidos ? JSON.parse(gastosObtenidos) : [])

      }
      catch (err) {
        console.log(err)
      }
    }
    obtenerGastos()

  }, [])
  //guardar el presupuesto en async Storage
  useEffect(() => {
    if (isValidPresupuesto) {
      const guardarPresupuesto = async () => {
        try {
          await AsyncStorage.setItem('presupuesto', presupuesto)
        }
        catch (error) {
          console.log(error)
        }
      }
      guardarPresupuesto()
    }

  }, [isValidPresupuesto]);



  //Guardar los gastos en asyncStorage 

  useEffect(() => {
    const guardarGastos = async () => {
      try {
        await AsyncStorage.setItem('gastos', JSON.stringify(gastos))
      }
      catch (err) {
        console.log(err)
      }
    }
    guardarGastos()
  }, [gastos])

  const handlePresupuesto = (presupuesto) => {
    if (Number(presupuesto) > 0) {

      setIsValidPresupuesto(true)
    }
    else {

      Alert.alert('error', 'Número no válido')
    }

  }
  //Agregar gasto
  const agregarGasto = gasto => {
    if ([gasto.nombreGasto, gasto.cantidadGasto, gasto.categoriaGasto].includes('')) {
      Alert.alert('Gasto no válido', 'Todos los campos son obligatorios')
      return
    }
    //Agregar al areglo

    if (gasto.id) {
      const gastosActualizados = gastos.map(gastoState => {
        if (gastoState.id === gasto.id) {
          return gasto
        }
        else {
          return gastoState
        }
      })
      setGastos(gastosActualizados)
    }
    else {
      gasto.fecha = Date.now()
      gasto.id = generarID()
      setGastos([...gastos, gasto])
    }

  }

  //elimanr gasto
  const eliminarGasto = id => {
    Alert.alert('Deseas eliminar este gasto',
      'No se podrá recuperar',
      [
        { text: 'cancelar', },
        {
          text: 'Sí, Eliminar', onPress: () => {
            const gastosActualizados = gastos.filter(gasto => gasto.id !== id);
            setGastos(gastosActualizados);

            setGasto({})

            setModal(false)
          }
        }])
  }

  const resetApp = () => {
    Alert.alert('Estas seguro de reniciar al app?', 'Se borrarán todos los datos',
      [
        { text: 'cancelar' },
        {
          text: 'Sí, Reniciar', onPress: async () => {
            try {
              await AsyncStorage.clear();
              setIsValidPresupuesto(false);
              setGastos([]);
              setPresupuesto(0)

            }
            catch (err) {
              console.log(err)
            }
          }
        }
      ])
  }

  const handleModal = () => {
    setModal(!modal);
    setGasto({})
  }
  return (

    <View style={styles.header}>
      <StatusBar backgroundColor='#0DAFF6' />
      <ScrollView>
        <View style={styles.header}>

          <Header />
          {isValidPresupuesto ?
            (<ControlPresupuesto
              presupuesto={presupuesto}
              gastos={gastos}
              resetApp={resetApp} />
            ) :
            (<NuevoPresupuesto handlePresupuesto={handlePresupuesto}
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto} />)}

        </View>


        {isValidPresupuesto && (

          <>
            <Filtro filtro={filtro} setFiltro={setFiltro} gastos={gastos} setGastosFiltrados={setGastosFiltrados} />
            <Pressable
              onPress={handleModal}>

              <Text style={styles.textAdd}>+</Text>
            </Pressable>
          </>
        )}

        {isValidPresupuesto && (
          <ListaGastos gastos={gastos} presupuesto={presupuesto}
            setPresupuesto={setPresupuesto} setGasto={setGasto}
            setModal={setModal}
            gastosFiltrados={gastosFiltrados}
            filtro={filtro} />
        )}




        <Modal visible={modal}>
          <FormularioGasto
            setModal={setModal}
            agregarGasto={agregarGasto}
            setGasto={setGasto}
            gasto={gasto}
            eliminarGasto={eliminarGasto}
          />
        </Modal>
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0DAFF6',
    margin: 0,
    paddingTop: 10,
    flex: 1,
  },
  logo: {
    position: 'absolute',
    width: 40,
    height: 40,
    right: 10,
    bottom: -60,
    backgroundColor: '#fff'


  },
  textAdd: {
    position: 'absolute',
    width: 40,
    height: 40,
    right: 10,
    bottom: -60,
    backgroundColor: '#fff',
    color: '#0DAFF6',
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'center',
    borderRadius: 10
  }
})
export default App