<<<<<<< HEAD
import TitleSmall from "../../../components/TitleSmall/TitleSmall";
import TextMedium from "../../../components/Texts/TextMedium/TextMedium";
import ButtonBlue from "../../../components/Buttons/buttonblue/buttonblue";
import styles from "./styles.module.css"
import { Link } from "react-router-dom";
function Work() {
    return (

        <div className={styles.Work}>
            <TitleSmall title="Sobre mim" />
            <TextMedium text="Iniciando a carreira como Freelancer ,e entregando projetos
reais voltado para criação de ladings pages e portfolios( de
empresas e clientes prestadores de serviços).
Uso da linguagem Js para os projetos de freelance ,usando
framework ReactJs como frontend, e Nodejs como backend na
maioria dos projetos.
Experiência no uso das Linguagens JavaScript,Python,PHP , e
com banco de dados relacionados .Envolvendo tratamento de
dados,CRUD,Sistema de login (AUTH JWT) ,Sistema de registros
de usuários (MYSQL, NodeJS). Todos os projetos são
divulgados no GitHub." />
            <Link to="/port">
                <ButtonBlue text="Projetos" />
            </Link>
        </div>
    )
}

=======
import TitleSmall from "../../../components/TitleSmall/TitleSmall";
import TextMedium from "../../../components/Texts/TextMedium/TextMedium";
import ButtonBlue from "../../../components/Buttons/buttonblue/buttonblue";
import styles from "./styles.module.css"
import { Link } from "react-router-dom";
function Work() {
    return (

        <div className={styles.Work}>
            <TitleSmall title="Sobre mim" />
            <TextMedium text="Iniciando a carreira como Freelancer ,e entregando projetos
reais voltado para criação de ladings pages e portfolios( de
empresas e clientes prestadores de serviços).
Uso da linguagem Js para os projetos de freelance ,usando
framework ReactJs como frontend, e Nodejs como backend na
maioria dos projetos.
Experiência no uso das Linguagens JavaScript,Python,PHP , e
com banco de dados relacionados .Envolvendo tratamento de
dados,CRUD,Sistema de login (AUTH JWT) ,Sistema de registros
de usuários (MYSQL, NodeJS). Todos os projetos são
divulgados no GitHub." />
            <Link to="/port">
                <ButtonBlue text="Projetos" />
            </Link>
        </div>
    )
}

>>>>>>> d526fa272ed52c5957150f6feb0afff7f2520ff3
export default Work;