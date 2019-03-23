import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class DreamScreen extends Component {
    render() {
        return (
            <View style={{backgroundColor: 'green', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>This is a Dream Screen</Text>
            </View>
        )
    }

}