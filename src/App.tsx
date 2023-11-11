import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppBaño from "./components/AppPrincipal/appBaño";
import CrearVestido from "./components/CrearVestido/CrearVestido";
import PerfilVestido from "./components/PerfilVestido/PerfilVestido";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AppBaño/>}/>
                    <Route path="/crearVestido" element={<CrearVestido/>}/>
                    <Route path="/perfilVestido/:id" element={<PerfilVestido/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
