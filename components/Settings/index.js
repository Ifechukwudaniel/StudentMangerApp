import React, { Component } from 'react';
import { View, Text, StyleSheet , StatusBar } from 'react-native';
 
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
 
class Setting extends Component {
    componentDidMount(){
      StatusBar.setBarStyle('light-content',true)
    }
    
    render() { 
        return (
            <View style={styles.container}>
                <Text>Setting</Text>
            </View>
        );
    }
}
 
export default Setting;