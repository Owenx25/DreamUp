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
            descriptionText: '',
            reaction: 'confused',
            fragments: testFragments,
            tags: testTags,
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
        let fragments = [...this.state.fragments]
        fragments.push(fragment)
        this.setState({fragments})
    }
    _onAddTagPress(tag) {
        let tags = [...this.state.tags]
        tags.push(tag)
        this.setState({tags})
    }

    getReaction(reaction) {
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
        dreamId - int
        ? createDate - Date obj
        ? reaction - string
        visionPath - string
        existing - bool

        reaction emojis:
        Happy -         😃 
        Sad -           😥
        Angry -         😡 
        Confused -      🤔
        Indifferent -   😐
        Suprised -      🤯
        Afraid -        😱
    */
    render() {
        return (
            <View style={{backgroundColor: '#2b1381', flex: 1, flexDirection: 'column'}}>
                <ScrollView>
                    <View style={{margin: 20}}>
                        <Text style={{color: '#c4941d', fontSize: 24, marginBottom: 10}}>Vision</Text>
                        <View style={{alignItems: 'center'}}>
                            <Image resizeMode='contain' style={{height: 300, width: 300}} source={/*path from navigation params*/{uri:'file:///storage/emulated/0/Pictures/Dreams/80579150.jpg'}}/>
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
                            <Text style={{fontSize: 70}}>{this.getReaction(this.state.reaction)}</Text>
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

const testFragments = [
    'I was walking alone in a forest during the day',
    'Suddenly there was a giant boom and it switched to night',
    'I saw light at the edge of the woods so I ran to reach it'
]

const testTags = [
    'forest',
    'night',
    'spooky',
    'weird'
]

const styles = StyleSheet.create({
    descriptionBox: {
        flex: 1,
        padding: 10,
        fontSize: 16,
        backgroundColor:'#c4941d'
    },
})
