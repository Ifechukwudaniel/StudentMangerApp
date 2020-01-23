import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import {LevelCard} from './extra/level-card-component'
import {TopNavigationSimpleUsageShowcase} from './extra/navigation-component'
import Colors from '../../constants/Colors';


class Level extends Component {

  render() {
    return (
         <ScrollView>
            <LevelCard number={100} color={Colors.errorBackground}/>
            <LevelCard number={200}  color={Colors.gradient1}/>
            <LevelCard number={300}  color={Colors.gradient2}/>
            <LevelCard number={400}  color={Colors.darkMode}/>
      </ScrollView>
    );
  }
}

export default Level