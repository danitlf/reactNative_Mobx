import React, { Component } from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { StackNavigator } from "react-navigation";
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/SecondScreen";
import { Provider } from "mobx-react";
import stores from "./src/stores";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#272C36"
  },
  navigator: {
    backgroundColor: "#272C36"
  }
});

const Navigator = StackNavigator(
  {
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

export default class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <SafeAreaView style={styles.safeArea}>
          <Navigator style={styles.navigator} />
        </SafeAreaView>
      </Provider>
    );
  }
}
