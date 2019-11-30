import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/app'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Footer from './components/footer'

ReactDOM.render((
    <Router>
      <Switch>
        <Route path='/' exact component={App} />
        <Route path='/add' component={Footer} />
      </Switch>
    </Router>
  ),
  document.getElementById('root')
)
