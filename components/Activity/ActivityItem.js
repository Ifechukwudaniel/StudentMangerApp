import React from 'react';
import {View, Text} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
const activityTypeList = ["Class","Test","Practical"]
 
const ActivityItem = ({activityType, time ,courseCode}) => {
  if(activityType==2){
  return (
    <View style={styles.activityView}>
          <Text style={styles.activityTime} >{time}</Text>
       <View style={[styles.activityDetail,styles.practical]}>
           <Text style={styles.activityText}> {activityTypeList[activityType]}: {courseCode} </Text>
       </View>
    </View>
  )
  }
  if(activityType==1){
    return (
      <View style={styles.activityView}>
            <Text style={styles.activityTime} >{time}</Text>
         <View style={[styles.activityDetail,styles.test]}>
             <Text style={styles.activityText}> {activityTypeList[activityType]}: {courseCode} </Text>
         </View>
      </View>
    )
  }
  return (
    <View style={styles.activityView}>
          <Text style={styles.activityTime} >{time}</Text>
       <View style={[styles.activityDetail]}>
           <Text style={styles.activityText}> {activityTypeList[activityType]}: {courseCode} </Text>
       </View>
    </View>
  )


}

const styles = EStyleSheet.create({
  activityView :{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: '20rem',
    marginTop: '10rem',
  },
   activityTime:{
    fontSize: '15rem',
    alignItems: 'center',
    textAlign: 'center',
    color:'rgba(255, 253, 253, 0.44)',
    justifyContent: 'center',
    marginTop: '14rem',
   },
   activityDetail:{
    backgroundColor: "rgba(93, 218, 128, 0.45)",
    width:'240rem',
    height:'47rem',
    borderRadius: '5rem',
   },
   activityText:{
    fontSize: '15rem',
    color:'rgba(255, 255, 255, 1)',
    marginTop: '14rem',
   },
   test:{
    backgroundColor: " rgba(85, 153, 255, 0.29)", 
   }, 
   practical:{
    backgroundColor: " rgba(255, 48, 81, 0.5)",
   },
   exam:{
    backgroundColor: "rgba(255, 145, 44, 0.99)",
   }
   
})
 
export default ActivityItem;