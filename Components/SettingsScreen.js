/*import React, { Component } from 'react';
import {View, Text, StyleSheet, AppRegistry} from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

export default class SettingsScreen extends React.Component {
    render() {
        return (
        <MenuProvider>
        <Menu onSelect={value => alert(`Selected number: ${value}`)}>
         <MenuTrigger text='Search' />
                      <MenuOptions customStyles= 'optionsWrapper' >
                        <MenuOption value={1} text='Search' />
                        <MenuOption value={2}>
                          <Text style={{color: 'red'}}>Set Reminder</Text>
                        </MenuOption>
                        <MenuOption value={3} disabled={true} text='Three' />
                      </MenuOptions>
                    </Menu>
                    </MenuProvider>

        );
    }
}

AppRegistry.registerComponent('SettingsScreen', () => SettingsScreen);*/

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Text, Alert } from 'react-native';
import ReactNativeSettingsPage, { 
	SectionRow, 
	NavigateRow,
  CheckRow,
  SwitchRow,
  SliderRow
} from 'react-native-settings-page';

import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas'

export default class SettingsScreen extends Component {
    static navigationOptions = {
        title: 'Settings',
      };
// TODO: implement your navigationOptions
state = {
  check: false,
  switch: false,
  value: 40
}
render() {
  return (
    <ReactNativeSettingsPage>
      <SectionRow text='Settings'>  
        <SwitchRow 
          text=' DreamUp Notifications/Alerts' 
          //iconName='your-icon-name'
          _value={this.state.switch}
          _onValueChange={() => { this.setState({ switch: !this.state.switch }) }} />
        <CheckRow 
          text='  DreamUp Airplane Mode'
          //iconName='your-icon-name'
          _color='#000'
          _value={this.state.check}
          _onValueChange={() => { this.setState({ check: !this.state.check }) }} />
        <SliderRow 
          text='DreamUp Volume'
         // iconName='your-icon-name'
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

       
      AppRegistry.registerComponent('SettingsScreen', () => SettingsScreen);