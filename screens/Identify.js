import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Identify = () => {
  return (
    <View style={styles.container}>
      <Text>hi</Text>
      <Text>heyhey whats shaking</Text>
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

export default Identify;
