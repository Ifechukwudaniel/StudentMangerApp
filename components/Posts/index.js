import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { BlogCard } from './extra/card-component';
import Header from '../Header';
import { getBlogs } from '../../Redux/Actions/blogs';
import {connect} from 'react-redux'
import ContentLoader,{Facebook,Rect} from 'react-content-loader/native'
 
class Blog extends Component {

    UNSAFE_componentWillMount(){
        StatusBar.setHidden(true)
        this.props.getBlogs()
    }
    render() { 
      const {loading} = this.props
        return (
            <>
            <View>
              
            </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
 

function mapStateToProps(state) {
    return {
      blogs: state.blogs.blogs,
      loading:state.blogs.loading,
      error:state.blogs.error,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getBlogs:()=>{
        dispatch(getBlogs())
      },
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Blog)