import React, { useCallback } from "react";
import {
  View,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";
import { Color, Border, FontFamily, FontSize } from "../../GlobalStyles";

const BestSeller = () => {
  const navigation = useNavigation();

  const onIconsClick = useCallback(() => {
    Alert.alert("Notifiacation", "Not");
  }, []);

  return (
    <View style={styles.bestSeller}>
      <TouchableOpacity 
        style={[styles.bestSeller1, styles.bestLayout]}
        onPress={() => router.push("/(modals)/Review")}
      />
      <TouchableOpacity
        style={[styles.bestSeller2, styles.bestLayout]}
        activeOpacity={0.2}
        onPress={() => router.push("/(modals)/Review")}
      />
      <TouchableOpacity
        style={[styles.bestSeller3, styles.bestLayout]}
        activeOpacity={0.2}
        onPress={() => router.push("/(modals)/Review")}
      />
      <TouchableOpacity
        style={[styles.bestSeller4, styles.bestLayout]}
        activeOpacity={0.2}
        onPress={() => router.push("/(modals)/Review")}
      />
      <Pressable
        style={[styles.backButton, styles.iconsPosition]}
        onPress={() => navigation.goBack()}>
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
      <TouchableOpacity
        style={[styles.button, styles.buttonLayout]}
        Navigation="Promo Products"
        activeOpacity={0.2}
        onPress={() => router.push("/(modals)/PromoProducts")}
      >
        <View style={styles.buttonShadowBox} />
        <Text style={[styles.button1, styles.buttonTypo]}>Promo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button2, styles.buttonLayout]}
        Navigation="Best Seller"
        activeOpacity={0.2}
        onPress={() => {}}>
        <View style={styles.buttonShadowBox} />
        <Text style={[styles.button3, styles.buttonTypo]}>Best Seller</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.icons, styles.iconsPosition]}
        activeOpacity={0.2}
        onPress={onIconsClick}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../../assets/images/icons.png")}
        />
      </TouchableOpacity>
      <Image
        style={[styles.ratingStarsIcon0, styles.ratingIconPosition]}
        resizeMode="cover"
        source={require("../../assets/images/rating-stars2.png")}
      />
      <Image
        style={[styles.ratingStarsIcon1, styles.ratingIconPosition]}
        resizeMode="cover"
        source={require("../../assets/images/rating-stars2.png")}
      />
      <Image
        style={[styles.ratingStarsIcon2, styles.ratingIconPosition]}
        resizeMode="cover"
        source={require("../../assets/images/rating-stars2.png")}
      />
      <Image
        style={[styles.ratingStarsIcon3, styles.ratingIconPosition]}
        resizeMode="cover"
        source={require("../../assets/images/rating-stars2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bestLayout: {
    height: 83,
    width: 316,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
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
  ratingIconPosition: {
    left: 292,
    height: 11,
    width: 61,
    position: "absolute",
  },
  bestSeller1: {
    top: 220,
    zIndex: 0,
    left: 50,
    width: 316,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_8xs,
  },
  bestSeller2: {
    top: 323,
    zIndex: 1,
    left: 50,
    width: 316,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_8xs,
  },
  bestSeller3: {
    top: 426,
    zIndex: 2,
    left: 50,
    width: 316,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_8xs,
  },
  bestSeller4: {
    top: 529,
    left: 50,
    zIndex: 3,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_8xs,
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
    zIndex: 4,
  },
  logoFullIcon: {
    left: 150,
    width: 121,
    height: 119,
    zIndex: 5,
    top: 0,
    position: "absolute",
  },
  buttonShadowBox: {
    backgroundColor: Color.backGroundColor,
    elevation: 51,
    shadowRadius: 51,
    shadowColor: "rgba(0, 0, 0, 0)",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    borderRadius: Border.br_8xs,
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
    left: 30,
    zIndex: 6,
  },
  button3: {
    left: "23.01%",
  },
  button2: {
    right: 28,
    zIndex: 7,
  },
  icons: {
    left: 360,
    width: 30,
    height: 30,
    zIndex: 8,
  },
  ratingStarsIcon0: {
    top: 590,
    zIndex: 9,
  },
  ratingStarsIcon1: {
    top: 485,
    zIndex: 10,
  },
  ratingStarsIcon2: {
    top: 387,
    zIndex: 11,
  },
  ratingStarsIcon3: {
    top: 280,
    zIndex: 12,
  },
  bestSeller: {
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

export default BestSeller;
