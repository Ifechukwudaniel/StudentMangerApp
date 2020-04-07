import React from 'react';
import { ScrollView, StyleSheet , View} from 'react-native';
import {  Layout } from '@ui-kitten/components';
import PhoneSetting from '../components/Settings/PhoneSetting';

export default function PhoneSettingScreen(props) {
  return (
    <Layout style={styles.container}>
      <View style={styles.container}>
         <PhoneSetting {...props}/>
      </View>
    </Layout>
  );
}

PhoneSettingScreen.navigationOptions = {
 header:null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
