import React from 'react'
import styles from './add-microservice.module.css'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import AddMain from '../add-main'
import AddAdditionally from '../add-additionally'
import AddRelations from '../add-relations'
import forward from '../../static/img/forward.svg'

const AddMicroservice = () => {
  return (
    <Router>
      <div className={styles.addMicroservice}>
        <div className={styles.titleForward}>
          <img src={forward} alt="" />
          <h3>Добавление микросервиса</h3>
        </div>
        <div className={styles.addBlock}>
          <nav className={styles.navigate}>
            <NavLink to="/main" activeClassName={styles.activeLink}>Основное</NavLink>
            <NavLink to="/additionally" activeClassName={styles.activeLink}>Дополнительно</NavLink>
            <NavLink to="/relations" activeClassName={styles.activeLink}>Связи</NavLink>
          </nav>
          <div className={styles.content}>

            <Switch>
              <Route path="/main" exact component={AddMain} />
              <Route path="/additionally" component={AddAdditionally} />
              <Route path="/relations" component={AddRelations} />
            </Switch>

          </div>
        </div>
      </div>
    </Router>
  )
}

export default AddMicroservice