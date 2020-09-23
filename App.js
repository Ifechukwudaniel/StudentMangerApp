import React, { useState, Component, useEffect } from 'react';
import { Platform, StatusBar, StyleSheet, View, AppRegistry, Dimensions } from 'react-native';
import { ApplicationProvider,IconRegistry } from '@ui-kitten/components';
import { mapping, light as lightTheme, dark ,  } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import {Root} from 'native-base'
import {Provider} from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import AppNavigator from './navigation/AppNavigator';
import appTheme from './theme.json'
import {store} from './Redux/store'
import FlashMessage from "react-native-flash-message";
const entireScreenWidth = Dimensions.get('window').width;
const rem = entireScreenWidth/380
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import SplashScreen from 'react-native-splash-screen';



const theme = {...dark, ...appTheme}

EStyleSheet.build({
  $textColor: '#fff',
  $rem: entireScreenWidth / 380,
});

 const example = async () => {
  try{
    if (Platform.OS == 'android') {
      const response = await changeNavigationBarColor('#0C0C0E');
      console.log(response)// {success: true}
      }
  }catch(e){
      console.log(e)// {success: false}
  }

};


export default class App extends Component {
   componentDidMount(){
    SplashScreen.hide();
   }
    render(){
      return (
        <>
         <Provider store={store}>
         <Root>
          <IconRegistry icons={EvaIconsPack}/>
          <StatusBar hidden={false} backgroundColor="#0C0C0E" barStyle="light-content" />
            <ApplicationProvider mapping={mapping} theme={theme}   >
                  <AppNavigator />
                  <FlashMessage position="top" /> 
            </ApplicationProvider>
          </Root>
        </Provider>
        </>
      );

    }
}
