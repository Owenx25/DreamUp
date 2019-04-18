import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DreamDashboard from './DreamDashboard';
import MenuButton from './MenuButton';

export default class HomeScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
    title: 'DreamUp',
        headerTitleStyle: {
            textAlign:"center",
            flex:1
        },
    headerLeft: (
                        <MenuButton navigationProps={navigation}/>
                      ),
      headerRight: (
                        <Icon
                         onPress={() => alert('DreamUp 2019\n\nDevelopers:\nOwen McCormack\nJacob Phillps')}
                          name='info-circle'
                          size={26}
                          style = {{paddingRight: 15}}
                        />
                      ),
    headerStyle: {
      backgroundColor: '#c4941d',
      }
    });
  
    render() {
      return (
        <View style={{backgroundColor: '#2b1381', flex: 1}}>
          <DreamDashboard navigation={this.props.navigation}/>
        </View>
      );
    }
  }
  