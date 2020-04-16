import React, { Component } from 'react';
import { View, Text ,TouchableOpacity, ScrollView, Platform} from 'react-native';
import Ripple from 'react-native-material-ripple';
import EStyleSheet from 'react-native-extended-stylesheet'
import Colors from '../../constants/Colors';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import {Svg, Path, SvgXml} from 'react-native-svg'
import {Dimensions} from 'react-native'
import  MaterialSvg from "../../assets/svg/material.svg";
import  AttendanceSvg from "../../assets/svg/attendance.svg";
import  ChatSvg from "../../assets/svg/chat.svg";
import  NewsSvg from "../../assets/svg/news.svg";
import  TimeTableSvg from "../../assets/svg/timeTable.svg";
import  EventSvg from "../../assets/svg/event.svg";
const  rem = Dimensions.get('window').width/360


class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.homeText}> Home </Text>
                     <TouchableOpacity style={styles.notifications} onPress={()=>this.props.navigation.navigate('notifications')}>
                      <MaterialIcon style={styles.icon} size={37*rem} color="#fff" name='notifications-active'/>
                      <Svg   style={styles.svg}  > 
                         <Path style={styles.notificationsNumber} d="M28,13c0,7.18-9,7.181-14,13C10,20.946,0,20.18,0,13,8,6.417,6.268,0,14,0S21,7.946,28,13Z" fill="#fff">
                        </Path>
                        <Text style={styles.notifyText}> 20 </Text>
                      </Svg>
                    </TouchableOpacity>
              </View>
              <ScrollView style={styles.menu}>
               <View style={styles.menuGroup}>
                <TouchableOpacity style={styles.menuItem} onPress={()=>this.props.navigation.navigate('Materials')}>
                      <View style={styles.shadow}>
                        <View style={styles.menuSvg}>
                          <MaterialSvg />
                        </View>
                        <Text style={styles.menuText}>  Materials </Text>
                      </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={()=>this.props.navigation.navigate('timeTable')}>
                      <View style={styles.shadow}>
                        <View style={styles.menuSvg}>
                          <TimeTableSvg/>
                        </View>
                        <Text style={styles.menuText}>  Time Table </Text>
                      </View>
                  </TouchableOpacity>
               </View>
               <View style={styles.menuGroup}>
                <TouchableOpacity style={styles.menuItem}  onPress={()=>this.props.navigation.navigate('attendance')}>
                      <View style={styles.shadow}>
                        <View style={styles.menuSvg}>
                          <AttendanceSvg/>
                        </View>
                        <Text style={styles.menuText}>  Attendance  </Text>
                      </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem}  onPress={()=>this.props.navigation.navigate('Blogs')}>
                      <View style={styles.shadow}>
                        <View style={styles.menuSvg}>
                          <NewsSvg/>
                        </View>
                        <Text style={styles.menuText}>  latest Gist  </Text>
                      </View>
                  </TouchableOpacity>
               </View>
               <View style={styles.menuGroup}>
                <TouchableOpacity style={styles.menuItem} onPress={()=>this.props.navigation.navigate('chat')}>
                      <View style={styles.shadow}>
                        <View style={styles.menuSvg}>
                          <ChatSvg />
                        </View>
                        <Text style={styles.menuText} >  Chat </Text>
                      </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.menuItem} onPress={()=>this.props.navigation.navigate('event')}>
                      <View style={styles.shadow}>
                        <View style={styles.menuSvg}>
                          <EventSvg/>
                        </View>
                        <Text style={styles.menuText}>  Events </Text>
                      </View>
                  </TouchableOpacity>
               </View>
              </ScrollView>
            </View>
        )
  }
}

const styles = EStyleSheet.create({
  container :{
      flex:1,
      marginTop: '70rem',
      marginLeft: '10rem',
      marginRight: "10rem",
  },
  homeText:{
      color:Colors.white,
      fontSize:"36rem",
      fontFamily:"Itim",
      marginLeft: "20rem",
  },
  notifications:{
     marginLeft: '150rem',
     justifyContent: 'center',
     flexDirection:'row'
  },
  icon:{
      marginTop: '5rem',
  },
  svg:{
     width:"28rem",
     height:'26rem'  
  },
  notificationsNumber:{
      backgroundColor: Colors.white,
      height:'30rem',
      width:'40rem',
  },
  notificationsNumberText:{
     textAlign:'center'
  },
  notifyText:{
    fontSize:"12rem",
    fontFamily:"Itim",
    textAlign:"center",
    justifyContent:"center",
    lineHeight:'25rem',
    marginRight:"3rem",
    color:"#000"
  },
  menu:{
  ...Platform.select({
    ios:{
      flex: 1,
      marginTop: '40rem',
    },
    android:{
      flex: 1,
      marginTop: '15rem',
    }
  })
  },
  menuItem:{
      width:'160rem',
      height:'161rem',
      backgroundColor: "#252525",
      borderRadius:'30rem',
      shadowColor: "#3F4141",
      shadowOffset: {
            width: '-1.5rem',
            height: '-1.5rem',
      },
      shadowOpacity: 1,
      shadowRadius: '3.84rem',
      elevation: '5rem',
      marginLeft: '10rem',
      marginRight:'10rem'
  },
  shadow:{
    shadowColor: "#000",
    shadowOffset: {
        width: '3rem',
        height: '3rem',
  },
  shadowOpacity: '1rem',
  shadowRadius: '3.84rem',
  },
  menuGroup:{
    flexDirection:'row',
    marginTop: '20rem',
  },
  menuSvg:{
    alignSelf: 'center',
    marginTop:'30rem'
  },
  menuText:{
    fontSize:"20rem",
    fontFamily:"Itim",
    textAlign:"center",
    lineHeight:'25rem',
    color:Colors.white
  }
})
 
export default Home;
