import TittleProfile from "../../../components/TittleProfile/Title"
import AboutMeTitle from "../../../components/AboutMeTittle/AboutMeTittle"
import styles from "./styles.module.css"

function Tittle() {

    return (
        <div className={styles.Tittle}>
            <TittleProfile name="Felipe" text="Programador FullStack" />
            <AboutMeTitle text="Olá! Me chamo Felipe ,e sou um Desenvolvedor Web  nascido no Brasil" />
            <div className={styles.linguagem}>
                <a className="mouseDefault" >
                    <img src="https://skillicons.dev/icons?i=git,js,php,python,mysql,react" />
                    <img src="https://skillicons.dev/icons?i=mongodb,linux,express,nodejs,css,html" />
                </a>
            </div>
        </div>
    )
}


export default Tittle;