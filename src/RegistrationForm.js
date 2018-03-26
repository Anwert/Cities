import React, { Component } from 'react'

import './RegistrationForm.css'

class RegistrationForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: ''
        }
        this.handleMailChange = this.handleMailChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('mail is submitted, mail:  ', this.state.email)
    }

    handleMailChange(event) {
        console.log('mail was changed ', event.target.value)
        this.setState({email: event.target.value})
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' placeholder='E-mail' value={this.state.email} onChange={this.handleMailChange} className="mailField"/>
                <button className="buttonSubmit">Save</button>
            </form>
        )
    }
}

export default RegistrationForm