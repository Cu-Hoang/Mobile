import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import * as SecureStore from 'expo-secure-store';
import instance from '../config/axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

const inputOTP = () => {
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);

  const focusNextInput = (nextInputRef: any) => {
    if (nextInputRef.current) {
      nextInputRef.current.focus();
    }
  };
  let [otp] = useState('');
  const updateCharacterAtIndex = (str, index, newChar) => {
    if (index < 0 || index >= str.length) {
        return str; // Trả về chuỗi gốc nếu index không hợp lệ
    }
    return str.slice(0, index) + newChar + str.slice(index + 1);
}
  const handleSubmit = async () => {
    const userId = await AsyncStorage.getItem("userId")
    if(userId){
      instance(
        {
          method: 'POST',
          url: '/mail/verify-otp',
          data: { userId: userId, otp: otp }
        }
      )
        .then(async res => {
          if (res.data.status === 'success') {
            ToastAndroid.show(res.data.msg, ToastAndroid.SHORT)
            router.push("/change-password")
          } else {
            ToastAndroid.show(res.data.msg, ToastAndroid.SHORT)
          }
        })
        .catch(err => {
          console.log(err);
  
        })
    }
    
  }
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
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 50,
            }}
          >
            <TextInput
              ref={input1Ref}
              maxLength={1}
              keyboardType="numeric"
              style={{ ...styles.textInput, width: 65, height: 65 }}
              placeholderTextColor="#ffffff80"
              placeholder=""
              onChangeText={(text) => {
                if (text.length === 1) {
                  if (otp.length === 0) otp = otp + text;
                  else {
                    otp = updateCharacterAtIndex(otp,0,text)
                  }

                  focusNextInput(input2Ref);
                }
              }}
            />

            <TextInput
              ref={input2Ref}
              maxLength={1}
              keyboardType="numeric"
              style={{ ...styles.textInput, width: 65, height: 65 }}
              placeholderTextColor="#ffffff80"
              placeholder=""
              onChangeText={(text) => {
                if (text.length === 1) {
                  if (otp.length === 1) otp = otp + text;
                  else {
                    otp = updateCharacterAtIndex(otp,1,text)
                  }
                  focusNextInput(input3Ref);
                }
              }}
            />

            <TextInput
              ref={input3Ref}
              maxLength={1}
              keyboardType="numeric"
              style={{ ...styles.textInput, width: 65, height: 65 }}
              placeholderTextColor="#ffffff80"
              placeholder=""
              onChangeText={(text) => {
                if (text.length === 1) {
                  if (otp.length === 2) otp = otp + text;
                  else {
                    otp = updateCharacterAtIndex(otp,2,text)
                  }
                  focusNextInput(input4Ref);
                }
              }}
            />

            <TextInput
              ref={input4Ref}
              maxLength={1}
              keyboardType="numeric"
              style={{ ...styles.textInput, width: 65, height: 65 }}
              placeholderTextColor="#ffffff80"
              placeholder=""
              onChangeText={(text) => {
                if (otp.length === 3) otp = otp + text;
                else {
                  otp = updateCharacterAtIndex(otp,3,text)
                }
              }}
            />
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
                Reset your password
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

export default inputOTP;

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
    marginHorizontal: 10,
    color: "#fff",
    fontSize: 15,
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
    fontSize: 35,
    textAlign: "center",
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
