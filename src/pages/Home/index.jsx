import React from "react";
import { Link } from "react-router-dom";
import nikeNba from "../../img/Nike-NBA.jpg";
import ProductMasVendisos from "./ProductMasVendisos";
import masVendidos from "../../util/masVendidos.json";
import "./styles.css";

export default function Home() {
  return (
    <div className="container">
      <div className="main__container">
        <Link to="/products">
          <div className="main__info">
            <h2 className="main__text">Novedades de Nike Básquetbol</h2>
            <img src={nikeNba} alt="logo" />
          </div>
        </Link>
        <div className="main__info-compra">
          <h1 className="main__title">
            ZOOM FREAK 3 DE <br /> GIANNIS
          </h1>
          <Link className="main__buttom" to="/products">
            Comprar
          </Link>
        </div>
      </div>
      <h1 className="masVendidos_title">LO MAS VENDIDO</h1>
      <di className="masVendasGrid">
        {masVendidos.map((vendidos) => (
          <ProductMasVendisos key={vendidos.id} vendidos={vendidos} />
        ))}
      </di>
    </div>
  );
}
