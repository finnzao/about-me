import styles from "./styles.module.css"
import TitleSmall from "../../../components/TitleSmall/TitleSmall";
import ListItem from "../../../components/Layout/List/ListItem/ListItem";
function Exp() {

    return (
        <div className={styles.Exp}>
            <TitleSmall title="Experiências" />
            <ul className={styles.List}>
                <ListItem text="Familiarizado com programação orientada a objetos" />
                <ListItem text="Autenticação JWT" />
                <ListItem text="Sistemas CRUD em NodeJS,React,PHP" />
                <ListItem text="Ladding Pages e Portifolios" />
                <ListItem text="Familiarizado com Manipulação de dados SQL" />
                <ListItem text="Manipulação de arquivos PHP  na CMS NuvemShop" />
                <ListItem text="Comando de diretorios servidores Linux" />
            </ul>
        </div>

    )
}


export default Exp;