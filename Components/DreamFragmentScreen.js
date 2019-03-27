import React, { Component } from 'react';
import  {View, StyleSheet, Text, ScrollView, Alert, TouchableOpacity} from 'react-native';

import DashboardDivider from './DashboardDivider';
import DreamFragmentInput from './DreamFragmentInput';
import ChoiceDialog from './ChoiceDialog';
import ErrorDialog from './ErrorDialog';

export default class DreamFragmentScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newFragment: '',
            completedFragmentsArr: [],
            deleteFragmentModalVisible: false,
            selectedFragment: 0,
        }
    }

    setModalVisible(visible) {
        this.setState({deleteFragmentModalVisible: visible});
    }

    _onAddFragment() {
        if (this.state.newFragment.length == 0) {
            Alert.alert('ERROR', 'Fragment needs text');
            return;
        }
        if (this.state.newFragment.length > 140) {
            Alert.alert('ERROR', 'Fragment is too long, you can add a more detailed summary later');
            return;
        }
        this.state.completedFragmentsArr.push(this.state.newFragment);
        this.setState({ completedFragments: this.state.completedFragmentsArr });
    }

    _onFragmentPress(index) {
        this.setState({selectedFragment: index});
        this.setModalVisible(!this.state.deleteFragmentModalVisible);
    }

    _onRemoveFragmentPress() {
        this.state.completedFragmentsArr.splice(this.state.selectedFragment, 1);
        this.setState({completedFragmentsArr: this.state.completedFragmentsArr});
        this.setModalVisible(!this.state.deleteFragmentModalVisible);
    }

    static navigationOptions = {
        title: 'What happened?',
        //headerRight: <HeaderCheckIcon />
      };
    render() {
        let fragmentArr = this.state.completedFragmentsArr.map((text, index) => {
            return (
                <TouchableOpacity
                    key={index}
                    style={styles.fragmentBox}
                    onPress={() => this._onFragmentPress(index)}
                >
                    <Text style={{fontSize: 16, color: 'black', padding: 10}}>{text}</Text>
                </TouchableOpacity>
            )
        })

        return (
            <View style={{backgroundColor: '#2b1381', flex: 1, flexDirection: 'column', justifyContent: 'flex-start'}}>
                <ChoiceDialog
                    isModalVisible={this.state.deleteFragmentModalVisible}
                    message='Delete this fragment?'
                    lChoice='Yes'
                    onLChoice={() => this._onRemoveFragmentPress()}
                    rChoice='No'
                    onRChoice={() => this.setModalVisible(!this.state.deleteFragmentModalVisible)}
                />
                <Text style={styles.titleText}>Add some sentence fragments from your dream:</Text>
                <Text style={[styles.titleText, {marginBottom: 20}]}>Ex. "I was walking alone in a forest until I saw a Monster"</Text>
                <DashboardDivider />
                <DreamFragmentInput 
                    onAddFragmentPress={() => this._onAddFragment()} 
                    onChangeText={(text) => this.setState({newFragment: text})}
                />
                <DashboardDivider />
                <ScrollView style={{flex: 1}}>
                    { fragmentArr }
                </ScrollView>
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
    fragmentBox: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 20,
        marginTop: 20,
        borderRadius: 10,
        backgroundColor:'#c4941d',
    }
})
