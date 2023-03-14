import styles from "./style.module.css"

function ListEduc(props) {

    return (
        <>
            
                <li className={styles.itemList}>
                <a className={styles.linkList} href={props.link} target="_blank" rel="noopener noreferrer">
                <span className={styles.largeText}>{props.text}</span>
                    <span className={styles.smallText}>{props.small}</span>
                    </a>
                </li>
            
        </>
    )
}


export default ListEduc;