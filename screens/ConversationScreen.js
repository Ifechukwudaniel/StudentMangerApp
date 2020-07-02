import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {  Layout } from '@ui-kitten/components';
import Posts from '../components/Posts';
import PostsHeader from '../components/Posts/PostHeaader'

export default function ConversationScreen(props) {
  return (
    <Layout style={styles.container}>
      <PostsHeader {...props}/>
    </Layout>
  );
}

ConversationScreen.navigationOptions = {
 header:null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
