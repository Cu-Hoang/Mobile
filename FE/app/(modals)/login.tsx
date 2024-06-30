import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  ToastAndroid,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import axios from "axios";
import * as SecureStore from 'expo-secure-store';
import instance from '../config/axios';
import { useNavigation } from "@react-navigation/native";

const login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigation = useNavigation();
  const handleOnEyeClick = () => {
    setShowPassword((pre) => !pre);
  };
  const handleSubmit = async () => {
    instance(
      {
        method: 'POST',
        url: '/auth/login',
        data: { email: email, password: password }
      }
    )
      .then(async res => {
        if (res.data.status === 'success') {
          ToastAndroid.show(res.data.msg, ToastAndroid.SHORT)
          await SecureStore.setItem("accessToken", res.data.accessToken);
          await SecureStore.setItem("refreshToken", res.data.refreshToken);
          await SecureStore.setItem("userId",res.data.user._id);
          router.push("(tabs)");
        } else {
          ToastAndroid.show(res.data.msg, ToastAndroid.SHORT)
        }
      })
      .catch(err => {
        console.log(err);

      })
  }
  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../../assets/images/back-button.png")}
        />
      </Pressable>
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
              style={{ ...styles.textInput }}
              placeholderTextColor="#ffffff80"
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
            <View
              style={{
                width: "auto",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#ffffff50",
                borderRadius: 15,
              }}
            >
              <TextInput
                style={{
                  ...styles.textInput,
                  flex: 1,
                  backgroundColor: "transparent",
                }}
                placeholderTextColor="#ffffff80"
                placeholder="Password"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}

              />
              {showPassword ? (
                <Ionicons
                  onPress={handleOnEyeClick}
                  style={{ marginRight: 15 }}
                  name="eye-off-outline"
                  size={20}
                  color="white"
                />
              ) : (
                <Ionicons
                  onPress={handleOnEyeClick}
                  style={{ marginRight: 15 }}
                  name="eye-outline"
                  size={20}
                  color="white"
                />
              )}
            </View>
            <Text
              onPress={() => router.push("/(modals)/forgot-password")}
              style={{
                textDecorationLine: "underline",
                color: "#ffffff",
                marginBottom: 20,
                fontFamily: "alice",
              }}
            >
              Forgot password
            </Text>
          </View>

          <View>
            <TouchableOpacity
              onPress={handleSubmit}
              style={{
                ...styles.button,
                borderRadius: 10,
                paddingVertical: 10,
                backgroundColor: "#fff",
                marginBottom: 10,
              }}
            >
              <Text style={{ ...styles.buttonText, color: "black" }}>
                Log in
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push("/(modals)/login-or-signup")}
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

export default login;

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
  icon: {
    overflow: "hidden",
    height: "100%",
    width: "100%",
  },
  backButton: {
    left: 18,
    zIndex: 1,
    height: 24,
    width: 24,
    top: 40,
    position: "absolute",
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
