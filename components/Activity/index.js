import React, { Component } from 'react';
import { View, Text, StatusBar, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import { getBlogs } from '../../Redux/Actions/blogs';
import { getTodayActivity, getWeekActivity} from '../../Redux/Actions/activity'
import {connect} from 'react-redux'
import {ActivityIndicator} from 'react-native-paper'
import EStyleSheet from 'react-native-extended-stylesheet'
import ActivityItem from './ActivityItem';

 
class Activity extends Component {
  data  = [
    {
      day:0,
      activity:[
         {
           startTime:"07:00 AM",
           type:0,
           name:"MTH 122"
         },
         {
          startTime:"09:00 AM",
          type:0,
          name:"GST 122"
        },
        {
          startTime:"01:00 PM",
          type:0,
          name:"CHM 122"
        }
      ]
    },
    {
      day:1,
      activity:[
         {
           startTime:"07:00 AM",
           type:2,
           name:"MTH 122"
         },
         {
          startTime:"09:00 AM",
          type:2,
          name:"GST 122"
        },
        {
          startTime:"01:00 PM",
          type:0,
          name:"CHM 122"
        }
      ]
    }
  ]

    UNSAFE_componentWillMount(){
        // StatusBar.setHidden(true)
        this.props.getTodayActivity()
        this.props.getWeekActivity()
    }
    state={
       activeDay:true,
       activeWeek:false,
       loading:false
    }

    renderActivity= ()=>{
      const {activeDay, activeWeek, loading} = this.state

      if(loading){
        return (
        <View style={styles.spinnerActivity}>
            <ActivityIndicator   style={[styles.spinner]} color="#FF912C"  size="large"/>
        </View>
        )
      }
      if(activeDay){
       return    this.renderTodayActivity()
      }

      if(activeWeek){
        return this.renderWeakActivity()
      }
    }

    
    renderWeakActivity=()=>(
      this.data[1].activity.map((data)=>(
          <ActivityItem activityType={data.type} time={data.startTime} courseCode={data.name} />
        ))
      )

    renderTodayActivity=()=>(
    this.props.todayActivities.map((data)=>{
       console.log(data)
       return (
        <ActivityItem activityType={data.type} time={data.startTime} courseCode={data.course.courseCode} />
      )})
    )

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
            <View style={{flex:1}}>
                <View style={styles.activityHeader}>
                   <Text style={styles.activity}> Activities </Text>
                   <View style={styles.buttonGroup}>
                      <TouchableOpacity onPress= {()=>this.setState({activeDay:!this.state.activeDay, activeWeek:!this.state.activeWeek},()=>{
                        setTimeout(()=>{
                            this.setState({loading:false})
                        }, 500)
                      })} style={[styles.button,this.state.activeDay ?styles.buttonActive:{} ]}>
                         <Text style={styles.buttonText}>   Daily </Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress= {()=>this.setState({activeDay:!this.state.activeDay, activeWeek:!this.state.activeWeek},
                      ()=>{
                         setTimeout(()=>{
                          this.setState({loading:false})  
                         }, 500)
                      })} style={[styles.button,this.state.activeWeek ?styles.buttonActive:{} ]}>
                         <Text style={styles.buttonText}>   Weekly </Text>
                      </TouchableOpacity>
                   </View>
                </View>
               {
                  this.renderActivity()
               }

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
    activity:{
      color:' rgba(255, 252, 252, 0.78)',
      marginLeft: '30rem',
      fontSize: '19rem',
    },
    activityHeader:{
      marginTop: '30rem',
      marginBottom: '20rem',
      flexDirection: 'row',
    },
    button:{
      backgroundColor:'#242426',
      borderColor:"transparent",
      borderRadius:'5rem',
      width:"100rem",
      color:"#fff",
      height:"40rem",
      marginLeft:'10rem',
      padding: '0rem',
    },
    buttonActive:{
      backgroundColor:'#FF912C'
    },
    buttonText:{
      color:' rgba(255, 252, 252, 0.78)',
      textAlign:'center',
      lineHeight:'35rem'
    },
    buttonGroup:{
      flexDirection:'row',
      alignItems: 'flex-end',
      marginLeft: '30rem',
    },
    spinnerActivity:{
      marginTop: '70rem',
    }
});
 

function mapStateToProps(state) {
    return {
      todayActivities: state.activity.todayActivities,
      weeklyActivities:state.activity.weeklyActivities,
      loading:state.activity.loading,
      error:state.activity.error,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getWeekActivity:()=>{
        dispatch(getWeekActivity())
      },
      getTodayActivity:()=>{
        dispatch(getTodayActivity())
      }
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Activity)