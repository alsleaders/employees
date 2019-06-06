import React, { useState, useEffect } from 'react'

export default function Home() {
  // this is where the form is going to get the employee information

  return (
    <>
      <h4> Dinna fash</h4>
      <form>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <p> Hire Date: </p>
        <input type="date" />
        <p>Birth Date: </p>
        <input type="date" />
        <p>Is this employee full time? </p>
        <input type="checkbox" value="full time" checked />
        <p>Add a profile image </p>
        <input type="file" name="myImage" />
        <input type="text" placeholder="job title" />
        <input type="text" placeholder="job description" />
        <br />
        <br />
        <input type="text" placeholder="phone number" />
        <input type="text" placeholder="address" />
        <br />
        <br />
        <input type="text" placeholder="city" />
        <input type="text" placeholder="zip" />
        <input type="text" placeholder="state" />
        <br />
        <p> Salary </p>
        <input type="number" min="10.5" max="500" />
        <input type="text" placeholder="gender" />
        <input type="text" placeholder="email" />
        <br />
        <br />
        <input type="text" placeholder="emergency contact person" />
        <input type="text" placeholder="emergency contact phone" />
        <input type="text" placeholder="emergency contact address" />
        <p> PTO Hours </p>
        <input type="number" min="0" max="500" />
      </form>
    </>
  )
}
