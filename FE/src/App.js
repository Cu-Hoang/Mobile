import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favorites from "./screens/Favorites";
import Notifications from "./screens/Notifications";
import Cart from "./screens/Cart";
import Payment from "./screens/Payment";
import PaymentSuccess from "./screens/PaymentSuccess";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/AntDesign";
import MainPage from "./screens/MainPage";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Home() {
  return (
    <Tab.Navigator screenOptions={{tabBarStyle:{
      backgroundColor:"#FFEFCD"
    }}}>
      <Tab.Screen
        name="MainPage"
        options={{
          title: "",
          headerStyle: { backgroundColor: "#FFEFCD" },
          tabBarIcon: () => (
            <Icon2 name="home" size={30} style={{ paddingTop: 9 }}/>
          ),
        }}
        component={MainPage}
      />
      <Tab.Screen
        name="Favorites"
        options={{
          title: "",
          headerStyle: { backgroundColor: "#FFEFCD" },
          tabBarIcon: () => (
            <Icon name="heart-outline" size={30} style={{ paddingTop: 9 }} />
          ),
        }}
        component={Favorites}
      />
      <Tab.Screen
        name="Cart"
        options={{
          title: "",
          headerStyle: {
            backgroundColor: "#FFEFCD",
          },
          tabBarIcon: () => (
            <Icon2 name="shoppingcart" size={30} style={{ paddingTop: 9 }} />
          ),
        }}
        component={Cart}
      />
      <Tab.Screen
        name="Notifications"
        options={{ title: "", headerStyle: { backgroundColor: "#FFEFCD" }, tabBarIcon: () => (
          <Icon2 name="user" size={30} style={{ paddingTop: 9 }} />
        )}}
        component={Notifications}
      />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Checkout"
          options={{ title: "", headerStyle: { backgroundColor: "#FFEFCD" } }}
          component={Payment}
        />
        <Stack.Screen
          name="CheckoutSuccess"
          options={{ title: "", headerStyle: { backgroundColor: "#FFEFCD" } }}
          component={PaymentSuccess}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
