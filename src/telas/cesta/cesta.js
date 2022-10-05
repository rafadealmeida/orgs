import React from 'react'
import { Image, StyleSheet, Dimensions,Text, View } from 'react-native'


import logo from '../../../assets/logo.png'
import Texto from '../../components/Texto'
import Topo from '../cesta/components/Topo'

const width = Dimensions.get('screen').width

export default function Cesta() {
 return (
 <>
   <Topo/>

  <View style={estilos.cesta}>
   <Texto style={estilos.nome}>Cesta de Verdauras</Texto>
   <View style={estilos.fazenda}>
   <Image source={logo} style={estilos.imagemFazenda} />
   <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
   </View>
   <Texto style={estilos.descricao}>Uma cesta com produtos 
   selecionados cuidadosamentew da fazenda diretamente para a sua cozinha</Texto>
   <Texto style={estilos.preco}>R$ 40,00</Texto>
  </View>
 </>
 )
}

const estilos = StyleSheet.create({
  
   nome: {
    color:'#464646',
    fontSize:26,
    lineHeight: 42,
    fontWeight:'bold'
   },
   cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
   },
   fazenda: {
    flexDirection: 'row',
    paddingVertical: 12,
   },
   nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
   },
   imagemFazenda: {
      width: 32,
      height: 32,
   },
   descricao: {
    color:'#A3A3A3',
    fontSize: 16,
    lineHeight: 26
   },
   preco: {
    color: "#2A9F85",
    fontWeight : 'bold',
    fontSize : 26,
    lineHeight: 42,
    marginTop: 8
   }
   
})