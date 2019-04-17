// Dependencies import
import React from 'react'
import { ScrollView, View } from 'react-native'
import {StyleSheet} from 'react-native'

// Library main view definition
const SettingsWrapperScreen = props => (
    <View style={styles.container}>
    <View style={{ flex: 1, flexDirection: 'row' }}>
    <ScrollView style={ SettingsStyle.container }>
        <View style={ SettingsStyle.content }>
            {props.children}
        </View>     
    </ScrollView>
    </View>
    </View>
)
const SettingsStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5'
    },
    content: {
      flex: 1,
    }
  });
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
export default SettingsWrapperScreen