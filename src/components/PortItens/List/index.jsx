import React from 'react';
import Item from '../Item/Item';
import Buttonblue from "../../Buttons/buttonblue/buttonblue";
import styles from "./List.module.css"
function List() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Projetos</h1>
            <Item
                title="Sistema Delivery"
                text="Sistema de entrega baseado em NextJs e MongoDB
                Com a disposição de dashboard administrativo, através do acesso de uma pagina de login , assim é possível usar de um sistema CRUD para personalizar de forma livre os produtos. "
                link="https://github.com/finnzao/foodreact"
                list={
                    [
                        <img src="https://skillicons.dev/icons?i=react"></img>,
                        <img src="https://skillicons.dev/icons?i=mongodb"></img>,
                        <img src="https://skillicons.dev/icons?i=nodejs"></img>,
                        <img src="https://skillicons.dev/icons?i=bootstrap"></img>,
                        <img src="https://skillicons.dev/icons?i=typescript"></img>,

                    ]
                }
            />

            <Item
                title="Portfolio Design"
                text="Portfolio para um profissional de design com diretórios dedicados para portfólio e sobre mim"
                link="https://react-port-js.vercel.app"
                list={
                    [
                        <img alt='' src="https://skillicons.dev/icons?i=nextjs	"></img>,
                        <img alt='' src="https://skillicons.dev/icons?i=bootstrap"></img>,
                        <img alt='' src="https://skillicons.dev/icons?i=typescript"></img>,

                    ]
                }
            />

            <Item
                title="Ladding Page"
                text="Modelo de uma das Ladding Page,usando JavaScript com HTML E CSS"
                link="https://land-dentist.vercel.app"
                list={
                    [
                        <img src="https://skillicons.dev/icons?i=js"></img>,
                        <img src="https://skillicons.dev/icons?i=css"></img>,
                        <img src="https://skillicons.dev/icons?i=html"></img>,

                    ]
                }
            />
            <Buttonblue text="Repositório GitHub" link="https://github.com/finnzao?tab=repositories" />
        </div>
    )
}

export default List;