import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import Icon1 from "react-native-vector-icons/MaterialIcons";


const BoxFavourite = ({ image, content }) => {
  return (
    <SafeAreaView style={styles.box}>
      <View style={{ padding: 8 }}>
        <Image source={image} style={styles.image}/>
      </View>
      <View>
        <View style={{ alignItems: "flex-end" }}>
          {/* <Pressable onPress={() => alert("Pressed")} style={{ paddingTop: 6 }}>
            <Text style={{ color: "blue", includeFontPadding: false }}>
              See more
            </Text>
          </Pressable> */}
          <Icon1.Button
            name="preview"
            size={17}
            style={{ paddingTop: 6, paddingBottom: 0, paddingRight: 0 }}
            backgroundColor="#8E4949"
            onPress={() => alert("Pressed")}
          />
        </View>

        <ScrollView
          style={{ width: 220 }}
          ellipsizeMode="tail"
          numberOfLines={1}
        >
          <Text style={{ color: "#FFF8EF", bottom: 4}}>{content}</Text>
        </ScrollView>

        <View style={{ flexDirection: "row", gap :150 }}>
          <Icon.Button
            name="heart-dislike-outline"
            size={15}
            style={{ paddingTop: 4 ,paddingLeft: 0}}
            backgroundColor="rgba(0, 0, 255, 0)"
            onPress={() => alert("Pressed")}
          />
            <Icon.Button
            name="cart-outline"
            size={15}
            color="#FFF8EF"
            backgroundColor="rgba(0, 0, 255, 0)"
            style={{ paddingTop: 4 ,paddingRight: 0, paddingLeft: 15}}
            onPress={() => alert("Pressed")}
          />
          {/* <Pressable
            onPress={() => alert("Pressed")}
            style={{ paddingVertical: 4, paddingHorizontal: 3 }}
          >
            <Text style={{ color: "blue", includeFontPadding: false }}>
              Remove from favourites
            </Text>
          </Pressable> */}
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
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 84,
    borderRadius: 15,
    overflow: 'hidden'
  },
});
export default BoxFavourite;
