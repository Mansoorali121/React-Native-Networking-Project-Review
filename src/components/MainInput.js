import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { colors } from '../styles/colors';


const MainInput = ({options}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textinput} {...options} />

    </View>
  );
};

export default MainInput;

const styles = StyleSheet.create({
  container: {
    height: 48,
    borderRadius: 8,
    width: '100%',
    backgroundColor: colors.lightGray,
    justifyContent: 'center',
    marginBottom: 8,
  },
  textinput: {
    padding: 5,
    fontSize: 16,
    marginHorizontal: 5,
    color: '#9b9b9b',
  },
});
