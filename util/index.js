import moment from 'moment'
import _ from 'lodash'

 const convertTimeTable = (timeTable) =>{
   var count = 0
      _.find(timeTable, {weekDay:moment().weekday()}).active = true
      const sortedDate =   _.sortBy(timeTable, (data)=> data.weekDay<moment().day())
      _.map(sortedDate, (day, i)=> {
        if( moment().date()+i > moment().daysInMonth()){
           day.date = ++count
        }
        else   day.date = moment().date()+ i
      })

     return sortedDate
 }


export default {
  convertTimeTable
}