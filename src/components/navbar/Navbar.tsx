import {} from 'react'
import { Link } from 'react-router-dom'


const Navbar : React.FC = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-2">
      <div className="container-fluid">
        <i className="fa-solid fa-code fa-xl" style={{ color: '#6fdd00' }}></i>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar