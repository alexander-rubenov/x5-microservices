import React from 'react'
import Header from '../header'
import { store } from '../../store'
import { Provider } from 'react-redux'
import ContentWrapper from '../content-wrapper'

const App = () => {
  return (
    <Provider store={store}>
        <Header />
        <ContentWrapper />
    </Provider>
  )
}

export default App
