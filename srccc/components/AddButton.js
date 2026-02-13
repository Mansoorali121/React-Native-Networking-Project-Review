import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { colors } from '../styles/colors';

const AddButton = ({onAddpress}) => {
  return (
    <TouchableOpacity  onPress={onAddpress} style={styles.cont}>
      <Image source={require('../assets/plus.png')} style={styles.btnimage} />
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  btnimage: {
    tintColor: colors.white,
    height: 45,
    width: 45,
  },
  cont: {
    position: 'absolute',
    backgroundColor: colors.mainColor,
    bottom: 50,
    alignSelf: 'center',
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
});
