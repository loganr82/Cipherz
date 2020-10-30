import React, { useState, useEffect } from "react";
import * as Svg from "react-native-svg";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableHighlight,
  Image
} from "react-native";
import {
  useFonts,
  NovaSquare_400Regular
} from "@expo-google-fonts/nova-square";
import { AppLoading } from "expo";

export default HomeScreen = () => {
  let [fontsLoaded] = useFonts({
    NovaSquare_400Regular
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.titleText}>Cipherz</Text>
          <Text style={styles.subTitleText}>Knowledge at your fingertips</Text>
        </View>
        <View style={styles.leftLine}></View>
        <View style={styles.rightLine}></View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableHighlight
            onPress={() => alert("heyhey whats shaking")}
            underlayColor="white"
            style={{ alignItems: "center" }}
          >
            <View style={[styles.smallButton, { marginLeft: 12 }]}>
              <View style={styles.smallButtonInner}>
                <Text style={styles.smallButtonText}>heyhey whats shaking</Text>
              </View>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => alert("heyhey whats shaking")}
            underlayColor="white"
            style={{ alignItems: "center" }}
          >
            <View style={[styles.smallButton, { marginRight: 12 }]}>
              <View style={styles.smallButtonInner}>
                <Text style={styles.smallButtonText}>heyhey whats shaking</Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>

        <TouchableHighlight
          onPress={() => alert("heyhey whats shaking")}
          underlayColor="white"
          style={{ alignItems: "center" }}
        >
          <View style={styles.largeButton}>
            <View style={styles.largeButtonInner}>
              <Image
                style={{ width: "50%", height: "50%" }}
                source={require("../assets/fingerprint.png")}
              />
              <Text style={styles.largeButtonText}>Decipher</Text>
            </View>
          </View>
        </TouchableHighlight>
      </SafeAreaView>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginBottom: 20
  },
  titleText: {
    fontFamily: "NovaSquare_400Regular",
    fontSize: 48,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10
  },
  subTitleText: {
    fontFamily: "NovaSquare_400Regular",
    fontSize: 18,
    textAlign: "center"
  },
  largeButton: {
    width: 200,
    height: 200,
    alignItems: "center",
    backgroundColor: "lightblue",
    padding: 12,
    borderRadius: 100
  },
  largeButtonInner: {
    width: 175,
    height: 175,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 100,
    padding: 20
  },
  largeButtonText: {
    fontFamily: "NovaSquare_400Regular",
    fontSize: 32
  },
  smallButton: {
    width: 150,
    height: 150,
    alignItems: "center",
    backgroundColor: "lightblue",
    padding: 12,
    borderRadius: 100,
    zIndex: 1
  },
  smallButtonInner: {
    width: 125,
    height: 125,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 100,
    padding: 20
  },
  smallButtonText: {
    fontFamily: "NovaSquare_400Regular",
    fontSize: 20
  },
  leftLine: {
    position: "absolute",
    transform: [{ rotate: "160deg" }],
    borderRadius: 10,
    height: 200,
    width: 14,
    backgroundColor: "red",
    zIndex: 0,
    top: 450,
    left: 50
  },
  rightLine: {
    position: "absolute",
    transform: [{ rotate: "20deg" }],
    borderRadius: 10,
    height: 200,
    width: 14,
    backgroundColor: "red",
    zIndex: 0,
    left: 200,
    top: -200
  }
});
// style={{ ...styles.line, transform: [{ rotate: "160deg" }] }}
