import React , {useState} from 'react';
import { View, Text,TouchableNativeFeedback , Animated} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet'
import CollapsibleList from "react-native-collapsible-list";
import ActivityItem from './ActivityItem'
import {Icon} from 'native-base'
import { TouchableOpacity} from 'react-native-gesture-handler'
 
const ActivityAccording  = ({day}) => {
  const [open, setOpen] = useState(false)
  
   const  renderWeakActivity=(activities=[])=>(
        activities.map((data)=>(
            <ActivityItem activityType={data.type} time={data.startTime} courseCode={data.course.courseCode} />
        ))
   )

  return (
    <View>
        <Animated.View
          style={[styles.wrapperCollapsibleList]}>
            <View style={styles.header}>
               <Text style={styles.dayText}> {day.dayOfWeek.toUpperCase()}</Text>
           </View>
           <View style={styles.activityTop}>
           <Animated.View  style={styles.activityList, {
             transform:[{ translateY:0}]
           }}>
           {
           renderWeakActivity(day.activities)
           }
           </Animated.View>
           </View>
        </Animated.View>
        <Animated.View style={styles.accordion,{transform:[{translateY:0}]}}>
              <TouchableOpacity onPress={
                 ()=>{
                   alert('kks')
                 }
              } style={styles.accordionButton}> 
              {/* <View style={{flexDirection:'row'}}>
                 <Text style={styles.viewMoreText}> view more </Text>
                 <Icon style={[styles.icon, {
                    transform:[{rotate: open? '180deg':'0deg'}]
                 }]} type="MaterialIcons" name="arrow-drop-down-circle"/>
                 
                 </View> */}
              </TouchableOpacity>
           </Animated.View>
       </View>
  );
}

const styles = EStyleSheet.create({
  wrapperCollapsibleList: {
     width:'92%',
     backgroundColor: 'rgba(36,35,35,1)',
     alignSelf: 'center',
     borderRadius: '7rem',
     marginTop:'20rem'
  },
   header:{
     width:'102%',
     height:'50rem',
     backgroundColor:'#2F476C',
     alignSelf: 'center',
     borderTopLeftRadius: '7rem',
     borderTopRightRadius: '7rem',
   },
   dayText:{
      textAlign:'center',
      fontSize: '24rem',
      marginTop: '10rem',
      fontWeight: 'bold',
      color:'#fff'
   },
   activityList:{
     marginBottom: '20rem',
   },
   activityTop:{
     marginBottom:'50rem'
   },
   accordion:{
   },
   accordionButton:{

      alignSelf:'flex-end',
      flexDirection: 'row',
      marginRight: '20rem',
      marginBottom:'10rem',
      marginTop:'10rem',
      zIndex: 1,
   },
   icon:{
     color:'#DEDEDE'
   },
   viewMoreText:{
     color:'rgba(255,255,255,0.50)',
     alignContent: 'flex-end',
     lineHeight:'24rem',
     fontSize:'13rem'
   }
});
 
export default ActivityAccording ;