import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Level2 = () => {
  return (
    <View style={styles.container}>
      <Text>Level 2</Text>
      <Text>Under Maintenance</Text>
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

export default Level2;
