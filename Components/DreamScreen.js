import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';

import HeaderEditIcon from './HeaderEditIcon'
import DashboardDivider from './DashboardDivider'
import DreamFragment from './DreamFragment';

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

    static navigationOptions = ({ navigation }) => {
        const {params = {}} = navigation.state;
        return {
        title: 'Dream from ' + DreamScreen.formatDate(navigation.getParam('createDate', 'Dream from ???')),
        headerRight: <HeaderEditIcon onDone={() => {
            // make DreamScreen editable
        }}
            />
      };
    };

    _renderFragmentItem = ({item}) => (<DreamFragment onPress={() => {}} text={item} />)

    /*
        navigation params:
        dreamId - int
        ? createDate - Date obj
        ? reaction - string
        visionPath - string
        existing - bool
    */
    render() {
        return (
            <View style={{backgroundColor: '#2b1381', flex: 1, flexDirection: 'column'}}>
                <ScrollView>
                    <View style={{margin: 20}}>
                        <Text style={{color: '#c4941d', fontSize: 20, marginBottom: 10}}>Vision</Text>
                        <View style={{alignItems: 'center'}}>
                            <Image resizeMode='contain' style={{height: 300, width: 300}} source={/*path from navigation params*/{uri:'file:///storage/emulated/0/Pictures/Dreams/80579150.jpg'}}/>
                        </View>
                    </View>
                    <DashboardDivider/>
                    <View style={{margin: 20}}>
                        <Text style={{color: '#c4941d', fontSize: 20}}>Fragments</Text>
                        <View style={{alignItems: 'center'}}>
                            <FlatList
                                data={testFragments}
                                renderItem={this._renderFragmentItem}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>
                    </View>
                    <DashboardDivider/>
                    <View style={styles.tagsBox}>
                        <Text style={{color: '#c4941d', fontSize: 20, marginBottom: 10}}>Tags</Text>
                    </View>
                    <DashboardDivider/>
                    <View style={styles.reactionBox}>
                        <Text style={{color: '#c4941d', fontSize: 20, marginBottom: 10}}>Reaction</Text>
                    </View>
                    <DashboardDivider/>
                    <View style={styles.descriptionBox}>
                        <Text style={{color: '#c4941d', fontSize: 20, marginBottom: 10}}>Description</Text>
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

const styles = StyleSheet.create({
    tagsBox: {
        margin: 20,
    },
    reactionBox: {
        margin: 20,
    },
    descriptionBox: {
        margin: 20,
    },
})
