import React, { Component } from 'react';
import { View, Text, StatusBar, ScrollView, FlatList, Animated, Dimensions, Easing,TouchableOpacity } from 'react-native';
import { getBlogs } from '../../Redux/Actions/blogs';
import {connect} from 'react-redux'
import {ActivityIndicator} from 'react-native-paper'
import PostItem from './PostItem';
import PostListItem from './PostListItem';
import EStyleSheet from 'react-native-extended-stylesheet'
const entireScreenWidth = Dimensions.get('window').width;
const rem = entireScreenWidth/380
 
class Post extends Component {
  state= {
    animation:false,
    value:new Animated.Value(0)
  }

  offset= 0

  height = this.state.value.interpolate({
    inputRange: [0, 1],
    outputRange: [0*rem, -100*rem],  
  })


    UNSAFE_componentWillMount(){
        this.props.getBlogs()
        console.log(this.props.header)
    }


 animateSlideUp = ()=> {
  this.setState({animation:true}, ()=>{
    Animated.timing(this.state.value, {
      toValue: this.state.animation? 1 : 0,
      duration: 150,
      easing:Easing.ease,
      duration: Platform.select({
        ios:150,
        android:50 
      }),
  }).start()
  })
 }

 animateSlideDown = ()=> {
  this.setState({animation:false}, ()=>{
    Animated.timing(this.state.value, {
      toValue: this.state.animation? 1 : 0,
      duration: Platform.select({
        ios:150,
        android:50 
      }),
  }).start()
  })
 }

    renderBlogs= ()=>{
      return (
        <Animated.FlatList
           data={this.props.blogs}
           renderItem ={(data)=>(<PostListItem navigation= {this.props.navigation} {...data.item}/>)}
           keyExtractor={item=>item._id}
           onScrollEndDrag={
             (event)=>{
               var currentOffset = event.nativeEvent.contentOffset.y;
               var direction = currentOffset > this.offset ? 'down' : 'up';
               this.offset = currentOffset;
               if(direction==="up"){
                //  this.props.header.current.animateUp()
                //  this.animateSlideUp()
               }
              if(direction==="down"){
                // this.props.header.current.animateDown()
                // this.animateSlideDown()
              }
            }}/>
     )}


    render() { 
      const {loading, error, blogs} = this.props

      if(loading){
         return (
           <View style={styles.container}>
              <ActivityIndicator   style={[styles.spinner]} color="#FF912C"  size="large"/>
           </View>
         )
        }

        if(error){
          return (
            <View style={[{justifyContent:'center'}]}>
              <View style={styles.errorMessage}>
                   <Text style={styles.errorText}>  Can't Connect to Server</Text>
                   <TouchableOpacity onPress= {()=>this.props.getBlogs()}>
                       <Text style={styles.retry}> Retry</Text>
                   </TouchableOpacity>
              </View>
            </View>
          )
        }

       return (
            <Animated.View style= {{
              transform:[
                {
                  translateY:this.height
                }
              ]
            }}>
              {this.renderBlogs()}
            </Animated.View>
        );
    }
}

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center'
    },
    spinner:{
      alignSelf:'center',
      color:"#FF912C",
    },
    errorText:{
      color:"#fff",
      alignSelf: 'center',
      fontSize: '17rem',
      // fontWeight: 'bold',x
      marginTop: '10rem',
      letterSpacing: 1.3,
    },
    errorMessage:{
      width:'100%',
      height:'80%',
      justifyContent: 'center',
    },
    retry:{
      color:"rgba(255,255,255,0.7)",
      alignSelf: 'center',
      fontSize: '13rem',
      marginTop: '13rem',
      letterSpacing: 1.3,
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
  export default connect(mapStateToProps, mapDispatchToProps)(Post)