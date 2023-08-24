import React from "react";
import { useParams, Link } from "react-router-dom";


const Details: React.FC= () => {
  const { n, saldo, moneda, tipo_letras } = useParams();

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-5 card mb-3 mx-5">
          <div className="card-body">
            <div className="box text-center">
              <small>Consulta de Saldo</small>
              <h1 className="card-title">Este es su saldo actual</h1>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <h5>
                  <strong>Saldo de la Cuenta:</strong> {saldo}
                  {moneda}
                </h5>
              </li>
              <li className="list-group-item">
                <h5>
                  <strong>Tipo de cuenta:</strong>{" "}
                  {tipo_letras === "CC"
                    ? "Cuenta Corriente"
                    : tipo_letras === "CCP"
                    ? "Cuenta Comercial Publica"
                    : "Cuenta de Ahorro"}
                </h5>
              </li>
              <li className="list-group-item">
                <h5><strong>Nro. Cuenta:</strong> {n}</h5>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-8">
          <Link to="/">
            <div className="btn btn-primary">Salir</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Details;
