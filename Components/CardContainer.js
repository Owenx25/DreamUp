import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';

import DreamCard from './DreamCard';
  
  // Holds Cards relating to specific day
  export default class CardContainer extends Component {
    _renderItem = ({item}) => (
      <DreamCard 
        navigation={this.props.navigation} 
        dreamObject={item}  
        onLongPress={() => this.props.onCardLongPress(item)}
        cardColor={this.props.cardColor}
      />
    );
    render() {
      this.props.data.length == 0 ? 
        content = <Text style={{fontSize: 20, color: '#b300b3'}}>No dreams yet...</Text>:
        content = <FlatList
          horizontal={true} data={this.props.data}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index.toString()}
        />;
      return (
        <View style={{margin: 20, height: 150, backgroundColor: '#321697', justifyContent: 'space-between'}}>
          <Text style={{color: '#c4941d', fontSize: 24, paddingLeft: 5}}>{this.props.title}</Text>
          {content}
        </View>
      )
    }
  }
