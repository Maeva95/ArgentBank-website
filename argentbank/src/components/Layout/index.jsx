import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { tokenUser, userInfos } from '../../App/selectors'
import { clearState, logout } from '../../App/store'
import Logo from '../../assets/images/argentBankLogo.webp'
import './style.css'

const Layout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userToken = useSelector(tokenUser) 
  const userName = useSelector(userInfos)

  const handleLogout = () => {
    dispatch(logout())
    dispatch(clearState())
    localStorage.clear()
    navigate('signup')
  }
  return (
    <>
      <header>
      <nav className="main-nav">
        <Link to='/ArgentBank-website' className="main-nav-logo">
          <img
          className="main-nav-logo-image"
          src={`${Logo}`}
          alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        {userToken === null? (
          <Link to='signup' className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        ) : (
          <div className='infos-user'>
            <div className='infos-user-username'>
              <p className='main-nav-item'>{userName.userName}</p>
              <i className="fa fa-user-circle-o" aria-hidden="true" onClick={() => navigate('profile')}></i>
            </div>
            <div>
              <i className="fa fa-cog" aria-hidden="true"></i>
            </div>
            <div>
              <i className="fa fa-power-off" onClick={handleLogout}></i>
            </div>
          </div>
        )}
      </nav>
    </header>
    <Outlet/>
    <footer className="footer">
      <p className="footer-text">Copyright 2020 Argent Bank</p>
    </footer>
    </>
  )
}

export default Layout