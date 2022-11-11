import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import BodyP from "../components/body";
import CarroCompra from "../components/carrocompra";
import NuestrosProductos from "../components/NuestrosProductos";
import QuienesSomos from "../components/quienesSomos";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route exact path="/" element={<BodyP/>} />
                    <Route exact path="/carritoDeCompras" element={<CarroCompra/>} />
                    <Route exact path="/nuestrosProductos" element={<NuestrosProductos/>} />
                    <Route exact path='/quienesSomos' element={<QuienesSomos/>} />

                </Routes>
            </div>
        </BrowserRouter>
    )
}