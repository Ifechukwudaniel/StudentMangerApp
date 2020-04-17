import React, {useState, Component} from 'react';
import {View, StatusBar, TouchableOpacity, ScrollView,Platform, Dimensions, ActivityIndicator, Text} from 'react-native'
import { Input} from 'native-base'
import EStyleSheet from 'react-native-extended-stylesheet'
import MaterialItem from './materialItem';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import Ripple from 'react-native-material-ripple';
import FilterModal from './FilterModal';
const  rem = Dimensions.get('window').width/360
import {connect} from 'react-redux'
import { getMaterials, searchMaterials } from '../../Redux/Actions/materials';
import Colors from '../../constants/Colors'
// import AnimatedSpriteMonster from '../animations/Animation';
import Animation from '../animations/Animation';

 
class Material extends Component{
  state= {
    openFilter:false,
    searchValue:'',
    searchKeyWord:''
  }
  UNSAFE_componentWillMount(){
    this.props.getMaterials()
  }
  handleChangeText=(value)=>{
     this.setState({searchValue:value}, (value)=>{
       if(this.props.searchEmpty && !this.state.searchValue)
           this.props.getMaterials()
     })
  }

  handleSearch= ()=>{
    const {searchValue} = this.state
    if(searchValue)
     this.setState({searchKeyWord:searchValue})
     this.props.searchMaterials(this.state.searchValue)
  }

  setOpenFilter=(value)=>{ 
    this.setState({openFilter:value})
  }
    render() {
      const {openFilter}= this.state
      const {loading, materials,searchEmpty, error} = this.props
      if(loading){
        return(
          <View style={styles.container}>
             <StatusBar hidden/>
            <View style={styles.filterView}>
              <TouchableOpacity style={styles.icon} onPress={()=>this.setOpenFilter(true)}>
                   <MaterialIcon  name="filter-list" size={40*rem} color={ !openFilter? "#fff":"rgba(232, 34,34,0.71)"}/>
              </TouchableOpacity>
            <View style={styles.searchView}>
                <Input  onChangeText= {this.handleChangeText} value= {this.state.searchValue} style={styles.textBox} placeholder="Search for ..." placeholderTextColor="#AEAEAE"/>
                <Ripple style={styles.searchIcon}>
                   <MaterialIcon    name="search" size={30*rem} color="#fff"/>
                </Ripple>
            </View>
            </View>
            <>
              <FilterModal showModal= {openFilter} closeModal= {()=>this.setOpenFilter(false)}/>
              <View style={styles.loadingView}>
                   <ActivityIndicator size="large" style={styles.activityIndicator}/>
                   {/* <Animation/> */}
              </View>
              </>
          </View>
          
        )
      }

      return (
          <View style={styles.container}>
             <StatusBar hidden/>
            <View style={styles.filterView}>
              <TouchableOpacity style={styles.icon} onPress={()=>this.setOpenFilter(true)}>
                   <MaterialIcon  name="filter-list" size={40*rem} color={ !openFilter? "#fff":"rgba(232, 34,34,0.71)"}/>
              </TouchableOpacity>
            <View style={styles.searchView}>
                <Input  onChangeText= {this.handleChangeText} value= {this.state.searchValue} style={styles.textBox} placeholder="Search for ..." placeholderTextColor="#AEAEAE"/>
                <Ripple onPress= {this.handleSearch} style={styles.searchIcon}>
                   <MaterialIcon   name="search" size={30*rem} color="#fff"/>
                </Ripple>
            </View>
            </View>
              <FilterModal showModal= {openFilter} closeModal= {()=>this.setOpenFilter(false)}/>
              <ScrollView indicatorStyle={'white'} style={styles.scrollView}>
               {
                 materials.map((material)=>{
                   return(
                    <MaterialItem 
                      key={material._id}
                      courseCode={material.course.courseCode} 
                      courseTitle={material.course.title}
                      url={material.file}
                      lecture={material.lecturer}
                      materialType={material.fileType}
                      pages={material.pages}
                      description={material.descriptionTitle}
                      date={material.date}
                      open={true}
                      printed={material.printedCopies}
                    />
                   )
                 }
               )
               }
              </ScrollView>
          </View>
      );
    }

  }
const styles = EStyleSheet.create({
    container:{
     flex: 1,
    },
    filterView:{
      marginTop:'40rem',
      flexDirection: 'row',
      alignContent: 'center',
    },
    scrollView:{
     marginTop:"16%"
    },
    textBox:{
      width:"60%",
      height:'40rem',
      backgroundColor: "#121212",
      borderWidth: '1rem',
      borderColor: "#fff",
      fontSize: '15rem',
      paddingLeft: '5rem',
      color:"#fff",
      ...Platform.select({
        ios:{
          fontFamily:"Itim",
        },
        android:{
          fontFamily:"itim",
        }

      }),
      alignSelf: 'flex-end',
      borderRadius: '5rem',
      marginLeft:"70rem",
      borderRightWidth: '0rem',
    },
    icon:{
      marginLeft: '30rem',
      alignSelf: 'center',
    //   justifySelf: 'center',
    },
    searchView:{
       width:"100%",
       flexDirection:'row'
    },
    searchIcon:{
        top:'3rem' ,
        left:"-5rem",
        width:"50rem",
        height:"40rem",
        marginRight:"80rem",
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: '1rem',
        borderColor: "#fff",
        borderTopRightRadius: '5rem',
        borderBottomRightRadius: '5rem',
    },
    loadingView:{
      justifyContent: 'center',
      width:"100%",
      height:'80%'
    },
    activityIndicator:{
      alignSelf: 'center',
    },
    errorContainer:{
      alignItems:"center",
      margin:'5rem',
      marginTop:'5rem',
      height:'80%',
      justifyContent: 'center',
    },
    errorText:{
       textAlign:'center',
       color:Colors.white,
       fontSize:'22rem',
       fontWeight:'bold',
    },
    errorIcon:{
        margin:'5rem'
    },
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
export default connect(mapStateToProps, mapDispatchToProps)(Material)