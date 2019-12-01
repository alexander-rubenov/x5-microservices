import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/app'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import DepartmentCard from './components/department-card/department-card'
import Footer from './components/footer'
import { store } from './store'
import { Provider } from 'react-redux'

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path='/' exact component={App} />
        <Route path='/add' component={Footer} />  
        <Route path='/department-card' component={DepartmentCard} />
      </Switch>
    </Router>
  </Provider>
  ),
  document.getElementById('root')
)
