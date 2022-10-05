import React,{useContext} from 'react'
import { Image, StyleSheet, Dimensions,Text, View } from 'react-native'
import Texto from '../../../components/Texto';
import logo from '../../../../assets/logo.png';
import { CestaContext } from '../../../mocks/cesta';


export default function Detalhes () {

   const cestaContext = useContext(CestaContext)
   const {cesta} = cestaContext
   
 return <>
  <Texto style={estilos.nome}>{cestaContext.detalhes.nome}</Texto>
  <View style={estilos.fazenda}>
  <Image source={cestaContext.detalhes.logoFazenda} style={estilos.imagemFazenda} />
  <Texto style={estilos.nomeFazenda}>{cestaContext.detalhes.nomeFazenda}</Texto>
  </View>
  <Texto style={estilos.descricao}>{cestaContext.detalhes.descricao}</Texto>
  <Texto style={estilos.preco}>{cestaContext.detalhes.preco}</Texto>
  </>

 

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