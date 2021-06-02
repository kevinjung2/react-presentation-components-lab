// Code SimpleComponent Here
import React, { Component } from 'react'

export default class SimpleComponent extends Component {
  constructor() {
    super()
    this.state = {
      mood: "happy"
    }
  }

  handleClick = () => {
    let toggle = {happy: "sad", sad: "happy"}
    let current = this.state.mood
    this.setState({
      mood: toggle[current]
    })
  }

  render() {
    return(
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }
}
