import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../redux/counterSlice';

const CounterScreen = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(increment())}>
        <Text style={styles.text}>Increment</Text>
      </TouchableOpacity>

  
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#75563B',
    padding: 15,
    marginVertical: 10,
    width: 200,
    alignItems: 'center',
    borderRadius: 10,
  },

  text: {
    color: '#fff',
    fontSize: 18,
  },
});
