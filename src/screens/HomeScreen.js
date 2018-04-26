import React, { Component } from "react";
import { View, Text } from "react-native";
import { observer, inject } from "mobx-react"; 

@inject("store")
@observer
export default class HomeScreen extends Component {
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
    debugger;
    const { store, navigation } = this.props;

    return (
      <View style={{flex: 1, display: 'flex', alignItems: "center", justifyContent: "center"}}>
        <Text onPress={() => navigation.navigate("Profile")} style={{fontSize: 30, color: "black"}}> {store.teste} 1 </Text>
      </View>
    );
  }
}