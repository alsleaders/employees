import React, { Component } from 'react'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PFC from './Pages/PFC'
import AddEmployee from './Pages/AddEmployee'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/employee/add" exact component={AddEmployee} />
          <Route path="/employee/:employeeId" exact component={PFC} />
        </Switch>
      </Router>
    )
  }
}

export default App
