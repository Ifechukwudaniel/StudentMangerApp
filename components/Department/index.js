import React, { Component } from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import {InputElement , Input, Icon, ModalPanel} from "@ui-kitten/components"
import SearchInput from './extra/search-input-component'
import Chip from './extra/chip-component'
import Colors from '../../constants/Colors';


export default class Department extends Component {
  render() {
    return (
      <Modal presentationStyle="fullScreen">
        <View style={styles.container}>
            <View style={styles.SearchInput}>
              <SearchInput/>
            </View>
            <View>
              <Text style={styles.DepartmentText}> Available Department</Text>
            </View>
            <View style={{flexDirection:'row'}}>
               <Chip/>
               <Chip/>
            </View>
        </View>
      </Modal>
    );
  }
}

const styles= StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:"#ff5252"
  },
  SearchInput:{
    marginTop:70,
    marginLeft:10,
    marginRight:10,
    marginBottom:50
  },
  DepartmentText:{
      color:Colors.white,
      fontSize:20
  }
})