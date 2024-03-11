import React, { useState } from 'react'
import '../Form/style.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signUp } from '../../App/services/callApi'

const Form = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [remerberMe, setRememberMe] = useState(false)
  const handleSubmitLogin = (e) => {
    e.preventDefault()
    let userLog = {email, password}
    dispatch(signUp(userLog))
    navigate('/profile')
    
    // si check "Remember me", ajout de l'adresse mail dans le local storage 
    if (remerberMe) {
      const storageEmail = localStorage.setItem('email', email)
      return storageEmail
    }
  }
  const checkedRememberMe = () => {
    setRememberMe(!remerberMe)
  }

  return (
    <form method='post' onSubmit={handleSubmitLogin}>
        <div className='input-wrapper'>
            <label htmlFor="email">Username</label>
            <input type="text" id='email' onChange={(e) => setEmail(e.currentTarget.value)} name='email'/>
        </div>
        <div className='input-wrapper'>
            <label htmlFor="password">Password</label>
            <input type="text" id='password'onChange={(e) => setPassword(e.currentTarget.value)} name='password' />
        </div>
        <div className='input-remember'>
            <label htmlFor='remember-me'>Remember me</label>
            <input type="checkbox" id='remember-me' checked={remerberMe} onChange={checkedRememberMe}/>
        </div>
        <button type='submit' className='sign-in-button'>Sign In</button>
    </form>
  )
}

export default Form