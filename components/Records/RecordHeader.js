import React from 'react';
import {  Header, Left, Body, Right, Button, Icon, Segment  } from 'native-base'
import {Image, StatusBar, Dimensions, Text} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import HandBugger from '../../assets/svg/handBugger.svg' 
import Setting from '../../assets/svg/setting.svg'
import { TouchableOpacity } from 'react-native-gesture-handler';
const entireScreenWidth = Dimensions.get('window').width;
const rem = entireScreenWidth/380

const RecordHeader = ({onBackPress, screenName, style, noBackButton, closeButton, headerStyle}) => {
    return (
       <Header hasSegment transparent  style={styles.header}>
        <StatusBar backgroundColor="transparent" hidden={true} barStyle="light-content"/>
          <Left>
            <Button transparent>
              <HandBugger width={30*rem} height={30*rem}/>
            </Button>
          </Left>
          <Body>
            <Segment    style={{backgroundColor:"#0c0c0c", borderWidth:0}}>
              <TouchableOpacity style={styles.buttonStyleNotActive}>
                 <Text style={styles.buttonText}>Posts</Text>
              </TouchableOpacity>
              <TouchableOpacity  style={styles.buttonStyle}>
                <Text style={styles.buttonText}>Messages</Text>
              </TouchableOpacity>
            </Segment>
          </Body>
          <Right>
            <Button transparent>
               <Setting width={20*rem} height={25*rem}/>
            </Button>
          </Right>
       </Header>
    );
}
const styles = EStyleSheet.create({
    header:{
       backgroundColor: "#0C0C0E",
       paddingTop: '48rem',
       paddingBottom: '20rem',
       paddingLeft: '20rem',
       height:"90rem",
       borderWidth:'0rem',
       borderColor:'#0c0c0e'
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
    buttonStyle:{
      backgroundColor:'#FF912c',
      borderColor:"transparent",
      borderRadius:'5rem',
      width:"90rem",
      color:"#fff",
      height:"40rem",
      marginLeft: '3rem',
    },
    buttonText:{
      alignSelf:'center',
      color:'#fff',
      marginTop: '10rem',
      fontSize: '15rem',
    },
    segmentStyle:{
      backgroundColor:"transparent", 
      borderWidth:0
 },
 buttonStyleNotActive:{
  backgroundColor:'#242426',
  borderColor:"transparent",
  borderRadius:'5rem',
  width:"90rem",
  color:"#fff",
  height:"40rem",
  marginLeft: '3rem',
 },
 buttonTextNotActive:{
  alignSelf:'center',
  color:'#7C7B7C',
  marginTop: '10rem',
  fontSize: '15rem',
},
})
export default RecordHeader;