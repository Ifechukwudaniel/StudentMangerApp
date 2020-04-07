import React, {useState} from 'react';
import {  Icon } from "@ui-kitten/components"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Colors from '../constants/Colors';
import Ripple from 'react-native-material-ripple';
import {NavigationActions } from 'react-navigation'
import {TouchableOpacity, View} from 'react-native'



export default function TabBarIcon(props) {
  return (
    <View>
      <Icon
        name={props.name}
        width={wp('8%')}
        height={hp('3%')}
        fill={props.focused ? Colors.tintColor : "#ffffff"}
      />
    </View>
  );
}
