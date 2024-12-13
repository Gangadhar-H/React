import React from 'react'

function Button({ color, onBgChange }) {
    return (
        <button className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{ backgroundColor: color }} onClick={() => { onBgChange(color) }}>
            {color}
        </button>
    )
}

export default Button;