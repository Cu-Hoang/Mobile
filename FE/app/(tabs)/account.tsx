import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import MyAccount from "@/components/MyAccount";
import { useNavigation } from "@react-navigation/native";

const account = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerTransparent: true,

          headerLeft: () => (
            <Ionicons
              name="arrow-back-circle-outline"
              size={30}
              color="black"
              style={{ marginLeft: 20 }}
              onPress={() => navigation.goBack()}
            />
          ),
          headerRight: () => (
            <Ionicons
              name="notifications-outline"
              size={30}
              color="black"
              style={{ marginRight: 20 }}
            />
          ),
        }}
      ></Stack.Screen>
      <ImageBackground
        source={require("@/assets/images/background.png")}
        style={styles.image}
      >
        <Image
          source={require("@/assets/images/logo-splash-screen.png")}
          style={{
            width: 150,
            height: 150,
            objectFit: "contain",
            marginTop: 30,
          }}
        />
        <MyAccount />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default account;

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
