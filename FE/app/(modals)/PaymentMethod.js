import React, { useCallback, useEffect, useState } from "react";
import {
  TextInput,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
  View,
  Text,
  Alert,
  ScrollView,
} from "react-native";
import {  useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../../GlobalStyles";
import { router } from "expo-router";
import instance from "../config/axios";
import { useSelector,useDispatch } from "react-redux";
import * as SecureStore from "expo-secure-store";
import { resetCart } from "../redux/CartSlicer";

const PaymentMethod = () => {
  const cart = useSelector((state) => state.cart);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleCOD = async () => {
    try {
      const userId = await SecureStore.getItemAsync("userId");
      const total = cart.total;
      const result = await instance({
        method: "POST",
        url: "/order/create",
        data: { userId: userId, total: total },
      });
      if (result && result.data.status ==='success') {
        const orderId = result.data.data._id;
        const products = cart.list.map((item) => {
          return {
            orderId: orderId,
            productId: item._id,
            quantity: item.quantity,
          };
        });
        dispatch(resetCart({}));
        console.log(products);
        const result1 = await instance({
          method: "POST",
          url: "/orderdetail/create",
          data: products,
        });
        alert("Success");
        navigation.navigate("Cart")
      }
    } catch (error) {
      console.log(error);
    }
  };
  const onIconsClick = useCallback(() => {
    Alert.alert("Notification", "Not");
  }, []);
  return (
    <View style={[styles.container, styles.searchPage]}>
      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Image
          style={styles.icon}
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
        style={styles.icons}
        activeOpacity={0.2}
        onPress={onIconsClick}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../../assets/images/icons.png")}
        />
      </TouchableOpacity>
      <View style={{ marginBottom: 400 }}>
        <Pressable style={[styles.buttonLayout]} onPress={handleCOD}>
          <View style={styles.childShadowBox} />
          <Text style={[styles.button, styles.buttonTypo]}>COD</Text>
        </Pressable>
        <Pressable style={[styles.buttonLayout]} onPress={() => alert("VNPAY")}>
          <View style={styles.childShadowBox} />
          <Text style={[styles.button, styles.buttonTypo]}>VNPAY</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  box: {},
  buttonLayout: {
    height: 50,
    width: 280,
    top: 165,
    marginTop: 30,
  },
  buttonTypo: {
    textAlign: "center",
    color: Color.blueText,
    fontFamily: FontFamily.aliceRegular,
    fontSize: FontSize.size_sm,
    top: "25.81%",
    position: "absolute",
  },
  groupChildLayout: {
    width: 150,
    position: "absolute",
  },
  groupChildPosition: {
    left: 0,
    top: 0,
  },
  machiattoTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.aliceRegular,
    position: "absolute",
  },
  iconsLayout: {
    opacity: 0.5,
    overflow: "hidden",
    width: 24,
    position: "absolute",
  },
  groupInnerLayout: {
    height: 265,
    width: 145,
    position: "absolute",
  },
  ratingIconLayout: {
    height: 11,
    width: 61,
  },
  rectangleLayout: {
    height: 258,
    width: 160,
    marginRight: 10,
    marginBottom: 10,
  },
  bobasteaTypo: {
    color: Color.colorBlack,
    textAlign: "left",
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.aliceRegular,
  },
  vectorIconLayout: {
    height: 18,
    width: 20,
    position: "absolute",
  },
  groupLayout: {
    height: 120,
    width: 157,
    position: "absolute",
  },
  bobasteaPosition: {
    top: 102,
    position: "absolute",
  },
  searchPageChild: {
    paddingBottom: 650,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_mid,
    zIndex: 0,
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
    top: 20,
    position: "absolute",
  },
  logoFullIcon: {
    left: 150,
    width: 121,
    height: 119,
    zIndex: 2,
    top: 0,
    position: "absolute",
  },
  icons: {
    left: 360,
    width: 30,
    height: 30,
    zIndex: 3,
    top: 20,
    position: "absolute",
  },
  childShadowBox: {
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
  button: {
    alignSelf: "center",
  },
  button4: {
    left: "30%",
  },
  Menu: {
    left: 163,
    zIndex: 6,
  },
  groupChild: {
    height: 93,
    width: 150,
    position: "absolute",
    borderRadius: Border.br_mini,
  },
  groupItem: {
    top: 8,
    left: 2,
    width: 148,
    height: 110,
    position: "absolute",
    borderRadius: Border.br_mini,
  },
  machiatto: {
    left: 16,
    width: 51,
    height: 14,
    top: 95,
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.size_2xs,
  },
  icons1: {
    top: 13,
    left: 121,
    height: 22,
  },
  ratingStarsIcon: {
    left: 80,
    height: 10,
    width: 61,
    top: 97,
    position: "absolute",
  },
  TopRight: {
    left: 54,
    height: 114,
    zIndex: 7,
    top: 202,
  },
  groupInner: {
    left: 0,
    top: 0,
    borderRadius: Border.br_mini,
  },
  traditionalBubbletea: {
    top: 234,
    left: 12,
    width: 57,
    height: 26,
  },
  vectorIcon: {
    height: "74.17%",
    width: "83.33%",
    top: "12.92%",
    right: "8.33%",
    bottom: "12.92%",
    left: "8.33%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  icons2: {
    top: 10,
    left: 113,
    height: 24,
  },
  ratingStarsIcon1: {
    left: 72,
    top: 246,
    position: "absolute",
  },
  rectangleGroup: {
    left: 0,
    top: 0,
  },
  BottomLeft: {
    top: 338,
    left: 59,
    zIndex: 8,
  },
  rectangleIcon: {
    left: 0,
    top: 0,
    borderRadius: Border.br_mini,
  },
  strawberryTea: {
    top: 237,
    left: 14,
    width: 78,
    height: 14,
    position: "absolute",
  },
  ratingStarsIcon2: {
    top: 238,
    left: 96,
    position: "absolute",
  },
  vectorIcon1: {
    top: 11,
    left: 134,
  },
  Topleft: {
    zIndex: 9,
    left: 220,
    top: 210,
  },
  groupChild1: {
    left: 0,
    top: 0,
    borderRadius: Border.br_mini,
  },
  bobastea: {
    left: 10,
    width: 63,
    color: Color.colorBlack,
    textAlign: "left",
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.aliceRegular,
    height: 14,
  },
  ratingStarsIcon3: {
    left: 91,
    height: 11,
    width: 61,
  },
  vectorIcon2: {
    top: 7,
    left: 129,
  },
  BottomRight: {
    top: 483,
    zIndex: 10,
    left: 220,
  },
  searchPage: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: Color.background,
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    borderWidth: 1,
    flex: 1,
    height: 720,
    flexDirection: "row",
    width: "100%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_mini,
  },
});

export default PaymentMethod;
