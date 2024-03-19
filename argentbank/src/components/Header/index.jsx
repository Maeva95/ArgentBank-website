import React from 'react'
import Logo from '../../assets/images/argentBankLogo.webp'
import '../Header/style.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearState, logout } from '../../App/store'
import { tokenUser, userInfos } from '../../App/selectors'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userToken = useSelector(tokenUser) 
  const userName = useSelector(userInfos)

  const handleLogout = () => {
    dispatch(logout())
    dispatch(clearState())
    localStorage.clear()
    navigate('/signup')
  }


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
        {userToken === null? (
          <NavLink to='./signup' className="main-nav-item">
            <i className="fa fa-user-circle"></i>
          Sign In
          </NavLink>
        ) : (
          <div className='infos-user'>
            <div className='infos-user-username'>
              <p className='main-nav-item'>{userName.userName}</p>
              <i className="fa fa-user-circle-o" aria-hidden="true"></i>
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
  )
}

export default Header