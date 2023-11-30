/* eslint-disable prettier/prettier */

/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

const Header = () => {
  return (


      <View style={styles.header}>
        <Text style={styles.titulo} >Planificador de </Text>
        <Text style={styles.titulo}>Gastos</Text>
      </View>

  )
}

const styles = StyleSheet.create({
  titulo: {
    textAlign: 'center',

    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 30,
    fontWeight: 'bold',

  },
  header: {
    paddingVertical: 20,
    flex: 1,
  },

})
export default Header
