import React from 'react';
import { Button, Card, CardElement, CardProps, Text } from '@ui-kitten/components';
import Ripple from 'react-native-material-ripple';
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
      marginTop:'10rem' ,
      marginLeft: '10rem',
      marginRight: '10rem',
      borderRadius:'10rem',
      backgroundColor:'#027831',
      justifyContent: 'center',
    },
    level: {
      zIndex: 1,
    },
    title: {
      zIndex: 1,
      fontSize: "25rem",
    
    }
  });