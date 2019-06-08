import React from 'react'
import { Link } from 'react-router-dom'

export default function PFC(props) {
  // let employeeNumber = props.match.params.employeeId
  // stuff about individual employee

  return (
    <>
      <Link to={`/employee/${props.employee.id}`}>
        <h4>
          {props.employee.firstName} {props.employee.lastName}
        </h4>
      </Link>
      <button onClick={() => props.deleteEmployee(props.employee.id)}>
        Delete Employee
      </button>
    </>
  )
}
