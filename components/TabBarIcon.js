import React from 'react';
import {  Icon } from "@ui-kitten/components"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Colors from '../constants/Colors';
import Ripple from 'react-native-material-ripple';
import {NavigationActions } from 'react-navigation'


export default function TabBarIcon(props) {
  return (
     <Icon
      name={props.name}
      width={wp('10%')}
      height={hp('4%')}
      fill={props.focused ? "#FF5959" : "#ffffff"}
    />
  );
}
