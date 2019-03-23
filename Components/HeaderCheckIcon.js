import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class HeaderCheckIcon extends Component {
    render() {
        return (
            <Icon style={{marginRight: 20}} name='done' size={24} color='#000'/>
        )
    }
}