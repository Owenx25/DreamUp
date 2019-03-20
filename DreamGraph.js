import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { LineChart, AreaChart, YAxis, XAxis, Grid } from 'react-native-svg-charts';

// Graph of some data related to dreams
// const Gradient = () => (
//     <Defs key={'gradient'}>
//         <LinearGradient id={'gradient'} x1={'0%'} y={'0%'} x2={'100%'} y2={'0%'}>
//             <Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'} stopOpacity={0.8}/>
//             <Stop offset={'100%'} stopColor={'rgb(134, 65, 244)'} stopOpacity={0.2}/>
//         </LinearGradient>
//     </Defs>
//   )
  export default class DreamGraph extends Component {
    render() {
      return (
        <View style={styles.graphcontainer}>
          <YAxis
            data={graph_data}
            numberOfTicks={5}
            yAccessor= {({ item }) => item.fragments}
            style={{marginBottom: 10}}
            contentInset={{top: 10, bottom: 10}}
            svg={{fontSize: 16, fill: 'black'}}
          />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <AreaChart
              numberOfTicks={5}
              style={{ flex: 1 }}
              yAccessor= {({ item }) => item.fragments}
              data={graph_data}
              contentInset={{top: 10, bottom: 10}}
              svg={{ fill: '#b300b3' }}
            >
              <Grid />
            </AreaChart>
            <XAxis
              style={{ marginHorizontal: -10, height: 5, marginTop: 5}}
              data={graph_data}
              numberOfTicks={7}
              xAccessor={({ item }) => item.day.getDay() }
               formatLabel={(day) => {
                switch(day) {
                  case 0: return 'SUN'
                  case 1: return'MON'
                  case 2: return 'TUE'
                  case 3: return 'WED'
                  case 4: return 'THU'
                  case 5: return 'FRI'
                  case 6: return 'SAT'
                }
              }}
              contentInset={{left: 10, right: 10}}
              svg={{ fontSize: 12, fill: 'black'}}
              />
          </View>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    graphcontainer: {
      backgroundColor: 'rgba(255, 255, 255, 1)',
      margin: 20,
      padding: 20,
      height: 200,
      flexDirection: 'row',
      borderWidth: 0.5,
      borderColor: 'white'
    }});

const graph_data = [ 
    {
      fragments: 3,
      day: new Date(2019, 3, 3),
      name: 'MON'
    },
    {
      fragments: 1,
      day: new Date(2019, 3, 4),
      name: 'MON'
    },
    {
      fragments: 3,
      day: new Date(2019, 3, 5),
      name: 'MON'
    },
    {
      fragments: 2,
      day: new Date(2019, 3, 6),
      name: 'MON'
    },
    {
      fragments: 2,
      day: new Date(2019, 3, 7),
      name: 'MON'
    },
    {
      fragments: 5,
      day: new Date(2019, 3, 8),
      name: 'MON'
    },
    {
      fragments: 1,
      day: new Date(2019, 3, 9),
      name: 'MON'
    },
  ]