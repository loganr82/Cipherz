import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Identify from "./screens/Identify.js";
import HomeScreen from "./screens/HomeScreen.js";
import Docs from "./screens/Docs.js";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Identify" component={Identify} />
        <Tab.Screen name="Docs" component={Docs} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// options={{ tabBarVisible: false }}
