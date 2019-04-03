import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';

import DreamCard from './DreamCard';
  
  // Holds Cards relating to specific day
  export default class CardContainer extends Component {
    _renderItem = ({item}) => (
      <DreamCard createDate={item.createDate} reaction={item.reaction} navigation={this.props.navigation}/>
    );
    render() {
      return (
        <View style={{margin: 20, height: 150, /*borderWidth: 0.5, borderColor: this.props.color*/}}>
          <Text style={{color: '#c4941d', fontSize: 24}}>{this.props.title}</Text>
          <FlatList
            horizontal={true} data={this.props.data}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )
    }
  }
