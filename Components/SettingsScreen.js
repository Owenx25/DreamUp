import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Text, Alert } from 'react-native';
import ReactNativeSettingsPage, { 
	SectionRow, 
	NavigateRow,
  CheckRow,
  SwitchRow,
  SliderRow
} from 'react-native-settings-page';
import Icon from 'react-native-vector-icons/FontAwesome'

export default class SettingsScreen extends Component {
    static navigationOptions = {
        title: 'Settings',
      };
state = {
  check: false,
  switch: true,
  value: 40
}
_navigateToScreen = () => {
  const { navigation } = this.props
  navigation.navigate('Home');
}
render() {
  return (
    <ReactNativeSettingsPage>
      <NavigateRow
						text=''
						iconName='arrow-left'
						onPressCallback={this._navigateToScreen} />
      <SectionRow text='Settings'>  
        <SwitchRow 
          text=' DreamUp Notifications' 
          iconName='bell'
          _value={this.state.switch}
          _onValueChange={() => { this.setState({ switch: !this.state.switch }) }} />
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
    </ReactNativeSettingsPage>
  )
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

       
      AppRegistry.registerComponent('SettingsScreen', () => SettingsScreen);