import { NavLink } from 'react-router-dom'
import  '../styles/components/Header.css'
import logo from '../assets/logos/main-logo.svg'

function Header() {

  return (
    <header>
      <div className="header">
        <img src={logo} className="logo" alt="Logo Kasa" />
        <nav className="nav">
          <ul className="menu">
            <li className="menuItem">
              <NavLink to="/" end className={({ isActive }) =>
    isActive ? 'navLink navLinkActive' : 'navLink'}>Accueil</NavLink>
            </li>
            <li className="menuItem">
              <NavLink to="/about" className={({ isActive }) =>
    isActive ? 'navLink navLinkActive' : 'navLink'}>A Propos</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
