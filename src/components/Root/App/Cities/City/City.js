import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class City extends Component {
    constructor(props) {
        super(props)
        this.state={ updateIsPushed: false }
    }

    deleteCity() {
        this.props.deleteCity(this.props.index)
    }

    changeUpdateBtnState() {
        this.setState( { updateIsPushed: !this.state.updateIsPushed })
    }

    updateCity () {
        this.props.updateCity(this.props.index, this.cityUpdateInput.value)
        this.changeUpdateBtnState()
    }

    render() {
        if (this.state.updateIsPushed) {
            return (
                <div className="city">
                    <input type='text' ref={(input) => { this.cityUpdateInput = input}}/>
                    <button onClick={this.updateCity.bind(this)}>Save</button>
                    <button onClick={this.changeUpdateBtnState.bind(this)}>Cancel</button>
                </div>
            )
        } else
            return (
                <div className="city">
                    <Link to ={`/cities/${this.props.index}`}>{this.props.item.name}</Link>
                    <button onClick={this.deleteCity.bind(this)}>Delete city</button>
                    <button onClick={this.changeUpdateBtnState.bind(this)}>Update city</button>
                </div>
            )
    }
}

export default City