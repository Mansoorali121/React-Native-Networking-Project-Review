import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters';
import { Plusicon } from '../assets/Icons';

const MainButton = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{
        borderColor:"#F0F5FA",
        borderWidth:s(2),
        backgroundColor:"#fff",
        borderRadius:s(10),
        paddingVertical:vs(22),
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        marginTop:vs(15)
    }}>
   
      <Text style={{
        color:"#FF7622",
        fontSize:s(14),
        marginStart:s(10)
      }}>{title} </Text>
    </TouchableOpacity>
  )
}

export default MainButton;

const styles = StyleSheet.create({})