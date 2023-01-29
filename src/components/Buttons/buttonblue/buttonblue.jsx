import styles from "./style.module.css"
function ButtonBlue(props) {
    return (
        <div className={styles.buttonDiv}>
            <a href={props.link}><button class={`${styles.bn632_hover} ${styles.bn26}`}>{props.text}</button></a>
        </div >

    )
}

export default ButtonBlue;