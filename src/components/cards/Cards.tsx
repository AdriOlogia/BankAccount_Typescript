import React from 'react'
import ModeloCuenta from '../../models/ModeloCuenta'

const Cards: React.FC<ModeloCuenta> = ({ n, tipo_letras }) => {

  return(
    
    <div key={n} className="card" style={{width:"18em", height:"150px", margin:"10px"}}>
      <div className="card-body">
        <h5 className="card-title">
          {
            tipo_letras === "CCP" ? "Cuenta Comercial Publica" :
            tipo_letras === "CC" ? "Cuenta Corriente" : "Cuenta de Ahorro"
          }
        </h5>
        <p className="card-text">
          Nro {n}
        </p>
      </div>
    </div>
  )
};

export default Cards