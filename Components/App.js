import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


import DreamDashboard from './DreamDashboard';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'DreamUp Experiment',
        headerTitleStyle: {
            textAlign:"center",
            flex:1
        },
    headerRight: (
                       <Icon
                         onPress={() => alert('This is a button!')}
                         name="arrow-right"
                         color="##fff"
                       />
                     ),
    headerStyle: {
      backgroundColor: '#c4941d'
    }
  };
  render() {  
    return ( 
      <View style={{backgroundColor: '#2b1381', flex: 1}}>
        {/* <Toolbar title='DreamUp'/> */}
        <DreamDashboard />
      </View>
    );
  }
}

const RootStack = createStackNavigator({
  Home: HomeScreen,
  // Dream: DreamScreen 
},
{
  defaultRoot: 'Home'
});

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

// Holds various dream info containers
// class Toolbar extends Component {
//   render() {
//     return (
//       <View style={styles.toolbar}>
//         <Text style={{fontWeight: 'bold', fontSize: 28, color: 'midnightblue'}}>
//           {this.props.title}
//         </Text>
//       </View>
//     )
//   }
// }
// const styles = StyleSheet.create({
//   toolbar: {
//     backgroundColor: "#c4941d",
//     height: 60,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 1
//   },
// });