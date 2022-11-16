import React from "react";
import { useState } from "react";
import { useParams } from "react-router";

const DiccionarioPlagas = () => {
    
    let {plagas} = useParams();

    

    const [plagas1, setPlagas1] = useState([]);

    React.useEffect(() => {
        /* console.log('use') */
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch("https://jsonplaceholder.typicode.com/albums")
        const plagasApi = await data.json()
        /* console.log(plagasApi) */
        setPlagas1(plagasApi)
    }
    
    return (
        <div className="cuerpo-2">
            <h3>Plaga: <bold>{plagas}</bold></h3>
            <ul>
                {
                    plagas1.map(item => (
                        <li key={item.userId}>{item.id} - {item.title}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default DiccionarioPlagas;