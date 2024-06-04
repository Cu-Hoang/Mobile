import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import EditMyProfile from "./EditMyProfile";
import HelpSupport from "./HelpSupport";
import Setting from "./Setting";
import { router } from "expo-router";
import instance from '../app/config/axios';
import * as SecureStore from 'expo-secure-store';

const MyAccount = () => {
  const [modalShow, setModalShow] = useState("");
  const handleOnPress = async (name: string) => {
    if (name === "Log out") {
      const refreshToken = await SecureStore.getItemAsync('refreshToken');
      const result = await instance({
        method:'DELETE',
        url: '/auth/logout',
        data: {refreshToken: refreshToken}
      });
      ToastAndroid.show(result.data.msg,ToastAndroid.SHORT)
      router.push("/login-or-signup");
    } else {
      setModalShow(name);
    }
  };
  return (
    <View
      style={{
        marginTop: 20,
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 15,
        width: "80%",
      }}
    >
      <Text style={styles.text}>My Account</Text>
      {render.map((x, i) => (
        <TouchableOpacity
          onPress={() => handleOnPress(x.name)}
          key={i}
          style={{
            ...styles.buttonStyle,
            display:
              modalShow == "" ? "flex" : modalShow == x.name ? "flex" : "none",
          }}
        >
          <Ionicons name={x.icon as any} size={25} color="white" />
          <Text style={styles.text}>{x.name}</Text>
        </TouchableOpacity>
      ))}
      {modalShow != "" && (
        <View
          style={{
            backgroundColor: "#00000050",
            flexDirection: "column",
            borderRadius: 20,
            width: "100%",
            height: "auto",
            padding: 15,
          }}
        >
          <Ionicons
            style={{ alignSelf: "flex-end", marginRight: 10 }}
            name="close-circle-outline"
            size={36}
            color="#ffffff70"
            onPress={() => setModalShow("")}
          />
          <View style={{ marginTop: 10, flexDirection: "column", gap: 20 }}>
            {modalShow === "Edit my profile" && <EditMyProfile />}
            {modalShow === "Help Support" && <HelpSupport />}
            {modalShow === "Settings" && <Setting />}
          </View>
        </View>
      )}
    </View>
  );
};

const render = [
  {
    name: "Edit my profile",
    icon: "brush-outline",
  },
  {
    name: "Settings",
    icon: "settings-outline",
  },
  {
    name: "Help Support",
    icon: "chatbubble-outline",
  },
  {
    name: "Log out",
    icon: "log-out-outline",
  },
];

export default MyAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  text: {
    fontFamily: "alice",
    fontSize: 30,
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
