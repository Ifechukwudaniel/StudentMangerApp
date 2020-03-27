import React from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import {  Layout } from '@ui-kitten/components';

export default function MaterialScreen() {
  return (
    <Layout style={styles.container}>
      <View style={styles.container}>
            <View style={{width:100, height:100, backgroundColor:'red'}}>

      </View>
      </View>
    </Layout>
  );
}

MaterialScreen.navigationOptions = {
  header:null
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
