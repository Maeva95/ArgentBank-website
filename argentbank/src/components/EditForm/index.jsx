import React, { useState } from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeUserName } from '../../App/services/callApi'

export const EditForm = ({userName, firstName, lastName, setShow}) => {

    const token = useSelector((state) => state.user.token)
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')

    const handleEditUserName = (e) => {
        e.preventDefault()
        let editUserName = {username}
        dispatch(changeUserName(token, editUserName))
    }


    return (
        <div className='editForm'>
            <h1>Edit user info</h1>
            <form method='post' onSubmit={handleEditUserName}>
                <label htmlFor="userName">User name
                    <input type="text" id='userName' placeholder={userName} onChange={(e) => setUsername(e.currentTarget.value)}/>
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
