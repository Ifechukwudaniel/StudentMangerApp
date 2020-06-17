import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage, StatusBar,ImageBackground } from 'react-native';
import LoginForm from './LoginForm';
import Keys from '../../constants/Keys';
import SignUpForm from './SignUpForm';
import Loading from './Loading';
import { LinearGradient } from 'expo-linear-gradient';
import EStylesheet from 'react-native-extended-stylesheet'

const styles = EStylesheet.create({
    container:{
      flex:1
    },
    image:{
        height:"100%",
        width:'100%',
      },
      gradient:{
        height:"100%",
        width:'100%'  
      }
});
 
class Auth extends Component {
    state={
       form:0,
       loading:false
    }
    handleHome= ()=>{
       this.props.navigation.navigate("Home")
    }

    changeForm= ()=>{
        this.setState({loading:true })
        setTimeout(()=>{
            this.setState({form:this.state.form==1? 0 :1, loading:false })
        }, 5000)
    }
    handleForms = ()=>{
        const {form,loading} = this.state

        if(loading){
            return <Loading/>
        }
         if(form===0 &&!loading){
             return <SignUpForm goToHome={this.handleHome}  changeForm= {this.changeForm}/> 
         } 
         if(form==1 && !loading){
             return <LoginForm goToHome={this.handleHome} changeForm= {this.changeForm}/>
         }
    }
    render() { 
        return (
            <View style={styles.container}>
              <StatusBar barStyle="light-content"/>
                <ImageBackground style={styles.image} resizeMode="cover" source={require('../../assets/images/Login.png')} >
                    <LinearGradient colors={['rgba(15,15,15,0.56)','rgba(15,15,18,0.96)', 'rgba(15,15,18,1)']} style={styles.gradient}>
                    {this.handleForms()}
                    </LinearGradient>
                </ImageBackground>
            </View>
        );
    }
}
 
export default Auth;