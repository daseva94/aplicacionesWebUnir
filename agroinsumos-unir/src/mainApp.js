import React from "react";
/* Importando Componentes */
import HeaderP from "./components/header";
import BodyP from "./components/body";
import FooterP from "./components/footer";
/* Importando estilos */
import "./styles/estilo1.css";


export const MainApp = () => {
    return(
        

            

            <body>
            <header>
                <HeaderP></HeaderP>             
            </header>
                <BodyP></BodyP>
            <footer>
                <FooterP></FooterP>
            </footer>
            </body>

            

        

    )
};