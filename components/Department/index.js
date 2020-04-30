import React, { Component,  } from 'react';
import { View, Text,  ScrollView, StatusBar , ActivityIndicator, AsyncStorage } from 'react-native';
import SearchInput from './extra/search-input-component'
import ChipLayout from './extra/chip-layout-component'
import Colors from '../../constants/Colors';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import {connect} from 'react-redux'
import {getAllDepartment, setFilterDepartments} from '../../Redux/Actions/department'
import EStyleSheet from 'react-native-extended-stylesheet';
import _ from 'lodash'
import {Toast} from 'native-base'
import Keys from '../../constants/Keys'
class Department extends Component {
  state={
    searchKeyWord:'',
  }

  UNSAFE_componentWillMount(){
    StatusBar.setBarStyle('light-content',true)
    this.props.getAllDepartment() 
  }
  
  handleChange= (value)=>{
    if (value===this.state.searchKeyWord) {
       this.handleSearch()
    }
    else{
      this.setState({searchKeyWord:value}, ()=>{
      let newData=  this.props.departments.filter((value)=>value.name.toLowerCase().includes(this.state.searchKeyWord.toLowerCase()))
      this.props.setDepartments(newData)
     })
    }
  }

  handleSearch=  ()=>{
      const userDepartment =  _.filter(this.props.filterDepartments,{name:this.state.searchKeyWord})
       AsyncStorage.setItem(Keys.department, JSON.stringify(userDepartment[0]))
      .then(()=>{
        Toast.show({
          text: `🥳 Just saved ${userDepartment[0].name} as your department`,
          textStyle:styles.textStyle,
          position: 'bottom',
          type:'success',
          duration:5000
        })
        this.props.navigation.navigate("Level")
      })
      .catch(()=>{
        Toast.show({
          text: "😭 An error occurred , Please select the your department",
          position: 'bottom',
          type:'warning',
          duration:5000
        })
       
      })
  }


  render() {
    const { error, loading, departments, filterDepartments } = this.props;
    console.log(error, departments.length===0)
    if(loading){
      return(
      <View style={styles.container}>
        <View style={styles.SearchInput}>
            <SearchInput 
            value={this.state.searchKeyWord} />
            <View style={styles.activityIndicatorView} >
                 <ActivityIndicator size="large"/>
            </View>
        </View>
     </View>
      )
    }

    if(error && departments.length===0){
      return(
      <View style={styles.container}>
      <View style={styles.SearchInput}>
          <SearchInput 
          value={this.state.searchKeyWord} />
           
      </View>
   </View>
   )
    }

    return (
        <View style={styles.container}>
            <View style={styles.SearchInput}>
              <SearchInput 
              handleChange={this.handleChange} 
              handleSearch={this.handleSearch} 
              value={this.state.searchKeyWord} />
            </View>
               {this.props.filterDepartments.length===0
                ?
                <View style={styles.errorContainer}>
                    <MaterialIcon style={styles.errorIcon} color="#fff" name="find-in-page" size={100}/>
                    <Text style={styles.errorText}> {this.state.searchKeyWord} is not found</Text>
                  </View>
                :
                <>
               <View style={styles.DepartmentTextContainer}>
                  <Text style={styles.DepartmentText}> Available Department</Text>
                </View>
                <ScrollView>
                  <View style={styles.clipSelectContainer}>
                    <ChipLayout 
                      departments={filterDepartments} 
                      handleChange = {this.handleChange}
                      handleClipClick={(value)=>this.handleChange(value)}
                       />
                  </View>
                </ScrollView>
                </>
                  
               }
        </View>

    );
  }
}

const styles= EStyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:Colors.tintColor
  },
  SearchInput:{
    marginTop:'50rem',
    marginLeft:'20rem',
    marginRight:'20rem',
    marginBottom:'20rem'
  },
  DepartmentTextContainer:{
    marginBottom:'20rem',
    marginLeft:'20rem'
  },
  DepartmentText:{
      color:Colors.white,
      fontSize:'20rem',
      fontWeight:'bold',
      fontFamily: 'itim',
  },
  clipSelectContainer:{
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems:'flex-start',
    alignContent:'space-between',
    justifyContent:'space-between',
    marginLeft:'10rem',
    marginRight:'10rem',
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
  },
  activityIndicatorView:{
    width:"100%",
    height:"90%",
    justifyContent: 'center',
  },
  textStyle:{
    fontSize:'14rem'
  }
})

function mapStateToProps(state) {
  return {
    departments: state.department.departments,
    loading:state.department.loading,
    filterDepartments: state.department.filterDepartments,
    error:state.department.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllDepartment:()=>{
      dispatch(getAllDepartment())
    },
    setDepartments:(department)=>{
       dispatch(setFilterDepartments(department))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Department)
