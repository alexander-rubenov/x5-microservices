import React from 'react'
import Header from '../header'
import { store } from '../../store'
import { Provider } from 'react-redux'
import Departaments from '../departments'
import SearchMicroservices from '../search-microservices'


const App = () => {
  return (
    <Provider store={store}>
        <Departaments />
        <Header />
        <SearchMicroservices />
    </Provider>
  )
}

export default App
