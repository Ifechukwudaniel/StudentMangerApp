import React from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import {  Layout } from '@ui-kitten/components';
import Chat from '../../components/Chat'

export default function ChatScreen(props) {
  return (
    <Layout style={styles.container}>
      <View style={styles.container}>
        <Chat {...props}/>
      </View>
    </Layout>
  );
}

ChatScreen.navigationOptions = {
  header:null
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});