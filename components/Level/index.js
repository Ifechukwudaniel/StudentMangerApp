import React, { Component } from 'react';
import { ScrollView, Text,  View, AsyncStorage, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux'
import EStyleSheet from 'react-native-extended-stylesheet';


class Level extends Component {
  state={
    level:[],
    loading:true
  }
 UNSAFE_componentWillMount(){
    AsyncStorage.getItem("@BIU_ASSIST:department")
    .then((department)=>{
      const userDepartment=  JSON.parse(department)
     this.setState({level:userDepartment.levels, loading:false})
    })
  }

  render() {
       const {loading, level, } = this.state
      return (
        <ScrollView style={styles.levelContainer}>
        </ScrollView>
      );
  }
}

const styles = EStyleSheet.create({
  levelContainer: {
    marginTop: '50rem',
    flex:1
  },
  loadingView:{
    // backgroundColor: 'red',
    width:'100%',
    height:'100%',
    justifyContent: 'center',
  },
  activityIndicator:{
    alignSelf: 'center',
  }
  
});

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
export default connect(mapStateToProps, mapDispatchToProps)(Level)