import { Colors } from "@/constants/Colors";
import Feather from "@expo/vector-icons/Feather";
import Octicons from "@expo/vector-icons/Octicons";
import { Tabs } from "expo-router";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

import React from "react";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarLabel: "",
        tabBarActiveTintColor: "brown",
        tabBarStyle: {
          height: 60,
          paddingTop: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons color={color} size={size} name="home" />
          ),
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons color={color} size={size} name="heart" />
          ),
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather color={color} size={size} name="shopping-cart" />
          ),
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 color={color} size={size} name="circle-user" />
          ),
        }}
      />
    </Tabs>
  );
}
