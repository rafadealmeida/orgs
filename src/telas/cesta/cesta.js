import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'

import Topo from './components/Topo'
import Detalhes  from "./components/Detalhes";
import Itens from './components/Itens';

export default function Cesta() {
 return (
 <ScrollView>
   <Topo/>


   <View style={estilos.cesta}>
      <Detalhes/>
      <Itens/>
   </View>
   
 </ScrollView>
 )
}

const estilos = StyleSheet.create({
   cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
   },
})