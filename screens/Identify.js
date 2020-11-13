// import React from "react";
// import { StyleSheet, Text, View } from "react-native";

// const Identify = () => {
//   return (
//     <View style={styles.container}>
//       <Text>hi</Text>
//       <Text>heyhey whats shaking</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });

// export default Identify;

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
              style={{ alignItems: "center", marginTop: 35, margin: 25 }}
            >
              <View style={styles.smallButton}>
                <View style={styles.smallButtonInner}>
                  <Text style={styles.smallButtonTitleText}>Letters</Text>
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
                  <Text style={styles.smallButtonText}>test</Text>
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
    // justifyContent: "space-between",
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
    // height: 145,
    aspectRatio: 10 / 3,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#CEF6FF",
    padding: 12,
    borderRadius: 30,
  },
  smallButtonInner: {
    width: 355,
    // height: 130,
    aspectRatio: 10 / 3 + 0.5,
    backgroundColor: "white",
    borderRadius: 25,
    padding: 10,
  },
  smallButtonTitleText: {
    textAlign: "center",
    fontFamily: "NovaSquare_400Regular",
    fontSize: 25,
  },
  smallButtonText: {
    textAlign: "left",
    fontFamily: "NovaSquare_400Regular",
    fontSize: 20,
  },
});

export default Identify;
