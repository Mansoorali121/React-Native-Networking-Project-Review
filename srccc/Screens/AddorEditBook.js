import {
  Button,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainInput from '../components/MainInput';
import MainButton from '../components/MainButton';
import { colors } from '../styles/colors';
import axios from 'axios';

const Base_url = 'https://69609023e7aa517cb79661a7.mockapi.io/Books';

const AddorEditBook = ({ visible, onRequestClose }) => {
  
  return (
    <Modal
      visible={visible}
      onRequestClose={onRequestClose}
      animationType="slide"
    >
      <View style={{ paddingHorizontal: 20 }} />
      {/* Back Arrow to be back */}
      <Pressable style={{ marginTop: 50, zIndex: 1 }} onPress={()=>onRequestClose()}>
        <Image 
          source={require('../assets/close-icon.png')}
          style={styles.closeIcon}
        />
      </Pressable>

      <View style={styles.formcontainer}>
        <MainInput options={{ placeholder: 'Book Name: ' }}  />
        <MainInput options={{ placeholder: 'Author Name: ' }} />
        <MainInput options={{ placeholder: 'Price: ' }} />
        <MainInput options={{ placeholder: 'Cover URL: ' }} />
        <MainButton title="Save Book"  />
      </View>
      {/* <Button title="Modal Close" onPress={() => onRequestClose()} /> */}
    </Modal>
  );
};

export default AddorEditBook;

const styles = StyleSheet.create({
  formcontainer: { marginTop: 30, gap: 20, marginBottom: 60 },
  closeIcon: {
    height: 40,
    width: 40,
    color: colors.mainColor,
    resizeMode: 'stretch',
    paddingHorizontal: 20,
  },
});
