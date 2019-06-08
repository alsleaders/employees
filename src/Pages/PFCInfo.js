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
            {this.state.employee.birthday} <br />
            {this.state.employee.hiredDate} <br />
            {this.state.employee.profileImage} <br />
            {this.state.employee.jobTitle} <br />
            {this.state.employee.jobDescription} <br />
            {this.state.employee.phoneNumber} <br />
            {this.state.employee.address} <br />
            {this.state.employee.city} <br />
            {this.state.employee.zip} <br />
            {this.state.employee.state} <br />
            {this.state.employee.salary}
          </div>
        </main>
      </>
    )
  }
}

export default PFCInfo
