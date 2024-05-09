import { View, Text , Image,StyleSheet} from 'react-native'
import React from 'react'
const logo = require("../../assets/Logo Full.png");
const imageSuccess = require('../../assets/63027b0f1d1d9457550074f494373387.png')
const PaymentSuccess = () => {
  return (
    <View style={styles.container}>
      <View style={{ paddingBottom: 10 }}>
        <Image source={logo} style={styles.image} />
      </View>

      <View style={{ paddingTop: 70 }}>
        <Image source={imageSuccess} style={styles.imageSuccess} />
      </View>
      <Text style={styles.text}>Payment successfully</Text>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFEFCD",
    alignItems: "center",
  },
  text: {
    fontWeight: "400",
    fontSize: 30,
    lineHeight: 27.43,
    color: "#8E4949",
    // alignSelf: "baseline",
    // paddingLeft: 40
    paddingVertical: 50,
  },
  image: {
    width: 180,
    height: 178,
  },
  imageSuccess:{
    width: 80,
    height: 72,
  }
});
export default PaymentSuccess