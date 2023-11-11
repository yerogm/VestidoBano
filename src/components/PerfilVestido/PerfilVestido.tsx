import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig/firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { Params, RopaModel } from "../AppPrincipal/appBaño";
import "./styles.scss";

const PerfilVestido = () => {
    const vestidoCollection = collection(db, "vestidosDeBano");
    const [ropa, setRopa] = useState<RopaModel>();
    const params = useParams<Params>();

    const obtenerVestidoPorId = async () => {
        const docRef = doc(collection(db, "vestidosDeBano"), params.id);
        try {
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const vestidoActual = docSnap.data() as RopaModel;
                console.log(params.id, "ESTE ES EL ID DEL DOCUMENTO");
                setRopa(vestidoActual);
            } else {
                console.log("No se ha encontrado ningun elemento");
            }
        } catch {}
    };
    useEffect(() => {
        obtenerVestidoPorId();
    }, []);

    return (
        <div>
            {ropa ? (
                <div>
                    <div className="contenedorPerfil">
                        <img src={ropa.image} alt="" />
                        <div className="name-price">
                            <span>{ropa.name}</span>

                            <h1>${ropa.price}</h1>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "20px",
                                }}
                            >
                                <span>Color:</span>
                                <p>{ropa.color}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <h1>No hay ningun elemento que coincida</h1>
            )}
        </div>
    );
};

export default PerfilVestido;
