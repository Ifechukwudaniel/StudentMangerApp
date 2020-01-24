import React, { Component } from 'react';
import { View, Text, Modal, StyleSheet, ScrollView } from 'react-native';
import {InputElement , Input, Icon, ModalPanel} from "@ui-kitten/components"
import SearchInput from './extra/search-input-component'
import ChipLayout from './extra/chip-layout-component'
import Colors from '../../constants/Colors';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'


export default class Department extends Component {
  data = [
    {
        "_id": "5e1b89f87bd9b9071c9d7321",
        "name": "Computer Scince",
        "__v": 0
    },
    {
        "_id": "5e20e2a6d6f03b9ac9e42edc",
        "name": "physics",
        "__v": 0
    },
    {
        "_id": "5e20e2bdd6f03b9ac9e42edd",
        "name": "mathmatics & computer Scince",
        "__v": 0
    },
    {
        "_id": "5e20f6f8d6f03b9ac9e42ede",
        "name": "data",
        "__v": 0
    },
    {
        "_id": "5e20f702d6f03b9ac9e42edf",
        "name": "jbjbbbb",
        "__v": 0
    },
    {
        "_id": "5e218bfbd6f03b9ac9e42ee0",
        "name": "jys",
        "__v": 0
    },
    {
        "_id": "5e230fd4f787b5b46cad6e56",
        "name": "dwdwdbwdwdwdwdqd",
        "__v": 0
    },
    {
        "_id": "5e24e4461c0275c4a5baa147",
        "name": "mathmatics & computer Scince hhhh",
        "__v": 0
    },
    {
        "_id": "5e24e6d3d22e89c55f227c70",
        "name": "mathmatics & computer Scince kjefjkejfwjkdw",
        "__v": 0
    },
    {
        "_id": "5e24e6f4d22e89c55f227c71",
        "name": "GQSFQSFQSQSQS",
        "__v": 0
    }
]
    state={
      data :this.data,
      searchKeyWord:''
    }
  
  handleChange= (value)=>{
    this.setState({searchKeyWord:value}, ()=>{
      let newData=  this.data.filter((value)=>value.name.toLowerCase().includes(this.state.searchKeyWord.toLowerCase()))
      this.setState({data:newData})
    })
  }

  handleSearch= ()=>{
    alert("jdjedj")
  }

  render() {
    return (
      <Modal presentationStyle="fullScreen">
        <View style={styles.container}>
            <View style={styles.SearchInput}>
              <SearchInput handleChange={this.handleChange} value={this.state.searchKeyWord} />
            </View>
               <>
               {this.state.data.length!==0
                ?
                <>
               <View style={styles.DepartmentTextContainer}>
                  <Text style={styles.DepartmentText}> Available Department</Text>
                </View>
                <ScrollView>
                  <View style={styles.clipSelectContainer}>
                    <ChipLayout 
                      departments={this.state.data} 
                       handleChange = {this.handleChange}
                         handleClipClick={(value)=>this.handleChange(value)}
                       />
                  </View>
                </ScrollView>
                </>
                :
                  <View style={styles.errorContainer}>
                    <MaterialIcon style={styles.errorIcon} color="#fff" name="find-in-page" size={100}/>
                    <Text style={styles.errorText}> {this.state.searchKeyWord} is not found</Text>
                  </View>
               }
              </>
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
    marginTop:50,
    marginLeft:20,
    marginRight:20,
    marginBottom:50
  },
  DepartmentTextContainer:{
    marginBottom:20,
    marginLeft:20
  },
  DepartmentText:{
      color:Colors.white,
      fontSize:20,
      fontWeight:'bold',
  },
  clipSelectContainer:{
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems:'flex-start',
    alignContent:'space-between',
    justifyContent:'space-between',
    marginLeft:12,
    marginRight:12,
  },
  errorContainer:{
    alignItems:"center",
    margin:5,
    marginTop:5
  },
  errorText:{
     textAlign:'center',
     color:Colors.white,
     fontSize:22,
     fontWeight:'bold',
  },
  errorIcon:{
      margin:5
  }
})