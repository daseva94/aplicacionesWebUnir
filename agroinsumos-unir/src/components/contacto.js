import React, {Component} from "react";
import "../styles/estilo1.css";

class Contacto extends Component {

    render(){
        return (
            <div className="cuerpo-2">
                <ul>Contactanos: 
                    <li>contacto</li>
                    <li>contacto</li>
                    <li>Estamos ubicacos en:
                    <div className="mapouter">
                        <div className="gmap_canvas">
                            <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=yopal&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                            <a href="https://fmovies-online.net"></a>
                            <br/>
                            <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
                        </div>
                    </div>
                    </li>
                </ul>

                
            </div>
        )
    }

}

export default Contacto;
