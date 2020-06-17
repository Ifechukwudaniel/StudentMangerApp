import React, { useState } from 'react';
import { View,TextInput, TouchableOpacity, Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet'
import Header from '../Header'
import HandOutItem from '../Handout/HandOutItem.js';
import BlockIcon from '../../assets/svg/BlockIcon.svg'
import ListIcon from '../../assets/svg/ListIcon.svg'
const entireScreenWidth = Dimensions.get('window').width;
const rem = entireScreenWidth/380


const Home = () => {
  const [blockList, setBlockList] = useState(true)
  const [bulletList, setBulletList] = useState(false)
        return (
         <View style={styles.container}>
            <Header/>
            <View>
                <TextInput  placeholderTextColor="rgba(255,255,255,0.16)" placeholder="Search" style={styles.searchBox}/>
            </View>
            <View style={styles.listTypes}>
                 <TouchableOpacity onPress={()=>{
                   !blockList ?   setBlockList(true) : setBulletList(false)
                 }} style={styles.listTypesItem}>
                    <BlockIcon width={30*rem} height={30*rem} style={{opacity:blockList?1: 0.4}}/>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={()=>{
                     !bulletList ?   setBulletList(true) : setBlockList(false)
                 }} style={styles.listTypesItem}>
                    <ListIcon width={30*rem} height={30*rem} style={{opacity:bulletList ? 1: 0.4}}/>
                 </TouchableOpacity>
            </View>
            <HandOutItem/>
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
   }
})
 
export default Home;
