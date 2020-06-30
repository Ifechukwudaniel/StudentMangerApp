import React, {useState} from 'react';
import {TouchableOpacity, Text, View,Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet'
import BookSvg from '../../assets/svg/Book.svg'
const entireScreenWidth = Dimensions.get('window').width;
const rem = entireScreenWidth/380

const HandOuListItem = () => {
  const [loading,setLoading] = useState(true)
  return (
    <TouchableOpacity style={styles.handOutItem}>
     <View style={styles.BookSvg}>
        <BookSvg width={130*rem} height={130*rem}/>
     </View>
      <Text style={[styles.textStyle,styles.courseCode]}> MTH 121</Text>
      <Text style={[styles.textStyle, styles.description]}>simple calculus technics</Text>
      <Text style={[styles.textStyle, styles.postedBy]}> By: D%D</Text>
    </TouchableOpacity>
  );
}
 
const styles = EStyleSheet.create({
  handOutItem:{
    width:"170rem",
    height:"260rem",
    backgroundColor:"rgba(66,89,133,0.07)",
    borderRadius:'10rem',
    marginTop:'20rem',
    shadowColor: '#000000',
    elevation:10,
    borderWidth: '1rem',
    margin: '10rem',
    borderColor:'rgba(66,89,133,0.29)'
  },
   textStyle:{
     alignSelf: 'center',
     color:'#fff',
   },
   courseCode:{
     fontFamily: 'Brother1816-Bold',
     fontSize: '17rem',
   },
   description:{
     fontSize: '12rem',
     padding: '5rem',
   },
   postedBy:{
    fontFamily: 'Brother1816-Bold',
    marginTop: '14rem',
   },
   BookSvg:{
     alignSelf:"center",
     margin: '17rem',
   }
})
 
export default HandOuListItem;