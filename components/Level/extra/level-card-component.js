import React from 'react';
import { StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Button, Card, CardElement, CardProps, Text } from '@ui-kitten/components';
import Ripple from 'react-native-material-ripple';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import EStyleSheet from 'react-native-extended-stylesheet'
export const LevelCard = ({number,_id, handleClick}) => {
    return (
    <Ripple
     onPress= {handleClick}
     >
     <Card
      style={styles.container}
      >
        <Text
          style={styles.title}
          category='h2'
          status='control'>
           {number} Level
        </Text>
    </Card>
    </Ripple>
    );
}



const styles = EStyleSheet.create({
    container: {
      height: '100rem',
      marginTop:'20rem' ,
      marginLeft: '10rem',
      marginRight: '10rem',
      borderRadius:'10rem',
      backgroundColor:'#6919A9'
    },
    level: {
      zIndex: 1,
    },
    title: {
      zIndex: 1,
      alignItems:'center'
    }
  });