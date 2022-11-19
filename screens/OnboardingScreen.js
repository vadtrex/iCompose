import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  StatusBar,
  Dimensions,
  Image,
} from "react-native";
import Carousel from "pinar";
import Onboarding from "react-native-onboarding-swiper";

function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Onboarding
        controlStatusBar={false}
        pages={[
          {
            backgroundColor: "#fff",
            image: (
              <Image
                style={styles.image}
                source={require("../assets/welcome1.jpg")}
              />
            ),
            title: "Onboarding",
            subtitle: "Done with React Native Onboarding Swiper",
          },
          {
            backgroundColor: "#fff",
            image: (
              <Image
                style={styles.image}
                source={require("../assets/welcome2.jpg")}
              />
            ),
            title: "Onboarding 2",
            subtitle: "Done with React Native Onboarding Swiper 2",
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  image: {
    width: 375,
    alignSelf: "center",
    height: 330,
  },
  button: {
    backgroundColor: "#2BA84A",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 32,
    width: 325,
    alignSelf: "center",
    height: 55,
  },
  welcome_text: {
    width: 280,
    fontSize: 17,
    color: "#9FA5C0",
    marginTop: 16,
    textAlign: "center",
    alignSelf: "center",
  },
  agreement_text: {
    width: 320,
    fontSize: 10,
    color: "#9FA5C0",
    alignSelf: "flex-end",
    textAlign: "center",
    alignSelf: "center",
    marginTop: 8,
  },
  tab: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  header_text: {
    fontSize: 24,
    color: "#3E5481",
    fontWeight: "bold",
    marginLeft: 12,
  },
  welcome_header: {
    fontSize: 22,
    color: "#2E3E5C",
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 24,
  },
  button_text: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default OnboardingScreen;
