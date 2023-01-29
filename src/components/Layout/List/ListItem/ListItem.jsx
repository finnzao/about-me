import styles from "./style.module.css"

function ListItem(props) {

    return (
        <>
            <li className={styles.triangle}>{props.text}</li>
        </>
    )
}


export default ListItem;