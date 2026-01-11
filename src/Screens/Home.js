

import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Book from '../components/Book';
import axios from 'axios';

const Base_url = 'https://69609023e7aa517cb79661a7.mockapi.io/Books';

const Home = () => {
  const [data, setData] = useState([]);

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
        renderItem={({ item }) => <Book {...item} />}
      />
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
