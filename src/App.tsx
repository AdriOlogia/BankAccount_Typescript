import {} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar'
import Cuentas from './components/cuentas/Cuentas'
import Details from './components/Details/Details'

const App: React.FC = () => {

  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <Navbar />
          <Routes>
            <Route path="/" element={ <Cuentas /> } />
            <Route path="/Details/:n/:t/:saldo/:moneda/:tipo_letras" element={ <Details /> } />
          </Routes>
        </div>
      </div>

    </Router>
  )
}

export default App
