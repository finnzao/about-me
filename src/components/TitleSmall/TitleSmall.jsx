import styles from "./TitleSmall.module.css"

function TitleSmall(props) {

    return (
        <div className={styles.TitleSmall}>
            <h3>{props.title}</h3>
        </div>
    )

}

export default TitleSmall;