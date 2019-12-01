import React from 'react'
import styles from './add-microservice.module.css'
import { Route } from 'react-router-dom';
import {NavLink} from "react-router-dom";
import AddMain from '../add-main'
import AddAdditionally from '../add-additionally'
import AddRelations from '../add-relations'

const AddMicroservice = () => {
  return (
    <div>
      <h3>Добавление микросервиса</h3>
      <nav className={styles.nav}>
        <NavLink to="/main" activeClassName={styles.activeLink}>Основное</NavLink>
        <NavLink to="/additionally" activeClassName={styles.activeLink}>Дополнительно</NavLink>
        <NavLink to="/relations" activeClassName={styles.activeLink}>Связи</NavLink>
      </nav>
      <div className="app-wrapper-content">
        <Route path="/main" render={() => <AddMain />} />
        <Route path="/additionally" render={() => <AddAdditionally />} />
        <Route path="/relations" render={() => <AddRelations />} />
      </div>
    </div>
  )
}

export default AddMicroservice