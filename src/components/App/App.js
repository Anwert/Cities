import React from 'react'

import './App.css'

import DropDown from '../DropDown'
import RegistrationForm from '../RegistrationForm/RegistrationForm'
import Cities from '../Cities/index'
import Menu from '../Menu'

const App = () => (
        <div className="container">
            <div>React-app</div>
            < DropDown />
            <RegistrationForm />
            <Cities />
        </div>
    )

export default App