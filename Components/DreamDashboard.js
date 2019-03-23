import React, { Component } from 'react';
import FAB from 'react-native-fab'
import { ScrollView, View } from 'react-native';
import { Divider } from 'react-native-elements';

import CardContainer from './CardContainer';
import DreamGraph from './DreamGraph';


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
            onClickAction={() => {console.log("FAB pressed")}}
            visible={true}
          />
        </View>
      )
    }
  }

class DashboardDivider extends Component {
    render() {
        return (
            <View style={{flexDirection:'row', justifyContent:'center'}}>
                <Divider style={{backgroundColor: '#b300b3',
                    width: 50,
                    height: 3,
                    flex: 0.5}}/>
            </View>
        )
    }
}