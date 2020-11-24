import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Docs = () => {
  return (
    <View style={styles.container}>
      <Text>Docs</Text>
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

export default Docs;
