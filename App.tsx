import { Alert, Button, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const getBooks = async () => {
    const response = await axios.get(
      'https://69609023e7aa517cb79661a7.mockapi.io/Books',
    );
    console.log(JSON.stringify(response.data, null, 3));
  };
  // Adding Book
  const addBook = async () => {
    const response = await axios.post(
      'https://69609023e7aa517cb79661a7.mockapi.io/Books',
      {
        author: 'Mansoor',
        cover: 'https://picsum.photos/seed/fXytBvu5g5/1509/3939',
        name_of_book: 'Fifty Days',
        id: '6',
      },
    );
    console.log(response.data);
    Alert.alert("Book wad Added Successfully ")
  };
  useEffect(() => {
    getBooks();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Pressable onPress={addBook}
        style={{
          backgroundColor: 'red',
          paddingHorizontal: 20,
          padding: 14,
          borderRadius: 20,
        }}
      >
        <Text style={{ fontSize: 14, color: '#fff', fontWeight: 'bold' }}>
          Add Book
        </Text>
      </Pressable>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
