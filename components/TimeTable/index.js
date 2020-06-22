import React, {Component,} from 'react';
import {View} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

import {connect} from 'react-redux'
import { getTimeTable ,setTimeTableActiveDay, setDayActions, setDayActionsStart } from '../../Redux/Actions/timeTable';
import _ from 'lodash'
import util from '../../util';

 
class TimeTable extends Component {
   state= {
     timeTable:[]
   }

    UNSAFE_componentWillMount(){
      this.props.getTimeTable()  
      this.setState({timeTable:this.props.timeTable})
    }

    render() { 
        const {navigation, timeTable, loading, loadingAction, dayActions} =this.props
        return (
            <View style={styles.container}>
            </View>
        );
    }
}
const styles = EStyleSheet.create({
    container:{
     flex: 1,
    }
})

function mapStateToProps(state) {
    return {
      timeTable: state.timeTable.timeTable,
      loading:state.timeTable.loading,
      error:state.timeTable.error,
      dayActions:state.timeTable.dayActions,
      loadingAction:state.timeTable.loadingAction,
      date:state.timeTable.date
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getTimeTable:()=>{
        dispatch(getTimeTable())
      },
      setNewTimeTable:(timeTable)=>{
        dispatch(setTimeTableActiveDay(timeTable))
      },
      setDayActions: (actions)=>{
        dispatch(setDayActions(actions))
      },
      setDayActionsStart:()=>{
        dispatch(setDayActionsStart())
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(TimeTable)