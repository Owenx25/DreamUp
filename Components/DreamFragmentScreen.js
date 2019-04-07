import React, { Component } from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import { withNavigation } from 'react-navigation';

import DashboardDivider from './DashboardDivider';
import DreamFragmentInput from './DreamFragmentInput';
import ChoiceDialog from './ChoiceDialog';
import ErrorDialog from './ErrorDialog';
import HeaderCheckIcon from './HeaderCheckIcon';
import DreamFragment from './DreamFragment';

import DBManager from '../DBManager';

class DreamFragmentScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newFragment: '',
            completedFragmentsArr: [],
            deleteFragmentModalVisible: false,
            errorEmptySubmitModalVisible: false,
            selectedFragment: 0,
        }
    }

    setModalVisible(visible) {
        this.setState({deleteFragmentModalVisible: visible});
    }

    setErrorEmptySubmitModalVisible(visible) {
        this.setState({errorEmptySubmitModalVisible: visible})
    }

    _onAddFragment(fragment) {
        let completedFragmentsArr = [...this.state.completedFragmentsArr];
        completedFragmentsArr.push(fragment);
        this.setState({ completedFragmentsArr });
    }

    _onFragmentPress(index) {
        this.setState({selectedFragment: index});
        this.setModalVisible(!this.state.deleteFragmentModalVisible);
    }

    _onRemoveFragmentPress() {
        var fragmentsArr = [...this.state.completedFragmentsArr]
        fragmentsArr.splice(this.state.selectedFragment, 1);
        this.setState({completedFragmentsArr: fragmentsArr});
        this.setModalVisible(!this.state.deleteFragmentModalVisible);
    }

    _setErrorEmptySubmitModalVisible = (value) => {
        this.props.navigation.setParams({errorEmptySubmitModalVisible: value});
        this.setState({ errorEmptySubmitModalVisible: value});
    }

    componentDidMount() {
        this.props.navigation.setParams({
            getFragmentCount: () => this.getFragmentCount(),
            getFragments: () => this.getFragments(),
            errorEmptySubmitModalVisible: false,
            setErrorEmptySubmitModalVisible: this._setErrorEmptySubmitModalVisible,
        })
    }
    getFragmentCount = () => this.state.completedFragmentsArr.length;
    getFragments = () => this.state.completedFragmentsArr;

    _renderFragmentItem(item, index) {
        return (
            <DreamFragment onPress={() => this._onFragmentPress(index)} text={item} />
        )
    }

    static navigationOptions = ({ navigation }) => {
        const {params = {}} = navigation.state;
        return {
        title: 'What happened?',
        headerRight: <HeaderCheckIcon onDone={() => {
            if (params.getFragmentCount() > 0) {
                let today = new Date();
                let reaction = navigation.getParam('reaction', 'indifferent');
                var doc = {
                    createDate: today,
                    visionPath: navigation.getParam('visionPath', ''),
                    fragments: params.getFragments(),
                    tags: [],
                    reaction: reaction,
                    description: '',
                    id: today.getTime(),
                    nightmare: reaction == 'afraid' ? true : false,
                }
                DBManager.getInstance().insert(doc);
                navigation.replace('DreamScreen', {
                    existing: navigation.getParam('existing', false),
                    dreamObject: doc,
                })
            } else {
                params.setErrorEmptySubmitModalVisible(true)
            }
        }
        } />
      };
    };
    render() {
        return (
            <View style={{backgroundColor: '#2b1381', flex: 1, flexDirection: 'column', justifyContent: 'flex-start'}}>
                <ErrorDialog
                    isModalVisible={this.state.errorEmptySubmitModalVisible}
                    message='You need at least one fragment!'
                    onPress={() => this.setErrorEmptySubmitModalVisible(!this.state.errorEmptySubmitModalVisible)}
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
                <DreamFragmentInput onAddFragmentPress={(fragment) => this._onAddFragment(fragment)}/>
                <DashboardDivider />
                <FlatList 
                    data={this.state.completedFragmentsArr}
                    renderItem={({item, index}) => this._renderFragmentItem(item, index)}
                    keyExtractor={(item, index) => index.toString()}
                />
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
