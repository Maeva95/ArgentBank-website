/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'
import './style.css'

const Feature = ({icon, title, text}) => {
  return (
    <div className='feature-item'>
        <img src={icon} alt="icon" className='feature-icon'/>
        <h3 className='feature-item-title'>{title}</h3>
        <p>{text}</p>
    </div>
  )
}

export default Feature