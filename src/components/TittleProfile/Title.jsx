import profilePic from "../../assets/profilepic.png"
import styles from "./Title.module.css"
function TittleProfile(props) {

    return (
        <div className={styles.TitleProfile}>
            <div className={styles.PicProfile}>
                <img src={profilePic} alt="" />
            </div>
            <h1>{props.name}</h1>
            <p>{props.text}</p>
        </div>

    )
}

export default TittleProfile;