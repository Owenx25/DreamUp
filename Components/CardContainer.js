import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';

import DreamCard from './DreamCard';
  
  // Holds Cards relating to specific day
  export default class CardContainer extends Component {
    _renderItem = ({item}) => (
      <DreamCard date={item.date} navigation={this.props.navigation}/>
    );
    render() {
      return (
        <View style={{margin: 20, height: 150, /*borderWidth: 0.5, borderColor: this.props.color*/}}>
          <Text style={{color: '#c4941d', fontSize: 24}}>{this.props.title}</Text>
          <FlatList
            horizontal={true} data={data}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )
    }
  }

  // Sample data for flat list
const data = [
    {
      Id: 1,
      date: new Date(),
      fragments: [
        'My family was celebrating my birthday',
        'Then I was driving a car away from our home and suddenly into Boston',
        'The car broke down and I opened the trunk to find a small creature inside'
      ],
      tags: ['happy','city','car','monster'],
      vision: 'path to image'
    },
    {
      Id: 1,
      date: new Date(),
      fragments: [
        'My family was celebrating my birthday',
        'Then I was driving a car away from our home and suddenly into Boston',
        'The car broke down and I opened the trunk to find a small creature inside'
      ],
      tags: ['happy','city','car','monster'],
      vision: 'path to image'
    },
    {
      id: 1,
      date: new Date(),
      fragments: [
        'My family was celebrating my birthday',
        'Then I was driving a car away from our home and suddenly into Boston',
        'The car broke down and I opened the trunk to find a small creature inside'
      ],
      tags: ['happy','city','car','monster'],
      vision: 'path to image'
    },
    {
      id: 1,
      date: new Date(),
      fragments: [
        'My family was celebrating my birthday',
        'Then I was driving a car away from our home and suddenly into Boston',
        'The car broke down and I opened the trunk to find a small creature inside'
      ],
      tags: ['happy','city','car','monster'],
      vision: 'path to image'
    },
  ]