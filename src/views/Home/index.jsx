import Tittle from "./Title/Title";
import Work from "./Work";
import Exp from "./Exp";
import Social from "./Social/";
import Educ from "./Educ"
import styles from "./style.module.css";
function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.Home}>
                <Tittle />
                <Work />
                <Exp />
                <Educ />
                <Social />
            </div>
        </div>
    )

}

export default Home;