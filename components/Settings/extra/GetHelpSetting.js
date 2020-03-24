import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Grid, Col, Row} from 'react-native-easy-grid'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Colors from '../../../constants/Colors';
import Ripple from 'react-native-material-ripple';


export default class GetHelpSetting extends Component {

  render() {
    return (
      <Row style={styles.container}>
        <Ripple style= {{flex:1,padding:hp("1%")}}>
            <Row style= {styles.content}>
              <Col>
                <Text style={styles.typeText}> Get Help</Text>
              </Col>
              <Col style={styles.icon}>
              <Ripple>
                <MaterialIcon name="help-outline" color={Colors.white}size={30}/>
              </Ripple>
              </Col>
            </Row>
        </Ripple>
        </Row>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft:wp('2%'),
    marginRight:wp('2%'),
    paddingTop:hp("3%")
  },
  content:{
    borderBottomColor:"#fff",
    borderBottomWidth:wp("1%"),
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
