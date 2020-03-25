import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Grid, Col, Row} from 'react-native-easy-grid'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Colors from '../../../constants/Colors';
import Ripple from 'react-native-material-ripple';
import EStyleSheet from 'react-native-extended-stylesheet' 



export default class FeedbackSetting extends Component {

  render() {
    return (
      <Row style={styles.container}>
       <Ripple style= {{flex:1,padding:hp("1%")}}>
            <Row style={styles.content}>
              <Col>
                <Text style={styles.typeText}> Give Us Feedback</Text>
              </Col>
              <Col style={styles.icon}>
              <Ripple>
                <MaterialIcon name="send" color={Colors.white} size={30}/>
              </Ripple>
              </Col>
             </Row>
        </Ripple>
        </Row>
    );
  }
}


const styles = EStyleSheet.create({
  container: {
    marginLeft:'8rem',
    marginRight:'8rem',
    paddingTop:'5rem',
    marginTop: "20rem",
},
content:{
  borderBottomColor:"#fff",
  borderBottomWidth:'4rem',
},
typeText:{
  textAlign:'left',
  color:Colors.white,
  fontSize:'20rem',
  fontFamily:'Open Sans Regular',
},
icon:{
  alignItems:"flex-end"
}
});