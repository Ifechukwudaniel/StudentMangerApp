import React from 'react';
import { StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Button, Card, CardElement, CardProps, Text } from '@ui-kitten/components';
import Ripple from 'react-native-material-ripple';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

let colour='#424'; 
export const LevelCard = ({ style, number, color ,_id, handleClick , ...cardProps}) => {

    return (
    <Ripple
     onPress= {handleClick}
     >
     <Card
      {...cardProps}
      style={[styles.container, {backgroundColor:color}, style]}
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



const styles = StyleSheet.create({
    container: {
      height: hp('13%'),
      margin:wp('2%'),
      borderRadius:wp('3%'),
    },
    level: {
      zIndex: 1,
    },
    title: {
      zIndex: 1,
      alignItems:'center'
    }
  });