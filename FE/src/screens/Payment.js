import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity
} from "react-native";
import React, { useState } from "react";
import { DateTimePicker } from "@react-native-community/datetimepicker";

const logo = require("../../assets/Logo Full.png");
const Payment = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ paddingBottom: 10 }}>
        <Image source={logo} style={styles.image} />
      </View>
      <Text style={styles.text}>Checkout</Text>
      <View style={{ height: 460 }}>
        <View style={{ padding: 10 }}>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Card Number"
          />
        </View>

        <View style={{ padding: 10 }}>
          <TextInput style={styles.input} placeholder="Card Holder" />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <View>
            <TextInput
              style={styles.input1}
              placeholder="Expire date"
              editable={false}
            />
          </View>
          <View>
            <TextInput style={styles.input1} placeholder="CVA/VCC" />
          </View>
        </View>
        <View style={{paddingLeft:10, paddingTop:15}}>
        <View style={styles.option}>
          <TouchableOpacity style={styles.checkbox}></TouchableOpacity>
          <Text>Terms and Condition</Text>
        </View>
        <View style={styles.option}>
          <TouchableOpacity style={styles.checkbox}></TouchableOpacity>
          <Text>Remember my card</Text>
        </View>
        </View>
        <View style={{alignItems:"center"}} >
        <View style={{paddingTop:100}}>
          <Pressable
            onPress={() => navigation.navigate('CheckoutSuccess')}
            style={styles.buttonPay}
          >
            <Text style={{ alignItems: "center"}}>Pay</Text>
          </Pressable>

          <View style={{paddingTop:25}}>
          <Pressable
            onPress={() => alert('cancel')}
            style={styles.buttonCancel}
          >
            <Text style={{ alignItems: "center" }}>Cancel</Text>
          </Pressable>
        </View>
        </View>
        </View>
        <View></View>
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
    fontWeight: "400",
    fontSize: 24,
    lineHeight: 27.43,
    color: "#8E4949",
    // alignSelf: "baseline",
    // paddingLeft: 40
    paddingVertical: 20,
  },
  image: {
    width: 120.5,
    height: 119,
  },
  input: {
    height: 50,
    width: 330,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    opacity: 20,
  },
  input1: {
    height: 50,
    width: 150,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    opacity: 20,
  },
  buttonPay: {
    backgroundColor: "#8E4949",
    width: 282,
    height: 37,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,

  },
  buttonCancel: {
    backgroundColor: "#FFF8EF",
    width: 282,
    height: 37,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  checkbox:{
    width:25,
    height:25,
    borderWidth: 2,
    borderColor: "black",
    marginRight:5
  },
  option:{
    flexDirection: "row",
    marginVertical: 7
  }
});
export default Payment;
