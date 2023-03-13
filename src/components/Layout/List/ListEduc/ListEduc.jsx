import styles from "./style.module.css"

function ListEduc(props) {

    return (
        <>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <li className={styles.itemList}><span className={styles.largeText}>{props.text}</span>
                    <span className={styles.smallText}>{props.small}</span>
                </li>
            </a>
        </>
    )
}


export default ListEduc;