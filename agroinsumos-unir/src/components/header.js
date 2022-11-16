import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import "../styles/header-footer.css"


class HeaderP extends Component {

    render(){
        return (
            <header>
                    <div className="div-logo">
                        <img src={process.env.PUBLIC_URL + "/logo192.png"} />
                    </div>
                    <nav className="nav-menu">
                        <ul className="menu">
                            <li><NavLink to={"/"} className={(navData => navData.isActive ? "active" : "noActive")}>Inicio</NavLink></li>
                            <li><NavLink to={"/quienesSomos"} className={(navData => navData.isActive ? "active" : "noActive")}>Quienes Somos</NavLink></li>
                            <li><NavLink to={"/NuestrosProductos"} className={(navData => navData.isActive ? "active" : "noActive")}>Nuestros Productos</NavLink></li>
                            <li><NavLink to={"/diccionarioPlagas"} className={(navData => navData.isActive ? "active" : "noActive")}>Diccionario</NavLink></li>
                            <li><NavLink to={"/contacto"} className={(navData => navData.isActive ? "active" : "noActive")}>Contacto</NavLink></li>
                        </ul>
                    </nav>
                    
                    
                
            </header>
        )
    }

}

export default HeaderP;