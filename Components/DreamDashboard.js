import React, { Component } from 'react';
import FAB from 'react-native-fab'
import { ScrollView, View } from 'react-native';

import CardContainer from './CardContainer';
import DreamGraph from './DreamGraph';
import DashboardDivider from './DashboardDivider';

// Holds all dashboard components
export default class DreamDashboard extends Component {
    render() {
      return (
        <View style={{flex:10}} >
          <ScrollView>
            <CardContainer color='white' title='Recent Dreams' navigation={this.props.navigation}/>
            <DashboardDivider />
            <CardContainer color='white' title='Nightmares' navigation={this.props.navigation}/>
            <DashboardDivider />
            <DreamGraph name='Weekly Fragments'
            />
            <View style={{height: 100}}/>
          </ScrollView>
          <FAB buttonColor="#DAA520"
            iconTextColor="white"
            onClickAction={() => {this.props.navigation.navigate('VisionCanvas')}}
            visible={true}
          />
        </View>
      )
    }
  }

