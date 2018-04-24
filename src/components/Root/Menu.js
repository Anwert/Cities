import { Link } from 'react-router-dom'
import React from 'react'

const Menu = () => (
    <header className="menu">
                <Link to='/' className="menu-link">List of Cities</Link>
                <Link to='/about' className="menu-link">About</Link>
    </header>
)

export default Menu