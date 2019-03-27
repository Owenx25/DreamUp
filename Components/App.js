import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


import DreamDashboard from './DreamDashboard';
import DreamScreen from './DreamScreen';
import VisionCanvas from './VisionCanvas';
import DreamFragmentScreen from './DreamFragmentScreen';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'DreamUp',
        headerTitleStyle: {
            textAlign:"center",
            flex:1
        },
    headerRight: (
                       <Icon
                         onPress={() => alert('This is a button!')}
                         name="arrow-right"
                         color="##fff"
                       />
                     ),
    headerStyle: {
      backgroundColor: '#c4941d'
    }
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
  Home: HomeScreen,
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
