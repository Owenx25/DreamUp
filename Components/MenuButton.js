import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
//import { createStackNavigator, createAppContainer } from 'react-navigation';
import DreamDashboard from './DreamDashboard';
import DreamScreen from './DreamScreen';
import VisionCanvas from './VisionCanvas';
import DreamFragmentScreen from './DreamFragmentScreen';
import SettingsScreen from './SettingsScreen';
import DrawerNavigator from './DrawerNavigator';

export default class MenuButton extends Component {
 
  toggleDrawer = () => {
 
    this.props.navigationProps.toggleDrawer();
 
  }
 
  render() {
 
    return (
 
      <View style={{ flexDirection: 'row' }}>
 
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)} >
 
        <Icon
                          //onPress={() => this.  alert('This is a button!')}
                          //onPress={() => navigation.navigate('SettingsScreen')}
                          name='bars'
                          size={26}
                          style = {{paddingLeft: 15}}
                        />
 
        </TouchableOpacity>
 
      </View>
 
    );
 
 
  }
}