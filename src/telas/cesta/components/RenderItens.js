import React, { useContext } from 'react'
import Texto from "../../../components/Texto";
import { View, Image, StyleSheet } from 'react-native'

export default function RenderItens({item}) {
 return <View key={item.nome} style={estilos.listaItens}>
    <Image source={item.imagem} style={estilos.imagem}/>
    <Texto style={estilos.nome}>{item.nome}</Texto>
   </View>
 
}

const estilos = StyleSheet.create({
 listaItens: {
  flexDirection:'row',
  borderBottomColor:'#ECECEC',
  borderBottomWidth:1,
  paddingVertical:16,
  marginHorizontal:16,
  alignItems: 'center'
 },
 imagem:{
  width:46,
  height:46,
 },
 nome: {
  fontSize:26,
  lineHeight:26,
  marginLeft:11,
  color:'#464646',
 }

})