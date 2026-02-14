import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import {store} from "./src/redux/store"
import NameScreen from "./src/screens/NameScreen"

const App = () => {
  return (
   <Provider store={store}>
    <NameScreen/>

   </Provider>
  )
}

export default App;

const styles = StyleSheet.create({})