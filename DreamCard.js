import React, { Component } from 'react';
import { View, Text } from 'react-native';

// Dream card containing dream related info
//#1f618d
//#56399d
export default class DreamCard extends Component {
    render() {
      return (
        <View style={{backgroundColor: '#c4941d', width: 120, margin: 10, justifyContent: 'flex-end', alignItems: 'center'}}>
          <Text style={{fontSize:30}}>{this.props.date.getMonth() + 1}/{this.props.date.getDate()}</Text>
  
        </View>
      )
    }
  }
  