import React, { Component,  } from 'react';
import { View, Text,  ScrollView, StatusBar , ActivityIndicator, AsyncStorage } from 'react-native';
import Colors from '../../constants/Colors';
import {connect} from 'react-redux'
import {getAllDepartment, setFilterDepartments} from '../../Redux/Actions/department'
import EStyleSheet from 'react-native-extended-stylesheet';
class Department extends Component {
  state={
    searchKeyWord:'',
  }

  UNSAFE_componentWillMount(){
    StatusBar.setBarStyle('light-content',true)
    this.props.getAllDepartment() 
  }
  
  render() {
    const { error, loading, departments, filterDepartments } = this.props;
    return (
        <View style={styles.container}>
          
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
