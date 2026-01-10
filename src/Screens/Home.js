// import { Alert, Button, Pressable, StyleSheet, Text, View } from 'react-native';
// import React, { useEffect } from 'react';
// import axios from 'axios';

// const Base_url = 'https://69609023e7aa517cb79661a7.mockapi.io/Books';

// const Home = () => {
//   const getBooks = async () => {
//     try {
//       const response = await axios.get(`${Base_url}`);
//       console.log(JSON.stringify(response.data, null, 3));
//       Alert.alert('Books data Fetched');
//     } catch (error) {
//       console.log(error);
//       Alert.alert('Error Occured: ');
//     }
//   };
//   // Adding Book
//   const addBook = async () => {
//     try {
//       const response = await axios.post(`${Base_url}`, {
//         author: 'Isri',
//         cover: 'https://picsum.photos/seed/fXytBvu5g5/1509/3939',
//         name_of_book: 'Fifty Weeks',
//         id: '12',
//       });
//       console.log(response.data);
//       Alert.alert('Book wad Added Successfully ');
//     } catch (error) {
//       console.log(error);
//       Alert.alert('Book was Added Successfully: ');
//     }
//   };
//   // Delete Book

//   const deletebook = async () => {
//     try {
//       const response = await axios.delete(`${Base_url}/6`);
//       console.log(response.data);
//       Alert.alert('Book was successfully Deleted  ');
//     } catch (error) {
//       console.log(error);
//       Alert.alert('Book was deleted Successfully: ');
//     }
//   };
//   //  Edit Book Data
//   const editbooks = async () => {
//     try {
//       const response = await axios.put(`${Base_url}/7`, {
//         author: 'Mansoor ',
//         cover: 'https://picsum.photos/seed/fXytBvu5g5/1509/3939',
//         name_of_book: 'Shades of Book ',
//       });
//       console.log(response.data);
//       Alert.alert('Book Was Updated Successfully ');
//     } catch (error) {
//       console.log(error);
//       Alert.alert('Book was deleted Successfully: ');
//     }
//   };
//   useEffect(() => {
//     getBooks();
//   }, []);

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <View>
//         <Pressable
//           onPress={addBook}
//           style={{
//             backgroundColor: 'red',
//             paddingHorizontal: 20,
//             padding: 14,
//             borderRadius: 20,
//             marginBottom: 20,
//           }}
//         >
//           <Text style={{ fontSize: 14, color: '#fff', fontWeight: 'bold' }}>
//             Add Book
//           </Text>
//         </Pressable>
//         {/* Delete Book */}
//         <Pressable
//           onPress={deletebook}
//           style={{
//             backgroundColor: 'green',
//             paddingHorizontal: 20,
//             padding: 14,
//             borderRadius: 20,
//             marginBottom: 20,
//           }}
//         >
//           <Text style={{ fontSize: 14, color: '#fff', fontWeight: 'bold' }}>
//             Delete Book
//           </Text>
//         </Pressable>
//         {/* Edit Book */}
//         <Pressable
//           onPress={editbooks}
//           style={{
//             backgroundColor: 'blue',
//             paddingHorizontal: 20,
//             padding: 14,
//             borderRadius: 20,
//           }}
//         >
//           <Text style={{ fontSize: 14, color: '#fff', fontWeight: 'bold' }}>
//             Edit Book
//           </Text>
//         </Pressable>
//       </View>
//     </View>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({});

import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Book from "../components/Book"

const Home = () => {
  //  Temp Data
  const TempData = [
    {
      author: 'Stephanie Schaefer',
      coverURL: 'https://picsum.photos/seed/PS6wnaW/1582/3106',
      nameofbook: 'Christiansen, Rau and Marvin',
      id: '1',
      price: '20',
      categoryColor: 'green',
    },
    {
      author: 'Mansoor',
      coverURL: 'https://picsum.photos/seed/fXytBvu5g5/1509/3939',
      nameofbook: 'Fifty Days',
      id: '2',
      price: '30',
      categoryColor: 'brown',
    },
    {
      author: 'Mansoor ',
      coverURL: 'https://picsum.photos/seed/fXytBvu5g5/1509/3939',
      nameofbook: 'Shades of Book ',
      id: '3',
      price: '40',
      categoryColor: 'red',
    },
     {
      author: 'Stephanie Schaefer',
      coverURL: 'https://picsum.photos/seed/PS6wnaW/1582/3106',
      nameofbook: 'Christiansen, Rau and Marvin',
      id: '4',
      price: '20',
      categoryColor: 'green',
    },
    {
      author: 'Mansoor',
      coverURL: 'https://picsum.photos/seed/fXytBvu5g5/1509/3939',
      nameofbook: 'Fifty Days',
      id: '5',
      price: '30',
      categoryColor: 'brown',
    },
    {
      author: 'Mansoor ',
      coverURL: 'https://picsum.photos/seed/fXytBvu5g5/1509/3939',
      nameofbook: 'Shades of Book ',
      id: '6',
      price: '40',
      categoryColor: 'red',
    },
  ];
  return (
    <View>
      <FlatList data={TempData} keyExtractor={(item ) => item.id}
        renderItem={({item})=><Book
        {...item}
        />}/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
