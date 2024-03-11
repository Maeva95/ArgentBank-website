import React from 'react'
import './style.css'
import Form from '../../components/Form'

const Login = () => {
  return (
    <main className='main bg-dark'>
        <section className='sign-in-content'>
            <i className='fa fa-user-circle sign-in-icon'></i>
            <h1>Sign in</h1>
            <Form />
        </section>
    </main>
  )
}

export default Login