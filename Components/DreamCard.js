import React, { Component } from 'react';
import { TouchableOpacity, Text, Button } from 'react-native';

// Dream card containing dream related info
//#1f618d
//#56399d
export default class DreamCard extends Component {  
    render() {
      return (
        <TouchableOpacity 
          style={{backgroundColor: '#c4941d', width: 120, margin: 10, justifyContent: 'flex-end', alignItems: 'center'}}
          onPress={() => this.props.navigation.push('DreamScreen', {dreamId: this.props.dreamId})}
        >
          <Text style={{fontSize:30}}>{this.props.date.getMonth() + 1}/{this.props.date.getDate()}</Text>
        </TouchableOpacity>
      )
    }
  }

  
  