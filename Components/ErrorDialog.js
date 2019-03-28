import React, { Component } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';

export default class ErrorDialog extends Component {
    render() {
        return (
            <Modal
                animationType='fade'
                transparent={true}
                visible={this.props.isModalVisible}
            >
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <View style={styles.dialogBox}>
                        <Text style={styles.messageText}>{this.props.message}</Text>
                        <View style={styles.button}> 
                            <TouchableOpacity onPress={this.props.onPress}>
                                <View style={styles.eButton}>
                                    <Text style={{fontSize: 20, paddingBottom: 10, color: 'white'}}>OK</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    dialogBox: {
        width: 350,
        height: 120, 
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#B30000',
        borderColor:'black',
        borderWidth: 2,
        borderRadius: 5,
    },
    buttons: {
        width: 250,
        justifyContent: 'space-between',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    eButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        width: 60,
        backgroundColor: '#B30000'
    },
    messageText: {
        margin: 10,
        fontSize: 20,
        color: 'white'
    }
})