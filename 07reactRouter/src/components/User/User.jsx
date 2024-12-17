import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userid } = useParams();
    return (
        <>
            <div className='bg-orange-500 text-black text-xl text-center py-3'>User</div>
            <p>{userid}</p>
        </>

    )
}

export default User