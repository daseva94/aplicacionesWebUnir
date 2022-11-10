import React, {Component} from "react";
import "../styles/header-footer.css"


class HeaderP extends Component {

    render(){
        return (
            <header>

                    <nav className="nav-menu">
                        <ul className="menu">
                            <li><a href="/">Inicio</a></li>
                            <li><a href="#">Quienes Somos</a></li>
                            <li><a href="/NuestrosProductos">Nuestros Productos</a></li>
                        </ul>
                    </nav>
                    <div className="div-logo">
                        <img src={process.env.PUBLIC_URL + "/logo192.png"} />
                    </div>
                    
                
            </header>
        )
    }

}

export default HeaderP;