import React from 'react';
import {  Header, Left, Body, Right, Button, Title, Text, Icon } from 'native-base'
import {View, StatusBar} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
 
const HeaderComponent = ({onBackPress, screenName, style, noBackButton}) => {
    return (
        <View style={styles.container}>
        <Header  style={styles.header}>
              <StatusBar  hidden={true} barStyle='light-content' />
          <Left>
            {
                noBackButton?(
                    <View/>  
                ):(
                    <>
                    <Button transparent onPress={()=>onBackPress()}>
                        <Icon name='arrow-back' style={styles.icon} />
                        <Text style={styles.backText}>Back</Text>
                        </Button>
                </>
                )
            }
          </Left>
          <Body>
            <Title style={[styles.title, style]}> {screenName}</Title>
          </Body>
          <Right>
          </Right>
        </Header>
        </View>
    );
}
const styles = EStyleSheet.create({
    header:{
        backgroundColor: "#252525" ,
        borderBottomWidth: "0rem",

    },
    title:{
        fontSize: '22rem', 
        color:"#fff",
        fontFamily:"Itim",
    },
    backText:{
        fontSize: '20rem', 
        color:"#fff",
        fontFamily:"Itim",
    },
    icon:{
        color:"#fff"
    }
   
})
export default HeaderComponent;