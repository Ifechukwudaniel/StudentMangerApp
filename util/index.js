import moment from 'moment'
import _ from 'lodash'

import qs from 'qs';
import { Linking } from 'react-native';


export async function sendEmail(to, subject, body, options = {}) {
    const { cc, bcc } = options;

    let url = `mailto:${to}`;

    // Create email link query
    const query = qs.stringify({
        subject: subject,
        body: body,
        cc: cc,
        bcc: bcc
    });

    if (query.length) {
        url += `?${query}`;
    }

    // check if we can use this link
    const canOpen = await Linking.canOpenURL(url);

    if (!canOpen) {
        console.warn("error")
        alert("jsjsjjsjjsj")
    }

    return Linking.openURL(url);
}
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