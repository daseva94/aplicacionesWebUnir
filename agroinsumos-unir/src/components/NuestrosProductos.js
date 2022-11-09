import React, {Component} from "react";
import "../styles/estilo1.css";

class NuestrosProductos extends Component {

    render(){
        return (
            <div className="cuerpo-2">
                <h1 className="tituloCuerpo2">Tipos de plagas y servicios de erradicación</h1>

                <section className="barraDeBusqueda">
                    <label for="buscar" className="buscar" >Buscar:</label>
                    <input id="buscar" placeholder="Escriba una palabra clave"></input>
                </section>

                <section className="diccionario">
                    <div className="objeto-diccionario">
                        <img className="objeto-dic-img" src="#"/>
                        <ul className="objeto-diccionario-ul">
                            <li>atributo1</li>
                            <li>atributo2</li>
                            <li>atributo3</li>
                        </ul>
                    </div>

                    <div className="objeto-diccionario">
                        <img className="objeto-dic-img" src="#"/>
                        <ul className="objeto-diccionario-ul">
                            <li>atributo1</li>
                            <li>atributo2</li>
                            <li>atributo3</li>
                        </ul>
                    </div>

                    <div className="objeto-diccionario">
                        <img className="objeto-dic-img" src="#"/>
                        <ul className="objeto-diccionario-ul">
                            <li>atributo1</li>
                            <li>atributo2</li>
                            <li>atributo3</li>
                        </ul>
                    </div>
                </section>
            </div>
        )
    }

}

export default NuestrosProductos;
