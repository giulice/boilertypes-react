import React, { Component } from 'react'

export class BoilerTypesList extends Component {
    render() {
        return this.props.data.map((item) => (
            <h3>{item.name}</h3>
        ))
    }
}

export default BoilerTypesList
