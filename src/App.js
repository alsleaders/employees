import React, { Component } from 'react'
import Home from './Pages/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddEmployee from './Pages/AddEmployee'
import PFCInfo from './Pages/PFCInfo'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/employee/add" exact component={AddEmployee} />
          <Route path="/employee/:employeeId" exact component={PFCInfo} />
        </Switch>
      </Router>
    )
  }
}

export default App
