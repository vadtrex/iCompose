import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  ScrollView,
  StatusBar,
  Dimensions,
  Image,
} from "react-native";
import Carousel from "pinar";

function MainScreen({ navigation }) {
  const width = Dimensions.get("window").width;
  return (
    <ScrollView style={styles.container}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 24,
          color: "#29462C",
          marginLeft: 24,
          marginTop: 24,
        }}
      >
        Witaj, Ewelina!
      </Text>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 16,
          color: "#29462C",
          marginLeft: 24,
          marginTop: 4,
        }}
      >
        Twój kompostownik:
      </Text>
      <TouchableOpacity
        style={{ marginTop: 24, alignSelf: "center", width: 217 }}
      >
        <Image
          style={{ width: 340, height: 290, alignSelf: "center" }}
          source={require("../assets/leaf1.png")}
        />
      </TouchableOpacity>
      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        <View
          style={{
            width: 64,
            height: 64,
            borderRadius: 32,
            backgroundColor: "white",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
            marginLeft: 16,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              color: "#47E23B",
              alignSelf: "center",
            }}
          >
            76%
          </Text>
        </View>
        <View
          style={{
            width: 64,
            height: 64,
            borderRadius: 32,
            backgroundColor: "white",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
            marginLeft: 16,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              color: "#47E23B",
              alignSelf: "center",
            }}
          >
            3,5
          </Text>
        </View>
        <View
          style={{
            width: 64,
            height: 64,
            borderRadius: 32,
            backgroundColor: "white",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
            marginLeft: 16,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              color: "#47E23B",
              alignSelf: "center",
            }}
          >
            3
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 12,
              color: "#47E23B",
              alignSelf: "center",
            }}
          >
            msc
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          marginTop: 8,
        }}
      >
        <Text
          style={{
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
            marginLeft: 14,
            fontWeight: "bold",
            fontSize: 16,
            color: "#29462C",
          }}
        >
          Zapełnienie
        </Text>
        <Text
          style={{
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
            marginLeft: 14,
            fontWeight: "bold",
            fontSize: 16,
            color: "#29462C",
          }}
        >
          Poziom pH
        </Text>
        <Text
          style={{
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
            marginLeft: 14,
            fontWeight: "bold",
            fontSize: 16,
            color: "#29462C",
          }}
        >
          Pozostało
        </Text>
      </View>
      <View
        style={{
          alignSelf: "center",
          marginTop: 32,
          borderRadius: 24,
          backgroundColor: "white",
          marginLeft: 16,
          marginRight: 16,
          height: 180,
          width: width - 32,
        }}
      >
        <Text
          style={{
            alignSelf: "center",
            marginTop: 4,
            fontWeight: "bold",
            fontSize: 18,
            color: "#29462C",
          }}
        >
          Ostatnio wrzucone
        </Text>
      </View>
      <View
        style={{
          alignSelf: "center",
          marginTop: 12,
          borderRadius: 24,
          backgroundColor: "white",
          marginLeft: 16,
          marginRight: 16,
          width: width - 32,
        }}
      >
        <Text
          style={{
            alignSelf: "center",
            marginTop: 4,
            fontWeight: "bold",
            fontSize: 18,
            color: "#29462C",
          }}
        >
          Zasady kompostowania
        </Text>
        <Carousel
          showsControls={false}
          showsDots={false}
          height={290}
          autoplay={true}
          autoplayInterval={6000}
          loop={true}
          style={{
            marginTop: 16,
          }}
        >
          <View style={styles.slide}>
            <Image
              source={require("../assets/tip1.png")}
              fadeDuration={0}
              style={[styles.image, { width, resizeMode: "contain" }]}
            />
            <View style={{ flex: 0.3 }}>
              <Text style={styles.title}>Zasada 1</Text>
              <Text style={styles.description}>
                Najlepszym materiałem na kompost są odpady zielone takie jak na
                przykład liście, ścięta trawa lub cienkie gałęzie
              </Text>
            </View>
          </View>
          <View style={styles.slide}>
            <Image
              source={require("../assets/tip2.png")}
              fadeDuration={0}
              style={[styles.image, { width, resizeMode: "contain" }]}
            />
            <View style={{ flex: 0.3 }}>
              <Text style={styles.title}>Zasada 3</Text>
              <Text style={styles.description}>Opis zasady 3</Text>
            </View>
          </View>
          <View style={styles.slide}>
            <Image
              source={require("../assets/tip3.png")}
              fadeDuration={0}
              style={[styles.image, { width, resizeMode: "contain" }]}
            />
          </View>
        </Carousel>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEFFEE",
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
  image: {
    flex: 0.7,
    justifyContent: "center",
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

export default MainScreen;
