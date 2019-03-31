import React, { Component } from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import { withNavigation } from 'react-navigation';

import DashboardDivider from './DashboardDivider';
import DreamFragmentInput from './DreamFragmentInput';
import ChoiceDialog from './ChoiceDialog';
import ErrorDialog from './ErrorDialog';
import HeaderCheckIcon from './HeaderCheckIcon';
import DreamFragment from './DreamFragment';

class DreamFragmentScreen extends Component {
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

    componentDidMount() {
        this.props.navigation.setParams({
            getFragmentCount: () => this.getFragmentCount()
        })
    }

    getFragmentCount() {
        return this.state.completedFragmentsArr.length;
    }

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
            if (params.getFragmentCount() > 0)
                navigation.navigate('DreamScreen', {
                    visionPath: navigation.getParam('visionPath', ''),
                    createDate: new Date(),
                })}
        } />
      };
    };
    render() {
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
