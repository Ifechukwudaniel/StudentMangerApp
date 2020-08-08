import React, { Component } from 'react';
import { View, Text, StatusBar, ScrollView, FlatList, TouchableOpacity} from 'react-native';
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
      const {loading, error} = this.props
      if(loading){
         return (
           <View style={styles.container}>
              <ActivityIndicator   style={[styles.spinner]} color="#FF912C"  size="large"/>
           </View>
         )
        }

        if(error){
          return (
            <View style={[{justifyContent:'center'}]}>
            <View style={styles.errorMessage}>
                 <Text style={styles.errorText}>  Can't Connect to Server</Text>
                 <TouchableOpacity onPress= {()=>this.props.getAttendance()}>
                     <Text style={styles.retry}> Retry</Text>
                 </TouchableOpacity>
            </View>
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
    },
    errorText:{
      color:"#fff",
      alignSelf: 'center',
      fontSize: '17rem',
      // fontWeight: 'bold',x
      marginTop: '10rem',
      letterSpacing: 1.3,
    },
    errorMessage:{
      width:'100%',
      height:'80%',
      justifyContent: 'center',
    },
    retry:{
      color:"rgba(255,255,255,0.7)",
      alignSelf: 'center',
      fontSize: '13rem',
      marginTop: '13rem',
      letterSpacing: 1.3,
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