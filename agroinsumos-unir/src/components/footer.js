import React, {Component} from "react";
import "../styles/header-footer.css"

class FooterP extends Component {

    render(){
        return (
        
        
        <div>
           

            <nav className="nav-menu">
                
            </nav>
            <div className="div-logo2">
                <img className="logo2" src={process.env.PUBLIC_URL + "/logo2.png"} />
                <p className="sublogo">Trabajando por la sanidad de los cultivos colombianos.</p>
            </div>

            <ul>
                <li><h2>Contactos</h2></li>
                <li>3331231122</li>
                <li>contacto@contacto.com</li>
            </ul>


        </div>
        )
    }

}

export default FooterP;