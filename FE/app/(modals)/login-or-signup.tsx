import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";

const loginOrSignUp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("@/assets/images/background.png")}
        style={styles.image}
      >
        <Image
          source={require("@/assets/images/logo.png")}
          style={{
            width: 300,
            height: 300,
            objectFit: "contain",
          }}
        />

        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => router.push("/(modals)/login")}
            style={{ ...styles.button, backgroundColor: Colors.primary }}
          >
            <Text style={{ ...styles.buttonText, color: "#fff" }}>Log in</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/(modals)/signup")}
            style={{ ...styles.button, backgroundColor: Colors.white }}
          >
            <Text style={{ ...styles.buttonText, color: Colors.primary }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default loginOrSignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 150,
  },

  button: {
    backgroundColor: "#007bff",
    borderRadius: 50,
    paddingVertical: 5,
    width: 300,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 1,
    borderColor: "black",
  },
  buttonText: {
    fontFamily: "alfa",
    textAlign: "center",
    fontSize: 20,
  },
});
