import React from 'react';
import { View, Text,TouchableNativeFeedback } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet'
import CollapsibleList from "react-native-collapsible-list";
import ActivityItem from './ActivityItem'
 
const ActivityAccording  = (days) => {
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
   const  renderWeakActivity=()=>(
      data[1].activity.map((data)=>(
        <ActivityItem activityType={data.type} time={data.startTime} courseCode={data.name} />
      ))
   )
  return (
        <View
          style={styles.wrapperCollapsibleList}>
            <View style={styles.header}>
               <Text style={styles.dayText}> Monday </Text>
           </View>
           <View style={styles.activityList}>
           {
           renderWeakActivity()
           }
           </View>
        </View>
  );
}

const styles = EStyleSheet.create({
  wrapperCollapsibleList: {
     width:'92%',
    //  height:"200rem",
     backgroundColor: 'rgba(36,35,35,0.71)',
     alignSelf: 'center',
     borderRadius: '7rem',
  },
   header:{
     width:'102%',
     height:'50rem',
     backgroundColor:'#FFF',
     alignSelf: 'center',
     borderTopLeftRadius: '7rem',
     borderTopRightRadius: '7rem',
   },
   dayText:{
      textAlign:'center',
      fontSize: '24rem',
      marginTop: '10rem',
      fontWeight: 'bold',
      color:'#000'
   },
   activityList:{
     marginBottom: '20rem',
   }
});
 
export default ActivityAccording ;