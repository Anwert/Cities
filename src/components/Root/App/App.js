import React from 'react'

import Menu from '../Menu/Menu'
import DropDown from './DropDown/DropDown'
import Cities from './Cities/Cities.js'

const App = () => (
        <div className="container">
            < Menu />
            <div>React-app</div>
            < DropDown />
            < Cities />
        </div>
    )

export default App