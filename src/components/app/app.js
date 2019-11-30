import React from 'react'
import { store } from '../../store'
import { Provider } from 'react-redux'
import Departaments from '../departments'

const App = () => {
  return (
    <Provider store={store}>
        <Departaments />
    </Provider>
  )
}

export default App
