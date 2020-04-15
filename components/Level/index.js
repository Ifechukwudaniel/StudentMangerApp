import React, { Component } from 'react';
import { ScrollView, Text,  View, AsyncStorage, ActivityIndicator } from 'react-native';
import {LevelCard} from './extra/level-card-component'
import Colors from '../../constants/Colors';
import { connect } from 'react-redux'
import EStyleSheet from 'react-native-extended-stylesheet';
import { Toast } from 'native-base';
import Keys from '../../constants/Keys';



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

  handleClick=({number, id})=>{
    AsyncStorage.setItem( Keys.level, JSON.stringify({number, _id:id}))
    .then(()=>{
      Toast.show({
        text: `🥳 Just saved ${number} as your level`,
        textStyle:styles.textStyle,
        position: 'bottom',
        type:'success',
        duration:3000
      })
      this.props.navigation.navigate("Home")
    })
    .catch(()=>{
      Toast.show({
        text: "😭 An error occurred , Please select the your  level",
        position: 'bottom',
        type:'warning',
        duration:3000,
      })
    })
  }

  render() {
       const {loading, level, } = this.state
       if (loading) {
           return(
              <View style={styles.loadingView}>
                 <ActivityIndicator style={styles.activityIndicator} size="large"   />
              </View>
           )
       }
       if (!loading && level.length===0) {
        return(
           <View style={styles.loadingView}>
              
           </View>
        )
    }
      return (
        <ScrollView style={styles.levelContainer}>
              {level.map((level)=>(
                  <LevelCard 
                    id={level._id}
                    key={level._id} 
                    number={level.number} 
                    color={Colors.gradient0}
                    handleClick={this.handleClick}
                    />
              ))}
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