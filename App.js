import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View, AppRegistry, Dimensions } from 'react-native';
import { ApplicationProvider,IconRegistry } from '@ui-kitten/components';
import { mapping, light as lightTheme, dark ,  } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import {Root} from 'native-base'
import {Provider} from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
const entireScreenWidth = Dimensions.get('window').width;
import AppNavigator from './navigation/AppNavigator';
import appTheme from './theme.json'
import {store} from './Redux/store'
import FlashMessage from "react-native-flash-message";

const theme = {...dark, ...appTheme}

EStyleSheet.build({
  $textColor: '#fff',
  $rem: entireScreenWidth / 380,
});


export default function App(props) {
    return (
      <>
       <Provider store={store}>
       <Root>
        <IconRegistry icons={EvaIconsPack}/>
        <StatusBar hidden={false} barStyle="light-content" />
          <ApplicationProvider mapping={mapping} theme={theme}   >
                <AppNavigator />
                <FlashMessage position="top" /> 
          </ApplicationProvider>
        </Root>
      </Provider>
      </>
    );
}
