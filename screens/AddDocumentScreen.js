import React from 'react';
import { ScrollView, StyleSheet, Modal} from 'react-native';
import {  Layout } from '@ui-kitten/components';
import { View } from 'react-native-animatable';

export default function AddDocumentScreen(props) {
  return (
    <Layout style={styles.container}>
     
    </Layout>
  );
}

AddDocumentScreen.navigationOptions = {
 header:null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
