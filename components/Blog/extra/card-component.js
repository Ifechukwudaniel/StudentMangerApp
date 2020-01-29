import React from 'react';
import { StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Button, Card, CardElement, CardProps, Text } from '@ui-kitten/components';
import Ripple from 'react-native-material-ripple'

let colour='#424'; 
export const BlogCard = ({ style, number, color ,_id, handleClick , ...cardProps}) => {

    return (
    <Ripple>
     <Card
      {...cardProps}
      style={[styles.container, {backgroundColor:color}, style]}
      onPress= {handleClick}
      >
        <Text
          style={styles.title}
          category='h2'
          status='control'>
           Level cwd
        </Text>
    </Card>
    </Ripple>
    );
}


const styles = StyleSheet.create({
    container: {
      height:100,
      margin:10,
      borderRadius:8,
    },
    level: {
      zIndex: 1,
    },
    title: {
      zIndex: 1,
      alignItems:'center'
    },
    durationButton: {
      position: 'absolute',
      left: 16,
      bottom: 16,
      borderRadius: 16,
      paddingHorizontal: 0,
      marginTop:40
    },
  });