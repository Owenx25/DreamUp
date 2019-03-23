import React, { Component } from 'react';
import  {View, StyleSheet, Text, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import DashboardDivider from './DashboardDivider';

export default class DreamFragmentScreen extends Component {
    static navigationOptions = {
        title: 'What happened?',
        //headerRight: <HeaderCheckIcon />
      };
    render() {
        return (
            <View style={{backgroundColor: '#2b1381', flex: 1, flexDirection: 'column', justifyContent: 'flex-start'}}>
                <Text style={styles.titleText}>Add some sentence fragments from your dream:</Text>
                <Text style={[styles.titleText, {marginBottom: 20}]}>Ex. "I was walking alone in a forest until I saw a Monster"</Text>
                <DashboardDivider />
                <View style={styles.addFragmentBox}>
                    <TouchableOpacity>
                        <Icon style={{}} name='add-circle' size={40} color='#b300b3'/>
                    </TouchableOpacity>
                    <TextInput
                        style={styles.fragmentTextBox}
                        placeholderTextColor='black' 
                        placeholder="what happened..." 
                    >
                    </TextInput>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
        margin: 20,
        marginBottom: 0,
        color: '#c4941d'
    },
    addFragmentBox: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        margin: 20,
    },
    fragmentTextBox: {
        flex: 1,
        height: 50,
        marginLeft: 20,
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor:'white',
        backgroundColor:'#c4941d'
    }
})
