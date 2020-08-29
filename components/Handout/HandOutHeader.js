import React from 'react';
import {  Header, Left , Button, Icon, Body, Right} from 'native-base'
import {Dimensions, Text, View, TouchableOpacity, StatusBar} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
const entireScreenWidth = Dimensions.get('window').width;
const rem = entireScreenWidth/380

const HandOutHeader = (props) => {
    return (
       <Header  transparent  style={[styles.header]}>
        <StatusBar hidden={false} backgroundColor="#0C0C0E" barStyle="light-content" />
           <View style={styles.headerTop}>
             <TouchableOpacity onPress = {()=>props.closeModal()} style= {styles.button}   transparent>
               <Icon style={styles.font} type="FontAwesome5"  name="arrow-left"/>
            </TouchableOpacity>
              <Text style={styles.handOutCourseCode}> {props.courseCode} Handout </Text>
           </View>
          <View style={styles.headerBottom}>
              <TouchableOpacity onPress={()=>props.openDownloads()} style ={styles.buttonAction} >
                  <Icon style={styles.fontButton} type="FontAwesome5"  name="file-download"/>
                  <Text style={styles.text}> Download </Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={()=>props.openOrders()} style ={styles.buttonAction} >
                  <Icon style={styles.fontButton} type="FontAwesome5"  name="shopping-cart"/>
                  <Text style={styles.text}> Order </Text>
              </TouchableOpacity>
          </View>
       </Header>
    );
}
const styles = EStyleSheet.create({
    header:{
       backgroundColor: "#0C0C0E",
       height:"110rem",
       borderWidth:'0rem',
       borderColor:'#0c0c0e',
       alignContent: 'flex-start',
       flexDirection: 'column',
    },
    userImage:{
        height: '50rem',
        width:'50rem',
        borderRadius: '70rem',
        borderWidth: '2rem',
        borderColor: "#FF912C",
        alignSelf: 'center',
    },
    textStyle:{
        color:"#fff",
        alignSelf: 'center',
        paddingTop:0,
        justifyContent: 'center',
    },
    handOutCourseCode:{
       color:"#fff",
       textAlign:'center',
       marginLeft: '63rem',
       fontSize: '17rem',
       fontWeight: 'bold',
       marginTop: '5rem',
    },
    headerTop:{
      flexDirection: 'row',
      width:'100%',
      flex: 1,
      height:'40rem'
    },
    headerBottom:{
      flexDirection: 'row',
      width:'100%',
      flex: 1,
      height:'50rem',
      justifyContent: 'space-around',
    },
    button:{
     marginLeft: '20rem',
    },
    buttonAction:{
      backgroundColor:" rgba(255, 255, 255, 0.17)",
      height:'35rem',
      width:'130rem',
      flexDirection: 'row',
      paddingLeft: '10rem',
      borderRadius:'17rem',
      justifyContent: 'center',
    },
    font:{
      color:'#FF912C',
      fontSize:'30rem',
    },
    fontButton:{
      fontSize:'23rem',
      color:'#FF912C',
      lineHeight:'35rem',
      textAlign:'center'
    },
    text:{
      color:'#A9A9A9',
      fontSize: '14rem',
      lineHeight:'35rem'
    }

})
export default HandOutHeader;