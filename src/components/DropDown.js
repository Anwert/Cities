import React, { Component } from 'react'

class DropDown extends Component {
    constructor(props) {
        super(props)
        this.state = { isOpened: false }
    }

    toggleState() {
        this.setState( { isOpened: !this.state.isOpened })
    }

    render() {
        let dropDownText
        if (this.state.isOpened) {
            dropDownText = <div>Dropdown text</div>
        }
        return (
            <div onClick={this.toggleState.bind(this)}>
                <h2>DropDown</h2>
                { dropDownText }
            </div>
        )
    }
}

export default DropDown