import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function BlogsScreen() {
  return (
    <ScrollView style={styles.container}>
    
    </ScrollView>
  );
}

BlogsScreen.navigationOptions = {
  title: 'Blogs',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
