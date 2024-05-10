import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const EditMyProfile = () => {
  return (
    <>
      {render.map((x, i) => (
        <TextInput
          key={i}
          placeholder={x.name}
          placeholderTextColor="#ffffff98"
          style={{
            ...styles.textInput,
            backgroundColor: x.name === "Name" ? "black" : "#ffffff30",
          }}
        />
      ))}
    </>
  );
};

export default EditMyProfile;

const render = [
  {
    name: "Name",
  },
  {
    name: "Email",
  },
  {
    name: "Phone Number",
  },
  {
    name: "Adress",
  },
  {
    name: "City",
  },
  {
    name: "Country/Region",
  },
];

const styles = StyleSheet.create({
  textInput: {
    color: "white",
    width: "100%",
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 20,
    fontFamily: "alice",
    paddingVertical: 1,
  },
});
