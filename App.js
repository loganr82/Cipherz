import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Identify from "./screens/Identify.js";
import HomeScreen from "./screens/HomeScreen.js";
import Docs from "./screens/Docs.js";
import Learn from "./screens/Learn.js";
import IdentifyLetters from "./screens/IdentifyLetters.js";
import IdentifyNumbers from "./screens/IdentifyNumbers.js";
import IdentifyMixed from "./screens/IdentifyMixed.js";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarButton: [
            "Home",
            "IdentifyLetters",
            "IdentifyNumbers",
            "IdentifyMixed",
          ].includes(route.name)
            ? () => {
                return null;
              }
            : undefined,

          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home";
            } else if (route.name === "Identify") {
              iconName = focused ? "fingerprint" : "fingerprint";
            } else if (route.name === "Docs") {
              iconName = focused ? "folder-outline" : "folder-outline";
            } else if (route.name === "Learn") {
              iconName = focused ? "pencil" : "pencil";
            }

            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: "navy",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen
          options={{ tabBarVisible: false }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen name="Identify" component={Identify} />
        <Tab.Screen name="Docs" component={Docs} />
        <Tab.Screen name="Learn" component={Learn} />
        <Tab.Screen name="IdentifyLetters" component={IdentifyLetters} />
        <Tab.Screen name="IdentifyNumbers" component={IdentifyNumbers} />
        <Tab.Screen name="IdentifyMixed" component={IdentifyMixed} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// export function TheStack() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="IdentifyLetters" component={IdentifyLetters} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// options={{ tabBarVisible: false }}
