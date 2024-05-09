import { View, Text,StyleSheet,SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

const BoxNotification = ({content}) => {
  return (
    <SafeAreaView style={styles.box}>
        <ScrollView
          style={{ width: 220 ,flexWrap: "wrap", padding: 10}}
          ellipsizeMode="tail"
          numberOfLines={1}
          
        >
          <Text style={{ color: "#FFF8EF", bottom: 4}}>{content}</Text>
        </ScrollView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  box: {
    backgroundColor: "#8E4949",
    width: 350,
    height: 100,
    borderRadius: 15,
    flexDirection: "row",
    marginBottom: 20,
  }
});
export default BoxNotification