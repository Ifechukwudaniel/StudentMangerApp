import React from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import {  Layout } from '@ui-kitten/components';
import Level from '../components/Level';

export default function LevelScreen(props) {
  return (
    <Layout style={styles.container}>
      <View style={styles.container}>
        <Level {...props}/>
      </View>
    </Layout>
  );
}

LevelScreen.navigationOptions = {
  header:null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
