// import React, { useCallback, useEffect, useState } from "react";
// import {
//   View,
//   Pressable,
//   Image,
//   StyleSheet,
//   ImageBackground,
//   Text,
//   TouchableOpacity,
//   Alert,
//   ScrollView
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { FontFamily, Color, FontSize, Border } from "../../GlobalStyles";
// import { useLocalSearchParams } from "expo-router";
// import instance from "../config/axios";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const Review = () => {
//   const navigation = useNavigation();
//   const { productId } = useLocalSearchParams();
//   const [product, setProduct] = useState({});
//   const [userId, setUserId] = useState("");

//   const getUserId = async () => {
//     try {
//       const storedUserId = await AsyncStorage.getItem("userId");
//       if (storedUserId !== null) {
//         setUserId(storedUserId);
//       }
//     } catch (error) {
//       console.log("Error retrieving userId from AsyncStorage: ", error);
//     }
//   };

//   useEffect(() => {
//     getUserId();
//     instance({
//       method: "GET",
//       url: `/product/getProduct/${productId}`,
//     })
//       .then((res) => {
//         if (res.data.status === "success") setProduct(res.data.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [productId]);

//   const addToFavorite = async (productId) => {
//     try {
//       const response = await instance({
//         method: "POST",
//         url: "/favorites",
//         data: {
//           userId: userId,
//           productId: productId,
//         },
//       });
//       console.log("Response after adding to favorite: ", response.data);
//       if (response.data.status === "success") {
//         Alert.alert("Add to Wishlist", "Successfull!");
//       } else {
//         Alert.alert("Add to Wishlist", "Failed to add to favorite!");
//       }
//     } catch (error) {
//       console.log("Error adding to favorite: ", error);
//       Alert.alert("Add to Wishlist", "Failed to add to favorite!");
//     }
//   };

//   const onAddToCartImageClick = useCallback(() => {
//     Alert.alert("Add to cart", "Successful!");
//   }, []);

//   const onWishlistImageClick = useCallback(() => {
//     addToFavorite(productId);
//   }, [userId, productId]);

//   const onIconsClick = useCallback(() => {
//     Alert.alert("Notification", "Not");
//   }, []);

//   return (
//     <View style={styles.review}>
//       <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
//         <Image
//           style={styles.icon}
//           resizeMode="cover"
//           source={require("../../assets/images/back-button.png")}
//         />
//       </Pressable>
//       <Image
//         style={styles.logoFullIcon}
//         resizeMode="cover"
//         source={require("../../assets/images/logoC22.png")}
//       />
//       <View style={[styles.rectangleParent, styles.groupChildPosition]}>
//         <ImageBackground
//           style={[styles.groupChild, styles.groupChildPosition]}
//           resizeMode="cover"
//           source={{ uri: product.image }}
//         />
//         <Text
//           style={[styles.Price, styles.Aligment]}
//         >{product.price}</Text>
//         <View style={styles.groupParent}>
//           <View style={[styles.rectangleGroup, styles.groupLayout]}>
//             <View style={[styles.groupItem, styles.groupLayout]} />
//             <Text style={[styles.FontText, styles.Aligment]} numberOfLines={6}>
//               Lorem ipsum dolor sit amet consectetur. Sit fames netus
//               consectetur venenatis leo commodo. Eu orci pretium orci      
//             </Text>
//           </View>
          
//         </View>
//         <TouchableOpacity
//           style={[styles.addToCart, styles.wishlistLayout]}
//           activeOpacity={0.2}
//           onPress={onAddToCartImageClick}
//         >
//           <Image
//             style={styles.icon1}
//             resizeMode="cover"
//             source={require("../../assets/images/addtocart.png")}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.wishlist, styles.wishlistLayout]}
//           activeOpacity={0.2}
//           onPress={onWishlistImageClick}
//         >
//           <Image
//             style={styles.icon1}
//             resizeMode="cover"
//             source={require("../../assets/images/wishlist.png")}
//           />
//         </TouchableOpacity>
//       </View>
//       <Image
//         style={styles.ratingStarsIcon}
//         resizeMode="cover"
//         source={require("../../assets/images/rating-stars3.png")}
//       />
//       <TouchableOpacity
//         style={styles.icons}
//         activeOpacity={0.2}
//         onPress={onIconsClick}
//       >
//         <Image
//           style={styles.icon}
//           resizeMode="cover"
//           source={require("../../assets/images/icons.png")}
//         />
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   groupChildPosition: {
//     width: 410,
//     position: "absolute",
//   },
//   Aligment: {
//     textAlign: "justify",
//     fontFamily: FontFamily.aliceRegular,
//     position: "absolute",
//   },
//   groupLayout: {
//     height: 120,
//     width: 320,
//     left: 0,
//     position: "absolute",
//   },
//   wishlistLayout: {
//     height: 39,
//     width: 166,
//     top: 460,
//     position: "absolute",
//   },
//   icon: {
//     overflow: "hidden",
//     height: "100%",
//     width: "100%",
//   },
//   backButton: {
//     left: 18,
//     top: 20,
//     width: 24,
//     height: 24,
//     zIndex: 0,
//     position: "absolute",
//   },
//   logoFullIcon: {
//     left: 150,
//     width: 121,
//     height: 119,
//     zIndex: 1,
//     top: 0,
//     position: "absolute",
//   },
//   groupChild: {
//     height: 400,
//     top: 0,
//   },
//   Price: {
//     top: 420,
//     left: 60,
//     lineHeight: 26,
//     width: 60,
//     height: 33,
//     color: Color.secondColour,
//     fontSize: FontSize.size_xl,
//     textAlign: "justify",
//     fontFamily: FontFamily.aliceRegular,
//   },
//   groupItem: {
//     borderRadius: Border.br_3xs,
//     backgroundColor: Color.secondColour,
//     top: 0,
//   },
//   FontText: {
//     top: 13,
//     left: 13,
//     fontSize: FontSize.size_lg,
//     letterSpacing: 0.9,
//     lineHeight: 22,
//     color: Color.extraLightSecondary,
//     width: 295,
//     height: 144,
//     textAlign: "justify",
//     fontFamily: FontFamily.aliceRegular,
//     overflow: "hidden",
//   },
//   rectangleGroup: {
//     top: 24,
//   },
//   details: {
//     left: 1,
//     width: 54,
//     height: 20,
//     color: Color.secondColour,
//     fontSize: FontSize.size_xl,
//     textAlign: "left",
//     fontFamily: FontFamily.aliceRegular,
//     top: 0,
//   },
//   groupParent: {
//     top: 500,
//     left: 45,
//     height: 192,
//     width: 320,
//     position: "absolute",
//   },
//   icon1: {
//     height: "100%",
//     width: "100%",
//   },
//   addToCart: {
//     left: 30,
//   },
//   wishlist: {
//     right: 30,
//   },
//   rectangleParent: {
//     top: 137,
//     height: 495,
//     zIndex: 2,
//   },
//   ratingStarsIcon: {
//     top: 560,
//     left: 250,
//     width: 115,
//     height: 21,
//     zIndex: 3,
//     position: "absolute",
//   },
//   icons: {
//     left: 360,
//     top: 17,
//     width: 30,
//     height: 30,
//     zIndex: 4,
//     position: "absolute",
//   },
//   review: {
//     shadowColor: "rgba(0, 0, 0, 0.25)",
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowRadius: 4,
//     elevation: 4,
//     shadowOpacity: 1,
//     borderRadius: Border.br_mini,
//     backgroundColor: Color.background,
//     borderStyle: "solid",
//     borderColor: Color.colorGray_100,
//     borderWidth: 1,
//     flex: 1,
//     height: 720,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     width: "100%",
//   },
// });

// export default Review;

import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Pressable,
  Image,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../../GlobalStyles";
import { useLocalSearchParams } from "expo-router";
import instance from "../config/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Review = () => {
  const navigation = useNavigation();
  const { productId } = useLocalSearchParams();
  const [product, setProduct] = useState({});
  const [userId, setUserId] = useState("");

  const getUserId = useCallback(async () => {
    try {
      const storedUserId = await AsyncStorage.getItem("userId");
      if (storedUserId !== null) {
        setUserId(storedUserId);
      }
    } catch (error) {
      console.log("Error retrieving userId from AsyncStorage: ", error);
    }
  }, []);

  useEffect(() => {
    getUserId();
  }, [getUserId]);

  useEffect(() => {
    instance({
      method: "GET",
      url: `/product/getProduct/${productId}`,
    })
      .then((res) => {
        if (res.data.status === "success") setProduct(res.data.data);
      })
      .catch((err) => {
        console.log("Error fetching product data: ", err);
      });
  }, [productId]);

  const addToFavorite = async (productId) => {
    try {
      const response = await instance({
        method: "POST",
        url: "/favorites",
        data: {
          userId: userId,
          productId: productId,
        },
      });
      console.log("Response after adding to favorite: ", response.data);
      if (response.data.status === "success") {
        Alert.alert("Add to Wishlist", "Successful!");
      } else {
        Alert.alert("Add to Wishlist", "Failed to add to favorite!");
      }
    } catch (error) {
      console.log("Error adding to favorite: ", error);
      Alert.alert("Add to Wishlist", "Failed to add to favorite!");
    }
  };

  const onAddToCartImageClick = useCallback(() => {
    Alert.alert("Add to cart", "Successful!");
  }, []);

  const onWishlistImageClick = useCallback(() => {
    addToFavorite(productId);
  }, [userId, productId]);

  const onIconsClick = useCallback(() => {
    Alert.alert("Notification", "Not");
  }, []);

  return (
    <View style={styles.review}>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
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
      <View style={[styles.rectangleParent, styles.groupChildPosition]}>
        <ImageBackground
          style={[styles.groupChild, styles.groupChildPosition]}
          resizeMode="cover"
          source={{ uri: product.image }}
        />
        <Text style={[styles.Price, styles.Aligment]}>{product.price}</Text>
        <View style={styles.groupParent}>
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View style={[styles.groupItem, styles.groupLayout]} />
            <Text style={[styles.FontText, styles.Aligment]} numberOfLines={6}>
              Lorem ipsum dolor sit amet consectetur. Sit fames netus
              consectetur venenatis leo commodo. Eu orci pretium orci
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={[styles.addToCart, styles.wishlistLayout]}
          activeOpacity={0.2}
          onPress={onAddToCartImageClick}
        >
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../../assets/images/addtocart.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.wishlist, styles.wishlistLayout]}
          activeOpacity={0.2}
          onPress={onWishlistImageClick}
        >
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../../assets/images/wishlist.png")}
          />
        </TouchableOpacity>
      </View>
      <Image
        style={styles.ratingStarsIcon}
        resizeMode="cover"
        source={require("../../assets/images/rating-stars3.png")}
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
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    width: 410,
    position: "absolute",
  },
  Aligment: {
    textAlign: "justify",
    fontFamily: FontFamily.aliceRegular,
    position: "absolute",
  },
  groupLayout: {
    height: 120,
    width: 320,
    left: 0,
    position: "absolute",
  },
  wishlistLayout: {
    height: 39,
    width: 166,
    top: 460,
    position: "absolute",
  },
  icon: {
    overflow: "hidden",
    height: "100%",
    width: "100%",
  },
  backButton: {
    left: 18,
    top: 20,
    width: 24,
    height: 24,
    zIndex: 0,
    position: "absolute",
  },
  logoFullIcon: {
    left: 150,
    width: 121,
    height: 119,
    zIndex: 1,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    height: 400,
    top: 0,
  },
  Price: {
    top: 420,
    left: 60,
    lineHeight: 26,
    width: 60,
    height: 33,
    color: Color.secondColour,
    fontSize: FontSize.size_xl,
    textAlign: "justify",
    fontFamily: FontFamily.aliceRegular,
  },
  groupItem: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.secondColour,
    top: 0,
  },
  FontText: {
    top: 13,
    left: 13,
    fontSize: FontSize.size_lg,
    letterSpacing: 0.9,
    lineHeight: 22,
    color: Color.extraLightSecondary,
    width: 295,
    height: 144,
    textAlign: "justify",
    fontFamily: FontFamily.aliceRegular,
    overflow: "hidden",
  },
  rectangleGroup: {
    top: 24,
  },
  details: {
    left: 1,
    width: 54,
    height: 20,
    color: Color.secondColour,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.aliceRegular,
    top: 0,
  },
  groupParent: {
    top: 500,
    left: 45,
    height: 192,
    width: 320,
    position: "absolute",
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  addToCart: {
    left: 30,
  },
  wishlist: {
    right: 30,
  },
  rectangleParent: {
    top: 137,
    height: 495,
    zIndex: 2,
  },
  ratingStarsIcon: {
    top: 560,
    left: 250,
    width: 115,
    height: 21,
    zIndex: 3,
    position: "absolute",
  },
  icons: {
    left: 360,
    top: 17,
    width: 30,
    height: 30,
    zIndex: 4,
    position: "absolute",
  },
  review: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
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
  },
});

export default Review;
