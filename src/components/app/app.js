import React from 'react'
import Header from '../header'
import { store } from '../../store'
import { Provider } from 'react-redux'
import ContentWrapper from '../content-wrapper'
import Footer from '../footer'

const App = () => {
  return (
    <Provider store={store}>
        <Header />
        <ContentWrapper />
        <Footer />
    </Provider>
  )
}

export default App
