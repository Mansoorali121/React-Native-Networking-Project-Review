import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Home from '../networking_pro/src/Screens/Home';
import MainInput from '../networking_pro/src/components/MainInput';
const App = () => {
  const [value, setValue] = useState('');
  console.log(value);

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Home/>
      {/* <MainInput
        options={{ value: value, onChangeText: (text) => setValue(text) }}
      /> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
