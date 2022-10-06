import React, { useContext } from 'react'
import Texto from "../../../components/Texto";
import { CestaContext } from '../../../mocks/cesta';
import { View, Image, StyleSheet } from 'react-native'



export default function Itens() {
 const cestaContext = useContext(CestaContext)
 const { cesta } = cestaContext

 return <>
  <Texto style={estilos.titulo}>
   {cestaContext.itens.titulo}
  </Texto>
  {cestaContext.itens.lista.map((item) => {
   return <View key={item.nome} style={estilos.listaItens}>
    <Image source={item.imagem} style={estilos.imagem}/>
    <Texto style={estilos.nome}>{item.nome}</Texto>
   </View>
  })}
 </>

}

const estilos = StyleSheet.create({
 listaItens: {
  flexDirection:'row',
  borderBottomColor:'#ECECEC',
  borderBottomWidth:1,
  paddingVertical:16,
  alignItems: 'center'
 },
 titulo: {
  color:'#464646',
  fontSize:20,
  marginTop:32,
  marginBottom:0,
  fontWeight:'bold',
  lineHeight:32,
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