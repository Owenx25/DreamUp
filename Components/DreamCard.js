import React, { Component } from 'react';
import { TouchableOpacity, Text, Button } from 'react-native';

import DreamScreen from './DreamScreen';

// Dream card containing dream related info
//#1f618d
//#56399d
export default class DreamCard extends Component {  
    render() {
      return (
        <TouchableOpacity 
          style={{backgroundColor: '#c4941d', width: 120, margin: 10, justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'column'}}
          onPress={() => this.props.navigation.push('DreamScreen', {existing: true, createDate: this.props.createDate})}
        >
          <Text style={{fontSize: 40, color: '#rgba(0,0,0,1.0)'}}>{DreamScreen.getReaction(this.props.reaction)}</Text>
          <Text style={{fontSize:30}}>{this.props.createDate.getMonth() + 1}/{this.props.createDate.getDate()}</Text>
        </TouchableOpacity>
      )
    }
  }

  
  