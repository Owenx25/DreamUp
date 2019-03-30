import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// Dream card containing dream related info
//#1f618d
//#56399d
export default class DreamFragment extends Component {  
    render() {
        return (
            <TouchableOpacity
                style={styles.fragmentBox}
                onPress={this.props.onPress}
            >
                <Text style={{fontSize: 16, color: 'black', padding: 10}}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    fragmentBox: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 20,
        marginTop: 20,
        borderRadius: 10,
        backgroundColor:'#c4941d',
    }
})