import React, { Component } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class AddReactionDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSelected: '',
        }
    }
    render() {
        return (
            <Modal
                animationType='fade'
                transparent={true}
                visible={this.props.isModalVisible}
            >
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <View style={styles.dialogBox}>
                        <Text style={styles.messageText}>What was your overall reaction?</Text>
                        <View style={styles.buttons}> 
                            <View style={styles.buttonRow1}>
                                <TouchableOpacity 
                                    onPress={() => this.setState({currentSelected: 'happy'})}
                                    style={this.state.currentSelected == 'happy' ? styles.selectedCard : styles.reactionCard} 
                                >
                                    <Text style={{fontSize: 50}}>😃</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    onPress={() => this.setState({currentSelected: 'sad'})}
                                    style={this.state.currentSelected == 'sad' ? styles.selectedCard : styles.reactionCard}     
                                >
                                    <Text style={{fontSize: 50}}>😥</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    onPress={() => this.setState({currentSelected: 'angry'})}
                                    style={this.state.currentSelected == 'angry' ? styles.selectedCard : styles.reactionCard} 
                                >
                                    <Text style={{fontSize: 50}}>😡</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    onPress={() => this.setState({currentSelected: 'afraid'})}
                                    style={this.state.currentSelected == 'afraid' ? styles.selectedCard : styles.reactionCard}     
                                >
                                    <Text style={{fontSize: 50}}>😱</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonRow2}>
                                <TouchableOpacity 
                                    onPress={() => this.setState({currentSelected: 'confused'})}
                                    style={this.state.currentSelected == 'confused' ? styles.selectedCard : styles.reactionCard}     
                                >
                                    <Text style={{fontSize: 50}}>🤔</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    onPress={() => this.setState({currentSelected: 'suprised'})}
                                    style={this.state.currentSelected == 'suprised' ? styles.selectedCard : styles.reactionCard}     
                                >
                                    <Text style={{fontSize: 50}}>🤯</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    onPress={() => this.setState({currentSelected: 'indifferent'})}
                                    style={this.state.currentSelected == 'indifferent' ? styles.selectedCard : styles.reactionCard}     
                                >
                                    <Text style={{fontSize: 50}}>😐</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    onPress={() => this.state.currentSelected != '' ? 
                                        this.props.onDone(this.state.currentSelected) :
                                        null
                                    }
                                    style={{justifyContent: 'center', alignItems: 'center', paddingRight: 10}}    
                                >
                                    <Icon name='done' size={40} color='#000'/>
                                </TouchableOpacity>
                            </View>
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
        height: 300,
        padding: 20,
        flexDirection: 'column',
        backgroundColor: '#c4941d',
        borderColor:'black',
        borderWidth: 2,
        borderRadius: 5,
    },
    messageText: {
        fontSize: 24,
        marginBottom: 20,
    },
    buttons: {
        flex: 1,
        paddingBottom: 20,
        justifyContent: 'space-between',
        flexDirection: 'column',
    },
    buttonRow1: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 10,
    },
    buttonRow2: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    reactionCard: {
        fontSize: 50,
    },
    selectedCard: {
        fontSize: 50,
        borderColor: '#b300b3',
        borderWidth: 1,
        borderRadius: 5,
    }
})