import Tittle from "./Title/Title";
import Work from "./Work";
import Exp from "./Exp";
import styles from "./style.module.css"
function Home() {
    return (
        <div className={styles.Home}>
            <Tittle />
            <Work />
            <Exp />
        </div>
    )

}

export default Home;