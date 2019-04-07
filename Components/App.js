import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Platform } from "react-native";

import DreamDashboard from './DreamDashboard';
import DreamScreen from './DreamScreen';
import VisionCanvas from './VisionCanvas';
import DreamFragmentScreen from './DreamFragmentScreen';
import SettingsScreen from './SettingsScreen';

/* Only objects like : 
  {
    createDate: dateobj,
    visionPath: string,
    fragments: [string]
    tags: [string]
    reaction: string,
    description: string,
  }
  Should be inserted into the DB!
  ex: {
    createDate: new Date(),
    visionPath: 'file:///storage/emulated/0/Pictures/Dreams/80579150.jpg',
    fragments: [
      'My family was celebrating my birthday',
      'Then I was driving a car away from our home and suddenly into Boston',
      'The car broke down and I opened the trunk to find a small creature inside'
    ],
    tags: ['birthday', 'driving', 'monster'],
    reaction: 'indifferent',
    description: 'This is a really long description that could go on for many different characters with multiple paragraphs, newlines, and spaces'
  }
*/

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
  title: 'DreamUp',
      headerTitleStyle: {
          textAlign:"center",
          flex:1
      },
  headerLeft: (
                      <Icon
                        //onPress={() => this.  alert('This is a button!')}
                        onPress={() => navigation.navigate('SettingsScreen')}
                        name='bars'
                        size={26}
                        style = {{paddingLeft: 15}}
                      />
                    ),
    headerRight: (
                      <Icon
                        onPress={() => alert('DreamUp 2019')}
                        name='info-circle'
                        size={26}
                        style = {{paddingRight: 15}}
                      />
                    ),
  headerStyle: {
    backgroundColor: '#c4941d',
    }
  });

  render() {
    return (
      <View style={{backgroundColor: '#2b1381', flex: 1}}>
        <DreamDashboard navigation={this.props.navigation}/>
      </View>
    );
  }
}

const RootStack = createStackNavigator({
  Home: HomeScreen,
  DreamScreen: DreamScreen,
  VisionCanvas: VisionCanvas,
  DreamFragmentScreen: DreamFragmentScreen,
  SettingsScreen: SettingsScreen
},
{
  defaultRoot: 'Home',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#c4941d'
    }
  },
  navigationOptions: {
  }
});

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
