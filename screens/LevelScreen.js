import React from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';

import { MonoText } from '../components/StyledText';
import {  Layout } from '@ui-kitten/components';
import Level from '../components/Level';
import {TopNavigationSimpleUsageShowcase} from "../components/Level/extra/navigation-component"

export default function LevelScreen() {
  return (
    <Layout style={styles.container}>
      <View style={styles.container}>
        <Level/>
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
