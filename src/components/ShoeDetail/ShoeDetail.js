import React from "react";
import ReactDOM from 'react-dom';
import { useParams } from "react-router-dom";
import shoes from "../../shoes.json"

export const ShoeDetail = () => {
    const { shoe } = useParams();
    const shoeData = shoes[shoe];
    if (!shoeData) {
        return <h2>Not Found</h2>
    }
    const { name, img, desc } = shoeData;
    return (
        <div>
            <h2 style={{ "textAlign": "center" }}>{name}</h2>
            <div style={{ "padding": "30px" }}>
                <div style={{ "float": "left" }}>
                    <img src={img} alt={name} width={500} />
                </div>
                <p style={{ "margin": "10px" }}>{desc}</p>
            </div>
        </div>
    )
}