import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import {LevelCard} from './extra/level-card-component'
import {TopNavigationSimpleUsageShowcase} from './extra/navigation-component'
import Colors from '../../constants/Colors';


class Level extends Component {
    data=[
      {
          "_id": "5e1b8a207bd9b9071c9d7322",
          "number": "400"
      },
      {
          "_id": "5e1b8a2d7bd9b9071c9d7323",
          "number": "300"
      },
      {
          "_id": "5e1b8a357bd9b9071c9d7324",
          "number": "200"
      },
      {
          "_id": "5e1b8a3b7bd9b9071c9d7325",
          "number": "100"
      }
  ]
  handleClick=()=>{
    this.props.navigation.navigate("Main")
  }

  render() {
    return (
      <View style={styles.levelContainer}>
       <ScrollView >
            {this.data.map((level)=>(
                 <LevelCard 
                  key={level._id} 
                  number={level.number} 
                  color={Colors.gradient0}
                  handleClick={this.handleClick}
                  />
            ))}
      </ScrollView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  levelContainer: {
    marginTop: 50,
  }
});
export default Level