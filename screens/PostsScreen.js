import React , {useRef} from 'react';
import { ScrollView,View, StyleSheet } from 'react-native';
import {  Layout } from '@ui-kitten/components';
import PostsHeader from '../components/Posts/PostHeader';
import Posts from '../components/Posts';

export default function PostsScreen(props) {
  const headerRef = useRef()
  return (
    <Layout style={styles.container}>
      <View style={styles.container}>
       <PostsHeader ref={headerRef} {...props}/>
       <Posts header={headerRef} {...props}/>
      </View>
    </Layout>
  );
}

PostsScreen.navigationOptions = {
  header:null
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
