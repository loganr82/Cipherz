import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
  SafeAreaView,
  StatusBar
} from "react-native";
import {
  useFonts,
  NovaSquare_400Regular
} from "@expo-google-fonts/nova-square";
import { AppLoading } from "expo";
import * as WebBrowser from "expo-web-browser";

const links = [
  {
    id: 1,
    name: "Caesar Cipher",
    example: "Aopz pz h jhlzhy jpwoly! Nvvk qvi vu kljvkpun pa. ",
    link: "https://cryptii.com/pipes/caesar-cipher"
  },
  {
    id: 2,
    name: "Github",
    example: "This is example text",
    link: "https://github.com"
  },
  {
    id: 3,
    name: "No link",
    example: "Unusable button",
    link: ""
  },
  {
    id: 4,
    name: "",
    example: "",
    link: ""
  },
  {
    id: 5,
    name: "",
    example: "",
    link: ""
  }
];

const Item = ({ link, name, example }) => (
  <TouchableHighlight
    onPress={() => WebBrowser.openBrowserAsync(link)}
    underlayColor="#39465A"
    style={{ alignItems: "center", margin: 20 }}
  >
    <View style={styles.smallButton}>
      <View style={styles.smallButtonInner}>
        <Text style={styles.smallButtonTitleText}>{name}</Text>
        <Text numberOfLines={2} style={styles.smallButtonText}>
          {example}
        </Text>
      </View>
    </View>
  </TouchableHighlight>
);

const IdentifyLetters = () => {
  const renderItem = ({ item }) => (
    <Item link={item.link} name={item.name} example={item.example} />
  );

  const [fontsLoaded] = useFonts({
    NovaSquare_400Regular
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.titleText}>Letter Ciphers</Text>
          <Text style={styles.subTitleText}></Text>
        </View>
        <FlatList
          data={links}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#39465A"
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 32
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
    fontSize: 15,
    padding: 10
  }
});

export default IdentifyLetters;
