import React, { useState } from 'react'
import '../Form/style.css'
import { useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../../App/services/api.services'
import { useSelector } from 'react-redux'

const Form = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [rememberMe, setRememberMe] = useState(false)
  const authInfos = useSelector(state => state.auth)
  const  [login, {isLoading, isError}]  = useLoginMutation()

  const handleSubmitForm = async (e) => {
    e.preventDefault()
    let userLog = {email, password}
    try {
      await login(userLog)
      if (localStorage.getItem('token')){
        navigate('/profile')
      }
      if (rememberMe) {
        return localStorage.setItem('email', email)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const checkedRememberMe = () => {
    setRememberMe(!rememberMe)
  }
  if(isLoading) {
    return <div>...en cours de chargement</div>
  }

  return (
    <form method='post' onSubmit={handleSubmitForm}>
      <div className='input-wrapper'>
        <label htmlFor="email">Username</label>
        <input type="text" id='email' onChange={(e) => setEmail(e.currentTarget.value)} name='email' required/>
      </div>
      <div className='input-wrapper'>
        <label htmlFor="password">Password</label>
        <input type="text" id='password'onChange={(e) => setPassword(e.currentTarget.value)} name='password' required/>
      </div>
      <div className='input-remember'>
        <label htmlFor='remember-me'>Remember me</label>
        <input type="checkbox" id='remember-me' checked={rememberMe} onChange={checkedRememberMe}/>
      </div>
      <button type='submit' className='sign-in-button'>Sign In</button>
      {isError &&
      <div>{authInfos.error}</div>
      }
    </form>
  )
}

export default Form