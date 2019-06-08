import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class GoAdd extends Component {
  render() {
    return (
      <div>
        <Link to="/employee/add">Add an employee</Link>
      </div>
    )
  }
}

export default GoAdd
