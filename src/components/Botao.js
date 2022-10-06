import React from 'react'
import { StyleSheet, TouchableOpacity} from 'react-native'
import Texto from './Texto'


export default function Botao({children, style}){
return <TouchableOpacity style={[style,estilos.botao]}>
{children}
</TouchableOpacity>

}


const estilos = StyleSheet.create({
botao: {
 marginTop: 16,
 backgroundColor:'#2A9F85',
 paddingVertical:16,
 borderRadius:6,
},

})