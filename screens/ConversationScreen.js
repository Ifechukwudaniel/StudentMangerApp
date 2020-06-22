import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import {  Layout } from '@ui-kitten/components';
import Posts from '../components/Posts';
import PostsHeader from '../components/Posts/PostHeaader'

export default function ConversationScreen(props) {
  return (
    <Layout style={styles.container}>
      <PostsHeader/>
    </Layout>
  );
}

ConversationScreen.navigationOptions = {
 header:(<PostsHeader/>)
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
