import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import BodyP from "../components/body";
import CarroCompra from "../components/carrocompra";
import NuestrosProductos from "../components/NuestrosProductos"

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route exact path="/" element={<BodyP/>} />
                    <Route exact path="/carritoDeCompras" element={<CarroCompra/>} />
                    <Route exact path="/nuestrosProductos" element={<NuestrosProductos/>} />

                </Routes>
            </div>
        </BrowserRouter>
    )
}