import React from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import {  Layout } from '@ui-kitten/components';
import Material from '../../components/Material'

export default function MaterialScreen(props) {
  return (
    <Layout style={styles.container}>
      <View style={styles.container}>
         <Material {...props}/>
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
