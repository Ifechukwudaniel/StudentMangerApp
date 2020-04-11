import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View, AppRegistry, Dimensions } from 'react-native';
import { ApplicationProvider,IconRegistry } from '@ui-kitten/components';
import { mapping, light as lightTheme, dark ,  } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import {Provider} from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
const entireScreenWidth = Dimensions.get('window').width;
import AppNavigator from './navigation/AppNavigator';
import appTheme from './theme.json'
import store  from './Redux/store'

const theme = {...dark, ...appTheme}

EStyleSheet.build({
  $textColor: '#fff',
  $rem: entireScreenWidth / 380,
});


export default function App(props) {
    return (
      <>
      <IconRegistry icons={EvaIconsPack}/>
         <ApplicationProvider mapping={mapping} theme={theme}   >
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
              <AppNavigator />
         </ApplicationProvider>
      </>
    );
}
