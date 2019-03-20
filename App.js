import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View, Platform } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'

import DreamDashboard from './DreamDashboard';

export default class App extends React.Component {
  render() {
    return (  
      <View style={{backgroundColor: '#2b1381', flex: 1}}>
        <Toolbar title='DreamUp'/>
        <DreamDashboard />
      </View>
    );
  }
}

// Holds various dream info containers
class Toolbar extends Component {
  render() {
    return (
      <View style={styles.toolbar}>
        <Text style={{fontWeight: 'bold', fontSize: 28, color: 'midnightblue'}}>
          {this.props.title}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: "#c4941d",
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 1
  },
});