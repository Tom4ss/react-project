import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";
import { GithubSecao } from "./styles";

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nemo, aliquam fugiat soluta atque, quaerat totam iste repudiandae perspiciatis quod ipsam facilis consequuntur fuga, ex doloribus eligendi nihil magni explicabo?
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=54m07&layout=compact&theme=dracula" alt="Top Languages" />
      <img src="https://github-readme-stats.vercel.app/api?username=54m07&show_icons=true&theme=dracula" alt="GitHub Stats" />
    </GithubSecao>
  </section>
)

export default Sobre
