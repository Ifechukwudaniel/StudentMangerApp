import React, {useState} from 'react';
import {View, StatusBar, TouchableOpacity, ScrollView} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../Header'
import { Text,  } from 'native-base';
import DownloadItem from './downloadItem';



 
const Downloads = ({navigation}) => {
    return (
        <View style={styles.container}>
             {/* <Header style={styles.headerTextStyle}  screenName="Downloads"  noBackButton /> */}
             <ScrollView style={styles.scrollView}>
                 <DownloadItem/>
                 <DownloadItem/>
                 <DownloadItem/>
                 <DownloadItem/>
                 <DownloadItem/>
                 <DownloadItem/>
                 <DownloadItem/>
                 <DownloadItem last/>
             </ScrollView>
        </View>
    );
}
const styles = EStyleSheet.create({
    container:{
     flex: 1,
    },
    headerTextStyle:{
        width:"200rem"
    },
    scrollView:{
       paddingTop: "50rem",
       paddingBottom: '50rem',
    }
})
export default Downloads;