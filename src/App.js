import React, { Component } from 'react'
import BoilerTypesList from './components/boilertypeslist/BoilerTypesList'
import data from './data/boilertypes.json'

export class App extends Component {

  state = {
    value : data
  } 

  render() {
    //console.log(this.state.value)
    return (
      <div>
        <BoilerTypesList data= {this.state.value}/>
      </div>
    )
  }
}

export default App
