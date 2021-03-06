import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Typography, Colors } from './styles'

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: Colors.headerBackground,
    },
    headerTintColor: Colors.headerTitle,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

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
  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    return (
      <View style = {styles.container}>
        <Text>Doctor Profile Screen</Text>
      </View>
    )
  }
}

class ChatScreen extends Component {
  static navigationOptions = {
    title: 'Chat',
  };

  render() {
    return (
      <View style = {styles.container}>
        <Text>Chat Screen</Text>
      </View>
    )
  }
}

class IntroScreen extends Component {
  static navigationOptions = {
    title: 'Usage',
  };

  render() {
    return (
      <View style = {styles.container}>
        <Text>App Usage Screen</Text>
      </View>
    )
  }
}

class SettingsScreen extends Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return (
      <View style = {styles.container}>
        <Text>Settings Screen</Text>
      </View>
    )
  }
}

const HomeNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: "Home",
            tabBarIcon: () => (
                <Icon
                    name="user-circle"
                    size={17}
                />
            )
        }
    },
    Settings: {
        screen: SettingsScreen,
        navigationOptions: {
            tabBarLabel: "Settings",
            tabBarIcon: () => (
                <Icon
                    name="cog"
                    size={17}
                />
            )
        }
    }
});


const AppNavigator = createStackNavigator(
  {
    Home: HomeNavigator,
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
