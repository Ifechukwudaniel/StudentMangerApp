import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import UserInfo from './extra/user-info-component';
import DepartmentSetting from './extra/DepartmentSetting';
import {Grid,Row} from 'react-native-easy-grid'
import LevelSetting from './extra/LevelSetting';
import PaymentSetting from './extra/PaymentSetting';
import GetHelpSetting from './extra/GetHelpSetting';
import FeedbackSetting from './extra/GiveUsFeedback';
 
 
class Setting extends Component {
    render() { 
        return (
           <View style={styles.container}>
            <ScrollView>
            <Grid>
                  <UserInfo/>
                  <Row>
                        <DepartmentSetting onPress= {()=>{this.props.navigation.navigate('Department')}}/>
                   </Row>
                   <Row>
                        <LevelSetting onPress= {()=>{this.props.navigation.navigate('level')}}/>
                   </Row>
                   <Row>
                        <PaymentSetting onPress= {()=>{this.props.navigation.navigate('paymentSetting')}}/>
                   </Row>
                   <Row>
                        <GetHelpSetting onPress= {()=>{}}/>
                   </Row>
                   <Row>
                        <FeedbackSetting onPress= {()=>{}}/>
                   </Row>
                   
            </Grid>
            </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
});
 
export default Setting;