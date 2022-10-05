import React from 'react'
import { Image, StyleSheet,Dimensions } from 'react-native'
import imagemTopo from '../../../../assets/topo.png'
import Texto from '../../../components/Texto'

const width = Dimensions.get('screen').width

export default function Topo() {
 return  <>
     <Image source={imagemTopo} style={estilos.imagemTopo} />
     <Texto  style={estilos.titulo}>Detalhe do produtos</Texto>
     </> ;
}

const estilos = StyleSheet.create({
 imagemTopo: {
  width: '100%',
  height: 578 / 768 * width
 },
 titulo: {
  width: '100%',
  textAlign: 'center',
  position: 'absolute',
  fontSize:16,
  lineHeight: 26,
  color: 'white',
  fontWeight: 'bold',
  padding: 16,
 },
})
