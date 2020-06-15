import React, { Component } from 'react';
import {ImageBackground,View, Text, Dimensions, Animated} from 'react-native';
import EStylesheet from 'react-native-extended-stylesheet'

import {Icon} from 'native-base'
import {ActivityIndicator} from 'react-native-paper'
const entireScreenWidth = Dimensions.get('window').width;
const rem = entireScreenWidth/380;

const styles = EStylesheet.create({
    image:{
        height:"100%",
        width:'100%'
      },
      wrapper:{
       flex:1
      },
      gradient:{
        height:"100%",
        width:'100%'  
      },
      logoImage:{
         alignSelf: 'center',
         position: "relative",
         marginTop:'100rem',
         height:'180rem',
         width:'180rem',
         marginBottom: '70rem',
      },
      '@media (min-height: 500) and (max-height: 700)': {
        logoImage:{
          marginTop:'80rem',
          height:'150rem',
          width:'150rem',
          alignSelf: 'center',
          position: "relative",
          marginBottom: '15rem',
       },
       loginText:{
        color:"#fff",
        fontSize: '35rem',
        fontWeight: 'bold',
        alignSelf:'center',
        marginBottom: '0rem',
       },
       userImage :{
        width:"230rem",
        height:"230rem",
        alignSelf: 'center',
        borderRadius: '20rem',
        borderWidth: "3rem",
        borderColor: "#FF912C",
        marginTop:'70rem'
      },
      },
      loginText:{
          color:"#fff",
          fontSize: '50rem',
          fontWeight: 'bold',
          alignSelf:'center',
          marginBottom: '0rem',
      },
      swipeText:{
        color:"#fff",
        fontSize: '13rem',
        fontWeight: 'bold',
        alignSelf:'center',
        marginBottom: '5rem',
      },
      form:{
       marginTop: '10rem',
      },
      welcomeTextView:{
         flex:20
      },
      userProfile:{
        flex:60
      },
      viewOne:{
        flex: 50,
        height:'50%'
        
      },
      viewTwo:{
        flex: 50,
        height:'50%'
      },
      spinner:{
         width:"60rem",
         height:'60rem',
         alignSelf: 'center',
         backgroundColor:"#FF912C",
         borderRadius:"50rem"
      },
      loadingText:{
        color:"#fff",
        alignSelf: 'center',
        fontSize: '18rem',
        fontWeight: 'bold',
        marginTop: "100rem",
      },
});
 
class Loading extends Component {
  state={
    loadingText:'Loading ',
    count:0,
}

  handleLoadingText= ()=>{
    let {count, loadingText} = this.state
   let interval=   setInterval(()=>{
       if(count<5){
        this.setState({count:++count,loadingText:loadingText.concat('.')},()=>{
        clearInterval(interval)
        }) 
       }
       else {
        this.setState({count:0, loadingText:'Loading '}, ()=>{
          clearInterval(interval)
        })
       }
    },500)
 }
    render() { 
        return (
              <View style={styles.wrapper}>
                 {this.handleLoadingText()}
                      <Animated.View 
                       style={[styles.viewOne]}>
                      <Animated.Image  style={[styles.logoImage,{
                        }]} resizeMode="cover" source={ require('../../assets/images/Logo/Logo.png')}/>
                      </Animated.View>
                    <Animated.View   style={[styles.form, styles.viewTwo]}>
                            <ActivityIndicator style={[styles.spinner]} color="#C4C4C4" size="large"/>
                            <Text style={styles.loadingText}> {this.state.loadingText}</Text>
                      </Animated.View>
                  </View> 
        );
    }
}
 
export default Loading;