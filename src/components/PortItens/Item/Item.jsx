import styles from "./Item.module.css"
function Item(props) {
    let itens = props.list;
    let n = 0

    return (
        <>
            <a className={styles.link} href={props.link} target="_blank" rel="noopener noreferrer">
                <div id="div" className={styles.Container}>
                    <h2>{props.title}</h2>
                    <div className={styles.text}>{props.text}</div>
                    <ul className={styles.list}>
                        {itens.map((item) => (

                            < li > {item}</li>
                        ))}

                    </ul>
                </div>
            </a>
        </>

    )
}

export default Item;