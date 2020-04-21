import React, {Component} from 'react';
import {View, StatusBar, TouchableOpacity, ScrollView} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { LinearGradient } from 'expo-linear-gradient';
import DateItem from './DateItem'
import Header from '../Header'
import { Container,  Button, Text,  } from 'native-base';
import DateAction from './DateAction'
import {connect} from 'react-redux'
import { getTimeTable } from '../../Redux/Actions/timeTable';

 
class TimeTable extends Component {

    UNSAFE_componentWillMount(){
      this.props.getTimeTable()  
    }

    render() { 
        const {navigation} =this.props
        return (
            <View style={styles.container}>
            <Header  screenName="Time Table" onBackPress= {()=>navigation.push("Home")} />
             <View style={styles.content}>
               <View style={{flexDirection:"row"}}>
               <Text style={styles.dayText}> Today </Text>
               </View>
                <ScrollView style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false} >
                    <DateItem date={16} day={0} active/>
                    <DateItem date={17} day={1} />
                    <DateItem date={18} day={2} />
                    <DateItem date={19} day={3} />
                    <DateItem date={20} day={4} />
                    <DateItem date={21} day={5} />
                    <DateItem date={22} day={6} />
                </ScrollView>
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
      timeTable: state.timeTable.departments,
      loading:state.timeTable.loading,
      error:state.timeTable.error
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getTimeTable:()=>{
        dispatch(getTimeTable())
      },
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(TimeTable)