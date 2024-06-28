import { router } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import Octicons from "@expo/vector-icons/Octicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React from "react";
import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import loginOrSignUp from "../(modals)/login-or-signup";
import login from "../(modals)/login";
import signup from "../(modals)/signup";
import forgotPassowrd from "../(modals)/forgot-password";
import inputOTP from "../(modals)/input-OTP";
import changePassword from "../(modals)/change-password";
import confirmMessage from "../message/[message]";
import splashScreen from "../(modals)/splash-screen";
import PromoProducts from "../(modals)/PromoProducts"
import BestSeller from "../(modals)/BestSeller"
import Review from "../(modals)/Review"
import wishlist from "./wishlist";
import cart from "./cart";
import account from "./account";
import SearchPage from "./SearchPage"
import { LogBox } from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function index() {

  LogBox.ignoreAllLogs();
  return (
    <NavigationContainer independent={true} >
      <Stack.Navigator>

        <Stack.Screen
          name="(tabs)"
          component={TabsNavigator}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="(modals)/login-or-signup"
          component={loginOrSignUp}
          options={{ presentation: "modal", headerShown: false }}
        />
        <Stack.Screen
          name="(modals)/login"
          component={login}
          options={{ presentation: "modal", headerShown: false }}
        />

        <Stack.Screen
          name="(modals)/signup"
          component={signup}
          options={{ presentation: "modal", headerShown: false }}
        />

        <Stack.Screen
          name="(modals)/forgot-password"
          component={forgotPassowrd}
          options={{ presentation: "modal", headerShown: false }}
        />

        <Stack.Screen
          name="(modals)/input-OTP"
          component={inputOTP}
          options={{ presentation: "modal", headerShown: false }}
        />

        <Stack.Screen
          name="(modals)/change-password"
          component={changePassword}
          options={{ presentation: "modal", headerShown: false }}
        />

        <Stack.Screen
          name="message/[message]"
          component={confirmMessage}
          options={{ presentation: "modal", headerShown: false }}
        />

        <Stack.Screen
          name="(modals)/splash-screen"
          component={splashScreen}
          options={{ presentation: "modal", headerShown: false }}
        />
        <Stack.Screen
          name="(modals)/PromoProducts"
          component={PromoProducts}
          options={{ presentation: "modal", headerShown: false }}
        />

        <Stack.Screen
          name="(modals)/BestSeller"
          component={BestSeller}
          options={{ presentation: "modal", headerShown: false }}
        />

        <Stack.Screen
          name="(modals)/Review"
          component={Review}
          options={{ presentation: "modal", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabel: "",
        tabBarActiveTintColor: "brown",
        tabBarStyle: {
          height: 60,
          paddingTop: 10,
          backgroundColor:"#FFEFCD"
        },       
      }}
    >
      <Tab.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons color={color} size={size} name="home" />
          ),
          headerShown: false 
        }}
        component={SearchPage}
      />
      <Tab.Screen
        name="wishlist"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons color={color} size={size} name="heart" />
          ),
          headerShown: false 
        }}
        component={wishlist}
      />

      <Tab.Screen
        name="cart"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather color={color} size={size} name="shopping-cart" />
          ),
          headerShown: false 
        }}
        component={cart}
      />

      <Tab.Screen
        name="account"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 color={color} size={size} name="circle-user" />
          ),
          headerShown: false 
        }}
        component={account}
      />
    </Tab.Navigator>
  )
}
