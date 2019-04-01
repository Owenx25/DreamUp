import React, { Component } from 'react';
import FAB from 'react-native-fab'
import { ScrollView, View } from 'react-native';

import CardContainer from './CardContainer';
import DreamGraph from './DreamGraph';
import DashboardDivider from './DashboardDivider';
import AddReactionDialog from './AddReactionDialog';

// Holds all dashboard components
export default class DreamDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reactionModalVisible: false,
    }
  }

  _setReactionModalVisible = (visible) => {this.setState({reactionModalVisible: visible})}

  render() {
    return (  
      <View style={{flex:10}}>
        <AddReactionDialog 
          isModalVisible={this.state.reactionModalVisible} 
          //onBackPressed={() => this._setReactionModalVisible(false)}
          onDone={(reaction) => {
            this._setReactionModalVisible(!this.state.reactionModalVisible);
            this.props.navigation.navigate('VisionCanvas', {reaction: reaction});
          }}
        />
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
          onClickAction={() => {
            this._setReactionModalVisible(!this.state.reactionModalVisible);    
          }}
          visible={true}
        />
      </View>
    )
  }
}

