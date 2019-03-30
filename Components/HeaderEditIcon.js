import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class HeaderCheckIcon extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onDone}>
                <Icon style={{marginRight: 20}} name='edit' size={24} color='#000'/>
            </TouchableOpacity>
        )
    }
}