import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { BarChart, YAxis, XAxis, Grid } from 'react-native-svg-charts';


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
    constructor(props) {
      super(props);
      this.state = {
        dreams: [],
      }
    }

    render() {
      return (   
        <View style={{margin: 20, flexDirection: 'column', flex: 1, alignItems: 'center'}}>
            <Text style={{color: '#c4941d', fontSize: 24}}>{this.props.name} Graph</Text>
            <View style={styles.graphcontainer}>
                <YAxis
                    data={this.props.data}
                    numberOfTicks={3}
                    yAccessor= {({ item }) => item.fragments.length}
                    style={{marginBottom: 10}}
                    contentInset={{top: 10, bottom: 10}}
                    svg={{fontSize: 16, fill: 'black'}}
                />
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <BarChart
                    numberOfTicks={3}
                    style={{ flex: 1 }}
                    yAccessor= {({ item }) => item.fragments.length}
                    data={this.props.data}
                    contentInset={{top: 10, bottom: 10}}
                    svg={{ fill: '#b300b3' }}
                    >
                    <Grid />
                    </BarChart>
                    <XAxis
                    style={{ marginHorizontal: 10, height: 5, marginTop: 5}}
                    data={this.props.data}
                    numberOfTicks={this.props.data.length}  
                    xAccessor={({ index }) => index}
                    formatLabel={(_, index ) => { 
                        //return `${this.props.data[index].createDate.getMonth()}/${this.props.data[index].createDate.getDate()}`
                        switch(this.props.data[index].createDate.getDay()) {
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
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    graphcontainer: {
      backgroundColor: 'rgba(255, 255, 255, 1)',
      padding: 20,
      marginTop: 10,
      height: 200,
      flexDirection: 'row',
      borderWidth: 0.5,
      borderColor: 'white'
    }});
    

    