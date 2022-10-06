import logo from '../../assets/logo.png';
import { createContext } from 'react';
import Tomate from '../../assets/frutas/Tomate.png';
import Brocolis from '../../assets/frutas/Brócolis.png';
import Pepino from '../../assets/frutas/Pepino.png';
import Abobora from '../../assets/frutas/Abóbora.png';
import Batata from '../../assets/frutas/Batata.png'


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
  preco: 'R$ 40,00',
  botao: "Comprar",
 },
 itens: {
  titulo: "Itens da cesta",
  lista: [
    {
      nome: "Tomate",
      imagem: Tomate,
    },
    {
      nome: "Brócolis",
      imagem: Brocolis,
    },
    {
      nome: "Batata",
      imagem: Batata,
    },
    {
      nome: "Pepino",
      imagem: Pepino,
    },
    {
      nome: "Abóbora",
      imagem: Abobora,
    }
  ]
}
}
