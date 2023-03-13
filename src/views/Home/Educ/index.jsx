import styles from "./styles.module.css"
import TitleSmall from "../../../components/TitleSmall/TitleSmall";
import ListEduc from "../../../components/Layout/List/ListEduc/ListEduc";
function Educ() {

    return (
        <div className={styles.Certi}>
            <TitleSmall title="Certificados" />
            <ul className={styles.List}>
                <ListEduc text="Front End Development Libraries"
                    small="freeCodeCamp"
                    link="https://www.freecodecamp.org/certification/finnzao/front-end-development-libraries"
                />

                <ListEduc text="Curso Web Moderno Completo"
                    small="Cod3r"
                    link="https://www.udemy.com/certificate/UC-d5f11dbb-a0f5-4ea5-9e3f-bd8d49152f29/"
                />
            </ul>
        </div>

    )
}


export default Educ;