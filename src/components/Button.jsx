import React from 'react'

const Button = ({text}) => {
    return (
        <button
            className='btn btn-info fw-bold w-100 '
        >
        {text}
        </button>
    )
}

export default Button