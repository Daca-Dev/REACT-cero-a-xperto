import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {

    const { user } = useContext( UserContext );
    console.log(`🚀 ~ HomeScreen ~ user`, user);
    
    return (
        <>
            <h1>Home</h1>
            <hr />

            <pre>
                { JSON.stringify( user, null, 3) }
            </pre>
        </>
    )
}
