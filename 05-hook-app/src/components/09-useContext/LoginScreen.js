import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    const {setUser} = useContext( UserContext );

    const loginUser = (e) => {
        setUser({
            id: 123,
            age: 26,
            name: 'David Casas',
            email: 'ise.david.casas@gmail.com'
        })
    }

    return (
        <>
            <h1>Login</h1>
            <hr />
            <button
                className='btn btn-primary'
                onClick={ loginUser }
            >
                Login
            </button>
        </>
    )
}
