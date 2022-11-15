import React, {Component} from "react";
/* Importando Componentes */
import HeaderP from "./components/header";
import AppRouter from "./router/AppRouter";
import FooterP from "./components/footer";
/* Importando estilos */
import "./styles/estilo1.css";


export const MainApp = () => {
    return(
            <div>
                <AppRouter></AppRouter>
            <footer>
                <FooterP></FooterP>
            </footer>
            </div>
    )
};