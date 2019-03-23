import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'

import DreamDashboard from './DreamDashboard';
import DreamScreen from './DreamScreen';
import VisionCanvas from './VisionCanvas';
import DreamFragmentScreen from './DreamFragmentScreen';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'DreamUp'
  };
  render() {  
    return ( 
      <View style={{backgroundColor: '#2b1381', flex: 1}}>
        {/* <Toolbar title='DreamUp'/> */}
        <DreamDashboard navigation={this.props.navigation}/>
      </View>
    );
  }
}

const RootStack = createStackNavigator({
  Home: Home,
  DreamScreen: DreamScreen,
  VisionCanvas: VisionCanvas,
  DreamFragmentScreen: DreamFragmentScreen
},
{
  defaultRoot: 'Home',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#c4941d'
    }
  }
});

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
