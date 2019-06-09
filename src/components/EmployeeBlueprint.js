import React from 'react'
import { Link } from 'react-router-dom'

export default function PFC(props) {
  return (
    <>
      <Link to={`/employee/${props.employee.id}`}>
        <h4 className="display-names">
          {props.employee.firstName} {props.employee.lastName}
        </h4>
      </Link>
    </>
  )
}
