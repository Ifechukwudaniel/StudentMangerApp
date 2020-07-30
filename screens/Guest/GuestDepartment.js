import React from 'react';
import { ScrollView, StyleSheet, Modal, Text} from 'react-native';
import {  Layout } from '@ui-kitten/components';
import { View } from 'react-native-animatable';
import GuestHome from '../../components/Guest/GuestHome';
import GuestHeader from '../../components/GuestHeader';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function GuestDepartmentScreen(props) {
  return (
    <Layout style={styles.container}>
         <GuestHeader {...props} screenName="DEPARTMENTS" back/>
        <ScrollView indicatorStyle="white" style={styles.innerView}>
          <Text style= {styles.text}>{'\u2B24'} Electrical and electronics engineering </Text>
          <Text style= {styles.text}>{'\u2B24'} Computer Science </Text>
          <Text style= {styles.text}>{'\u2B24'} Agriculture Science </Text>
          <Text style= {styles.text}>{'\u2B24'} Christian Religious Studies </Text>
          <Text style= {styles.text}>{'\u2B24'} Electrical and electronics engineering </Text>
          <Text style= {styles.text}>{'\u2B24'} Computer Science </Text>
          <Text style= {styles.text}>{'\u2B24'} Agriculture Science </Text>
          <Text style= {styles.text}>{'\u2B24'} Christian Religious Studies </Text>
          <Text style= {styles.text}>{'\u2B24'} Electrical and electronics engineering </Text>
          <Text style= {styles.text}>{'\u2B24'} Computer Science </Text>
          <Text style= {styles.text}>{'\u2B24'} Agriculture Science </Text>
          <Text style= {styles.text}>{'\u2B24'} Christian Religious Studies </Text>
          <Text style= {styles.text}>{'\u2B24'} Electrical and electronics engineering </Text>
          <Text style= {styles.text}>{'\u2B24'} Computer Science </Text>
          <Text style= {styles.text}>{'\u2B24'} Agriculture Science </Text>
          <Text style= {styles.text}>{'\u2B24'} Christian Religious Studies </Text>
          <Text style= {styles.text}>{'\u2B24'} Electrical and electronics engineering </Text>
          <Text style= {styles.text}>{'\u2B24'} Computer Science </Text>
          <Text style= {styles.text}>{'\u2B24'} Agriculture Science </Text>
          <Text style= {styles.text}>{'\u2B24'} Christian Religious Studies </Text>
          <Text style= {styles.text}>{'\u2B24'} Electrical and electronics engineering </Text>
          <Text style= {styles.text}>{'\u2B24'} Computer Science </Text>
          <Text style= {styles.text}>{'\u2B24'} Agriculture Science </Text>
          <Text style= {styles.text}>{'\u2B24'} Christian Religious Studies </Text>
          <Text style= {styles.text}>{'\u2B24'} Electrical and electronics engineering </Text>
          <Text style= {styles.text}>{'\u2B24'} Computer Science </Text>
          <Text style= {styles.text}>{'\u2B24'} Agriculture Science </Text>
          <Text style= {[styles.text, {marginBottom:'10%'}]}>{'\u2B24'} Christian Religious Studies </Text>
         </ScrollView>   
    </Layout>
  );
}

GuestDepartmentScreen.navigationOptions = {
 header:null
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  innerView:{
    // marginTop: '20rem',
  },
  text:{
     color:' rgba(255, 255, 255, 0.75)',
     fontWeight: 'bold',
     fontSize: '13rem',
     textTransform:'uppercase',
     marginLeft: '20rem',
     padding: '2rem',
     paddingTop: '5rem',
  },
  scrollEnd:{
    width:'100%',
    height:'30%'
  }
})