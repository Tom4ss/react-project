import styled from "styled-components"
import Paragrafo from "../Paragrafo"
import Titulo from "../Titulo"
import { Card, LinkBotao } from "./styles"

const Projeto = () => {
  return (
    <Card>
    <Titulo>Projeto Lista de tarefas</Titulo>
    <Paragrafo tipo="secundario">
        Lista de tarefas feitas com VueJs
    </Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
  )
}

export default Projeto
