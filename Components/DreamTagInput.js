import React, { Component } from 'react';
import {View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ErrorDialog from './ErrorDialog'

export default class DreamTagInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tag: '',
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

    _onAddTag() {
        if (this.state.tag.length == 0) {
            this.setErrorEmptyModalVisible(!this.state.errorEmptyModalVisible);
            return;
        }
        if (this.state.tag.split(' ').length > 1) {
            this.setErrorLongModalVisible(!this.state.errorEmptyModalVisible);
            return;
        }
        this.props.onAddTagPress(this.state.tag);
        this.TextInput.clear();
    }

    render() {
        return (   
            <View style={styles.addTagBox}>
                <ErrorDialog
                    isModalVisible={this.state.errorEmptyModalVisible}
                    message='Tag needs text!'
                    onPress={() => {this.setErrorEmptyModalVisible(!this.state.errorEmptyModalVisible)}}
                />
                <ErrorDialog
                    isModalVisible={this.state.errorLongModalVisible}
                    message='Tags can only be one word'
                    onPress={() => {this.setErrorLongModalVisible(!this.state.errorLongModalVisible)}}
                />
                <TouchableOpacity onPress={() => this._onAddTag()}>
                    <Icon style={{}} name='add-circle' size={40} color='#b300b3'/>
                </TouchableOpacity>
                <TextInput
                    onChangeText={ (tag) => this.setState({tag})}
                    style={styles.tagTextBox}
                    placeholderTextColor='#5A5A5A' 
                    placeholder="Add a tag..."
                    multiline={true} 
                    ref={input => {this.TextInput = input}}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    addTagBox: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        margin: 20,
    },
    tagTextBox: {
        flex: 1,
        padding: 10,
        marginLeft: 20,
        fontSize: 16,
        backgroundColor:'#c4941d'
    }
})