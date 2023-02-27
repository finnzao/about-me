import styles from "./style.css.module.css"

function TextMedium(props) {
    return (

        <div className={styles.TextMedium}>
            <p>{props.text}</p>
        </div>
    )

}

export default TextMedium;