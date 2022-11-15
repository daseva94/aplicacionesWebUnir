import React, {Component} from "react";
import { useLocation, useNavigate } from "react-router";
import "../styles/estilo1.css";

const NuestrosProductos = () => {

    let {search} = useLocation();
    let query = new URLSearchParams(search);

    const LIMIT = 4;
    let start = parseInt(query.get("inicio")) || 1;
    let end = parseInt(query.get("fin")) || LIMIT;

    let navigate = useNavigate();

    const handlePrev = (e) => {
        navigate({search:`?inicio=${start - LIMIT}&fin=${end - LIMIT}`})
    }
    const handleNext = (e) => {
        navigate({search:`?inicio=${start + LIMIT}&fin=${end + LIMIT}`})
    }
    

    
        return (
            <div className="cuerpo-2">
                <h1 className="tituloCuerpo2">Tipos de plagas y servicios de erradicación</h1>

                <section className="barraDeBusqueda">
                    <label htmlFor="buscar" className="buscar" >Buscar:</label>
                    <input id="buscar" placeholder="Escriba una palabra clave"></input>
                </section>
                <div className="nav-menu">
                    {start > LIMIT && <button onClick={handlePrev}>Atrás</button>}
                    <p>Mostrando productos del <b>{start}</b> al <b>{end}</b></p>
                    <button onClick={handleNext}>Adelante</button>
                </div>
                
                <div className="diccionario">
                    <object>
                            <img className="objeto-dic-img" src={process.env.PUBLIC_URL + "/imagen-test.png"}/>
                            <h3>titulo</h3>
                            <ul className="diccionario-ul">
                                <li>atributo1</li>
                                <li>atributo2</li>
                                <li>atributo3</li>
                            </ul>
                    </object>
                    <object>
                            <img className="objeto-dic-img" src={process.env.PUBLIC_URL + "/imagen-test.png"}/>
                            <h3>titulo</h3>
                            <ul className="diccionario-ul">
                                <li>atributo1</li>
                               <li>atributo2</li>
                                <li>atributo3</li>
                            </ul>
                    </object>
                    <object>
                            <img className="objeto-dic-img" src={process.env.PUBLIC_URL + "/imagen-test.png"}/>
                            <h3>titulo</h3>
                            <ul className="diccionario-ul">
                                <li>atributo1</li>
                                <li>atributo2</li>
                                <li>atributo3</li>
                            </ul>
                    </object>
                    <object>
                            <img className="objeto-dic-img" src={process.env.PUBLIC_URL + "/imagen-test.png"}/>
                            <h3>titulo</h3>
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



export default NuestrosProductos;
