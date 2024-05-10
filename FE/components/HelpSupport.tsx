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

const HelpSupport = () => {
  const [showAnswer, setShowAnswer] = useState(-1);
  const renderRow: ListRenderItem<any> = ({ item }) => (
    <>
      <TouchableOpacity
        onPress={() =>
          setShowAnswer((pre) => {
            if (pre === item.id) -1;
            else return item.id;
          })
        }
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
          marginBottom: 10,
        }}
      >
        <Text style={styles.text}>{item.question}</Text>
        <Ionicons name="chevron-down-outline" size={25} color="white" />
      </TouchableOpacity>
      {item.id === showAnswer && (
        <Text style={{ ...styles.text, marginBottom: 10 }}>{item.answer}</Text>
      )}
    </>
  );
  return (
    <>
      <Text style={styles.text}>Frequent Question</Text>
      <FlatList data={data} renderItem={renderRow} />
      <View>
        <Text style={styles.text}>Contact us</Text>
        <Text style={styles.text}>office@travel.com</Text>
        <Text style={styles.text}>+0123456789</Text>
      </View>
    </>
  );
};

export default HelpSupport;

const data = [
  {
    id: 0,
    question: "Question 1",
    answer: "Question 1",
  },
  {
    id: 1,
    question: "Question 2",
    answer: "Answer 2",
  },
  {
    id: 2,
    question: "Question 3",
    answer: "Answer 3",
  },
  {
    id: 3,
    question: "Question 4",
    answer: "Answer 4",
  },
  {
    id: 4,
    question: "Question 5",
    answer: "Answer 5",
  },
  {
    id: 5,
    question: "Question 6",
    answer: "Answer 6",
  },
  {
    id: 6,
    question: "Question 7",
    answer: "Answer 7",
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  text: {
    fontFamily: "alice",
    fontSize: 25,
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
