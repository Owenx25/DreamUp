import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, FlatList, TextInput } from 'react-native';

import HeaderEditIcon from './HeaderEditIcon'
import DashboardDivider from './DashboardDivider'
import DreamFragment from './DreamFragment';
import DreamTag from './DreamTag';
import HeaderCheckIcon from './HeaderCheckIcon';
import DreamFragmentInput from './DreamFragmentInput';
import DreamTagInput from './DreamTagInput'

export default class DreamScreen extends Component {
    static formatDate(date) {
        if (typeof date == "string") {
            return '';
        }
        var monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
          ];
        
          var day = date.getDate();
          var monthIndex = date.getMonth();
          var year = date.getFullYear();
        
          return day + ' ' + monthNames[monthIndex] + ' ' + year;
    }

    constructor(props) {
        super(props)
        this.state = {
            isReadOnly: true,
            descriptionText: testDreamObj.description,
            fragments: [...this.props.navigation.getParam('dreamObject').fragments],
            tags: [...this.props.navigation.getParam('dreamObject').tags],
        }
    }

    componentDidMount() {
        this.props.navigation.setParams({
            // Need to set this when changing state
            isReadOnly: true,
            setReadOnly: this._setReadOnly,
        })
    }

    _setReadOnly = (value) => {
        // Need logic for saving to DB here
        this.props.navigation.setParams({ isReadOnly: value});
        this.setState({ isReadOnly: value});
    }

    static navigationOptions = ({ navigation }) => {
        const {params = {}} = navigation.state;
        return {
        title: 'Dream from ' + DreamScreen.formatDate(navigation.getParam('createDate', 'Dream from ???')),
        headerRight: params.isReadOnly ? 
            <HeaderEditIcon onPress={() => params.setReadOnly(false)}/> :
            <HeaderCheckIcon onDone={() => params.setReadOnly(true)}/>
      };
    };

    _renderFragmentItem = ({item}) => (<DreamFragment onPress={() => {}} text={item} />);
    _renderTagItem = ({item}) => (<DreamTag onPress={() => {}} text={item}/>);

    _onAddFragmentPress(fragment) {
        let fragments = [...this.state.dreamObject.fragments]
        fragments.push(fragment)
        this.setState({ dreamObject: fragments})
    }
    _onAddTagPress(tag) {
        let tags = [...this.state.tags]
        tags.push(tag)
        this.setState({tags})
    }

    getVisionPath() {
        let path = this.props.navigation.getParam('dreamObject').visionPath;
        if (path) {
            return 'file:///' + path;
        } else {
            return 'file:///storage/emulated/0/Pictures/Dreams/80579150.jpg';
        }
    }

    static getReaction(reaction) {
        switch(reaction) {
            case 'happy':       return '😃';
            case 'sad':         return '😥';
            case 'angry':       return '😡';
            case 'confused':    return '🤔';
            case 'indifferent': return '😐';
            case 'suprised':    return '🤯';
            case 'afraid':      return '😱';
        }
    }
    /*
        navigation params:
        createDate - Date obj
        reaction - string => this should be looked up? (coming from Dashboard vs Fragments)
        visionPath - string => this should be looked up? (coming from Dashboard vs Fragments)
        existing - bool
    */
    render() {
        return (
            <View style={{backgroundColor: '#2b1381', flex: 1, flexDirection: 'column'}}>
                <ScrollView>
                    <View style={{margin: 20}}>
                        <Text style={{color: '#c4941d', fontSize: 24, marginBottom: 10}}>Vision</Text>
                        <View style={{alignItems: 'center'}}>
                            <Image resizeMode='contain' style={{height: 300, width: 300}} source={{uri: this.getVisionPath()}}/>
                        </View>
                    </View>
                    <DashboardDivider/>
                    <View style={{margin: 20}}>
                        <Text style={{color: '#c4941d', fontSize: 24}}>Fragments</Text>
                        <View style={{alignItems: 'center'}}>
                            {!this.state.isReadOnly &&
                                <DreamFragmentInput onAddFragmentPress={(fragment) => this._onAddFragmentPress(fragment)}/>
                            }
                            <FlatList
                                data={this.state.fragments}
                                renderItem={this._renderFragmentItem}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>
                    </View>
                    <DashboardDivider/>
                    <View style={{margin: 20}}>
                        <Text style={{color: '#c4941d', fontSize: 24}}>Tags</Text>
                        <View style={{alignItems: 'flex-start'}}>
                            {!this.state.isReadOnly &&
                                <DreamTagInput onAddTagPress={(fragment) => this._onAddTagPress(fragment)}/>
                            }
                            <FlatList
                                numColumns={1}
                                horizontal={true}
                                data={this.state.tags}
                                renderItem={this._renderTagItem}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>
                    </View>
                    <DashboardDivider/>
                    <View style={{margin: 20}}>
                        <Text style={{color: '#c4941d', fontSize: 24}}>Reaction</Text>
                        <View style={{alignItems: 'center'}}>
                            <Text style={{fontSize: 70}}>
                                {DreamScreen.getReaction(this.props.navigation.getParam('dreamObject').reaction)}
                            </Text>
                        </View>
                    </View>
                    <DashboardDivider/>
                    <View style={{margin: 20}}>
                        <Text style={{color: '#c4941d', fontSize: 24}}>Full Description</Text>
                        <View style={{marginTop: 20, flex: 1}}>
                            <TextInput
                                editable={!this.state.isReadOnly}
                                style={styles.descriptionBox} 
                                onChangeText={(descriptionText) => this.setState({descriptionText})}
                                placeholder={'Add more detail about your dream...'}
                                value={this.state.descriptionText}
                                multiline={true}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const testDreamObj = {
    createDate: new Date(),
    visionPath: 'file:///storage/emulated/0/Pictures/Dreams/80579150.jpg',
    fragments: [
        'My family was celebrating my birthday',
        'Then I was driving a car away from our home and suddenly into Boston',
        'The car broke down and I opened the trunk to find a small creature inside'
    ],
    tags: ['birthday', 'driving', 'monster'],
    reaction: 'indifferent',
    description: 'This is a really long description that could go on for many different characters with multiple paragraphs, newlines, and spaces'
}

const styles = StyleSheet.create({
    descriptionBox: {
        flex: 1,
        padding: 10,
        fontSize: 16,
        backgroundColor:'#c4941d'
    },
})
