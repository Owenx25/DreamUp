import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Text, Alert } from 'react-native';
import  { 
	SectionRow, 
	NavigateRow,
  CheckRow,
  SwitchRow,
  SliderRow
} from 'react-native-settings-page';
import SettingsWrapperScreen from './SettingsWrapperScreen';
import DateTimePicker from 'react-native-modal-datetime-picker';
import PushNotification from 'react-native-push-notification';

export default class SettingsScreen extends Component {
  static navigationOptions = {
    title: 'Settings'
  };
 /* static navigationOptions = ({ navigation }) => ({
    title: 'Settings',};
        headerTitleStyle: {
            textAlign:"center",
            flex:1
        },
    headerLeft: (
                      <Icon
                      onPress={() => navigation.navigate('Home')}
                      name='arrow-left'
                      size={26}
                      style = {{paddingLeft: 15}}
                    />
                      ),
      headerRight: (
                        <Icon
                         onPress={() => alert('DreamUp 2019\n\nDevelopers:\nOwen McCormack\nJacob Phillps')}
                          name=''
                          size={26}
                          style = {{paddingRight: 15}}
                        />
                      ),
    headerStyle: {
      backgroundColor: '#c4941d',
      }
    });*/
state = {
  check: false,
  switch: true,
  dateTimeVisible: false,
  value: 40
}
_navigateToHome = () => {
  const { navigation } = this.props
  navigation.navigate('Home');
}
_handleDatePicked = (date) => {
  PushNotification.localNotificationSchedule({
    //... You can use all the options from localNotifications
    message: "Enter your dreams!", // (required)
    date: date, // in 60 secs
    repeatType: 'day'
  });
  this.setState({dateTimeVisible: false});
};
render() {
  return (
    <View style ={{flex:1}}>
    <SettingsWrapperScreen>
      <SectionRow text='General'>
        <CheckRow 
          text='  DreamUp Do Not Disturb'
          iconName='bed'
          _color='#000'
          _value={this.state.check}
          _onValueChange={() => { this.setState({ check: !this.state.check }) }} />
        <SliderRow 
          text='DreamUp Volume'
          iconName='volume-up'
          _color='#000'
          _min={0}
          _max={100}
          _value={this.state.value}
          _onValueChange={value => { this.setState({ value }) }} />
      </SectionRow>
      <SectionRow text='Notifications'>  
        <SwitchRow 
          text=' DreamUp Notifications' 
          iconName='exclamation'
          _value={this.state.switch}
          _onValueChange={() => { this.setState({ switch: !this.state.switch }) }} />
        <NavigateRow
          text='Set Notification Time'
          iconName='bell'
          onPressCallback={() => {this.setState({ dateTimeVisible: true})}} />
          </SectionRow>
    </SettingsWrapperScreen>
    <DateTimePicker
          isVisible={this.state.dateTimeVisible}
          onConfirm={this._handleDatePicked}
          onCancel={() => {this.setState({dateTimeVisible: false})}}
          mode='datetime'
        />
    </View>
    
  )
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#EAE5FB',//F5FCFF
  },
  strokeColorButton: {
    marginHorizontal: 2.5, marginVertical: 8, width: 30, height: 30, borderRadius: 15,
  },
  strokeWidthButton: {
    marginHorizontal: 2.5, marginVertical: 8, width: 30, height: 30, borderRadius: 15,
    justifyContent: 'center', alignItems: 'center', backgroundColor: '#2b1381'
  },
  functionButton: {
    marginHorizontal: 2.5, marginVertical: 8, height: 30, width: 60,
    backgroundColor: '#c4941d', justifyContent: 'center', alignItems: 'center', borderRadius: 5,
  }
});

       
      AppRegistry.registerComponent('SettingsScreen', () => SettingsScreen);