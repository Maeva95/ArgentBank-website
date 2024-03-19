/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'
import '../Feature/style.css'

const Feature = ({icon, iconMedium, title, text}) => {
  return (
    <div className='feature-item'>
      <picture>
        <source media="(min-width: 920px)" srcSet={`${icon}`} />
        <source media="(max-width: 919px)" srcSet={`${iconMedium}`} />
        <img srcSet={`${icon}`} alt="icon" className='feature-icon' width="100" height="100" />
      </picture>
      <h3 className='feature-item-title'>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default Feature