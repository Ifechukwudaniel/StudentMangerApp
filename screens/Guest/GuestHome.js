import React from 'react';
import { ScrollView, StyleSheet, Modal} from 'react-native';
import {  Layout } from '@ui-kitten/components';
import GuestHome from '../../components/Guest/GuestHome';

export default function GuestHomeScreen(props) {
  return (
    <Layout style={styles.container}>
        <GuestHome {...props}/>
    </Layout>
  );
}

GuestHomeScreen.navigationOptions = {
 header:null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})