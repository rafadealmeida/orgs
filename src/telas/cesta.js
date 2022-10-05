import React from 'react'
import { Image, StyleSheet, Dimensions,Text, View } from 'react-native'

import imagemTopo from '../../assets/topo.png'
import logo from '../../assets/logo.png'

const width = Dimensions.get('screen').width

export default function Cesta() {
 return (
 <>
  <Image source={imagemTopo} style={estilos.imagemTopo} />
  <Text  style={estilos.titulo} >Detalhe do produtos</Text>

  <View style={estilos.cesta}>
   <Text style={estilos.nome}>Cesta de Verdauras</Text>
   <View style={estilos.fazenda}>
   <Image source={logo} style={estilos.imagemFazenda} />
   <Text style={estilos.nomeFazenda}>Jenny Jack Farm</Text>
   </View>
   <Text style={estilos.descricao}>Uma cesta com produtos selecionados cuidadosamentew da fazenda diretamente para a sua cozinha</Text>
   <Text style={estilos.preco}>R$ 40,00</Text>
  </View>
 </>
 )
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
   nome: {
    color:'#464646',
    fontSize:26,
    lineHeight: 42,
    fontWeight: 'bold',
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