import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
    <Avatar />
    <Titulo fontSize={20}>Tomás Santana</Titulo>
    <Paragrafo tipo="secundario" font-size={16}>54M07</Paragrafo>
    <Descricao tipo="principal" fontSize={12}>Engenheiro Front-End</Descricao>
    <BotaoTema>Trocar Tema</BotaoTema>

    </SidebarContainer>
  </aside>
)

export default Sidebar
