import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import axios from 'axios';
import React, { useState, useEffect } from "react";
import {
  Image,
  ImageBackground,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputFocusEventData,
  ToastAndroid,
  TouchableOpacity,
  View,
  ScrollView
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const baseUrl = 'http://10.0.121.56:3000/api/v1';
  const headers =

    useEffect(() => {

      // Trigger form validation when name,  
      // email, or password changes 
      validateForm();
    }, [name, email, password]);

  const validateForm = () => {
    let errors = {};

    // Validate name field 
    if (!name) {
      errors.name = 'Name is required.';
    }

    // Validate email field 
    if (!email) {
      errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid.';
    }

    // Validate password field 
    if (!password) {
      errors.password = 'Password is required.';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters.';
    }

    // Set the errors and update form validity 
    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleSubmit = async () => {
    if (isFormValid) {
      axios(
        {
          method: 'POST',
          baseURL: `${baseUrl}/auth/register`,
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          },
          data: { username: name, email: email, password: password }

        }
      )
        .then((res) => {
          if(res.data.status === 'success'){
            ToastAndroid.show(res.data.msg, ToastAndroid.SHORT)
            router.push("/(modals)/login-or-signup")
          }else{
            ToastAndroid.show(res.data.msg, ToastAndroid.SHORT)
          }
        })
        .catch(err => console.log(err));

    } else {

      // Form is invalid, display error messages 
      ToastAndroid.show('Error', ToastAndroid.SHORT)
    }
  };
  return (
    <ScrollView style={styles.container}>
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
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />

            <TextInput
              style={{ ...styles.textInput }}
              placeholderTextColor="#ffffff80"
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />

            <TextInput
              style={{
                ...styles.textInput,
              }}
              placeholderTextColor="#ffffff80"
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
            />

            {/* <TextInput
              style={{
                ...styles.textInput,
              }}
              placeholderTextColor="#ffffff80"
              placeholder="Confirm Password"
            /> */}
          </View>
          {Object.values(errors).map((error, index) => (
            <Text key={index} style={styles.error}>
              {error}
            </Text>
          ))}

          <View>
            <TouchableOpacity
              // onPress={() => router.push(("message/" + "Registed") as any)}
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
                Register
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
    </ScrollView>
  );
};

export default signup;

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
  error: {
    color: 'red',
    fontSize: 18,
  },
});
