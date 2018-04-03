import { Link } from 'react-router-dom'
import React from 'react'

const Menu = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Menu</Link></li>
                <li><Link to='/app'>App</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </nav>
    </header>
)

export default Menu