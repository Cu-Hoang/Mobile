import Feather from "@expo/vector-icons/Feather";
import Octicons from "@expo/vector-icons/Octicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import loginOrSignUp from "../app/(modals)/login-or-signup";
import login from "../app/(modals)/login";
import signup from "../app/(modals)/signup";
import forgotPassowrd from "../app/(modals)/forgot-password";
import inputOTP from "../app/(modals)/input-OTP";
import changePassword from "../app/(modals)/change-password";
import confirmMessage from "../app/message/[message]";
import splashScreen from "../app/(modals)/splash-screen";
import PromoProducts from "../app/(modals)/PromoProducts";
import BestSeller from "../app/(modals)/BestSeller";
import Review from "../app/(modals)/Review";
import favorite from "../app/(tabs)/wishlist";
import cart from "../app/(tabs)/cart";
import account from "../app/(tabs)/account";
import SearchPage from "../app/(tabs)/SearchPage";
import PaymentMethod from "../app/(modals)/PaymentMethod";
import Momo from "../app/(modals)/Momo";
import { useSelector } from "react-redux";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function TabsNavigator() {
  const { list } = useSelector((state) => state.cart);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabel: "",
        tabBarActiveTintColor: "brown",
        tabBarStyle: {
          height: 60,
          paddingTop: 10,
          backgroundColor: "#FFEFCD",
        },
      }}
    >
      <Tab.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons color={color} size={size} name="home" />
          ),
          headerShown: false,
        }}
        component={HomeStackScreen}
      />
      <Tab.Screen
        name="favorite"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons color={color} size={size} name="heart" />
          ),
          headerShown: false,
        }}
        component={FavoriteStackScreen}
      />

      <Tab.Screen
        name="cart"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather color={color} size={size} name="shopping-cart" />
          ),
          tabBarBadge: list?.length,
          headerShown: false,
        }}
        component={CartStackScreen}
      />

      <Tab.Screen
        name="account"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 color={color} size={size} name="circle-user" />
          ),
          headerShown: false,
        }}
        component={account}
      />
    </Tab.Navigator>
  );
}
const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="SearchPage"
        component={SearchPage}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Promo"
        component={PromoProducts}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="BestSeller"
        component={BestSeller}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Review"
        component={Review}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}
const CartStack = createNativeStackNavigator();
function CartStackScreen() {
  return (
    <CartStack.Navigator>
      <CartStack.Screen
        name="Cart"
        component={cart}
        options={{ headerShown: false }}
      />
      <CartStack.Screen
        name="PaymentMethod"
        component={PaymentMethod}
        options={{ headerShown: false }}
      />
      <CartStack.Screen
        name="Momo"
        component={Momo}
        options={{ headerShown: false }}
      />
    </CartStack.Navigator>
  );
}
const FavoriteStack = createNativeStackNavigator();
function FavoriteStackScreen() {
  return (
    <FavoriteStack.Navigator>
      <FavoriteStack.Screen
        name="Favorite"
        component={favorite}
        options={{ headerShown: false }}
      />
    </FavoriteStack.Navigator>
  );
}
