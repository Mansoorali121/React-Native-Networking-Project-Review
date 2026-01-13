import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Book from '../components/Book';
import axios from 'axios';
import AddButton from '../components/AddButton';
import AddorEditBook from '../Screens/AddorEditBook';
// import {useIsFocused} from '@react-navigation/native';

const Base_url = 'https://69609023e7aa517cb79661a7.mockapi.io/Books';

const Home = () => {
  const [data, setData] = useState([]);
  const [modalvisible, setmodalvisible] = useState(false);

  // const isFocused = useIsFocused();

  const getbooklist = async () => {
    try {
      const response = await axios.get(`${Base_url}`);
      console.log(response.data);
      setData(response.data);
      Alert.alert('Data Fetched Successfully: ');
    } catch (error) {
      console.log(error);
      Alert.alert('Error occured.!');
    }
  };
  // Delete Item Function
  const ondeletePressHandler = async bookId => {
    try {
      const response = await axios.delete(`${Base_url}/${bookId}`);
      Alert.alert('Book Was Deleted Successfully', bookId);
      console.log(response.data);
      getbooklist();
    } catch (error) {
      console.log(error);
      Alert.alert('Error Deleting Book');
    }
  };

  useEffect(() => {
    getbooklist();
  }, []);

  return (
    <View>
      <FlatList
        numColumns={2}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.col}
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Book
            author={item.author}
            nameofbook={item.nameofbook}
            cover={item.cover}
            price={item.price}
            // id={item.id}
            ondeletePress={() => ondeletePressHandler(item.id)}
          />
        )}
      />
      {/* Adding Round Button to Add Books */}
      <AddButton onAddpress={() => setmodalvisible(true)} />
      <AddorEditBook visible={modalvisible} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  content: {
    paddingTop: 100,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  col: {
    justifyContent: 'space-around',
    flex: 1,
  },
});
