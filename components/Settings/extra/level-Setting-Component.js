import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Grid, Col, Row} from 'react-native-easy-grid'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Colors from '../../../constants/Colors';
import Ripple from 'react-native-material-ripple';


export default class LevelSetting extends Component {

  render() {
    return (
      <Row style={styles.container}>
        <Col>
          <Text style={styles.typeText}> Level</Text>
        </Col>
        <Col style={styles.icon}>
        <Ripple>
           <MaterialIcon name="layers" color={Colors.white} size={30}/>
        </Ripple>
        </Col>
      </Row>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      marginLeft:wp('5%'),
      marginRight:wp('5%'),
       borderBottomColor:"#fff",
       borderBottomWidth:wp("1%"),
       paddingBottom:wp("3%"),
       paddingTop:hp("5%")
  },
  typeText:{
    textAlign:'left',
    color:Colors.white,
    fontSize:wp('5%'),
    fontFamily:'Open Sans Regular',
  },
  icon:{
    alignItems:"flex-end"
  }
});
