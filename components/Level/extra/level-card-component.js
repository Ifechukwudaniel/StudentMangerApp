import React from 'react';
import { Button, Card, CardElement, CardProps, Text } from '@ui-kitten/components';
import Ripple from 'react-native-material-ripple';
import EStyleSheet from 'react-native-extended-stylesheet'
import { LinearGradient } from 'expo-linear-gradient';
export const LevelCard = ({number,id, handleClick}) => {
    return (
    <Ripple
     onPress= {()=>handleClick({number,id})}
     >
     <LinearGradient
       colors={['#0F9A47', '#027831']}
      style={styles.container}
      >
        <Text
          style={styles.title}
          category='h2'
          status='control'>
           {number} Level
        </Text>
    </LinearGradient>
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
      justifyContent: 'center',
      padding: '20rem',
    },
    level: {
      zIndex: 1,
    },
    title: {
      zIndex: 1,
      fontSize: "25rem",
    
    }
  });