import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import colors from "../../constants/Colors"
import content from "../../constants/Content"
import InputField from './InputField';
import NextArrowButton from './NextArrowButton'
import propType from 'prop-types'

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    }, 
    mainViewWrapper:{
        marginTop:70,
        flex:1
    },
    loginHeader: {
        fontSize: 70,
        color: colors.white,
        fontWeight: "300",
        marginBottom: 40,
      },
      avoidView: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,
        flex:1
       },
});
 
class LoginForm extends Component {

    state={
        matricNumber:"",
        password:"",
        errors:[]
    }
    handleMatricNumber = (value)=>{
       this.setState({matricNumber:value})
    }
   
    handlePassword = (value)=>{
        this.setState({password:value})
     }


    render() { 
        const {
            handleNextButton
        } = this.props
        return (
           <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
                <View style={styles.mainViewWrapper}>
                    <ScrollView style={styles.avoidView}>
                         <Text style={styles.loginHeader}> {content.login} </Text>
                         <InputField 
                            labelText="Matric Number" 
                            labelTextSize={14} 
                            labelColor={colors.white} 
                            textColor={colors.white} 
                            borderBottomColor={colors.white} 
                            inputType="email" 
                            customStyle={{marginBottom:30}} 
                            onChange={this.handleMatricNumber}
                            value = {this.state.matricNumber}
                         />
                          <InputField 
                            labelText="Password" 
                            labelTextSize={14} 
                            labelColor={colors.white} 
                            textColor={colors.white} 
                            borderBottomColor={colors.white} 
                            inputType="password" 
                            customStyle={{marginBottom:30}} 
                            onChange= {this.handlePassword}
                            value= {this.state.password}
                         />
                    </ScrollView>
                </View>
                <NextArrowButton  handleNextButton = {handleNextButton}/>
          </KeyboardAvoidingView> 
        );
    }
}
LoginForm.propType= {
    handleNextButton:propType.func.isRequired
}
 
export default LoginForm;