import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Text, Alert } from 'react-native';

import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas'
import HeaderCheckIcon from './HeaderCheckIcon';

export default class VisionCanvas extends Component {
    static navigationOptions = {
        title: 'What did you see?',
        headerStyle: {
          backgroundColor: '#c4941d'
        },
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
                          this.props.navigation.navigate("DreamScreen", {visionPath: path, existing: false});
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
       
      AppRegistry.registerComponent('VisionCanvas', () => VisionCanvas);