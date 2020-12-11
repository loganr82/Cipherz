import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const Docs = () => {
  return (
    // <View>
    <View style={styles.container}>
      <Text>Docs</Text>
      <Text>Under Maintenance</Text>
      {/* </View> */}
      {/* <TouchableOpacity onPress={() => alert("death")}>
        <Image source={require("../assets/bill.jpg")} />
      </TouchableOpacity> */}
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
