import React from 'react';
import { ScrollView, StyleSheet, Modal} from 'react-native';
import {  Layout } from '@ui-kitten/components';
import { View } from 'react-native-animatable';
import GuestHome from '../../components/Guest/GuestHome';

export default function GuestTuitionScreen(props) {
  return (
    <Layout style={styles.container}>
        <GuestHome {...props}/>
    </Layout>
  );
}

GuestTuitionScreen.navigationOptions = {
 header:null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})