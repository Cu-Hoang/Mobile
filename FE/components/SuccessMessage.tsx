import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import Animated, { FadeInDown, ZoomInEasyDown } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
interface Prop {
  message: string;
}

const SuccessMessage = ({ message }: Prop) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("@/assets/images/background.png")}
        style={styles.image}
      >
        <Animated.Image
          entering={ZoomInEasyDown}
          source={require("@/assets/images/logo.png")}
          style={{
            width: 250,
            height: 250,
            objectFit: "contain",
            marginTop: 100,
          }}
        />

        <Animated.Image
          entering={FadeInDown}
          source={require("@/assets/images/icon-success.png")}
          style={{
            width: 100,
            marginTop: 250,
            height: 100,
            objectFit: "contain",
          }}
        />

        {/* <Image
          source={require("@/assets/images/icon-success.png")}
          style={{
            width: 100,
            marginTop: 250,
            height: 100,
            objectFit: "contain",
          }}
        /> */}

        <Animated.Text entering={FadeInDown} style={styles.text}>
          {message}
        </Animated.Text>
        <Animated.Text entering={FadeInDown} style={styles.text}>
          Thanks you
        </Animated.Text>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SuccessMessage;

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
  text: {
    fontSize: 25,
    fontFamily: "alice",
    color: "white",
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
