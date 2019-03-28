import React, { Component } from 'react';
import {View, StyleSheet, Text, ScrollView, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';

import DashboardDivider from './DashboardDivider';
import DreamFragmentInput from './DreamFragmentInput';
import ChoiceDialog from './ChoiceDialog';
import ErrorDialog from './ErrorDialog';
import HeaderCheckIcon from './HeaderCheckIcon';

class DreamFragmentScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newFragment: '',
            completedFragmentsArr: [],
            deleteFragmentModalVisible: false,
            errorEmptyModalVisible: false,
            errorLongModalVisible: false,
            selectedFragment: 0,
        }
    }

    setModalVisible(visible) {
        this.setState({deleteFragmentModalVisible: visible});
    }

    setErrorEmptyModalVisible(visible) {
        this.setState({errorEmptyModalVisible: visible});
    }

    setErrorLongModalVisible(visible) {
        this.setState({errorLongModalVisible: visible});
    }

    _onAddFragment() {
        if (this.state.newFragment.length == 0) {
            this.setErrorEmptyModalVisible(!this.state.errorEmptyModalVisible);
            return;
        }
        if (this.state.newFragment.length > 140) {
            this.setErrorLongModalVisible(!this.state.errorEmptyModalVisible);
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

    componentDidMount() {
        this.props.navigation.setParams({
            getFragmentCount: () => this.getFragmentCount()
        })
    }

    getFragmentCount() {
        return this.state.completedFragmentsArr.length;
    }

    static navigationOptions = ({ navigation }) => {
        const {params = {}} = navigation.state;
        return {
        title: 'What happened?',
        headerRight: <HeaderCheckIcon onDone={() => {
            if (params.getFragmentCount() > 0)
                navigation.navigate('DreamScreen')}
        } />
      };
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

export default withNavigation(DreamFragmentScreen);
