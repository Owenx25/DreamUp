import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class DreamTag extends Component {  
    render() {
        return (
            <TouchableOpacity
                style={styles.fragmentBox}
                onPress={this.props.onPress}
            >
                <Text style={{fontSize: 18, color: 'black', fontWeight:'bold', padding: 10}}>#{this.props.text.toUpperCase()}</Text>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    fragmentBox: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 10,
        marginTop: 20,
        backgroundColor:'#c4941d',
    }
})