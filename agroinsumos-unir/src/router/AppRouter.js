import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import BodyP from "../components/body";
import CarroCompra from "../components/carrocompra";
import NuestrosProductos from "../components/NuestrosProductos";
import QuienesSomos from "../components/quienesSomos";
import HeaderP from "../components/header";
import DiccionarioPlagas from "../components/diccionarioPlagas";
import Contacto from "../components/contacto";

const AppRouter = () => {
return (
            <div>
                <BrowserRouter>
                  <HeaderP/> 
                  <Routes>
                    <Route exact path="/" element={<BodyP/>} />
                    <Route exact path="/carritoDeCompras" element={<CarroCompra/>} />
                    <Route exact path="/nuestrosProductos" element={<NuestrosProductos/>} />
                    <Route exact path="/quienesSomos" element={<QuienesSomos/>} />
                    <Route exact path="/diccionarioPlagas" element={<DiccionarioPlagas/>} />
                    <Route exact path="/contacto" element={<Contacto/>} />
                  </Routes>
                </BrowserRouter>
            </div>
    );
};

export default AppRouter;