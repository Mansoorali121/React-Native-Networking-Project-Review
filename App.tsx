import { Alert, Button, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import axios from 'axios';

const Base_url = 'https://69609023e7aa517cb79661a7.mockapi.io/Books';

const App = () => {
  const getBooks = async () => {
    const response = await axios.get(`${Base_url}`);
    console.log(JSON.stringify(response.data, null, 3));
  };
  // Adding Book
  const addBook = async () => {
    const response = await axios.post(`${Base_url}`, {
      author: 'Isri',
      cover: 'https://picsum.photos/seed/fXytBvu5g5/1509/3939',
      name_of_book: 'Fifty Weeks',
      id: '12',
    });
    console.log(response.data);
    Alert.alert('Book wad Added Successfully ');
  };
  // Delete Book

  const deletebook = async () => {
    const response = await axios.delete(`${Base_url}/6`);
    console.log(response.data);
    Alert.alert('Book was successfully Deleted  ');
  };
  //  Edit Book Data
  const editbooks = async () => {
    const response = await axios.put(`${Base_url}/7`, {
      author: 'Mansoor ',
      cover: 'https://picsum.photos/seed/fXytBvu5g5/1509/3939',
      name_of_book: 'Shades of Book ',
    });
    console.log(response.data);
    Alert.alert('Book Was Updated Successfully ');
  };
  useEffect(() => {
    getBooks();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View>
        <Pressable
          onPress={addBook}
          style={{
            backgroundColor: 'red',
            paddingHorizontal: 20,
            padding: 14,
            borderRadius: 20,
            marginBottom: 20,
          }}
        >
          <Text style={{ fontSize: 14, color: '#fff', fontWeight: 'bold' }}>
            Add Book
          </Text>
        </Pressable>
        {/* Delete Book */}
        <Pressable
          onPress={deletebook}
          style={{
            backgroundColor: 'green',
            paddingHorizontal: 20,
            padding: 14,
            borderRadius: 20,
            marginBottom: 20,
          }}
        >
          <Text style={{ fontSize: 14, color: '#fff', fontWeight: 'bold' }}>
            Delete Book
          </Text>
        </Pressable>
        {/* Edit Book */}
        <Pressable
          onPress={editbooks}
          style={{
            backgroundColor: 'blue',
            paddingHorizontal: 20,
            padding: 14,
            borderRadius: 20,
          }}
        >
          <Text style={{ fontSize: 14, color: '#fff', fontWeight: 'bold' }}>
            Edit Book
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
