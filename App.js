import React, { Component } from 'react';
import FAB from 'react-native-fab'
import { LineChart, AreaChart, YAxis, XAxis, Grid } from 'react-native-svg-charts'
import { StyleSheet, ScrollView, FlatList, Text, View } from 'react-native'

export default class App extends React.Component {
  render() {
    const message = 'test';
    return (
      <View style={styles.dreamdashboard}>
        <Toolbar title='DreamUp'/>
        <DreamDashboard />
      </View>
    );
  }
}


// Holds various dream info containers
class Toolbar extends Component {
  render() {
    return (
      <View style={styles.toolbar}> 
        <Text style={{fontWeight: 'bold', fontSize: 32, color: 'midnightblue'}}>
          {this.props.title}
        </Text>
      </View>
    )
  }
}

// Holds all dashboard components
class DreamDashboard extends Component {
  render() {
    return (
      <View style={{flex:10}} >
        <ScrollView>
          <CardContainer color='white' title='Recent Dreams'/>
          <CardContainer color='white' title='Nightmares'/>
          <DreamGraph
          />
          <View style={{height: 100}}/>
        </ScrollView>
        <FAB buttonColor="#DAA520"
          iconTextColor="white"
          onClickAction={() => {console.log("FAB pressed")}}
          visible={true}
        />
      </View>
    )
  }
}


// Sample data for flat list
const data = [
  {
    Id: 1,
    date: new Date(),
    fragments: [
      'My family was celebrating my birthday',
      'Then I was driving a car away from our home and suddenly into Boston',
      'The car broke down and I opened the trunk to find a small creature inside'
    ],
    tags: ['happy','city','car','monster'],
    vision: 'path to image'
  },
  {
    Id: 1,
    date: new Date(),
    fragments: [
      'My family was celebrating my birthday',
      'Then I was driving a car away from our home and suddenly into Boston',
      'The car broke down and I opened the trunk to find a small creature inside'
    ],
    tags: ['happy','city','car','monster'],
    vision: 'path to image'
  },
  {
    id: 1,
    date: new Date(),
    fragments: [
      'My family was celebrating my birthday',
      'Then I was driving a car away from our home and suddenly into Boston',
      'The car broke down and I opened the trunk to find a small creature inside'
    ],
    tags: ['happy','city','car','monster'],
    vision: 'path to image'
  },
  {
    id: 1,
    date: new Date(),
    fragments: [
      'My family was celebrating my birthday',
      'Then I was driving a car away from our home and suddenly into Boston',
      'The car broke down and I opened the trunk to find a small creature inside'
    ],
    tags: ['happy','city','car','monster'],
    vision: 'path to image'
  },
]

// Holds Cards relating to specific day
class CardContainer extends Component {
  _renderItem = ({item}) => (
    <DreamCard date={item.date}/>
  );
  render() {
    return (
      <View style={[styles.cardcontainer, {borderColor: this.props.color}]}>
        <Text style={{color: 'goldenrod', fontSize: 24}}>{this.props.title}</Text>
        <FlatList 
          horizontal={true} data={data}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    )
  }
}

// Dream card containing dream related info
//#1f618d
//#56399d
class DreamCard extends Component {
  render() {
    return (
      <View style={styles.dreamcard}>
        <Text style={{fontSize:30}}>{this.props.date.getMonth() + 1}/{this.props.date.getDate()}</Text>

      </View>
    )
  }
}

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
// Graph of some data related to dreams
class DreamGraph extends Component {
  render() {
    return (
      <View style={styles.graphcontainer}>
        <YAxis
          data={graph_data}
          numberOfTicks={5}
          yAccessor= {({ item }) => item.fragments}
          style={{marginBottom: 10}}
          contentInset={{top: 10, bottom: 10}}
          svg={{fontSize: 10, fill: 'black'}}
        />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <AreaChart
            numberOfTicks={5}
            style={{ flex: 1 }}
            yAccessor= {({ item }) => item.fragments}
            data={graph_data}
            contentInset={{top: 10, bottom: 10}}
            svg={{ fill: 'rgb(134, 65, 244)' }}
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
            svg={{ fontSize: 10, fill: 'black'}}
            />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  dreamcard: {
    backgroundColor: 'goldenrod',
    width: 120,
    margin: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cardcontainer: {
    margin: 20,
    height: 150,
    borderWidth: 0.5
  },
  dreamdashboard: {
    backgroundColor: "midnightblue",
    flex: 1,
  },
  graphcontainer: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    margin: 20,
    padding: 20,
    height: 200,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: 'white'
  },
  toolbar: {
    backgroundColor: "goldenrod",
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 5
  },
});