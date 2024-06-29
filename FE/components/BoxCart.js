import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import Icon1 from "react-native-vector-icons/Entypo";
import { addToCart, decrementQuantity, incrementQuantity, removeItem, updateQuantity } from "@/app/redux/CartSlicer";
import { useDispatch, useSelector } from "react-redux";

const BoxCart = ({ item }) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeItem({ _id: item?._id }));
  };
  return (
    <SafeAreaView style={styles.box}>
      <View style={{ padding: 8 }}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ color: "#FFF8EF", fontSize: 18, paddingTop: 9 }}>
              {item.name}
            </Text>
          </View>
          <View>
            <Icon1.Button
              name="cross"
              size={25}
              style={{ paddingTop: 6, paddingBottom: 0, paddingRight: 0 }}
              backgroundColor="#8E4949"
              onPress={handleRemove}
            />
          </View>
        </View>

        <View
          style={{
            width: 220,
            flexDirection: "row",
            justifyContent: "center",
          }}
          ellipsizeMode="tail"
          numberOfLines={1}
        >
          <Icon1.Button
            name="squared-plus"
            size={25}
            style={{ paddingTop: 6, paddingBottom: 0, paddingRight: 0 }}
            backgroundColor="#8E4949"
            onPress={() => {
              // setQuantity((pre) => pre + 1);
              dispatch(incrementQuantity({_id:item._id}))
              console.log("Them");
            }}
          />
          <Text
            style={{
              color: "#FFF8EF",
              paddingTop: 6,
              paddingBottom: 0,
              paddingRight: 0,
              fontSize: 18,
            }}
          >
            {item?.quantity}
          </Text>
          <Icon1.Button
            name="squared-minus"
            size={25}
            style={{ paddingTop: 6, paddingBottom: 0, paddingRight: 0 }}
            backgroundColor="#8E4949"
            onPress={() => {
              //if (quantity > 1) setQuantity((pre) => pre - 1);
              dispatch(decrementQuantity({_id:item._id}))
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <View>
            <Text style={{ color: "#FFF8EF", fontSize: 18 }}>
              {item?.price*item?.quantity}đ
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#8E4949",
    width: 350,
    height: 100,
    borderRadius: 15,
    flexDirection: "row",
    marginBottom: 8,
  },
  image: {
    width: 100,
    height: 84,
    borderRadius: 15,
    overflow: "hidden",
  },
});
export default BoxCart;
