import React, { Component } from 'react';
import FAB from 'react-native-fab'
import { ScrollView, View } from 'react-native';
import {withNavigationFocus} from 'react-navigation';

import CardContainer from './CardContainer';
import DreamGraph from './DreamGraph';
import DashboardDivider from './DashboardDivider';
import AddReactionDialog from './AddReactionDialog';

import DBManager from '../DBManager'
import ChoiceDialog from './ChoiceDialog';

// Holds all dashboard components
export default class DreamDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reactionModalVisible: false,
      deleteCardModalVisible: false,
      nightmares: [],
      selectedDream: null,
    }
  }

  componentDidMount() {
    this.lookupRecentDreams();
  }

  _setReactionModalVisible = (visible) => {this.setState({reactionModalVisible: visible})}
  _setDeleteCardModalVisible = (visible) => {this.setState({deleteCardModalVisible: visible})}

  _onDeleteCardPress = () => {
    let db = DBManager.getInstance();
    let date = this.state.selectedDream.createDate;
    db.remove({id: date.getTime()}, {}, (err, numRemoved) => {});
    this.lookupRecentDreams();
    this._setDeleteCardModalVisible(!this.state.deleteCardModalVisible);
  }

  // This updates the nightmares section right now
  lookupRecentDreams() {
    var today = new Date();
    let db = DBManager.getInstance()
    db.find({}, (err, docs) => {
      this.setNightmares(docs);
    });
  }
  setNightmares(nightmares) {
    console.log(nightmares);
    this.setState({ nightmares });
  }

  // Throw any list refresh stuff in here
  willFocus = this.props.navigation.addListener(
    'willFocus',
    () => {
      this.lookupRecentDreams();
    }
  )

  render() {
    return (
      <View style={{flex:10}}>
        <ChoiceDialog
          isModalVisible={this.state.deleteCardModalVisible}
          message='Permantently delete this dream?'
          lChoice='Yes'
          onLChoice={() => this._onDeleteCardPress()}
          rChoice='No'
          onRChoice={() => this._setDeleteCardModalVisible(!this.state.deleteCardModalVisible)}
        />
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
          <CardContainer color='white' title='Nightmares' 
            data={this.state.nightmares} 
            navigation={this.props.navigation}
            onCardLongPress={(dream) => {
              this.setState({ selectedDream: dream });
              this._setDeleteCardModalVisible(!this.state.deleteCardModalVisible);
            }}
          />
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
    createDate: new Date(2019, 3, 0),
    reaction: 'happy',
    fragments: [
      'My family was celebrating my birthday',
      'Then I was driving a car away from our home and suddenly into Boston',
      'The car broke down and I opened the trunk to find a small creature inside'
    ],
    tags: ['happy','city','car','monster'],
    visionPath: '',
    description: 'test description'
  },
  {
    createDate: new Date(2019, 2, 30),
    reaction: 'sad',
    fragments: [
      'My family was celebrating my birthday',
      'Then I was driving a car away from our home and suddenly into Boston',
      'The car broke down and I opened the trunk to find a small creature inside'
    ],
    tags: ['happy','city','car','monster'],
    visionPath: '',
    description: 'test description'
  },
  {
    createDate: new Date(2019, 2, 29),
    reaction: 'angry',
    fragments: [
      'My family was celebrating my birthday',
      'Then I was driving a car away from our home and suddenly into Boston',
      'The car broke down and I opened the trunk to find a small creature inside'
    ],
    tags: ['happy','city','car','monster'],
    visionPath: '',
    description: 'test description'
  },
  {
    createDate: new Date(2019, 2, 28),
    reaction: 'afraid',
    fragments: [
      'My family was celebrating my birthday',
      'Then I was driving a car away from our home and suddenly into Boston',
      'The car broke down and I opened the trunk to find a small creature inside'
    ],
    tags: ['happy','city','car','monster'],
    visionPath: '',
    description: 'test description'
  },
]
