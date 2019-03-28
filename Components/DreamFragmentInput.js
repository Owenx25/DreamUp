import React, { Component } from 'react';
import {View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class DreamFragmentInput extends Component {
    render() {
        return (
            <View style={styles.addFragmentBox}>
                <TouchableOpacity onPress={this.props.onAddFragmentPress}>
                    <Icon style={{}} name='add-circle' size={40} color='#b300b3'/>
                </TouchableOpacity>
                <TextInput
                    onChangeText={this.props.onChangeText}
                    style={styles.fragmentTextBox}
                    placeholderTextColor='#5A5A5A' 
                    placeholder="what happened..."
                    multiline={true} 
                >
                </TextInput>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    addFragmentBox: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        margin: 20,
    },
    fragmentTextBox: {
        flex: 1,
        padding: 10,
        marginLeft: 20,
        fontSize: 16,
        borderRadius: 10,
        backgroundColor:'#c4941d'
    }
})