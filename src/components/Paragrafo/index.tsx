import { P } from "./styles"

export type Props = {
  children: string
  tipo?: string
}

const Paragrafo = ({ children, tipo = 'principal' }: Props) => <P>{children}</P>


export default Paragrafo
