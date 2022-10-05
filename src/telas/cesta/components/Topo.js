import React,{useContext} from 'react'
import { Image, StyleSheet,Dimensions } from 'react-native'
import imagemTopo from '../../../../assets/topo.png'
import Texto from '../../../components/Texto'
import { CestaContext } from '../../../mocks/cesta'

const width = Dimensions.get('screen').width


export default function Topo() {
    const cestaContext = useContext(CestaContext)
    const {cesta} = cestaContext
    
 
 return  <>
     <Image source={imagemTopo} style={estilos.imagemTopo} />
     <Texto  style={estilos.titulo}>{cestaContext.topo.titulo}</Texto>
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
