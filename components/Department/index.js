import React, { Component } from 'react';
import { View, Text,  StyleSheet, ScrollView, StatusBar , ActivityIndicator } from 'react-native';
import SearchInput from './extra/search-input-component'
import ChipLayout from './extra/chip-layout-component'
import Colors from '../../constants/Colors';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {connect} from 'react-redux'
import {getAllDepartment, setFilterDepartments} from '../../Redux/Actions/department'
import EStyleSheet from 'react-native-extended-stylesheet';

class Department extends Component {
  state={
    searchKeyWord:'',
  }

  componentWillMount(){
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

  handleSearch= ()=>{
     this.props.navigation.navigate("Level")
     console.log(this.props.filterDepartments[0])
  }


  render() {
    const { error, loading, departments, filterDepartments } = this.props;
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
  },
  activityIndicatorView:{
    width:"100%",
    height:"90%",
    justifyContent: 'center',
  },
})

function mapStateToProps(state) {
  return {
    departments: state.department.departments,
    loading:state.department.loading,
    filterDepartments: state.department.filterDepartments
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
