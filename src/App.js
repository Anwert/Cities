import React, { Component } from 'react'

import './App.css'

import DropDown from './DropDown'
import Header from './Header'
import RegistrationForm from './RegistrationForm'
import Cities from './Cities'

const menu = [
    {
        link: '/articles',
        label: ' Articles'
    },
    {
        link: '/contacts',
        label: ' Contacts'
    },
    {
        link: '/posts',
        label: ' Posts'
    }
]


class App extends Component {
  render() {
    return (
        <div className="container">
            <div>React-app</div>
            < DropDown />
            < Header items={menu} />
            <RegistrationForm />
            <Cities />
        </div>
    )
  }
}

export default App