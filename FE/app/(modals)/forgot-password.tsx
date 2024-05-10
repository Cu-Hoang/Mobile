import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const forgotPassowrd = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("@/assets/images/background.png")}
        style={styles.image}
      >
        <Image
          source={require("@/assets/images/logo.png")}
          style={{
            width: 250,
            height: 250,
            objectFit: "contain",
          }}
        />

        <View
          style={{
            width: 300,
            flexDirection: "column",
            gap: 20,
            marginTop: 30,
          }}
        >
          <View style={{ flexDirection: "column", gap: 10 }}>
            <TextInput
              style={{ ...styles.textInput, marginBottom: 50 }}
              placeholderTextColor="#ffffff80"
              placeholder="Email"
            />
          </View>

          <View>
            <TouchableOpacity
              onPress={() => router.push("/(modals)/input-OTP")}
              style={{
                ...styles.button,
                borderRadius: 10,
                paddingVertical: 10,
                backgroundColor: "#fff",
                marginBottom: 10,
              }}
            >
              <Text style={{ ...styles.buttonText, color: "black" }}>Find</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.button,
                borderRadius: 10,
                paddingVertical: 10,
                backgroundColor: "#000",
              }}
            >
              <Text style={{ ...styles.buttonText, color: "white" }}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.seperatorView}>
            <View style={styles.borderLine}></View>
            <Text style={styles.seperatorText}>Or</Text>
            <View style={styles.borderLine}></View>
          </View>

          <View style={{ flexDirection: "column", gap: 15 }}>
            <TouchableOpacity
              style={{
                ...styles.button,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                paddingLeft: 25,
                gap: 10,
              }}
            >
              <Ionicons name="logo-facebook" size={25} color="white" />
              <Text
                style={{
                  ...styles.buttonText,
                  fontFamily: "alfa",
                  fontSize: 17,
                  color: "white",
                }}
              >
                Continue with Facebook
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                ...styles.button,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#fff",
                justifyContent: "flex-start",
                paddingLeft: 25,
                gap: 10,
              }}
            >
              <Ionicons name="logo-google" size={25} color="black" />
              <Text
                style={{
                  ...styles.buttonText,
                  fontFamily: "alfa",
                  fontSize: 17,
                  color: "#000",
                }}
              >
                Continue with Google
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                ...styles.button,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "black",
                justifyContent: "flex-start",
                paddingLeft: 25,
                gap: 10,
              }}
            >
              <Ionicons name="logo-apple" size={25} color="white" />
              <Text
                style={{
                  ...styles.buttonText,
                  fontFamily: "alfa",
                  fontSize: 17,
                  color: "white",
                }}
              >
                Continue with Google
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default forgotPassowrd;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
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
