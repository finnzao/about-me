import React from 'react';
import Item from '../Item/Item';
import Buttonblue from "../../Buttons/buttonblue/buttonblue";
import styles from "./List.module.css"
function List() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Projetos</h1>
            <Item
                title="Sistema Delivery (fullStacK)"
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
                title="Autênticação de Login MERN Stack(fullStacK)"
                text="Input de usuário e senha com autenticação de login usando a Stack MERN ( React , Node, Express, MongoDB).Nesse projeto foi usado também frameworks como Bcrypt para criptografia das senhas, e Jsonwebtoken para verificação do token de usuário logado "
                link="https://github.com/finnzao/ReactJsLoginSystem"
                list={
                    [
                        <img src="https://skillicons.dev/icons?i=react"></img>,
                        <img src="https://skillicons.dev/icons?i=mongodb"></img>,
                        <img src="https://skillicons.dev/icons?i=nodejs"></img>,
                        <img src="https://skillicons.dev/icons?i=express"></img>,


                    ]
                }
            />

            <Item
                title="Autênticação de Login "
                text="Pagina de login com validação de data. Usado localStorage para armazenamento dos usuários"
                link="https://react-js-login-system.vercel.app"
                list={
                    [


                        <img src="https://skillicons.dev/icons?i=react"></img>,



                    ]
                }
            />

            <Item
                title="Autênticação de Login (BackEnd Only)"
                text="AuthLoginNode( Model-View-Controller) usando NodeJS,Express,mongodb"
                link="https://github.com/finnzao/auth_jwt_node"
                list={
                    [

                        <img src="https://skillicons.dev/icons?i=mongodb"></img>,
                        <img src="https://skillicons.dev/icons?i=nodejs"></img>,
                        <img src="https://skillicons.dev/icons?i=express"></img>,


                    ]
                }
            />

            <Item
                title="CRUD NodeJS (BackEnd Only)"
                text="API RESTful usando express usando express como funcionamento das requisições ,Mongo como banco de dados, e NodeJs como linguagem principal "
                link="https://github.com/finnzao/crudNodejs"
                list={
                    [

                        <img src="https://skillicons.dev/icons?i=mongodb"></img>,
                        <img src="https://skillicons.dev/icons?i=nodejs"></img>,
                        <img src="https://skillicons.dev/icons?i=express"></img>,


                    ]
                }
            />
            <Item
                title="CRUD react and jsonServer(fullStack)"
                text="Sistema CRUD com input para entrada de dados ,e visualização dos itens armazenados. Projeto com UI para melhor experência "
                link="https://github.com/finnzao/-user-registration"
                list={
                    [
                        <img alt='' src="https://skillicons.dev/icons?i=nextjs	"></img>,
                        <img alt='' src="https://skillicons.dev/icons?i=bootstrap"></img>,
                        <img alt='' src="https://skillicons.dev/icons?i=typescript"></img>,

                    ]
                }
            />

            <Item
                title="Pagína de Apresentação Restaurante(FrontEnd Only)"
                text="Simulação da apresentação de um restaurante"
                link="https://presentation-restaurant.vercel.app"
                list={
                    [
                        <img src="https://skillicons.dev/icons?i=react"></img>,
                        <img src="https://skillicons.dev/icons?i=bootstrap"></img>,


                    ]
                }
            />


            <Item
                title="Carrinho de compras Js Native"
                text="Carrinho de compras usando Js Native, com cálculo do valor total,e usando API contentful como banco de dados dos itens da loja."
                link="https://commerce-js-delta.vercel.app"
                list={
                    [
                        <img src="https://skillicons.dev/icons?i=js"></img>,
                        <img src="https://skillicons.dev/icons?i=bootstrap"></img>,
                        <img src="https://skillicons.dev/icons?i=html"></img>,
                        <img src="https://skillicons.dev/icons?i=css"></img>
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
                title="Ladding Page Produto"
                text="Ladding Page para produto na área farmacêutica"
                link="https://finnzao.github.io/pharmacy_land/"
                list={
                    [
                        <img src="https://skillicons.dev/icons?i=js"></img>,
                        <img src="https://skillicons.dev/icons?i=css"></img>,
                        <img src="https://skillicons.dev/icons?i=html"></img>,

                    ]
                }
            />

            <Item
                title="Ladding Page Dentista"
                text="Ladding Page para uma clínica de atendimento odontológico"
                link="https://dr-nathandantas.vercel.app"
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
