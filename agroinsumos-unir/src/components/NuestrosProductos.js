import React, {Component} from "react";
import "../styles/estilo1.css";

class NuestrosProductos extends Component {

    render(){
        return (
            <div className="cuerpo-2">
                <h1 className="tituloCuerpo2">Tipos de plagas y servicios de erradicación</h1>

                <section className="barraDeBusqueda">
                    <label htmlFor="buscar" className="buscar" >Buscar:</label>
                    <input id="buscar" placeholder="Escriba una palabra clave"></input>
                </section>
                <div className="diccionario">
                    <object>
                            <img className="objeto-dic-img" src="#"/>
                            <ul className="diccionario-ul">
                                <li>atributo1</li>
                                <li>atributo2</li>
                                <li>atributo3</li>
                            </ul>
                    </object>
                    <object>
                            <img className="objeto-dic-img" src="#"/>
                            <ul className="diccionario-ul">
                                <li>atributo1</li>
                                <li>atributo2</li>
                                <li>atributo3</li>
                            </ul>
                    </object>
                    <object>
                            <img className="objeto-dic-img" src="#"/>
                            <ul className="diccionario-ul">
                                <li>atributo1</li>
                                <li>atributo2</li>
                                <li>atributo3</li>
                            </ul>
                    </object>
                </div>
                
            </div>
        )
    }

}

export default NuestrosProductos;
