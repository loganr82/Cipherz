import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight
} from "react-native";

const links = [
  {
    id: 1,
    link: "google.com"
  },
  {
    id: 2,
    link: "github.com"
  }
];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress}>
    <Text>{item.title}</Text>
  </TouchableOpacity>
);

const IdentifyLetters = () => {
  return (
    <View style={styles.container}>
      <FlatList>hi</FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default IdentifyLetters;
