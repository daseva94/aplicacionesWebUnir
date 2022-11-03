import React, {Component} from "react";
import "../styles/header-footer.css"

class FooterP extends Component {

    render(){
        return (
        
        
        <footer>
           

            
            <div className="div-logo2">
                <img className="logo2" src={process.env.PUBLIC_URL + "/logo2.png"} />
            </div>
            <div className="sublogo">
                <p>Trabajando por la sanidad de los cultivos colombianos.</p>
            </div>
            
            <nav className="contacto">
                <ul className="info-contacto">
                    <li><h2>Contactos</h2></li>
                    <li>3331231122</li>
                    <li>contacto@contacto.com</li>
                 </ul>
            </nav>
            


        </footer>
        )
    }

}

export default FooterP;