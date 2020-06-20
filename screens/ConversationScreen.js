import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {  Layout } from '@ui-kitten/components';

export default function ConversationScreen(props) {
  return (
    <Layout style={styles.container}>
    </Layout>
  );
}

ConversationScreen.navigationOptions = {
 header:null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
});
