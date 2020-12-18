import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Level1 = () => {
  return (
    <View style={styles.container}>
      <Text>Level 1</Text>
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

export default Level1;
