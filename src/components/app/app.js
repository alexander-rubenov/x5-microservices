import React from 'react'
import Header from '../header'
import { store } from '../../store'
import { Provider } from 'react-redux'
import ContentWrapper from '../content-wrapper'
import Footer from '../footer'
import AddMicroservice from '../add-microservice'

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      {/* <ContentWrapper /> */}
      <AddMicroservice />
      <Footer />
    </Provider>
  )
}

export default App
