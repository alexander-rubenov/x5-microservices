import React from 'react'
import Header from '../header'
import { store } from '../../store'
import { Provider } from 'react-redux'
import Departaments from '../departments'


const App = () => {
  return (
    <Provider store={store}>
        <Departaments />
        <Header />
    </Provider>
  )
}

export default App
