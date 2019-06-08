import React, { Component } from 'react'
import axios from 'axios'
import GoAdd from '../components/GoAdd'
import GoHome from '../components/GoHome'

const COMPANYNAME = 'Leaders Imagined'
const API_URL = 'https://sdg-staff-directory-app.herokuapp.com/api'

class PFCInfo extends Component {
  state = {
    employee: []
  }
  // fetch specific employee endpoint

  componentDidMount() {
    let employeeNumber = this.props.match.params.employeeId
    axios
      .get(`${API_URL}/${COMPANYNAME}/employees/${employeeNumber}`)
      .then(resp => {
        console.log(resp)
        console.log(resp.data)

        this.setState({
          employee: resp.data
        })
      })
    // .then(results => {
    //   console.log({ results })
    // })
  }

  render() {
    return (
      <>
        <main>
          <nav>
            <GoAdd />
            <GoHome />
          </nav>
          <div>
            <h1>Let's just see if this loads</h1>
            <h3>
              {this.state.employee.firstName} {this.state.employee.lastName}
            </h3>
          </div>
        </main>
      </>
    )
  }
}

export default PFCInfo
