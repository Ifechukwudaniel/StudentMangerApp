import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import {LevelCard} from './extra/level-card-component'
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
    console.log(this.props.navigation)
    this.props.navigation.navigate("Home")
  }

  render() {
    return (
       <ScrollView style={styles.levelContainer}>
            {this.data.map((level)=>(
                 <LevelCard 
                  key={level._id} 
                  number={level.number} 
                  color={Colors.gradient0}
                  handleClick={this.handleClick}
                  />
            ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  levelContainer: {
    marginTop: 50,
    flex:1
  }
});
export default Level