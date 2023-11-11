import React, { useState } from "react";
import { RopaModel } from "../AppPrincipal/appBaño";
import { db } from "../firebaseConfig/firebase";
import { addDoc, collection } from "firebase/firestore";
import "./styles.scss";

const CrearVestido = () => {
    const vestidoCollection = collection(db, "vestidosDeBano");
    const [ropa, setRopa] = useState<RopaModel>({
        image: "",
        name: "",
        color: "",
        price: "",
        id:""
    });

    const crearVestido = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        addDoc(vestidoCollection, ropa);
    };

    return (
        <div>
            <h1 style={{color:"black"}}>Crear Vestido</h1>
            <div className="contenedorInput">
                <input
                    type="text"
                    placeholder="Ingresa la url de la imagen del producto"
                    onChange={(e) => {
                        setRopa({ ...ropa, image: e.target.value });
                    }}
                />
            </div>
            <div className="contenedorInput">
                <input
                    type="text"
                    placeholder="Ingresa el nombre del producto"
                    onChange={(e) => {
                        setRopa({ ...ropa, name: e.target.value });
                    }}
                />
                <input
                    placeholder="Ingresa el color del producto"
                    type="text"
                    onChange={(e) => {
                        setRopa({ ...ropa, color: e.target.value });
                    }}
                />
            </div>
            <div className="contenedorInput">
                <input
                    placeholder="Ingresa el precio del producto"
                    type="number"
                    onChange={(e) => {
                        setRopa({ ...ropa, price: e.target.value });
                    }}
                />
            </div>
            <button onClick={crearVestido} className="btnCrear">Crear</button>
        </div>
    );
};

export default CrearVestido;
