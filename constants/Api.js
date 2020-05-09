import {Platform } from 'react-native'


export default {
  apiKey : Platform.OS=='android'? "http://localhost:3000"  :""
}