import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig/firebase";
import "./styles.scss";
import { faHouse, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export interface RopaModel {
    image: string;
    name: string;
    color: string;
    price: string;
    id: string;
}
export type Params = {
    id: string;
};

const AppBaño = () => {
    const vestidoCollection = collection(db, "vestidosDeBano");
    const [ropa, setRopa] = useState<RopaModel[]>([]);

    const obtenerRopa = async () => {
        const data = await getDocs(vestidoCollection);
        const values = data.docs.map((doc) => ({
            ...(doc.data() as RopaModel),
            id: doc.id,
        }));
        setRopa(values);
    };

    useEffect(() => {
        obtenerRopa();
    }, []);


    const eliminarProducto = (id: string) => {
        const vestido = doc(db, "vestidosDeBano", id);
        deleteDoc(vestido);
    };
    return (
        <div>
            <div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap:"120px"
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            color: "black",
                            gap: "7px",
                            fontSize: "20px",
                        }}
                    >
                        <span style={{ color: "purple" }}>Vestidos</span>
                        <span style={{ color: "blue" }}>De</span>
                        <span style={{ color: "red" }}>Baño</span>
                    </div>
                    <div style={{display:"flex", gap:"20px"}}>
                        <Link to={"/crearVestido"}>
                            <button className="btnCrear">
                                <span>
                                    <FontAwesomeIcon icon={faPlus} />
                                </span>
                            </button>
                        </Link>
                        <div>
                            <button className="btnCrear">
                                <span>
                                    <FontAwesomeIcon icon={faHouse} />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="contenedorGrid">
                    {ropa.map((item) => (
                        <div className="contenedorDelete">
                            <Link
                                to={"/perfilVestido/" + item.id}
                                className="contenedorCard"
                            >
                                <img src={item.image} />
                                <div className="namePrice">
                                    <span>{item.name}</span>
                                    <h1 style={{ margin: "0" }}>
                                        ${item.price}
                                    </h1>
                                </div>
                            </Link>
                            <button
                                onClick={() => eliminarProducto(item.id)}
                                className="btnEliminar"
                            >
                                X
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AppBaño;
