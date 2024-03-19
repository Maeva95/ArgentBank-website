import React, { useState } from 'react'
import './style.css'
import { useSelector } from 'react-redux'
import { useEditUsernameMutation } from '../../App/services/api.services'
import { tokenUser } from '../../App/selectors'
import Loader from '../Loader'

export const EditForm = ({fieldUserName, firstName, lastName, onClick, setShow}) => {

    const userToken = useSelector(tokenUser)
    const infoPending = useSelector((state) => state.user.loading)
    const [userName, setUsername] = useState('')

    const [editUserName, {isLoading}] = useEditUsernameMutation()

    const handleEditUserName = (e) => {
        e.preventDefault()
        let editUsername = {userName}
        setTimeout(() => { // temps d'attente avant que le user constate la modification de l'username dans le header
            editUserName(editUsername, userToken)
            onClick(e.target.setShow)
        }, 1000)
        
    }

    if(isLoading) {
        return <div>...en cours de chargement</div>
    }

    return (
        <div className='edit-form'>
            <h1>Edit user info</h1>
            <form method='post' onSubmit={handleEditUserName}>
                <div className='field'>
                    <label htmlFor="userName">User name : 
                        <input className='input-edit' type="text" id='userName' placeholder={fieldUserName} onChange={(e) => setUsername(e.currentTarget.value)}/>
                    </label>
                    <label htmlFor="firstName">First Name : 
                        <input className='input-edit' type="text" id='firstName' placeholder={firstName} disabled/>
                    </label>
                    <label htmlFor="lastName">Last name : 
                        <input className='input-edit' type="text" id='lastName' placeholder={lastName} disabled/>
                    </label>
                </div>
                <div className='btn-form'>
                    <button type='submit' className='btn'>Save
                        {infoPending === true && <Loader small/>}
                    </button>
                    <button type='button' className='btn' onClick={setShow}>Cancel</button>
                </div>
            </form>
        </div>
    )
}
