import React from "react";
import { View, Text, StyleSheet, Image, StatusBar } from "react-native";

export default WelcomeItem = ({ item }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        width: 375,
        height: 330,
      }}
    >
      <Image source={item.image} fadeDuration={0} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 375,
    height: 330,
    resizeMode: "contain",
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 10,
    color: "#2E3E5C",
    textAlign: "center",
  },
  description: {
    fontWeight: "normal",
    color: "#9FA5C0",
    fontSize: 17,
    textAlign: "center",
    paddingHorizontal: 64,
  },
});
