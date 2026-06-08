import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../styles/Header.css'
import logo from '../assets/logos/main-logo.svg'

function Header() {

  return (
    <header className="header">
      <div className="header-content">
        <Link to={'/'}>
        <img src={logo} alt="Logo Kasa" />
        </Link>
        <nav className="nav">
          <NavLink to="/" end className="nav-link">Accueil</NavLink>
          <NavLink to="/about" className="nav-link">A Propos</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header