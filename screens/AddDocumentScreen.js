import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {  Layout } from '@ui-kitten/components';

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
