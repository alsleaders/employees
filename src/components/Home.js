import React, { useState, useEffect } from 'react'
import axios from 'axios'

const COMPANYNAME = 'Leaders Imagined'
const API_URL = 'https://sdg-staff-directory-app.herokuapp.com/api'
export default function Home() {
  useEffect(() => {
    axios.get(`${API_URL}/${COMPANYNAME}/employes`).then(resp => {
      console.log(resp)
      return resp.json
    })
  })

  // gonna need a Post for new employees

  return (
    <>
      <h1>Hello, Minions!</h1>
    </>
  )
}
