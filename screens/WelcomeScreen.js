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
import OnboardingScreen from "./OnboardingScreen";

function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <Carousel
          showsControls={false}
          showsDots={false}
          height={290}
          autoplay={true}
          loop={true}
          autoplayInterval={6000}
          style={{
            marginBottom: 0.05 * Dimensions.get("screen").height,
            marginTop: 0.1 * Dimensions.get("screen").height,
          }}
        >
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require("../assets/welcome1.jpg")}
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require("../assets/welcome2.jpg")}
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require("../assets/welcome3.jpg")}
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require("../assets/welcome4.jpg")}
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require("../assets/welcome5.jpg")}
            />
          </View>
        </Carousel>
        <Text style={styles.welcome_header}>Witaj!</Text>
        <Text style={styles.welcome_text}>
          Dołącz do nas, aby zadbać razem o środowisko!
        </Text>
      </View>
      <View
        style={{
          alignSelf: "center",
          marginBottom: 24,
        }}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Onboarding")}
        >
          <Text style={styles.button_text}>Let's Compost!</Text>
        </TouchableOpacity>
        <Text style={styles.agreement_text}>
          Przechodząc dalej potwierdzasz, że zapoznałeś(aś) się z
          <Text
            style={{
              textDecorationLine: "underline",
            }}
          >
            regulaminem
          </Text>
          {" oraz "}
          <Text style={{ textDecorationLine: "underline" }}>
            polityką prywatności
          </Text>
          {" aplikacji i akceptujesz ich warunki"}
        </Text>
      </View>
    </SafeAreaView>
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

export default WelcomeScreen;
