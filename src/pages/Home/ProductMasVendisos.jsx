import React from "react";
import "./styles.css";

export default function ProductMasVendisos({ vendidos }) {
  return (
    <div className="masVendidos_container">
      <div className="masVendidos_info">
        <img className="masVendidos_img" src={vendidos?.image} alt="img" />
        <h4 className="masvendidos_name">{vendidos?.nombre}</h4>
        <span className="masvendidos_description">{vendidos?.description}</span>
        <span className="masvendidos_tipo">{vendidos?.calzado}</span>
        <p className="masvendidos_precio">{vendidos?.precios}</p>
      </div>
    </div>
  );
}
