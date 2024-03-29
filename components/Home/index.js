import React, {Component} from 'react';
import { View,TextInput, TouchableOpacity, Dimensions, Text, Animated, FlatList, Easing, ScrollView} from 'react-native';
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
import { Modal } from 'react-native';
import IconListType from '../../assets/svg/iconlisttype.svg'


class Home extends Component {
  state= {
    openFilter:false,
    searchValue:'',
    searchKeyWord:'',
    listTypeList:true,
    animation:false,
    openModal:false,
    value:new Animated.Value(0)
  }

  offset= 0

  UNSAFE_componentWillMount(){
    if(this.props.materials.length===0){
      this.props.getMaterials()
    }
  }

  renderHandouts=(loading, materials, error, searchEmpty)=>{
     if(loading){
       return   <ActivityIndicator   style={[styles.spinner]} color="#FF912C"  size="large"/>
     }

     if(error){
       return (
         <View style={[{justifyContent:'center'}]}>
           <View style={styles.errorMessage}>
                <Text style={styles.errorText}>  Can't Connect to Server</Text>
                <TouchableOpacity onPress= {()=>this.props.getMaterials()}>
                    <Text style={styles.retry}> Retry</Text>
                </TouchableOpacity>
           </View>
         </View>
       )
     }

     if(searchEmpty){
      return (
        <View style={[styles.container]}>

        </View>
      )
    }

    return (
      <FlatList
      key={'h'}
      data={materials}
      style={styles.materialList}
      renderItem ={(data)=>(<HandOuListItem  navigation= {this.props.navigation} {...data.item}/>)}
      keyExtractor={item=>item._id}
      removeClippedSubViews={true}
      scrollEventThrottle={16}
      numColumns={2}
      onScroll= {
       (event)=>{
        // this.props.header.current.toggleHeader()
        // this.animateSlide()
        var currentOffset = event.nativeEvent.contentOffset.y;
        var direction = currentOffset > this.offset ? 'down' : 'up';
        this.offset = currentOffset;
        if(direction==="up"){
          // this.animateSlideUp()
          // this.props.header.current.animateUp()
        }
        if(direction==="down"){
          // this.animateSlideDown()
          // this.props.header.current.animateDown()
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

  renderHandoutsBlock=(loading, materials, error, searchEmpty)=>{
    if(loading){
      return   <ActivityIndicator   style={[styles.spinner]} color="#FF912C"  size="large"/>
    }
   return (
     <FlatList
     key={'d'}
     data={materials}
     style={styles.materialList}
     renderItem ={(data)=>(<BlockHandOutItem navigation= {this.props.navigation} {...data.item}/>)}
     keyExtractor={item=>item._id}
     numColumns={1}
     onScrollEndDrag= {
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
  // this.setState({animation:true}, ()=>{
  //   Animated.timing(this.state.value, {
  //     toValue: this.state.animation? 1 : 0,
  //     easing:Easing.ease,
  //     duration: Platform.select({
  //       ios:150,
  //       android:50 
  //     }),
  // }).start()
  // })
 }

 animateSlideDown = ()=> {
  // this.setState({animation:false}, ()=>{
  //   Animated.timing(this.state.value, {
  //     toValue: this.state.animation? 1 : 0,
  //     duration: Platform.select({
  //       ios:150,
  //       android:50 
  //     }),
  // }).start()
  // })
 }

 render(){
          const {openFilter}= this.state
          const {loading, materials,searchEmpty, error} = this.props
          return (
          <ScrollView style={styles.container}>
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
                    <Text style={styles.handText} > Courses</Text>
                  </Left>
                  <Right style={styles.rightIcon}>
                   <Modal visible={this.state.openModal}>
                       <View style={[styles.backgroundSearch]}>
                         <View style={[styles.row, styles.searchHeader,{marginTop:40}]}>
                             <TouchableOpacity onPress={()=>this.setState({openModal:false})} style={styles.backPart}>
                                   <Icon style={styles.backButton} type="FontAwesome5"  name="arrow-left"/>
                             </TouchableOpacity>
                             <View style={styles.searchPart}>
                                <TextInput style={styles.searchBox}/>
                             </View>
                         </View>
                       </View>
                   </Modal>
                  <TouchableOpacity onPress={()=>this.setState({openModal:true})} style={[styles.showAllSvg, { alignSelf:'flex-end', opacity:0.9}]} >
                        <Icon style={styles.font} type="FontAwesome5"  name="search"/>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.RBSheetListType.open()} style={[styles.showAllSvg, { alignSelf:'flex-end', opacity:0.9}]} >
                        <BlockIcon color="#fff" style={{color:'#fff'}}/>
                  </TouchableOpacity>
                  <RBSheet
                  closeOnDragDown
                  ref={ref => {
                  this.RBSheetListType = ref;
                   }}
                   height={190*rem}
                   openDuration={250}
                  customStyles={{
                   container: {
                    backgroundColor:'#0C0C0E',
                    }
                   }}>
                     <Text style={styles.listTypesText}> Display Options </Text>
                      <TouchableOpacity style={styles.listTypes} onPress={()=> {
                        this.RBSheetListType.close()
                        this.setState({listTypeList:true})
                      }}>
                      <View style={styles.listGroup}>
                      <IconListType style={styles.listStyleIcon}  />
                      <IconListType style={styles.listStyleIcon}/>
                          <Text style={styles.listTypesTextCon}> Double Row Large Icon </Text>
                      </View>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.listTypes} onPress={()=>{
                        this.RBSheetListType.close()
                        this.setState({listTypeList:false})
                      }} >
                       <View style={styles.listGroup}>
                        <IconListType style={[styles.listStyleIcon,{marginLeft:24*rem}]} />
                        <Text style={styles.listTypesTextCon}> Single Row Large Icon </Text>   
                       </View>
                      </TouchableOpacity>
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
                  { this.state.listTypeList ?     this.renderHandouts(loading, materials, error, searchEmpty)
                   :
                    this.renderHandoutsBlock(loading,materials,error)
                  }
              </Animated.View>
          </ScrollView>
        )
      }
  }


const styles = EStyleSheet.create({
  row:{
    flexDirection: 'row',
  },
  searchHeader:{
    height:'50rem',
    backgroundColor: '#0c0c0c',
    borderWidth:'1rem',
    borderColor:'#0c0c0e',
  },
  searchPart:{
    width:'85%',
  },
  backPart:{
    width:'15%',
  },
  backButton :{
    alignSelf: 'center',
    color:'#FF912C',
    fontSize:'22rem',
    marginTop:'5rem',
  },
  backgroundSearch :{
      backgroundColor:'#000',
      flex:1
  },
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
      marginLeft: '0rem',
      marginRight: '15rem',
      marginTop:'0rem',
      height:'40rem',
      borderRadius: '5rem',
      fontSize: '16rem',
      color:"#fff",
      paddingLeft: "20rem",
  },
   HandOuSlideView:{
     flexDirection: 'row',
     height:'50rem'
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
    color:'#Fff',
    fontSize:'22rem',
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
  },
  listTypes:{
     height:'50rem',
     width:'90%',
     borderBottomWidth: '0.6rem',
     borderColor: 'rgba(255,255,255,0.2)',
     alignSelf:'center',
     marginTop: '13rem',
  },
  listTypesText:{
    color:'rgba(255,255,255,0.7)',
    alignSelf: 'center',
    fontSize: '13rem',
    marginTop: '13rem',
    letterSpacing: 1.3,
  },
   listTypesText:{
    color:'rgba(255,255,255,0.7)',
    alignSelf: 'center',
    fontSize: '13rem',
    marginTop: '0rem',
    letterSpacing: 1.3,
  },
  listTypesTextCon:{
    color:'rgba(255,255,255,0.7)',
    alignSelf: 'flex-start',
    fontSize: '13rem',
    fontWeight: 'bold',
    marginTop: '13rem',
    letterSpacing: 1.3,
  },
  listGroup:{
    flexDirection:'row'
  },
  listStyleIcon:{
     marginLeft: '5rem',
     marginTop: '13rem',
  }
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
