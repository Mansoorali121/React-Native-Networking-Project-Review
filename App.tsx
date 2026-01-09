import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const getBooks = async () => {
    const response = await axios.get("https://69609023e7aa517cb79661a7.mockapi.io/Books")
    console.log(JSON.stringify(response.data, null, 3))
  }
  useEffect(()=>{
    getBooks();

  },[])
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({})