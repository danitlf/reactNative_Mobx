import React, { Component } from "react";
import { View, Text } from "react-native";
import { observer, inject } from "mobx-react"; 

@inject("user")
@observer
export default class HomeScreen extends Component {
    
  render() {

    return (
      <View style={{flex: 1, display: 'flex', alignItems: "center", justifyContent: "center"}}>
        <Text onPress={() => navigation.navigate("Profile")} style={{fontSize: 30, color: "black"}}> {this.props.user.email} 1 </Text>
      </View>
    );
  }
}