import React, {Component} from "react";
import "../styles/estilo1.css";

class BodyP extends Component {

    render(){
        return (
            <section className="cuerpo">
                <h1 className="eslogan-titulo"><b>SANIDAD VEGETAL</b></h1>
                <section>
                    <p className="eslogan-body"><b>Trabajando por la sanidad de los cultivos colombianos</b></p>
                </section>
            </section>
        )
    }

}

export default BodyP;