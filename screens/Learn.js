import React from "react";
import * as Svg from "react-native-svg";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import {
  useFonts,
  NovaSquare_400Regular
} from "@expo-google-fonts/nova-square";
import { AppLoading } from "expo";

const Learn = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    NovaSquare_400Regular
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.titleText}>Learn</Text>
          <Text style={styles.subTitleText}> Master cryptography</Text>
        </View>
        <View>
          <View>
            <TouchableHighlight
              onPress={() => navigation.navigate("Level1")}
              underlayColor="#39465A"
              style={{ alignItems: "center", margin: 25 }}
            >
              <View style={styles.smallButton}>
                <View style={styles.smallButtonInner}>
                  <Text numberOfLines={2} style={styles.smallButtonText}>
                    Level 1: The Basics
                  </Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>
          <View>
            <TouchableHighlight
              onPress={() => navigation.navigate("")}
              underlayColor="#39465A"
              style={{ alignItems: "center", margin: 25 }}
            >
              <View style={styles.smallButton}>
                <View style={styles.smallButtonInner}>
                  <Text numberOfLines={2} style={styles.smallButtonText}>
                    Level 2: First Cipher
                  </Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>
          <View>
            <TouchableHighlight
              onPress={() => navigation.navigate("")}
              underlayColor="#39465A"
              style={{ alignItems: "center", margin: 25 }}
            >
              <View style={styles.smallButton}>
                <View style={styles.smallButtonInner}>
                  <Text numberOfLines={2} style={styles.smallButtonText}>
                    Level 3: Tips
                  </Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </SafeAreaView>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#39465A"
  },
  titleText: {
    fontFamily: "NovaSquare_400Regular",
    color: "#D7F8FF",
    fontSize: 48,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10
  },
  subTitleText: {
    fontFamily: "NovaSquare_400Regular",
    color: "#D7F8FF",
    fontSize: 18,
    textAlign: "center"
  },
  smallButton: {
    width: 370,
    aspectRatio: 10 / 3,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#CEF6FF",
    padding: 12,
    borderRadius: 30
  },
  smallButtonInner: {
    justifyContent: "center",
    width: 355,
    aspectRatio: 10 / 3 + 0.5,
    backgroundColor: "white",
    borderRadius: 25
  },
  smallButtonTitleText: {
    textAlign: "center",
    fontFamily: "NovaSquare_400Regular",
    fontSize: 30
  },
  smallButtonText: {
    textAlign: "left",
    fontFamily: "NovaSquare_400Regular",
    fontSize: 32,
    padding: 10
  }
});

export default Learn;
