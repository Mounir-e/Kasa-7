import { NavLink } from 'react-router-dom'
import  '../styles/components/Header.css'
import logo from '../assets/logos/main-logo.svg'

function Header() {
const getNavLinkClass = ({ isActive }) =>
  isActive ? 'navLink navLinkActive' : 'navLink'

  return (
    <header>
      <div className="header">
        <img src={logo} className="logo" alt="Logo Kasa" />
        <nav className="nav">
          <ul className="menu">
            <li className="menuItem">
              <NavLink to="/" end className={getNavLinkClass}>Accueil</NavLink>
            </li>
            <li className="menuItem">
              <NavLink to="/about" className={getNavLinkClass}>À Propos</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
