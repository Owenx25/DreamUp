import React, { Component } from 'react';
import { View } from 'react-native';
import { Divider } from 'react-native-elements';

export default class DashboardDivider extends Component {
    render() {
        return (
            <View style={{flexDirection:'row', justifyContent:'center'}}>
                <Divider style={{backgroundColor: '#b300b3',
                    width: 50,
                    height: 3,
                    flex: 0.5}}/>
            </View>
        )
    }
}