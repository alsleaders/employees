import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class GoHome extends Component {
  render() {
    return (
      <div>
        <Link to="/">Go Home</Link>
      </div>
    )
  }
}

export default GoHome
