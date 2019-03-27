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
                            <TouchableOpacity onPress={this.props.onRChoice}>
                                <View style={styles.ebutton}>
                                    <Text style={{fontSize: 20, color: '#2b1381'}}>{this.props.rChoice}</Text>
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
        backgroundColor: '#c4941d',
        borderColor:'black',
        borderWidth: 2,
        borderRadius: 5,
    },
    buttons: {
        width: 250,
        marginBottom: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    eButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        width: 60,
        backgroundColor: '#c4941d'
    },
    messageText: {
        marginTop: 5,
        fontSize: 20,
        color: '#2b1381'
    }
})