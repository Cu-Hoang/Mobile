import React, { useCallback } from "react";
import {
  View,
  Pressable,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../../GlobalStyles";
import { router } from "expo-router";
import { useDispatch } from "react-redux";

const PromoProducts = () => {
  const navigation = useNavigation();
  const onIconsClick = useCallback(() => {
    Alert.alert("Notification", "Not");
  }, []);

  return (
    <SafeAreaView style={styles.promoProducts}>
      <Pressable
        style={[styles.backButton, styles.iconsPosition]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.icon}
          Navigation="Search Page"
          resizeMode="cover"
          source={require("../../assets/images/back-button.png")}
        />
      </Pressable>
      <Image
        style={styles.logoFullIcon}
        resizeMode="cover"
        source={require("../../assets/images/logoC22.png")}
      />
      <Pressable
        style={[styles.icons, styles.iconsPosition]}
        onPress={onIconsClick}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../../assets/images/icons.png")}
        />
      </Pressable>
      <View style={[styles.promoProducts1Render, styles.promoProducts1Layout]} />
      <View style={[styles.promoProducts2Render, styles.promoProducts2Layout]} />
      <View style={[styles.promoProducts3Render, styles.promoProducts3Layout]} />
      <View style={[styles.promoProducts4Render, styles.promoProducts4Layout]} />
      <TouchableOpacity
        style={[styles.promoProducts1Render,styles.promoProducts1Layout]}
        activeOpacity={0.2}
        onPress={() => router.push("/(modals)/Review")}
      />
      <TouchableOpacity
        style={[styles.promoProducts2Render, styles.promoProducts2Layout]}
        activeOpacity={0.2}
        onPress={() => router.push("/(modals)/Review")}
      />
      <Pressable
        style={[styles.promoProducts3Render, styles.promoProducts3Layout]}
        onPress={() => router.push("/(modals)/Review")}
      />
      <TouchableOpacity
        style={[styles.promoProducts4Render, styles.promoProducts4Layout]}
        activeOpacity={0.2}
        onPress={() => router.push("/(modals)/Review")}
      />
      <Image
        style={[styles.ratingStarsIcon0, styles.ratingIconLayout]}
        resizeMode="cover"
        source={require("../../assets/images/rating-stars1.png")}
      />
      <Image
        style={[styles.ratingStarsIcon1, styles.ratingIconLayout]}
        resizeMode="cover"
        source={require("../../assets/images/rating-stars1.png")}
      />
      <Image
        style={[styles.ratingStarsIcon2, styles.ratingIconLayout]}
        resizeMode="cover"
        source={require("../../assets/images/rating-stars1.png")}
      />
      <Image
        style={[styles.ratingStarsIcon3, styles.ratingIconLayout]}
        resizeMode="cover"
        source={require("../../assets/images/rating-stars1.png")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  iconsPosition: {
    top: 20,
    position: "absolute",
  },
  buttonLayout: {
    height: 31,
    width: 123,
    top: 155,
    position: "absolute",
  },
  buttonTypo: {
    textAlign: "center",
    color: Color.blueText,
    fontFamily: FontFamily.aliceRegular,
    fontSize: FontSize.size_sm,
    top: "25.81%",
    position: "absolute",
  },
  promoProducts1Layout: {
    height: 83,
    width: 316,
    backgroundColor: Color.colorGainsboro,
    left: 50,
    top: 220,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  promoProducts2Layout: {
    top: 323,
    height: 83,
    width: 316,
    backgroundColor: Color.colorGainsboro,
    left: 50,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  promoProducts3Layout: {
    top: 426,
    height: 83,
    width: 316,
    backgroundColor: Color.colorGainsboro,
    left: 50,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  promoProducts4Layout: {
    top: 529,
    height: 83,
    width: 316,
    backgroundColor: Color.colorGainsboro,
    left: 50,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  ratingIconLayout: {
    height: 11,
    width: 61,
    left: 292,
    position: "absolute",
  },
  icon: {
    overflow: "hidden",
    height: "100%",
    width: "100%",
  },
  backButton: {
    left: 18,
    width: 24,
    height: 24,
    zIndex: 0,
  },
  logoFullIcon: {
    left: 150,
    width: 121,
    height: 119,
    zIndex: 2,
    top: 0,
    position: "absolute",
  },
  buttonShadowBox: {
    backgroundColor: Color.backGroundColor,
    borderRadius: Border.br_8xs,
    elevation: 51,
    shadowRadius: 51,
    shadowColor: "rgba(0, 0, 0, 0)",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  button1: {
    left: "32.76%",
  },
  button: {
    left: 26,
    zIndex: 2,
  },
  button3: {
    left: "23.01%",
  },
  button2: {
    right: 25,
    zIndex: 3,
  },
  icons: {
    left: 360,
    width: 30,
    height: 30,
    zIndex: 4,
  },
  promoProducts1Render: {
    zIndex: 5,
  },
  promoProducts2Render: {
    zIndex: 6,
  },
  promoProducts3Render: {
    zIndex: 7,
  },
  promoProducts4Render: {
    zIndex: 8,
  },
  ratingStarsIcon0: {
    top: 280,
    zIndex: 9,
  },
  ratingStarsIcon1: {
    top: 381,
    zIndex: 10,
  },
  ratingStarsIcon2: {
    top: 486,
    zIndex: 11,
  },
  ratingStarsIcon3: {
    top: 582,
    zIndex: 12,
  },
  promoProducts: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    borderRadius: Border.br_mini,
    backgroundColor: Color.background,
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    borderWidth: 1,
    flex: 1,
    height: 720,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
});

export default PromoProducts;
