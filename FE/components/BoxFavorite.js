import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import Icon1 from "react-native-vector-icons/Entypo";
import { useDispatch } from "react-redux";
import { removeFromFavorite } from "@/app/redux/FavoriteSlicer";

const BoxFavorite = ({ item }) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeFromFavorite({ _id: item?._id }));
  };

  return (
    <SafeAreaView style={styles.box}>
      <View style={{ padding: 8 }}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.item}đ</Text>
      </View>
      <Icon1.Button
        name="cross"
        size={25}
        style={styles.deleteButton}
        backgroundColor="#8E4949"
        onPress={handleRemove}
      />
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
    alignItems: "center",
    paddingHorizontal: 10,
  },
  image: {
    width: 100,
    height: 84,
    borderRadius: 15,
    overflow: "hidden",
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    color: "#FFF8EF",
    fontSize: 18,
    textAlign: "center",
  },
  price: {
    color: "#FFF8EF",
    fontSize: 18,
    textAlign: "center",
  },
  deleteButton: {
    paddingTop: 6,
    paddingBottom: 0,
    paddingRight: 0,
  },
});

export default BoxFavorite;
