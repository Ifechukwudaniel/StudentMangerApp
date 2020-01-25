import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Card, CardElement, CardProps, Text } from '@ui-kitten/components';
import ImageOverlay  from './image-overlay-component';

let colour='#424'; 
export const LevelCard = ({ style, number, color ,_id, handleClick , ...cardProps}) => {

    return (
    <TouchableOpacity>
     <Card
      onPress={handleClick}
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
    </TouchableOpacity>
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