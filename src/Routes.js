import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import TourApp from './Tour-Func-Component/App'

function Routing() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/TourApp'>Tour App in class component</Link>
          </li>
        </ul>
        <hr />
        <Route path='/TourApp' component={TourApp} />
      </div>
    </Router>
  )
}

export default Routing
