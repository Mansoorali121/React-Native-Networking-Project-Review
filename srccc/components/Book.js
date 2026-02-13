
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {FC} from 'react';



const Book = ({
  author,
  nameofbook,
  price,
  cover,
  categoryColor,
  ondeletePress,
  
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.coloredSquare, {backgroundColor: categoryColor}]}>
        <Image source={{uri: cover}} style={styles.image} />
        <Text onPress={ondeletePress} style={styles.deletetext}>Delete Text</Text>
      </View>

      <Text>{author}</Text>
      <Text>{nameofbook}</Text>
      <Text>{price}$</Text>
      {/* <Text>{id}</Text> */}

    </View>
  );
};

export default Book;

const styles = StyleSheet.create({
  container: {alignItems: 'center', marginBottom: 50},
  coloredSquare: {
    borderRadius: 8,
    height: 130,
    width: 130,
    alignItems: 'center',
    marginBottom: 5,
  },
  image: {
    height: 130,
    width: 80,
    resizeMode: 'stretch',
    backgroundColor: 'blue',
    marginTop: -20,
    borderRadius: 8,
  },
  deletetext:{color:"red"}
});
