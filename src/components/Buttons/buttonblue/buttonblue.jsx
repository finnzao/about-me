import styles from "./style.module.css"
function ButtonBlue(props) {
    return (
        <div className={styles.buttonDiv}>
            <a href={props.link} target="_blank" rel="noopener noreferrer"><button class={`${styles.bn632_hover} ${styles.bn26}`} a>{props.text}</button></a>
        </div >

    )
}

export default ButtonBlue;