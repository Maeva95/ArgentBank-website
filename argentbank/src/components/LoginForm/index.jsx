import React, { useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../../App/services/api.services'
import { useSelector } from 'react-redux'
import Loader from '../Loader'

const Form = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checked, setCheck] = useState(false)

  const navigate = useNavigate()
  
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
      if (checked) {
        return localStorage.setItem('email', email)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const toogleCheck = () => {
    setCheck(!checked)
  }
  if(isLoading) {
    return <Loader/>
    
  }

  return (
    <>
      {isLoading && <Loader/>}
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
          <input type="checkbox" id='remember-me' checked={checked} onChange={toogleCheck}/>
        </div>
        <button type='submit' className='sign-in-button'>Sign In</button>
        {isError &&
        <div className='error-message'>{authInfos.error}</div>
        }
      </form>
    </>
  )
}

export default Form