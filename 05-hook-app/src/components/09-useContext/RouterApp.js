import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,

} from 'react-router-dom'

import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';
import { Navbar } from './Navbar';


export const RouterApp = () => {
    return (
        <Router>
                <Navbar />
            <div className='container'>
                <div className='row'>
                    <div className='col mt-3'>
                        <Routes>
                            <Route exact path='/about' element={ <AboutScreen /> }/>
                            <Route exact path='/login' element={ <LoginScreen /> }/>
                            <Route exact path='/' element={ <HomeScreen /> } />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    )
}
