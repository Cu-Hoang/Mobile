import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  Alert,
  Button,
} from "react-native";
import React from "react";
import BoxCart from "../components/BoxCart";
const logo = require("../../assets/Logo Full.png");
const image1 = require("../../assets/matcha.jpg");
const image2 = require("../../assets/machiato.jpg");
const image3 = require("../../assets/coffee.jpg");
const image4 = require("../../assets/blue-tea.jpg");
const Cart = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={logo} style={styles.image} />
      </View>
      <View style={{ alignSelf: "flex-start", paddingLeft: 20 }}>
        <Text style={styles.text}>Cart</Text>
      </View>

      <View style={{ height: 430 }}>
        <ScrollView>
          <BoxCart
            image={image1}
            content="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum."
          />

          <BoxCart
            image={image2}
            content="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum."
          />

          <BoxCart
            image={image3}
            content="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum."
          />

          <BoxCart
            image={image4}
            content="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum."
          />

          <BoxCart
            image={image2}
            content="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum."
          />

          <BoxCart
            image={image3}
            content="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum."
          />

          <BoxCart
            image={image1}
            content="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum."
          />

          <BoxCart
            image={image2}
            content="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum."
          />

          <BoxCart
            image={image4}
            content="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum."
          />
        </ScrollView>
      </View>
      <View
        style={{
          paddingTop: 10,
          flexDirection: "row",
          alignSelf: "flex-end",
          right: 20,
        }}
      >
        <View>
          <Text
            style={{
              fontFamily: "Alice",
              fontWeight: "400",
              fontSize: 25,
              lineHeight: 22.8,
              color: "#125642",
              paddingTop: 10,
            }}
          >
            $50
          </Text>
        </View>
      </View>
      <View style={{ left: 108, width: 133, height: 29, paddingTop: 15 }}>
        <View>
          <Pressable
            onPress={() => navigation.navigate('Checkout')}
            style={styles.button}
          >
            <Text style={{ alignItems: "center" }}>Check out</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFEFCD",
    alignItems: "center",
  },
  text: {
    fontFamily: "Cochin",
    fontWeight: "400",
    fontSize: 24,
    lineHeight: 27.43,
    color: "#8E4949",
    // alignSelf: "baseline",
    // paddingLeft: 40
    paddingVertical: 5,
  },
  image: {
    width: 120.5,
    height: 119,
  },
  button: {
    backgroundColor: "#8E4949",
    width: 133,
    height: 29,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
export default Cart;
