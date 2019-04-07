import React, { Component } from 'react';
import { TouchableOpacity, Text, Button } from 'react-native';

import DreamScreen from './DreamScreen';
import DBManager from '../DBManager';

// Dream card containing dream related info
//#1f618d
//#56399d
export default class DreamCard extends Component {
  render() {
    return (
      <TouchableOpacity 
        style={{backgroundColor: '#c4941d', width: 120, margin: 10, justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'column'}}
        onPress={() => {
          this.props.navigation.navigate('DreamScreen', {
            existing: true,
            dreamObject: this.props.dreamObject
          });
        }}
        onLongPress={this.props.onLongPress}
      >
        <Text style={{fontSize: 40, color: '#rgba(0,0,0,1.0)'}}>
          {DreamScreen.getReaction(this.props.dreamObject.reaction)}
        </Text>
        <Text style={{fontSize:30}}>
          {this.props.dreamObject.createDate.getMonth() + 1}/{this.props.dreamObject.createDate.getDate()}
        </Text>
      </TouchableOpacity>
    )
  }
}
