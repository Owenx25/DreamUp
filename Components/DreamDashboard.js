import React, { Component } from 'react';
import FAB from 'react-native-fab'
import { ScrollView, View, Text } from 'react-native';

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
      dreams: [],
      selectedDream: null,
    }
  }

  componentDidMount() {
    this.lookupDreams();
  }

  _setReactionModalVisible = (visible) => {this.setState({reactionModalVisible: visible})}
  _setDeleteCardModalVisible = (visible) => {this.setState({deleteCardModalVisible: visible})}

  _onDeleteCardPress = () => {
    let db = DBManager.getInstance();
    let date = this.state.selectedDream.createDate;
    db.remove({id: date.getTime()}, {}, (err, numRemoved) => {});
    this.lookupDreams();
    this._setDeleteCardModalVisible(!this.state.deleteCardModalVisible);
  }


  // Throw any list refresh stuff in here
  willFocus = this.props.navigation.addListener(
    'willFocus',
    () => {
      this.lookupDreams();
    }
  )
  lookupDreams() {
    let db = DBManager.getInstance()
    db.find({}).sort({ id: -1 }).exec((err, docs) => this.setDreams(docs));
    db.find({ nightmare: true }, (err, docs) => this.setNightmares(docs));
  }
  setNightmares(nightmares) {
    console.log('Nightmares:');
    console.log(nightmares);
    this.setState({ nightmares });
  }
  setDreams(dreams) {
    console.log('Dreams:');
    console.log(dreams);
    this.setState({ dreams });
  }

  render() {
    this.state.dreams.length >= 7 ? 
    graph = <DreamGraph name='Weekly Fragments' data={this.state.dreams.slice(0,7)} /> :
    graph = (
      <View style={{margin: 20, backgroundColor: '#c4941d'}}>
        <Text style={{margin: 20, fontSize: 20, color: '#rgba(0,0,0,1.0)'}}>
            Once you have 7 dreams you will see a weekly fragments graph!
        </Text>
      </View>
    );
    return (
      <View style={{flex:10}}>
        <ChoiceDialog
          isModalVisible={this.state.deleteCardModalVisible}
          message='Permanently delete this dream?'
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
          <CardContainer color='white' title='Recent Dreams'
            data={this.state.dreams}
            navigation={this.props.navigation}
            cardColor='#c4941d'
            onCardLongPress={(dream) => {
              this.setState({ selectedDream: dream });
              this._setDeleteCardModalVisible(!this.state.deleteCardModalVisible);
            }}
          />
          <DashboardDivider />
          <CardContainer color='white' title='Nightmares' 
            data={this.state.nightmares} 
            navigation={this.props.navigation}
            cardColor='#b30000'
            onCardLongPress={(dream) => {
              this.setState({ selectedDream: dream });
              this._setDeleteCardModalVisible(!this.state.deleteCardModalVisible);
            }}
          />
          <DashboardDivider />
          {graph}
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
