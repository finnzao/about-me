import TittleProfile from "../../../components/TittleProfile/Title"
import AboutMeTitle from "../../../components/AboutMeTittle/AboutMeTittle"
import styles from "./styles.module.css"

function Tittle() {

    return (
        <div className={styles.Tittle}>
            <TittleProfile name="Felipe" text="Programador FullStack" />
            <AboutMeTitle text="Olá,Sou um Desenvolvedor Web  nascido no Brasil" />
        </div>
    )
}


export default Tittle;