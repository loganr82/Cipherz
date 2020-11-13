import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Identify from "./screens/Identify.js";
import HomeScreen from "./screens/HomeScreen.js";
import { Ionicons, Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused
                ? // ? "ios-information-circle"
                  // : "ios-information-circle-outline";
                  "md-finger-print"
                : "md-finger-print";
            } else if (route.name === "Identify") {
              iconName = focused ? "magnifying-glass" : "magnifying-glass";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
            return <Entypo name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#39465A",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen
          options={{ tabBarVisible: false }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen name="Identify" component={Identify} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
