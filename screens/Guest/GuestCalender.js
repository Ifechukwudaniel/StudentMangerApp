import React from 'react';
import { ScrollView, StyleSheet, Modal} from 'react-native';
import {  Layout } from '@ui-kitten/components';
import { View } from 'react-native-animatable';
import GuestHome from '../../components/Guest/GuestHome';

export default function GuestCalenderScreen(props) {
  return (
    <Layout style={styles.container}>
        <GuestHome {...props}/>
    </Layout>
  );
}

GuestCalenderScreen.navigationOptions = {
 header:null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})