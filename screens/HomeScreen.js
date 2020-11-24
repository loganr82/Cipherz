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
import { DecipherSvg, LearnSvg, DocSvg } from "../svgs/Svgs";
import Slider from "@react-native-community/slider";

export default HomeScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
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
        {/* <View style={styles.leftLine}></View>
        <View style={styles.rightLine}></View> */}

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableHighlight
            onPress={() => navigation.navigate("Learn")}
            underlayColor="#39465A"
            style={{ alignItems: "center" }}
          >
            <View style={[styles.smallButton, { marginLeft: 12 }]}>
              <View style={styles.smallButtonInner}>
                <LearnSvg />
                <Text style={styles.smallButtonText}>Learn</Text>
              </View>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => navigation.navigate("Docs")}
            underlayColor="#39465A"
            style={{ alignItems: "center" }}
          >
            <View style={[styles.smallButton, { marginRight: 12 }]}>
              <View style={styles.smallButtonInner}>
                <DocSvg />
                <Text style={styles.smallButtonText}>Docs</Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>
        <TouchableHighlight
          onPress={() => navigation.navigate("Identify")}
          underlayColor="#39465A"
          style={{ alignItems: "center" }}
        >
          <View style={styles.largeButton}>
            <View style={styles.largeButtonInner}>
              <DecipherSvg />
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
  largeButton: {
    width: 200,
    height: 200,
    alignItems: "center",
    backgroundColor: "#CEF6FF",
    padding: 12,
    borderRadius: 100,
    marginBottom: 20
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
    backgroundColor: "#CEF6FF",
    padding: 12,
    borderRadius: 100
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
    fontSize: 24
  },
  leftLine: {
    // position: "absolute",
    transform: [{ rotate: "160deg" }],
    borderRadius: 10,
    height: 200,
    width: 14,
    backgroundColor: "white"
    // top: 300,
    // left: 110
  },
  rightLine: {
    // position: "absolute",
    transform: [{ rotate: "20deg" }],
    borderRadius: 10,
    height: 200,
    width: 14,
    backgroundColor: "white"
    // left: 250,
    // top: 300
  }
});
