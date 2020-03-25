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

const theme = {...dark, ...appTheme}

EStyleSheet.build({
  $textColor: '#fff',
  $rem: entireScreenWidth / 380,
});


export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <>
       <IconRegistry icons={EvaIconsPack}/>
         <ApplicationProvider mapping={mapping} theme={theme}  >
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
              <AppNavigator />
         </ApplicationProvider>
      </>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
      require('./assets/images/background.png'),
      require('./assets/images/image.jpeg'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'faster-one':require('./assets/fonts/FasterOne-Regular.ttf'),
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      'Open Sans Bold': require('./assets/fonts/Open_Sans/OpenSans-Bold.ttf'),
      'Open Sans Light': require('./assets/fonts/Open_Sans/OpenSans-Light.ttf'),
      'Open Sans Regular': require('./assets/fonts/Open_Sans/OpenSans-Regular.ttf'),
      'Itim': require('./assets/fonts/Itim-Regular.ttf')
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}