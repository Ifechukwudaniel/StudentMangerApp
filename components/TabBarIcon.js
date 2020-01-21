import React from 'react';
//import { Ionicons } from '@expo/vector-icons';
import {  Icon } from "@ui-kitten/components"

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  return (
    <Icon
      name={props.name}
      width={32}
      height={32}
      fill={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
