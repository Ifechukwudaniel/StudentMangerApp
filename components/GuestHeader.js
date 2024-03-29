import React from 'react';
import {  Header, Left, Body, Right, Button, Title, Text, Icon,  } from 'native-base'
import {Image, StatusBar, Dimensions} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import HandBugger from '../assets/svg/handBugger.svg' 
const entireScreenWidth = Dimensions.get('window').width;
const rem = entireScreenWidth/380

const GuestHeader = (props) => {
  console.log(props.navigation)
    return (
       <Header transparent  style={styles.header}>
         <StatusBar backgroundColor="#0c0c0c" hidden={false} barStyle="light-content"/>
          <Left style={{flex:1}}>
          { !props.back ?   
            <Button     transparent>
              {/* <Image resizeMode="cover" style={styles.userImage} source={require('../assets/images/image.jpeg')}/> */}
            </Button>
            : 
            <Button  onPress={()=>props.navigation.goBack()}   transparent>
               <Icon style={{color:'#FF912C', fontSize:30}} type="FontAwesome5"  name="arrow-left"/>
            </Button>
            }
          </Left>
          <Body  style={{flex:1}}>
            <Title style={styles.textStyle}>{props.screenName}</Title>
          </Body>
          <Right style={{flex:1}}>
            <Button  onPress={()=>alert()}   transparent>
               <Icon style={{color:'#FFF'}} type="Ionicons"  name="notifications"/>
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
    }
})
export default GuestHeader;