import React, { useState, useEffect } from 'react';
import { View,TextInput, TouchableOpacity, Dimensions, Text, Animated} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet'
import BlockIcon from '../../assets/svg/BlockIcon.svg'
import ListIcon from '../../assets/svg/ListIcon.svg'
import HandOuListItem from '../Handout/HandOutListItem';
import ShowAllSvg from '../../assets/svg/showAll.svg'
import { Left, Right } from 'native-base';
import ActivityItem from '../Activity/ActivityItem';
const entireScreenWidth = Dimensions.get('window').width;
const rem = entireScreenWidth/380


const Home = () => {
  const [blockList, setBlockList] = useState(false)
  const [bulletList, setBulletList] = useState(true)
        return (
         <View style={styles.container}>
            <View>
                <TextInput  placeholderTextColor="rgba(255,255,255,0.16)" placeholder="Search" style={styles.searchBox}/>
            </View>
            <View style={styles.listTypes}>
                 <TouchableOpacity  style={[styles.listTypesItem, {opacity:0.2}]}>
                 <Animated.View>
                 <BlockIcon width={30*rem} height={30*rem}/>
                 </Animated.View>
                 </TouchableOpacity>
                 <TouchableOpacity  style={styles.listTypesItem}>
                    <ListIcon width={30*rem} height={30*rem}/>
                 </TouchableOpacity>
            </View>
            <View style={styles.HandOuSlideView}>
                <Left>
                  <Text style={styles.handText} > Hand-outs</Text>
                </Left>
                <Right>
                <TouchableOpacity style={[styles.showAllSvg, { alignSelf:'flex-end'}]} >
                      <ShowAllSvg/>
                 </TouchableOpacity>
                </Right>
            </View>
            <ActivityItem time="07:00" activityType={0} courseCode="Mth 111"/>
            <ActivityItem time="08:00" activityType={1} courseCode="MTH 222"/>
            <ActivityItem time="09:00"  activityType={2} courseCode="MTH 321"/>
         </View>
        )
  }

const styles = EStyleSheet.create({
  container :{
      flex:1
  },
  searchBox:{
      height:'20rem',
      backgroundColor: "rgba(254,254,255,0.07)",
      marginLeft: '15rem',
      marginRight: '15rem',
      marginTop:'23rem',
      height:'60rem',
      borderRadius: '5rem',
      fontSize: '18rem',
      color:"#fff",
      paddingLeft: "20rem",
  },
   listTypes:{
     flexDirection: 'row',
     flexWrap: 'wrap',
     marginLeft:'15rem',
     marginTop:'10rem'
   },
   listTypesItem:{
      backgroundColor:"rgba(255,252,252,0.07)",
      margin: '2rem',
      marginRight:'7rem',
      borderRadius:'2rem'
   },
   HandOuSlideView:{
     flexDirection: 'row',
    //  height:'25rem'
   },
   handText:{
     color:"#fff",
     marginTop:'20rem',
     marginLeft: '20rem',
   },
   showAllSvg:{
    justifyContent: 'flex-end',
    marginRight: '20rem',
    marginTop:'20rem',
   }

})
 
export default Home;
