import React, {Component,} from 'react';
import {View, StatusBar, TouchableOpacity, ScrollView, Animated} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { LinearGradient } from 'expo-linear-gradient';
import DateItem from './DateItem'
import Header from '../Header'
import { Container,  Button, Text,  } from 'native-base';
import DateAction from './DateAction'
import {connect} from 'react-redux'
import { getTimeTable ,setTimeTableActiveDay } from '../../Redux/Actions/timeTable';
import _ from 'lodash'

 
class TimeTable extends Component {
   state= {
     timeTable:[]
   }

    UNSAFE_componentWillMount(){
      this.props.getTimeTable()  
      this.setState({timeTable:this.props.timeTable})
    }

    handleDateItemPress= (id)=>{
       const timeTable = this.props.timeTable
     _.map(timeTable,(data)=>{
        return data.active=false
      })
       _.find(timeTable, {_id:id}).active=true
      this.setState({timeTable:timeTable})
      this.props.setNewTimeTable(timeTable)
    }

    render() { 
        const {navigation, timeTable, loading} =this.props
       if(loading){
         return (
          <View style={styles.container}>
          <Header  screenName="Time Table" onBackPress= {()=>navigation.push("Home")} />
           <View style={styles.content}>
             <View style={{flexDirection:"row"}}>
             <Text style={styles.dayText}> Today </Text>
             </View>
              <Animated.ScrollView    style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false} >
               <DateItem  active />
               <DateItem/>
               <DateItem/>
               <DateItem/>
               <DateItem/>
               <DateItem/>
               <DateItem/>
              </Animated.ScrollView>
             <ScrollView style={styles.eventList}>
                  <DateAction onNotifyPress={()=>{}} location="lecture room 3"  course="Csc 121"  startTime="8:00 am" endTime="10:00 am"/>
                  <DateAction active={true} notify={true} onNotifyPress={()=>alert("dkd")} location="lecture room 1"  course="Csc 123"  startTime="10:00 am" endTime="12:00 am" />
             </ScrollView>
           </View>
          </View>
         )
       }
        return (
            <View style={styles.container}>
            <Header  screenName="Time Table" onBackPress= {()=>navigation.push("Home")} />
             <View style={styles.content}>
               <View style={{flexDirection:"row"}}>
               <Text style={styles.dayText}> Today </Text>
               </View>
                <Animated.ScrollView    style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false} >
                {
                  timeTable.map(data=>(
                    <DateItem  onClick={this.handleDateItemPress} _id={data._id} date={data.date} key={data._id} day={data.weekDay} active={data.active}/>
                  ))
                }
                </Animated.ScrollView>
               <ScrollView style={styles.eventList}>
                    <DateAction onNotifyPress={()=>{}} location="lecture room 3"  course="Csc 121"  startTime="8:00 am" endTime="10:00 am"/>
                    <DateAction active={true} notify={true} onNotifyPress={()=>alert("dkd")} location="lecture room 1"  course="Csc 123"  startTime="10:00 am" endTime="12:00 am" />
               </ScrollView>
             </View>
            </View>
        );
    }
}
const styles = EStyleSheet.create({
    container:{
     flex: 1,
    },
    title:{
        fontSize: '23rem', 
        color:"#fff",
        fontFamily:"Itim",
    },
    content:{
        marginTop: '10rem',
    },
    dayText:{
        fontSize: '30rem', 
        color:"#fff",
        fontFamily:"Itim", 
        marginLeft: '10rem',
        marginRight:"10rem"
    },
    scrollView:{
        marginLeft: '20rem',
        marginTop:"20rem",
        flexDirection: 'row',
    },
    eventList:{
        marginTop:'50rem',  
    },  
    option :{
        width:"257rem",
        backgroundColor: "#000",
    }
})

function mapStateToProps(state) {
    return {
      timeTable: state.timeTable.timeTable,
      loading:state.timeTable.loading,
      error:state.timeTable.error
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getTimeTable:()=>{
        dispatch(getTimeTable())
      },
      setNewTimeTable:(timeTable)=>{
        dispatch(setTimeTableActiveDay(timeTable))
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(TimeTable)