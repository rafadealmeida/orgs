import React, { useContext } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import RenderItens from './components/RenderItens'
import { CestaContext } from '../../mocks/cesta'

import Topo from './components/Topo'
import Detalhes from "./components/Detalhes";
import Texto from '../../components/Texto'

export default function Cesta() {
   const cestaContext = useContext(CestaContext)
   const { itens } = cestaContext
   return <>
      <FlatList
         data={itens.lista}
         renderItem={RenderItens}
         keyExtractor={itens.lista.nome}
         ListHeaderComponent={() => {
            return <>
               <Topo />
               <View style={estilos.cesta}>
                  <Detalhes />
                  <Texto style={estilos.titulo}>
                     {itens.titulo}
                  </Texto>
               </View>
            </>
         }}
      />

   </>

}

const estilos = StyleSheet.create({
   cesta: {
      paddingVertical: 8,
      paddingHorizontal: 16,
   }, 
   titulo: {
      color:'#464646',
      fontSize:20,
      marginTop:32,
      marginBottom:0,
      fontWeight:'bold',
      lineHeight:32,
     },
})
