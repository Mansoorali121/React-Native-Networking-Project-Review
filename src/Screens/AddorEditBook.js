import { Button, Modal, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const AddorEditBook = ({ visible, onRequestClose }) => {
  return (
    <Modal visible={visible} onRequestClose={onRequestClose} animationType="slide">
      <SafeAreaView>
        <Text>AddorEditBook</Text>
        <Button title="Modal Close" onPress={() => onRequestClose()} />
      </SafeAreaView>
    </Modal>
  );
};

export default AddorEditBook;

const styles = StyleSheet.create({});
