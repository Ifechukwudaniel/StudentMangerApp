import React from 'react';
import { ScrollView, StyleSheet, Modal, Text} from 'react-native';
import {  Layout } from '@ui-kitten/components';
import { View } from 'react-native-animatable';
import GuestHome from '../../components/Guest/GuestHome';
import GuestHeader from '../../components/GuestHeader';

export default function GuestDepartmentScreen(props) {
  return (
    <Layout style={styles.container}>
         <GuestHeader {...props} screenName="DEPARTMENTS" back/>
        <ScrollView style={styles.innerView}>
           
           </ScrollView>   
    </Layout>
  );
}

GuestDepartmentScreen.navigationOptions = {
 header:null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})