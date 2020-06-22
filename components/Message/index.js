import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar} from 'react-native';
import { getBlogs } from '../../Redux/Actions/blogs';
import {connect} from 'react-redux'
 
class Message extends Component {
    render() { 
      const {loading} = this.props
        return (
            <View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
 
 export default Message