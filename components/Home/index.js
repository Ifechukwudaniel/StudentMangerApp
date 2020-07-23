import React, {Component} from 'react';
import { View,TextInput, TouchableOpacity, Dimensions, Text, Animated, FlatList} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet'
import BlockIcon from '../../assets/svg/BlockIcon.svg'
import ListIcon from '../../assets/svg/ListIcon.svg'
import ShowAllSvg from '../../assets/svg/showAll.svg'
import { Left, Right } from 'native-base';
import AttendanceListItem from '../Attendance/AttendanceListItem';
import Setting from '../Settings';
const entireScreenWidth = Dimensions.get('window').width;
const rem = entireScreenWidth/380
import {connect} from 'react-redux'
import { getMaterials, searchMaterials } from '../../Redux/Actions/materials';
import {ActivityIndicator} from 'react-native-paper'
import HandOuListItem from '../Handout/HandOutListItem';
import BlockHandOutItem from '../Handout/BlockHandOutItem';


class Home extends Component {
  state= {
    openFilter:false,
    searchValue:'',
    searchKeyWord:'',
    listTypeBlock:false,
    listTypeList:true
  }

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
      style={{marginBottom:100}}
      renderItem ={(data)=>(<BlockHandOutItem  navigation= {this.props.navigation} {...data.item}/>)}
      keyExtractor={item=>item._id}
   />
    )
  }

 render(){
          const {openFilter}= this.state
          const {loading, materials,searchEmpty, error} = this.props
          return (
          <View style={styles.container}>
              <View>
                  <TextInput onChangeText={(value)=>this.props.searchMaterials(value)}  placeholderTextColor="rgba(255,255,255,0.16)" placeholder="Search" style={styles.searchBox}/>
              </View>
              <View style={styles.HandOuSlideView}>
                  <Left>
                    <Text style={styles.handText} > Hand-outs</Text>
                  </Left>
                  <Right>
                  <TouchableOpacity style={[styles.showAllSvg, { alignSelf:'flex-end'}]} >
                        <ShowAllSvg/>
                  </TouchableOpacity>
                  </Right>

              </View>
              <View style={styles.containerView}>
                  {this.renderHandouts(loading, materials)}
              </View>
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
  searchBox:{
      height:'15rem',
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
   },
   handText:{
     color:"#fff",
     marginTop:'10rem',
     marginLeft: '20rem',
   },
   showAllSvg:{
    justifyContent: 'flex-end',
    marginRight: '20rem',
    marginTop:'10rem',
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
