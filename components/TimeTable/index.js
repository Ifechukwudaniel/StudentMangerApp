import React, {Component,} from 'react';
import {View, StatusBar, TouchableOpacity, ScrollView, Animated, ActivityIndicator, Image} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { LinearGradient } from 'expo-linear-gradient';
import DateItem from './DateItem'
import Header from '../Header'
import { Container,  Button, Text,  } from 'native-base';
import DateAction from './DateAction'
import {connect} from 'react-redux'
import { getTimeTable ,setTimeTableActiveDay, setDayActions, setDayActionsStart } from '../../Redux/Actions/timeTable';
import _ from 'lodash'
import Animatable from 'react-native-animatable'
import util from '../../util';

 
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
      this.props.setDayActionsStart()
      this.props.setNewTimeTable(timeTable)
       setTimeout(()=>{
        this.props.setDayActions(_.find(timeTable, {active:true}).dayActions)
       },500)
    }

    renderDate=(timeTable)=>timeTable.map(data=>(
      <DateItem  onClick={this.handleDateItemPress} _id={data._id} date={data.date} key={data._id} day={data.weekDay} active={data.active}/>
    ))

    renderDateAction= (dateAction)=>{
      if(dateAction.length ==0){
         return (
           <>
           <Image   resizeMode={'contain'}  style={styles.noContentGif}  defaultSource={require('../../assets/images/dance1.gif')} source={require('../../assets/images/dance1.gif')}/>
           <Text style={styles.noContentText}> {util.getCurrentDay(this.props.timeTable)==("Tomorrow") || util.getCurrentDay(this.props.timeTable)==("Today")  ? ` No lecture ${util.getCurrentDay(this.props.timeTable)} ` : `No lecture on ${util.getCurrentDay(this.props.timeTable)}`} </Text>
           </> 
         )
      }
     return dateAction.map(data=>(
       <DateAction onNotifyPress={()=>{}} key={data._id}  course={data.course.courseCode} location="lectur room 1" startTime={data.startTime} endTime={data.endTime} />
    ))
  }

    render() { 
        const {navigation, timeTable, loading, loadingAction, dayActions} =this.props
       if(loading){
         return (
          <View style={styles.container}>
          <Header  screenName="Time Table" onBackPress= {()=>navigation.navigate("Home")} />
           <View style={styles.content}>
             <View style={{flexDirection:"row"}}>
             <Text style={styles.dayText}> Today </Text>
             </View>
              <Animated.ScrollView    style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false} >
               <DateItem  active onClick={()=>{}} />
               <DateItem  onClick={()=>{}}/>
               <DateItem  onClick={()=>{}}/>
               <DateItem  onClick={()=>{}}/>
               <DateItem  onClick={()=>{}}/>
               <DateItem  onClick={()=>{}}/>
               <DateItem  onClick={()=>{}}/>
              </Animated.ScrollView>
             <ScrollView style={styles.eventList}>
                    <ActivityIndicator size="large"/>
             </ScrollView>
           </View>
          </View>
         )
       }
        return (
            <View style={styles.container}>
            <Header  screenName="Time Table" onBackPress= {()=>navigation.navigate("Home")} />
             <View style={styles.content}>
               <View style={{flexDirection:"row"}}>
               <Text style={styles.dayText}> {util.getCurrentDay(timeTable)} </Text>
               </View>
                <Animated.ScrollView    style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false} >
                {
                  this.renderDate(timeTable)
                }
                </Animated.ScrollView>
               <ScrollView style={styles.eventList}>
                 {
                  loadingAction
                  ?
                  (<ActivityIndicator size='large'/> )
                  :
                  this.renderDateAction(dayActions)
                 }
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
    },
    noContentGif:{
      width:"150rem",
      height:'160rem',
      alignSelf: 'center',
    },
    noContentText:{
      color:"#fff",
      alignSelf:"center",
      fontSize: '20rem', 
      marginTop:'10rem',
      fontFamily:'itim'
    }
})

function mapStateToProps(state) {
    return {
      timeTable: state.timeTable.timeTable,
      loading:state.timeTable.loading,
      error:state.timeTable.error,
      dayActions:state.timeTable.dayActions,
      loadingAction:state.timeTable.loadingAction,
      date:state.timeTable.date
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getTimeTable:()=>{
        dispatch(getTimeTable())
      },
      setNewTimeTable:(timeTable)=>{
        dispatch(setTimeTableActiveDay(timeTable))
      },
      setDayActions: (actions)=>{
        dispatch(setDayActions(actions))
      },
      setDayActionsStart:()=>{
        dispatch(setDayActionsStart())
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(TimeTable)