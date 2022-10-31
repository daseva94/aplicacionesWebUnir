import React from "react";
/* Importando Componentes */
import HeaderP from "./components/header";
import BodyP from "./components/body";
import FooterP from "./components/footer";
/* Importando estilos */
import "./styles/estilo1.css";

export const MainApp = () => {
    return(
        <div>

            <header>
                <HeaderP></HeaderP>             
            </header>

            <body>
                <BodyP></BodyP>
            </body>

            <footer>
                {/* <FooterP></FooterP> */}
            </footer>

        </div>

    )
};