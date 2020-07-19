import React, {useState, Component} from 'react';
import {View, StatusBar, TouchableOpacity, ScrollView,Platform, Dimensions, ActivityIndicator, Text} from 'react-native'
import { Input} from 'native-base'
import EStyleSheet from 'react-native-extended-stylesheet'
const  rem = Dimensions.get('window').width/360
import {connect} from 'react-redux'
import { getMaterials, searchMaterials } from '../../Redux/Actions/materials';

 
class Material extends Component{
  state= {
    openFilter:false,
    searchValue:'',
    searchKeyWord:''
  }

    render() {
      const {openFilter}= this.state
      const {loading, materials,searchEmpty, error} = this.props

      return (
          <View style={styles.container}>
          </View>
      );
    }

  }
const styles = EStyleSheet.create({
    container:{
     flex: 1,
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