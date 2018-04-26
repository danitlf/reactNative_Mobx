import React, { Component } from "react";
import { View, Text } from "react-native";
import { observer } from "mobx-react"; 

@observer
export default class SecondScreen extends Component {
//   async componentDidMount() {
//     const { apiKeysStore, binanceApiStore, navigation } = this.props;

//     await apiKeysStore.loadApiKeys();
//     try {
//       await binanceApiStore.loadBookTickers();
//       await binanceApiStore.loadAccountData();
//       await binanceApiStore.loadOldComputedBalances();
//     } catch (e) {
//       navigation.navigate("Profile");
//     }
//   }

  render() {
    const { binanceApiStore, navigation } = this.props;

    return (
      <View>
        <Text> teste 2</Text>
      </View>
    );
  }
}