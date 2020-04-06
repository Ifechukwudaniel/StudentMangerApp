import React, { Component } from 'react';
import { View, Text, Modal, StyleSheet, ScrollView, StatusBar } from 'react-native';
import {InputElement , Input, Icon, ModalPanel} from "@ui-kitten/components"
import SearchInput from './extra/search-input-component'
import ChipLayout from './extra/chip-layout-component'
import Colors from '../../constants/Colors';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


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
        "name": "Computer Education",
        "__v": 0
    },
    {
        "_id": "5e20f6f8d6f03b9ac9e42ede",
        "name": "Civic ",
        "__v": 0
    },
    {
        "_id": "5e20f702d6f03b9ac9e42edf",
        "name": "Mechanical Engineering",
        "__v": 0
    },
    {
      "_id": "1212121212",
      "name": "Law",
      "__v": 0
  }
]
  state={
    data :this.data,
    searchKeyWord:''
  }

  componentDidMount(){
    StatusBar.setBarStyle('light-content',true)
  }
  
  
  handleChange= (value)=>{
    if (value===this.state.searchKeyWord) {
       this.handleSearch()
    }
      else{
      this.setState({searchKeyWord:value}, ()=>{
        let newData=  this.data.filter((value)=>value.name.toLowerCase().includes(this.state.searchKeyWord.toLowerCase()))
        this.setState({data:newData})
      })
    }
  }

  handleSearch= ()=>{
     this.props.navigation.navigate("Level")
  }

  render() {
    return (
        <View style={styles.container}>
            <View style={styles.SearchInput}>
              <SearchInput 
              handleChange={this.handleChange} 
              handleSearch={this.handleSearch} 
              value={this.state.searchKeyWord} />
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
    );
  }
}

const styles= StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:Colors.tintColor
  },
  SearchInput:{
    marginTop:hp('7%'),
    marginLeft:wp('4%'),
    marginRight:wp('4%'),
    marginBottom:hp('4%')
  },
  DepartmentTextContainer:{
    marginBottom:20,
    marginLeft:20
  },
  DepartmentText:{
      color:Colors.white,
      fontSize:wp('6%'),
      fontWeight:'bold',
  },
  clipSelectContainer:{
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems:'flex-start',
    alignContent:'space-between',
    justifyContent:'space-between',
    marginLeft:wp('1%'),
    marginRight:wp('2%'),
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