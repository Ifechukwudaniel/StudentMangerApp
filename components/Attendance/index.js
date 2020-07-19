import React, { Component } from 'react';
import { View, Text, StatusBar, ScrollView, FlatList} from 'react-native';
import { getAttendance } from '../../Redux/Actions/attendance';
import {connect} from 'react-redux'
import {ActivityIndicator} from 'react-native-paper'
import EStyleSheet from 'react-native-extended-stylesheet'
import AttendanceListItem from './AttendanceListItem';

 
class Attendance extends Component {
    UNSAFE_componentWillMount(){
        StatusBar.setHidden(true)
        this.props.getAttendance()
    }
    render() { 
      const {loading} = this.props
      if(loading){
         return (
           <View style={styles.container}>
              <ActivityIndicator   style={[styles.spinner]} color="#FF912C"  size="large"/>
           </View>
         )
        }
       return (
          <View style={styles.attendance}>
            <FlatList
                data={this.props.attendance}
                renderItem ={(data)=>(<AttendanceListItem id= {data.item._id} navigation= {this.props.navigation} {...data.item}/>)}
                keyExtractor={item=>item._id}
            />
           </View>
        );
    }
}

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center'
    },
    spinner:{
      alignSelf:'center',
      color:"#FF912C",
    },
    attendance:{
      marginTop:'30rem'
    }
});
 

function mapStateToProps(state) {
    return {
       attendance: state.attendance.attendance,
      loading:state.attendance.loading,
      error:state.attendance.error,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getAttendance:()=>{
        dispatch(getAttendance())
      },
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Attendance)