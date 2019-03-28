import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Platform } from "react-native";

import DreamDashboard from './DreamDashboard';
import DreamScreen from './DreamScreen';
import VisionCanvas from './VisionCanvas';
import DreamFragmentScreen from './DreamFragmentScreen';

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
                         onPress={() => navigation.navigate('VisionCanvas')}
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
        {/* <Toolbar title='DreamUp'/> */}
        <DreamDashboard navigation={this.props.navigation}/>
      </View>
    );
  }
}

const RootStack = createStackNavigator({
  Home: DreamFragmentScreen,
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
