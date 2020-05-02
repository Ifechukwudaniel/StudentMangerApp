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

 const getCurrentDay = (timeTable)=>{
   console.log(timeTable)
   if(timeTable){
      if(_.find(timeTable,{active:true,weekDay:moment().weekday()}))
        return "Today"
      if(_.find(timeTable,{active:true,weekDay:moment().weekday()+1}) )
        return "Tomorrow"
      if( _.find(timeTable,{active:true}).weekDay==0  && _.findIndex(timeTable, {weekDay:6}) ==0)
       return "Tomorrow"
      return moment.weekdays()[_.find(timeTable,{active:true}).weekDay]
   }
   return "Today"
 }
export default {
  convertTimeTable,
  getCurrentDay
}