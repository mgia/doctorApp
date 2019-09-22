import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


class HomeScreen extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text>Home Screen</Text>
        <Button
          title="Doctor Profile"
          onPress={() => this.props.navigation.navigate('Doctor')}
        />
        <Button
          title="Consult Doctor"
          onPress={() => this.props.navigation.navigate('Chat')}
        />
        <Button
          title="App Guidelines"
          onPress={() => this.props.navigation.navigate('Intro')}
        />
      </View>
    )
  }
}

class DoctorScreen extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text>Doctor Profile Screen</Text>
      </View>
    )
  }
}

class ChatScreen extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text>Chat Screen</Text>
      </View>
    )
  }
}

class IntroScreen extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text>App Usage Screen</Text>
      </View>
    )
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Doctor: DoctorScreen,
    Chat: ChatScreen,
    Intro: IntroScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default createAppContainer(AppNavigator);
