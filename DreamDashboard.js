import React, { Component } from 'react';
import FAB from 'react-native-fab'
import {ScrollView, View} from 'react-native';

import CardContainer from './CardContainer';
import DreamGraph from './DreamGraph';


// Holds all dashboard components
export default class DreamDashboard extends Component {
    render() {
      return (
        <View style={{flex:10}} >
          <ScrollView>
            <CardContainer color='white' title='Recent Dreams'/>
            <CardContainer color='white' title='Nightmares'/>
            <DreamGraph
            />
            <View style={{height: 100}}/>
          </ScrollView>
          <FAB buttonColor="#DAA520"
            iconTextColor="white"
            onClickAction={() => {console.log("FAB pressed")}}
            visible={true}
          />
        </View>
      )
    }
  }