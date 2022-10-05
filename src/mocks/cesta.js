import logo from '../../assets/logo.png'
import { createContext } from 'react'


export const CestaContext = createContext()

export const cesta = {
 topo:{
  titulo: 'Detalhe da cesta'
 },
 detalhes:{
  nome: 'Cesta de Verdauras',
  logoFazenda: logo,
  nomeFazenda:"Jenny Jack Farm",
  descricao: 'Uma cesta com produtos selecionados cuidadosamentew da fazenda diretamente para a sua cozinha',
  preco: 'R$ 40,00'
 }
}
