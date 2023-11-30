/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import { View, Text, StyleSheet } from "react-native"
import GastoItem from "./GastoItem";
const ListaGastos = ({ gastos, presupuesto, setPresupuesto, setGasto, setModal, gastosFiltrados, filtro }) => {

  return (
    <View style={styles.contenedor}>
      {(gastos.length === 0 || (gastosFiltrados.length === 0 && !!filtro)) ? (
        <Text style={styles.titulo}>No hay gastos</Text>
      ) : (
        <Text style={styles.titulo}>Lista de Gastos</Text>
      )}
      <View style={styles.gastosFlex}>
        {filtro ? gastosFiltrados.map(gasto => (
          <GastoItem key={gasto.id} gasto={gasto} presupuesto={presupuesto} setPresupuesto={setPresupuesto}
            setGasto={setGasto} setModal={setModal} />
        )) : gastos.map(gasto => (
          <GastoItem key={gasto.id} gasto={gasto} presupuesto={presupuesto} setPresupuesto={setPresupuesto}
            setGasto={setGasto} setModal={setModal} />
        ))}
      </View>


    </View>
  )
};

const styles = StyleSheet.create({
  contenedor: {
    marginTop: 60,
    marginBottom : 70,
  },
  titulo: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFF',
  },
  gastosFlex : {
    display : 'flex',
    flex : 1,
    gap : 20,
  },
})

export default ListaGastos
