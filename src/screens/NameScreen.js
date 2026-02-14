import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { changeName } from "../redux/userSlice";

const NameScreen = () => {
  const name = useSelector(state => state.user.name);
  const dispatch = useDispatch();

  const [inputName, setInputName] = useState("");

  const handleChange = () => {
    dispatch(changeName(inputName));
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 25 }}>{name}</Text>

      <TextInput
        placeholder="Enter new name"
        value={inputName}
        onChangeText={setInputName}
        style={{ borderWidth: 1, width: 200, marginVertical: 20 }}
      />

      <TouchableOpacity onPress={handleChange}>
        <Text>Change Name</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NameScreen;
