import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

//Navigation stack configuration
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//End of navigation stack configuration

//Screen import section
import OnboardingScreen from "./screens/OnboardingScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
//End of screen import section

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
