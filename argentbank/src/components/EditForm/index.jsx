import React, { useState } from 'react'
import './style.css'
import { useSelector } from 'react-redux'
// import { changeUserName } from '../../App/services/callApi'
import { useEditUsernameMutation } from '../../App/services/api.services'
import { tokenUser } from '../../App/selectors'

export const EditForm = ({fieldUserName, firstName, lastName, setShow}) => {

    const userToken = useSelector(tokenUser)
    const [userName, setUsername] = useState('')

    const [editUserName, {isLoading}] = useEditUsernameMutation()

    const handleEditUserName = (e) => {
        e.preventDefault()
        let editUsername = {userName}
        editUserName(editUsername, userToken)
    }

    if(isLoading) {
        return <div>...en cours de chargement</div>
    }

    return (
        <div className='editForm'>
            <h1>Edit user info</h1>
            <form method='post' onSubmit={handleEditUserName}>
                <label htmlFor="userName">User name
                    <input type="text" id='userName' placeholder={fieldUserName} onChange={(e) => setUsername(e.currentTarget.value)}/>
                </label>
                <label htmlFor="firstName">First Name
                    <input type="text" id='firstName' placeholder={firstName} disabled/>
                </label>
                <label htmlFor="lastName">Last name
                    <input type="text" id='lastName' placeholder={lastName} disabled/>
                </label>
                <div className='btn-form'>
                    <button type='submit' className='btn'>Save</button>
                    <button type='button' className='btn' onClick={setShow}>Cancel</button>
                </div>
            </form>
        </div>
    )
}
