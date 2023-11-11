import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig/firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { Params, RopaModel } from "../AppPrincipal/appBaño";

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
        <div
            style={{
                backgroundColor: "#bebbbb",
                margin: "10px",
                padding: "10px",
                borderRadius: "10px",
            }}
        >
            {ropa ? (
                <div>
                    <div
                        style={{
                            color: "black",
                            display: "flex",
                            gap: "100px",
                            alignItems: "center",
                            margin: "0 auto",
                            maxWidth: "700px",
                        }}
                    >
                        <img src={ropa.image} alt="" style={{borderRadius:"10px"}}/>
                        <div
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <span style={{ fontSize: "20px" }}>
                                {ropa.name}
                            </span>

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
