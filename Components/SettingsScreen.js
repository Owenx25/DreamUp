import React, { Component } from 'react';
import {View, Text, StyleSheet, AppRegistry} from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

export default class SettingsScreen extends React.Component {
    render() {
        return (
        <MenuProvider>
        <Menu onSelect={value => alert(`Selected number: ${value}`)}>
         <MenuTrigger text='Search' />
                      <MenuOptions customStyles= 'optionsWrapper' >
                        <MenuOption value={1} text='Search' />
                        <MenuOption value={2}>
                          <Text style={{color: 'red'}}>Set Reminder</Text>
                        </MenuOption>
                        <MenuOption value={3} disabled={true} text='Three' />
                      </MenuOptions>
                    </Menu>
                    </MenuProvider>

        );
    }
}

AppRegistry.registerComponent('SettingsScreen', () => SettingsScreen);


/*import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Text, Alert } from 'react-native';

import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas'

export default class SettingsScreen extends Component {
    static navigationOptions = {
        title: 'Jakes Screen',
        //headerRight: <HeaderCheckIcon />
      };

    render() {
        return (
            <View style={styles.container}>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <RNSketchCanvas
                  containerStyle={{ backgroundColor: 'transparent', flex: 1 }}
                  canvasStyle={{ backgroundColor: 'transparent', flex: 1 }}
                  defaultStrokeIndex={0}
                  defaultStrokeWidth={5}
                  undoComponent={<View style={styles.functionButton}><Text style={{color: 'white'}}>Undo</Text></View>}
                  clearComponent={<View style={styles.functionButton}><Text style={{color: 'white'}}>Clear</Text></View>}
                  eraseComponent={<View style={styles.functionButton}><Text style={{color: 'white'}}>Eraser</Text></View>}
                  strokeComponent={color => (
                    <View style={[{ backgroundColor: color }, styles.strokeColorButton]} />
                  )}
                  strokeSelectedComponent={(color, index, changed) => {
                    return (
                      <View style={[{ backgroundColor: color, borderWidth: 2 }, styles.strokeColorButton]} />
                    )
                  }}
                  strokeWidthComponent={(w) => {
                    return (<View style={styles.strokeWidthButton}>
                      <View  style={{
                        backgroundColor: 'white', marginHorizontal: 2.5,
                        width: Math.sqrt(w / 3) * 10, height: Math.sqrt(w / 3) * 10, borderRadius: Math.sqrt(w / 3) * 10 / 2
                      }} />
                    </View>
                  )}}
                  saveComponent={<View style={[styles.functionButton, {backgroundColor: '#b300b3'}]}><Text style={{color: 'white'}}>Save</Text></View>}
                  savePreference={() => {
                    return {
                      folder: 'Dreams',
                      filename: String(Math.ceil(Math.random() * 100000000)),
                      transparent: false,
                      includeImage: false,
                      includeText: false,
                      cropToImageSize: false,
                      imageType: 'jpg',
                    }
                  }}
                  onSketchSaved={(success, path) => {
                      // on Success, send path with nav to a new DreamScreen
                      // on Fail, provide message and don't do anything
                      if (success) {
                          this.props.navigation.navigate("DreamFragmentScreen", {visionPath: path, existing: false});
                      } else {
                        Alert.alert('ERROR','Failed to save image!');
                      }
                  }}
                />
              </View>
            </View>
          );
        }
      }

      const styles = StyleSheet.create({
        container: {
          flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#EAE5FB',//F5FCFF
        },
        strokeColorButton: {
          marginHorizontal: 2.5, marginVertical: 8, width: 30, height: 30, borderRadius: 15,
        },
        strokeWidthButton: {
          marginHorizontal: 2.5, marginVertical: 8, width: 30, height: 30, borderRadius: 15,
          justifyContent: 'center', alignItems: 'center', backgroundColor: '#2b1381'
        },
        functionButton: {
          marginHorizontal: 2.5, marginVertical: 8, height: 30, width: 60,
          backgroundColor: '#c4941d', justifyContent: 'center', alignItems: 'center', borderRadius: 5,
        }
      });

      AppRegistry.registerComponent('SettingsScreen', () => SettingsScreen);*/


