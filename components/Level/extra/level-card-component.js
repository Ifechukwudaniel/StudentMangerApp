import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card, CardElement, CardProps, Text } from '@ui-kitten/components';
import ImageOverlay  from './image-overlay-component';


export const LevelCard = ({ style, training, ...cardProps }) => {
    return (
     <Card
      {...cardProps}
      style={[styles.container, style]}>
      <ImageOverlay
        style={styles.image}
        source={'../../../assets/images/background.png'}>
        <Text
          style={styles.level}
          category='s1'
          status='control'>
          100
        </Text>
        <Text
          style={styles.title}
          category='h2'
          status='control'>
           test
        </Text>
        <Button
          style={styles.durationButton}
          size='tiny'>
          jjjddjdj
        </Button>
      </ImageOverlay>
    </Card>
    );
}



const styles = StyleSheet.create({
    container: {
      height: 200,
      margin:10,
      borderRadius:8
    },
    image: {
      ...StyleSheet.absoluteFillObject,
      height: 200,
      paddingVertical: 24,
      paddingHorizontal: 16,
    },
    level: {
      zIndex: 1,
    },
    title: {
      zIndex: 1,
    },
    durationButton: {
      position: 'absolute',
      left: 16,
      bottom: 16,
      borderRadius: 16,
      paddingHorizontal: 0,
    },
  });