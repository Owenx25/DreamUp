import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class TimePicker extends Component {
  state = {
    isDateTimePickerVisible: true,
  };
  _navigateBack= () => {
    const { navigation } = this.props
    navigation.pop();
  }
  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => {
      this.setState({ isDateTimePickerVisible: false });
      this._navigateBack();
    };

  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    this._hideDateTimePicker();
  };

  render () {
    return (
      <View style={{ flex: 1 }}>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
          timePickerModeAndroid = 'spinner'
          mode = 'datetime'
        />
      </View>
    );
  }

}