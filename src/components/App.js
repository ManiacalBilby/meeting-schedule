import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { addPhrase } from '../actions/exampleActions'
import DayComponent from './DayComponent'

class App extends Component {
  // state = {
  //   formValue: ''
  // }

  // handleChange = (event) => {
  //   this.setState({ formValue: event.target.value })
  // }
  // handleButtonPress = () => {
  //   this.props.addPhrase(this.state.formValue)
  // }

  render () {
    return (
        <div>
          <DayComponent />
        </div>
    )
  }
}

export default App
