import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import SettingsScreen from './SettingsScreen';
import HomeScreen from './HomeScreen';
import DreamScreen from './DreamScreen';
import VisionCanvas from './VisionCanvas';
import DreamFragmentScreen from './DreamFragmentScreen';
import TimePicker from './TimePicker';

export const RootStack = createStackNavigator({
    Home: HomeScreen,
    DreamScreen: DreamScreen,
    VisionCanvas: VisionCanvas,
    DreamFragmentScreen: DreamFragmentScreen,
    SettingsScreen: SettingsScreen,
    TimePicker: TimePicker
  },
  {
    defaultRoot: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#c4941d'
      }
    },
    navigationOptions: {
    }
  });
  export const SettingsRootStack = createStackNavigator({
    Settings: SettingsScreen,
    TimePicker: TimePicker
  },
  {
    defaultRoot: 'Settings',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#c4941d'
      }
    },
    navigationOptions: {
    }
  });

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
    drawerWidth: WIDTH*0.83,
}

const DrawerNavigator = createDrawerNavigator(
    {
        Home: RootStack,
        Settings: SettingsRootStack,
        VisionCanvas: VisionCanvas,
    },
    DrawerConfig
);

export default createAppContainer(DrawerNavigator);