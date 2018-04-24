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
                    <input type='text' ref={(input) => { this.cityUpdateInput = input}} className="city-input-change"/>
                    <div className="city-btns">
                        <button onClick={this.updateCity.bind(this)} className="city-btn">Save</button>
                        <button onClick={this.changeUpdateBtnState.bind(this)} className="city-btn">Cancel</button>
                    </div>
                </div>
            )
        } else
            return (
                <div className="city">
                    <Link to ={`/cities/${this.props.index}`} className="city-link">{this.props.item.name}</Link>
                    <div className="city-btns">
                        <button onClick={this.deleteCity.bind(this)} className="city-btn">Delete</button>
                        <button onClick={this.changeUpdateBtnState.bind(this)} className="city-btn">Change</button>
                    </div>
                </div>
            )
    }
}

export default City