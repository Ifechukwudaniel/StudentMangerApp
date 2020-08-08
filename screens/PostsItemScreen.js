import React, { useRef } from 'react';
import { ScrollView,View, StyleSheet } from 'react-native';
import {  Layout } from '@ui-kitten/components';
import PostsHeader from '../components/Posts/PostHeader';
import PostItem from '../components/Posts/PostItem';

export default function PostsItemScreen(props) {
  const headerRef = useRef(null)
  return (
    <Layout style={styles.container}>
       <PostsHeader ref={headerRef} back backScreen = "Post" {...props}/>
       <PostItem header={headerRef.current} {...props}/>
    </Layout>
  );
}

PostsItemScreen.navigationOptions = {
  header:null
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
