import React from 'react';
import {  Header, Left, Body, Right, Button, Title, Text, Icon } from 'native-base'
import {View, StatusBar, Platform} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
 
const HeaderComponent = ({onBackPress, screenName, style, noBackButton, closeButton, headerStyle}) => {
    return (
        <View>
        <Header  style={[styles.header, headerStyle]}>
              <StatusBar  hidden={true} barStyle='light-content' />
          <Left>
            {
                noBackButton?(
                    <View/>  
                ):(
                    <>
                    <Button transparent onPress={()=>onBackPress()}>
                        <Icon name='arrow-back' style={styles.icon} />
                        { Platform.OS!='android'? <Text style={styles.backText}>Back</Text> :<Text style={styles.backText}></Text>} 
                     </Button>
                </>
                )
               
            }
            {
                !closeButton?(
                    <View/>  
                ):(
                    <>
                    <Button transparent onPress={()=>onBackPress()}>
                        { Platform.OS!='android'? <Text style={styles.backText}>Close </Text> :
                         (
                              <>
                            <Icon name='arrow-back' style={styles.icon} />
                             <Text style={styles.backText}></Text>
                             </>
                        )} 
                     </Button>
                </>
                )
            
            }
          </Left>
          <Body>
            { Platform.OS!=='android'? <Title style={[styles.title, style]}> {screenName}</Title> : <Title style={[styles.title]}>{screenName}</Title> } 
          </Body>
          <Right>
          </Right>
        </Header>
        </View>
    );
}
const styles = EStyleSheet.create({
    header:{
        ...Platform.select({
            ios:{
                backgroundColor: "#252525" ,
                 borderBottomWidth: "0rem",
            },
            android:{
                backgroundColor:'#121212',
                borderBottomWidth: '1rem',
                borderColor: "#000",
                borderBottomColor: "#d3d3d3",
            }
            
        }),
    },
    title:{
        fontSize: '22rem', 
        color:"#fff",
        fontFamily:"Itim",
        textAlign:'center'
    },
    backText:{
        ...Platform.select({
            ios:{
                fontSize: '20rem', 
                color:"#fff",
                fontFamily:"Itim",
            },
            android:{
              
            }
        })
    },
    icon:{
        color:"#fff"
    }
   
})
export default HeaderComponent;