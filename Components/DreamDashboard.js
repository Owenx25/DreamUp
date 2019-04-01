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
          <CardContainer color='white' title='Recent Dreams' data={data} navigation={this.props.navigation}/>
          <DashboardDivider />
          <CardContainer color='white' title='Nightmares' data={nightmares} navigation={this.props.navigation}/>
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

 // Sample data for flat list
 const data = [
  {
    dreamId: 1,
    date: new Date(2019, 3, 0),
    reaction: '😃',
    fragments: [
      'My family was celebrating my birthday',
      'Then I was driving a car away from our home and suddenly into Boston',
      'The car broke down and I opened the trunk to find a small creature inside'
    ],
    tags: ['happy','city','car','monster'],
    vision: 'path to image'
  },
  {
    dreamId: 2,
    date: new Date(2019, 2, 30),
    reaction: '😥',
    fragments: [
      'My family was celebrating my birthday',
      'Then I was driving a car away from our home and suddenly into Boston',
      'The car broke down and I opened the trunk to find a small creature inside'
    ],
    tags: ['happy','city','car','monster'],
    vision: 'path to image'
  },
  {
    dreamId: 3,
    date: new Date(2019, 2, 29),
    reaction: '😡',
    fragments: [
      'My family was celebrating my birthday',
      'Then I was driving a car away from our home and suddenly into Boston',
      'The car broke down and I opened the trunk to find a small creature inside'
    ],
    tags: ['happy','city','car','monster'],
    vision: 'path to image'
  },
  {
    dreamId: 4,
    date: new Date(2019, 2, 28),
    reaction: '😱',
    fragments: [
      'My family was celebrating my birthday',
      'Then I was driving a car away from our home and suddenly into Boston',
      'The car broke down and I opened the trunk to find a small creature inside'
    ],
    tags: ['happy','city','car','monster'],
    vision: 'path to image'
  },
]

// Sample data for flat list
const nightmares = [
  {
    dreamId: 1,
    date: new Date(2019, 3, 28),
    reaction: '😱',
    fragments: [
      'My family was celebrating my birthday',
      'Then I was driving a car away from our home and suddenly into Boston',
      'The car broke down and I opened the trunk to find a small creature inside'
    ],
    tags: ['happy','city','car','monster'],
    vision: 'path to image'
  },
  {
    dreamId: 2,
    date: new Date(2019, 2, 10),
    reaction: '😱',
    fragments: [
      'My family was celebrating my birthday',
      'Then I was driving a car away from our home and suddenly into Boston',
      'The car broke down and I opened the trunk to find a small creature inside'
    ],
    tags: ['happy','city','car','monster'],
    vision: 'path to image'
  },
  {
    dreamId: 3,
    date: new Date(2019, 1, 20),
    reaction: '😱',
    fragments: [
      'My family was celebrating my birthday',
      'Then I was driving a car away from our home and suddenly into Boston',
      'The car broke down and I opened the trunk to find a small creature inside'
    ],
    tags: ['happy','city','car','monster'],
    vision: 'path to image'
  },
  {
    dreamId: 4,
    date: new Date(2019, 1, 14),
    reaction: '😱',
    fragments: [
      'My family was celebrating my birthday',
      'Then I was driving a car away from our home and suddenly into Boston',
      'The car broke down and I opened the trunk to find a small creature inside'
    ],
    tags: ['happy','city','car','monster'],
    vision: 'path to image'
  },
]

