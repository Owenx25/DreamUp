import React, { Component } from 'react';
import {View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ErrorDialog from './ErrorDialog'

export default class DreamFragmentInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fragment: '',
            errorEmptyModalVisible: false,
            errorLongModalVisible: false,
        }
    }

    setErrorEmptyModalVisible(visible) {
        this.setState({errorEmptyModalVisible: visible});
    }

    setErrorLongModalVisible(visible) {
        this.setState({errorLongModalVisible: visible});
    }

    _onAddFragment() {
        if (this.state.fragment.length == 0) {
            this.setErrorEmptyModalVisible(!this.state.errorEmptyModalVisible);
            return;
        }
        if (this.state.fragment.length > 140) {
            this.setErrorLongModalVisible(!this.state.errorEmptyModalVisible);
            return;
        }
        this.props.onAddFragmentPress(this.state.fragment);
        this.setState({ fragment: '' });
        this.TextInput.clear();
    }

    render() {
        return (   
            <View style={styles.addFragmentBox}>
                <ErrorDialog
                    isModalVisible={this.state.errorEmptyModalVisible}
                    message='Fragment needs text!'
                    onPress={() => {this.setErrorEmptyModalVisible(!this.state.errorEmptyModalVisible)}}
                />
                <ErrorDialog
                    isModalVisible={this.state.errorLongModalVisible}
                    message='Fragment is too long, you can add a more detailed summary later'
                    onPress={() => {this.setErrorLongModalVisible(!this.state.errorLongModalVisible)}}
                />
                <TouchableOpacity onPress={() => this._onAddFragment()}>
                    <Icon style={{}} name='add-circle' size={40} color='#b300b3'/>
                </TouchableOpacity>
                <TextInput
                    onChangeText={ (fragment) => this.setState({fragment})}
                    style={styles.fragmentTextBox}
                    placeholderTextColor='#5A5A5A' 
                    placeholder="what happened..."
                    multiline={true} 
                    ref={input => {this.TextInput = input}}
                />
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