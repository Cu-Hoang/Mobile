import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import SelectDropdown from "react-native-select-dropdown";

const Setting = () => {
  const renderRow: ListRenderItem<any> = ({ item }) => (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
      }}
    >
      <Text style={styles.text}>{item.key}</Text>
      <SelectDropdown
        defaultValue={
          item.key == "Language"
            ? { title: "English" }
            : item.key == "Currency"
            ? { title: "Dollar" }
            : item.key === "Appearance"
            ? { title: "Light theme" }
            : { title: "On" }
        }
        showsVerticalScrollIndicator={false}
        dropdownStyle={styles.dropdownMenuStyle}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        data={item.value}
        renderButton={(selectedItem, isOpened) => {
          return (
            <View style={styles.dropdownButtonStyle}>
              <Text style={styles.dropdownButtonTxtStyle}>
                {(selectedItem && selectedItem.title) || "Select your mood"}
              </Text>
              <Ionicons
                color="white"
                size={20}
                name={isOpened ? "chevron-up-outline" : "chevron-down-outline"}
                style={styles.dropdownButtonArrowStyle}
              />
            </View>
          );
        }}
        renderItem={(item, index, isSelected) => {
          return (
            <View
              style={{
                ...styles.dropdownItemStyle,
                ...(isSelected && { backgroundColor: "#D2D9DF" }),
              }}
            >
              <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
            </View>
          );
        }}
      />
    </View>
  );
  return (
    <>
      <FlatList data={data} renderItem={renderRow} />
    </>
  );
};

export default Setting;

const data = [
  {
    key: "Language",
    value: [
      {
        title: "English",
      },
      {
        title: "Vietnamese",
      },
    ],
  },
  {
    key: "Currency",
    value: [
      {
        title: "Dollar",
      },
      {
        title: "VND",
      },
    ],
  },
  {
    key: "Appearance",
    value: [
      {
        title: "Light theme",
      },
      { title: "Black theme" },
    ],
  },
  {
    key: "Notification",
    value: [{ title: "On" }, { title: "Off" }],
  },
];

const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: 200,
    height: 40,
    backgroundColor: "#ffffff70",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#fff",
    fontFamily: "alice",
  },
  dropdownButtonArrowStyle: {
    fontSize: 25,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: "#E9ECEF",
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },
  text: {
    fontFamily: "alice",
    fontSize: 20,
    color: "white",
  },
  buttonStyle: { flexDirection: "row", alignItems: "center", gap: 10 },
  seperatorView: {
    flexDirection: "row",
    alignItems: "center",
  },
  borderLine: {
    borderBottomColor: "#000",
    borderBottomWidth: 2,
    flex: 1,
  },
  seperatorText: {
    marginHorizontal: 10, // Adjust spacing as needed
    color: "#fff", // Adjust text color as needed
    fontSize: 15, // Adjust text styling as needed
    fontFamily: "alfa",
    textShadowColor: "#000",
    textShadowRadius: 15,

    textShadowOffset: { width: 0, height: 0 },
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "center",
  },
  textInput: {
    borderRadius: 15,
    width: "auto",
    fontSize: 18,
    paddingVertical: 5,
    fontFamily: "alice",
    backgroundColor: "#ffffff50",
    paddingHorizontal: 10,

    color: "#fff",
  },

  button: {
    backgroundColor: "#007bff",
    borderRadius: 15,
    paddingVertical: 5,
    width: "auto",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontFamily: "alice",
    textAlign: "center",
    fontSize: 20,
  },
});
