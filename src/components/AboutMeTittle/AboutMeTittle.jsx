import styles from "./styles.module.css"
function TittleProfile(props) {

    return (
        <div className={styles.AboutMeTitle}>
            <p>{props.text}</p>
        </div>

    )
}

export default TittleProfile;