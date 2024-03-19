import React from 'react'
import './style.css'

const Loader = ({edit}) => {
    return (
        <div className="three col">
            <div className="loader" id="loader-1"></div>
            {edit && 
            <div className="loader-small" id="loader-1"></div>
            }
        </div>
    )
}

export default Loader