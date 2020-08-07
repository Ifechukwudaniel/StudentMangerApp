import React from 'react';
import { ScrollView, StyleSheet, Modal, View ,Text} from 'react-native';
import {  Layout } from '@ui-kitten/components';
import GuestHome from '../../components/Guest/GuestHome';
import GuestHeader from '../../components/GuestHeader';
import EStyleSheet from 'react-native-extended-stylesheet';


export default function GuestTuitionScreen(props) {
  return (
    <Layout style={styles.container}>
        <GuestHeader screenName="TUITION FEE" back {...props}/>
        <ScrollView>
        <View style={styles.view}>
          <Text style={styles.headerText}> DEPARTMENTS </Text>
          <Text style={styles.headerText}> FEES (in $) </Text>
        </View>
        <View style={styles.viewItem}>
          <Text style={styles.text}> Electrical and electronics Engineering </Text>
          <Text style={styles.text}>  1 Million naira </Text>
        </View>
        <View style={styles.viewItem}>
          <Text style={styles.text}> Computer Science </Text>
          <Text style={styles.text}>  600  hundred thousand naira </Text>
        </View>
        <View style={styles.viewItem}>
          <Text style={styles.text}> Agric Science</Text>
          <Text style={styles.text}>  800  hundred thousand naira </Text>
        </View>
        </ScrollView>
    </Layout>
  );
}

GuestTuitionScreen.navigationOptions = {
 header:null
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  headerText:{
    color:' rgba(255, 255, 255, 0.62)',
    fontSize:'16rem',
    fontWeight: 'bold',
    padding: '20rem',
    borderWidth: '2rem',
    borderColor: " rgba(255, 255, 255, 0.62)",
    width:'170rem',
    textAlign:"center"
  },
   view:{
     flexDirection:'row',
     alignSelf:'center',
     marginTop:'40rem'
   },
   viewItem:{
    flexDirection:'row',
    alignSelf:'center',
  },
  text:{
    color:' rgba(255, 255, 255, 0.62)',
    fontSize:'14rem',
    fontWeight: 'normal',
    height:'70rem',
    borderWidth: '2rem',
    borderColor: " rgba(255, 255, 255, 0.62)",
    width:'170rem',
    textAlign:"center",
    paddingTop: '20rem',
    paddingLeft: '5rem',
    paddingRight: '5rem',
  }
})