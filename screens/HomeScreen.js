import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import {
  useFonts,
  NovaSquare_400Regular,
} from "@expo-google-fonts/nova-square";
import { AppLoading } from "expo";

export default HomeScreen = () => {
  let [fontsLoaded] = useFonts({
    NovaSquare_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.titleText}>Cipherz</Text>
        <Text style={styles.subTitleText}>Knowledge at your fingertips</Text>

        <TouchableHighlight onPress={() => alert("Pressed!")}>
          <View style={styles.largeButton}>
            <Text>hi</Text>
          </View>
        </TouchableHighlight>
      </SafeAreaView>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  titleText: {
    fontFamily: "NovaSquare_400Regular",
    fontSize: 48,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  subTitleText: {
    fontFamily: "NovaSquare_400Regular",
    fontSize: 18,
    textAlign: "center",
  },
  largeButton: {
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    width: "50%",
  },
  smallButton: {},
});
