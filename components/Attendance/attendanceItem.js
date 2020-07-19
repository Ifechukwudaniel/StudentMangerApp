import React, { useState } from 'react';
import {TouchableOpacity, View, Text, Dimensions} from 'react-native';
import EStyleSheet from "react-native-extended-stylesheet";
import Check from '../../assets/svg/check.svg'
import Close from '../../assets/svg/close.svg'
import moment from 'moment';
const entireScreenWidth = Dimensions.get('window').width;
const rem = entireScreenWidth/380

const AttendanceItem = ({navigation, date , timeStart, timeEnd , attended}) => {
  const [view, setOpenView] = useState(false)
  return (
      <View  style={styles.container}>
        <View style={styles.left} >
            <Text style={styles.date}> {moment(date).format('DD/MM/YYYY')}</Text>
        </View>
        <View style={styles.center}>
           <Text style={styles.contentText}> {timeStart} - {timeEnd}</Text>
        </View>
        <View style={styles.right}>
           { attended? <Check  style={styles.svg}/> :    <Close style={styles.svg}/> }
       </View>
      </View>
  );
}
const styles = EStyleSheet.create({
  container:{
    width:'95%',
    height:'80rem',
    flexDirection:'row',
    marginBottom: '10rem',
    alignSelf: 'center',
  },
  left:{
    backgroundColor:' rgba(107, 105, 105, 0.11);',
    width:'30%'
  },
  center:{
   width:'50%',
   backgroundColor:'rgba(255, 251, 251, 0.04);'
  },
  right:{
    backgroundColor:'rgba(196, 196, 196, 0.09)',
    width:'20%',
    justifyContent: 'center',
  },
  date:{
     color:'#FF912C',
     fontWeight: 'bold',
     fontSize:'12rem',
     lineHeight:'70rem',
     textAlign:'center'
  },
  contentText:{
    color:'rgba(255, 254, 254, 0.73)',
    fontWeight: 'bold',
    fontSize:'14rem',
    lineHeight:'70rem',
    textAlign:'center',
  },
  svg:{
   alignSelf:'center',
   width:'100rem'
  }
});
 
export default AttendanceItem;