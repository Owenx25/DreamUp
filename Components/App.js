import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import { createStackNavigator, createAppContainer } from 'react-navigation';
import DreamDashboard from './DreamDashboard';
import DreamScreen from './DreamScreen';
import VisionCanvas from './VisionCanvas';
import DreamFragmentScreen from './DreamFragmentScreen';
import SettingsScreen from './SettingsScreen';
import DrawerNavigator from './DrawerNavigator';

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



//const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return(
    <View style={styles.container}>
      <DrawerNavigator/>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});