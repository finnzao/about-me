import styles from "./style.module.css"

function ListItem(props) {

    return (
        <>
            <li className={styles.itemList}><span>{props.img}</span>{props.text}</li>
        </>
    )
}


export default ListItem;