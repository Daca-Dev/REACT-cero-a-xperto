import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,

} from 'react-router-dom'

import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';


export const RouterApp = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path='/about' element={ <AboutScreen /> }/>
                    <Route exact path='/login' element={ <LoginScreen /> }/>
                    <Route exact path='/' element={ <HomeScreen /> } />
                </Routes>
            </div>
        </Router>
    )
}
