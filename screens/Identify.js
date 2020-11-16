import React from "react";
import * as Svg from "react-native-svg";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableHighlight,
  Image,
} from "react-native";
import {
  useFonts,
  NovaSquare_400Regular,
} from "@expo-google-fonts/nova-square";
import { AppLoading } from "expo";
import { DecipherSvg, LearnSvg, DocSvg } from "../svgs/Svgs";

const Identify = () => {
  const [fontsLoaded] = useFonts({
    NovaSquare_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.titleText}>Identify</Text>
          <Text style={styles.subTitleText}> Narrow down the code</Text>
        </View>
        <View>
          <View>
            <TouchableHighlight
              onPress={() => alert("heyhey whats shaking")}
              underlayColor="#39465A"
              style={{ alignItems: "center", margin: 25 }}
            >
              <View style={styles.smallButton}>
                <View style={styles.smallButtonInner}>
                  <Text style={styles.smallButtonTitleText}>Letters</Text>
                  <Text numberOfLines={2} style={styles.smallButtonText}>
                    Gunax lbh sbe gelvat gur ncc! V ubcr lbh'er univat n avpr
                    qnl.
                  </Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>
          <View>
            <TouchableHighlight
              onPress={() => alert("heyhey whats shaking")}
              underlayColor="#39465A"
              style={{ alignItems: "center", margin: 25 }}
            >
              <View style={styles.smallButton}>
                <View style={styles.smallButtonInner}>
                  <Text style={styles.smallButtonTitleText}>Numbers</Text>
                  <Text numberOfLines={2} style={styles.smallButtonText}>
                    251521 1805 1514 25152118 230125 2008051805
                  </Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>
          <View>
            <TouchableHighlight
              onPress={() => alert("heyhey whats shaking")}
              underlayColor="#39465A"
              style={{ alignItems: "center", margin: 25 }}
            >
              <View style={styles.smallButton}>
                <View style={styles.smallButtonInner}>
                  <Text style={styles.smallButtonTitleText}>Mixed</Text>
                  <Text numberOfLines={2} style={styles.smallButtonText}>
                    VGhpcyBpcyBCYXNlNjQsIG5vdCBhIHRydWUgY2lwaGVyLg==
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
    backgroundColor: "#39465A",
  },
  titleText: {
    fontFamily: "NovaSquare_400Regular",
    color: "#D7F8FF",
    fontSize: 48,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  subTitleText: {
    fontFamily: "NovaSquare_400Regular",
    color: "#D7F8FF",
    fontSize: 18,
    textAlign: "center",
  },
  smallButton: {
    width: 370,
    aspectRatio: 10 / 3,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#CEF6FF",
    padding: 12,
    borderRadius: 30,
  },
  smallButtonInner: {
    width: 355,
    aspectRatio: 10 / 3 + 0.5,
    backgroundColor: "white",
    borderRadius: 25,
  },
  smallButtonTitleText: {
    textAlign: "center",
    fontFamily: "NovaSquare_400Regular",
    fontSize: 30,
  },
  smallButtonText: {
    textAlign: "left",
    fontFamily: "NovaSquare_400Regular",
    fontSize: 15,
    padding: 10,
  },
});

export default Identify;
