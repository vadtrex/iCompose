import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  Dimensions,
} from "react-native";
export default OnboardingItem = ({ item }) => {
  const width = Dimensions.get("window").width;

  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        fadeDuration={0}
        style={[styles.image, { width, resizeMode: "contain" }]}
      />
      <View style={{ flex: 0.3 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  image: {
    flex: 0.7,
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 10,
    color: "#29462C",
    textAlign: "center",
  },
  description: {
    fontWeight: "normal",
    color: "#29462C",
    fontSize: 17,
    textAlign: "center",
    paddingHorizontal: 64,
  },
});
