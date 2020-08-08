import React, {Component} from 'react';
import { View,TextInput, TouchableOpacity, Dimensions, Text, Animated, FlatList, Easing} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet'
import BlockIcon from '../../assets/svg/BlockIcon.svg'
import ListIcon from '../../assets/svg/ListIcon.svg'
import ShowAllSvg from '../../assets/svg/showAll.svg'
import { Left, Right, Icon } from 'native-base';
import AttendanceListItem from '../Attendance/AttendanceListItem';
import Setting from '../Settings';
const entireScreenWidth = Dimensions.get('window').width;
const rem = entireScreenWidth/380
import {connect} from 'react-redux'
import { getMaterials, searchMaterials } from '../../Redux/Actions/materials';
import {ActivityIndicator} from 'react-native-paper'
import HandOuListItem from '../Handout/HandOutListItem';
import BlockHandOutItem from '../Handout/BlockHandOutItem';
import RBSheet from 'react-native-raw-bottom-sheet';


class Home extends Component {
  state= {
    openFilter:false,
    searchValue:'',
    searchKeyWord:'',
    listTypeBlock:false,
    listTypeList:true,
    animation:false,
    value:new Animated.Value(0)
  }

  offset= 0

  UNSAFE_componentWillMount(){
    this.props.getMaterials()
  }

  renderHandouts=(loading, materials)=>{
     if(loading){
       return   <ActivityIndicator   style={[styles.spinner]} color="#FF912C"  size="large"/>
     }
    return (
      <FlatList
      data={materials}
      style={styles.materialList}
      renderItem ={(data)=>(<HandOuListItem  navigation= {this.props.navigation} {...data.item}/>)}
      keyExtractor={item=>item._id}
      numColumns={2}
      onScrollBeginDrag= {
       (event)=>{
        // this.props.header.current.toggleHeader()
        // this.animateSlide()
        var currentOffset = event.nativeEvent.contentOffset.y;
        var direction = currentOffset > this.offset ? 'down' : 'up';
        this.offset = currentOffset;
        if(direction==="up"){
          this.animateSlideUp()
          this.props.header.current.animateUp()
        }
        if(direction==="down"){
          this.animateSlideDown()
          this.props.header.current.animateDown()
        }
       }
     }
   />
    )
  }

   heightFirst = this.state.value.interpolate({
    inputRange: [0, 1],
    outputRange: [0*rem, -60*rem],  
  })

  heightSecond = this.state.value.interpolate({
    inputRange: [0, 1],
    outputRange: [0*rem, -30*rem],  
  })

  renderHandoutsBlock=(loading, materials)=>{
    if(loading){
      return   <ActivityIndicator   style={[styles.spinner]} color="#FF912C"  size="large"/>
    }
   return (
     <FlatList
     data={materials}
     style={styles.materialList}
     renderItem ={(data)=>(<BlockHandOutItem navigation= {this.props.navigation} {...data.item}/>)}
     keyExtractor={item=>item._id}
     numColumns={1}
     onScrollBeginDrag= {
       (event)=>{
        var currentOffset = event.nativeEvent.contentOffset.y;
        var direction = currentOffset > this.offset ? 'down' : 'up';
        this.offset = currentOffset;
        if(direction==="up"){
          this.animateSlideUp()
          this.props.header.current.animateUp()
        }
        if(direction==="down"){
          this.animateSlideDown()
          this.props.header.current.animateDown()
        }
       }
     }
  />
   )
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
      duration: 200,
  }).start()
  })
 }

 render(){
          const {openFilter}= this.state
          const {loading, materials,searchEmpty, error} = this.props
          return (
          <View style={styles.container}>
              {/* <Animated.View style={{overflow:1}}>
                 <TextInput onChangeText={(value)=>this.props.searchMaterials(value)}  placeholderTextColor="rgba(255,255,255,0.16)" placeholder="Search" style={styles.searchBox}/>
              </Animated.View> */}
              <Animated.View style={[styles.HandOuSlideView, {
                transform:[
                  {
                    translateY:this.heightFirst
                  }
                ]
              }]}>
                  <Left>
                    <Text style={styles.handText} > Hand-outs</Text>
                  </Left>
                  <Right style={styles.rightIcon}>
                  <TouchableOpacity  style={[styles.showAllSvg, { alignSelf:'flex-end', opacity:0.9}]} >
                        <Icon style={styles.font} type="FontAwesome5"  name="search"/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.RBSheetListType.open()} style={[styles.showAllSvg, { alignSelf:'flex-end', opacity:0.9}]} >
                        <BlockIcon/>
                  </TouchableOpacity>
                  <RBSheet
                  closeOnDragDown
                  ref={ref => {
                  this.RBSheetListType = ref;
                   }}
                   height={200*rem}
                   openDuration={250}
                  customStyles={{
                   container: {
                    backgroundColor:'#0C0C0E'
                    }
                   }}>
 
                  </RBSheet>
                  </Right>
              </Animated.View>
              <Animated.View style={[styles.containerView,{
                transform:[
                  {
                    translateY:this.heightSecond
                  }
                ]
              }]}>
                  {this.renderHandoutsBlock(loading, materials)}
              </Animated.View>
          </View>
        )
      }
  }


const styles = EStyleSheet.create({
  container :{
      flex:1
  },
  spinner:{
    alignSelf:'center',
    color:"#FF912C",
    
  },
  GridViewBlockStyle: {
    justifyContent: 'center',
    flex:1,
    alignItems: 'center',
    height: 100,
    margin: 5,
    backgroundColor: '#00BCD4'
   
  },
  searchBox:{
      backgroundColor: "rgba(254,254,255,0.07)",
      marginLeft: '15rem',
      marginRight: '15rem',
      marginTop:'14rem',
      height:'50rem',
      borderRadius: '5rem',
      fontSize: '18rem',
      color:"#fff",
      paddingLeft: "20rem",
  },
   listTypes:{
     flexDirection: 'row',
     flexWrap: 'wrap',
     marginLeft:'15rem',
     marginTop:'5rem'
   },
   listTypesItem:{
      backgroundColor:"rgba(255,252,252,0.07)",
      margin: '2rem',
      marginRight:'7rem',
      borderRadius:'2rem'
   },
   HandOuSlideView:{
     flexDirection: 'row',
     height:'50rem'
    //  transform:[
    //    {
    //      translateY:-60
    //    }
    //  ]
   },
   handText:{
     color:"#fff",
     marginTop:'10rem',
     marginLeft: '20rem',
   },
   showAllSvg:{
    justifyContent: 'flex-end',
    marginRight: '10rem',
    marginTop:'10rem',
   },
   rightIcon:{
     flexDirection: 'row',
     justifyContent: 'flex-end',
   },
   font:{
    color:'#FF912C',
    fontSize:'22rem',
  },
//  materialList:{
//    transform:[
//      {
//        translateY:-30
//      }
//     ]
//  }

})
function mapStateToProps(state) {
  return {
    materials: state.material.materials,
    loading:state.material.loading,
    error:state.material.error,
    searchEmpty:state.material.searchEmpty
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMaterials:()=>{
      dispatch(getMaterials())
    },
    searchMaterials:(text)=>{
      dispatch(searchMaterials(text))
    },
  }
}
 
export default  connect(mapStateToProps, mapDispatchToProps)(Home);
