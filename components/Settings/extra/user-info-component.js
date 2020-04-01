import React, { Component } from 'react';
import { View, Text , StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Colors from '../../../constants/Colors';
import { Avatar, Card } from '@ui-kitten/components';
import {Row, Col} from 'react-native-easy-grid';
import Ripple from 'react-native-material-ripple';
import EStyleSheet from 'react-native-extended-stylesheet'


export default class UserInfo extends Component {
  render() {
    return (
        <Row style={styles.container}>
            <Col style= {styles.textContainer}>
                <Text style = {styles.nameText}> Ifechukwu Daniel</Text>
                <Text style= {styles.viewAndEdit}> View And edit </Text>       
            </Col>
            <Col style={styles.userImage}>
             <Ripple>
                <Avatar  style={styles.userImage} size='giant' source= { require('../../../assets/images/image.jpeg')}/>
             </Ripple>
            </Col>
      </Row>
    );
  }
}

const styles = EStyleSheet.create({
    container: {
      marginTop:hp("5%"),
      marginLeft:wp('5%'),
      height:hp("17%"),
    },
    textContainer:{
       width:wp("70%"),
       height:hp("70%")
    },
    nameText:{
       textAlign:'left',
       color:Colors.white,
       fontSize:wp('7%'),
       fontFamily:'Open Sans',
       fontWeight:"bold"
    },
    viewAndEdit:{
        textAlign:'center',
        color:Colors.white,
        fontSize:wp('5%'),
        fontFamily:'Open Sans',
        paddingRight:wp("10%"),
        lineHeight:hp("5%"),
        fontWeight:"300"
    },
    userImage:{
         alignContent:"center"
    }
});
