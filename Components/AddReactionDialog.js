import React, { Component } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, BackHandler } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class AddReactionDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSelected: '',
        }
    }

    // componentDidMount() {
    //     this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
    //         this.props.onBackPressed();
    //         return true;
    //     });
    // }
    // componentWillUnmount() {
    //     this.backHandler.remove();
    // }

    render() {
        return (
            <Modal
                animationType='fade'
                transparent={true}
                visible={this.props.isModalVisible}
                on
            >
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <View style={styles.dialogBox}>
                        <Text style={styles.messageText}>What was your overall reaction?</Text>
                        <View style={styles.buttons}> 
                            <View style={styles.buttonColumn}>
                                <TouchableOpacity 
                                    onPress={() => this.setState({currentSelected: 'happy'})}
                                    style={this.state.currentSelected == 'happy' ? styles.selectedCard : styles.reactionCard} 
                                >
                                    <Text style={styles.emoji}>😃</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    onPress={() => this.setState({currentSelected: 'confused'})}
                                    style={this.state.currentSelected == 'confused' ? styles.selectedCard : styles.reactionCard}     
                                >
                                    <Text style={styles.emoji}>🤔</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonColumn}>
                                <TouchableOpacity 
                                    onPress={() => this.setState({currentSelected: 'sad'})}
                                    style={this.state.currentSelected == 'sad' ? styles.selectedCard : styles.reactionCard}     
                                >
                                    <Text style={styles.emoji}>😥</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    onPress={() => this.setState({currentSelected: 'suprised'})}
                                    style={this.state.currentSelected == 'suprised' ? styles.selectedCard : styles.reactionCard}     
                                >
                                    <Text style={styles.emoji}>🤯</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonColumn}> 
                                <TouchableOpacity 
                                    onPress={() => this.setState({currentSelected: 'angry'})}
                                    style={this.state.currentSelected == 'angry' ? styles.selectedCard : styles.reactionCard} 
                                >
                                    <Text style={styles.emoji}>😡</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    onPress={() => this.setState({currentSelected: 'indifferent'})}
                                    style={this.state.currentSelected == 'indifferent' ? styles.selectedCard : styles.reactionCard}     
                                >
                                    <Text style={styles.emoji}>😐</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonColumn}>
                            <TouchableOpacity 
                                    onPress={() => this.setState({currentSelected: 'afraid'})}
                                    style={this.state.currentSelected == 'afraid' ? styles.selectedCard : styles.reactionCard}     
                                >
                                    <Text style={styles.emoji}>😱</Text>
                                </TouchableOpacity>  
                                <TouchableOpacity 
                                    onPress={() => this.state.currentSelected != '' ? 
                                        this.props.onDone(this.state.currentSelected) :
                                        null
                                    }
                                    style={{justifyContent: 'center', alignItems: 'center', paddingLeft: 2, paddingBottom: 20}}    
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
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    emoji: {
        fontSize: 50,
        color: 'rgba(0,0,0,1)',
        paddingBottom: 7
    },
    reactionCard: {
        fontSize: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2
    },
    selectedCard: {
        fontSize: 50,
        borderColor: '#b300b3',
        borderWidth: 2,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonColumn: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: 5
    }
})