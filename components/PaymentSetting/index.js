import React from 'react';
import {View} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import Header from '../Header'




 
const PaymentSetting = ({navigation}) => {
    return (
        <View style={styles.container}>
             <Header  style={styles.headerTextStyle} screenName="Payment Setting" onBackPress= {()=>navigation.push("Settings")} />
        </View>
    );
}
const styles = EStyleSheet.create({
    container:{
     flex: 1,
    },
    headerTextStyle:{
        width:'200rem'
    }
})
export default PaymentSetting;