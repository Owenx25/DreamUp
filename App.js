import React, { Component } from 'react';

import { StyleSheet, FlatList, Text, View } from 'react-native';

import DreamDashboard from './DreamDashboard';

export default class App extends React.Component {
  render() {
    const message = 'test';
    return (
      <View style={{backgroundColor: 'midnightblue', flex: 1}}>
        <Toolbar title='DreamUp'/>
        <DreamDashboard />
      </View>
    );
  }
}

// Holds various dream info containers
export class Toolbar extends Component {
  render() {
    return (
      <View style={styles.toolbar}> 
        <Text style={{fontWeight: 'bold', fontSize: 32, color: 'midnightblue'}}>
          {this.props.title}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: "goldenrod",
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 5
  },
});