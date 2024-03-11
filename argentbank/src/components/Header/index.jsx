import React from 'react'
import Logo from '../../assets/images/argentBankLogo.png'
import '../Header/style.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <nav className="main-nav">
            <NavLink to='./' className="main-nav-logo">
                <img
                className="main-nav-logo-image"
                src={`${Logo}`}
                alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div>
                <NavLink to='./signup' className="main-nav-item">
                <i className="fa fa-user-circle"></i>
                Sign In
                </NavLink>
            </div>
        </nav>
    </header>
  )
}

export default Header