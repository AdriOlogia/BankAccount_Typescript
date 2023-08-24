import { useState, useEffect } from "react";
import get_users from "../../helpers/get_users";
import Cards from "../cards/Cards";
import ModeloCuenta from '../../models/ModeloCuenta'
import { Enlace } from "./cuentas.styles";

const Cuentas: React.FC = () => {

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [accounts, setAccounts] = useState([]);

  // items para paginacion
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = accounts.slice(startIndex, endIndex);

  useEffect(() => {
    // seteamos la data en el estado
    get_users().then((response) => {
      // tomamos de la api la data de cuentas
      setAccounts(response.cuentas);
    });
  }, []);


  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Funcion que crea el componente del paginado
  const Pagination = () => {
    const totalPage = Math.ceil(accounts.length / itemsPerPage);

    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 || accounts.length === 0 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
              anterior
            </button>
          </li>
          {
            Array.from({ length: totalPage }, (_, index) => (
              <li key={index} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
                <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                  {index + 1}
                </button>
              </li>
            ))
          }
          <li className={ `page-item ${ currentPage === totalPage || accounts.length === 0 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
              siguiente
            </button>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <div className="container">
      <div className="row text-center">
        <small>Cuenta de Saldo</small>
        <h1>Seleccione la Cuenta por Consultar</h1>
        {
          currentData.map( (elem:ModeloCuenta , index) => (
            // usamos style-components para estilizar los componentes de React Router Dom
            <Enlace key={index} to={`/Details/${elem.n}/${elem.t}/${elem.saldo}/${elem.moneda}/${elem.tipo_letras}`}>
              <Cards
                e={elem.e}
                n={elem.n}
                t={elem.t}
                saldo={elem.saldo}
                moneda={elem.moneda}
                tipo_letras={elem.tipo_letras}
              />
            </Enlace>
          ))
        }
        <Pagination />
      </div>
    </div>
  );
}

export default Cuentas;
