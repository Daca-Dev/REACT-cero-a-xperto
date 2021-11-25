import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {

    const { user, setUser } = useContext( UserContext );

    const logoutUser = ( e ) => {
        setUser({})
    }

    return (
        <>
            <h1>About</h1>
            <hr />

            <pre>{ JSON.stringify( user, null, 3 ) }</pre>

            <button
                className='btn btn-danger'
                onClick={ logoutUser }
            >
                Logout
            </button>
        </>
    )
}
