const _ = require('lodash')
const moment = require('moment')

const timeTable = [
  {
      "dayActions": [
          {
              "_id": "5e9f20177249e15da2fdc9b5",
              "course": "5e9dc7da8ac82322efe9e202",
              "startTime": "10.00 am",
              "endTime": "12.00 pm",
              "__v": 0
          },
          {
              "_id": "5e9f20177249e15da2fdc9b4",
              "course": "5e9dc8098ac82322efe9e203",
              "startTime": "08.00 am",
              "endTime": "10.00 am",
              "__v": 0
          },
          {
              "_id": "5e9f20177249e15da2fdc9b6",
              "course": "5e9dc8098ac82322efe9e203",
              "startTime": "01.00 pm",
              "endTime": "03.00 pm",
              "__v": 0
          }
      ],
      "active": false,
      "_id": "5e9f20177249e15da2fdc9a9",
      "weekDay": 1,
      "timeTable": "5e9f20177249e15da2fdc9a8",
      "__v": 0
  },
  {
      "dayActions": [
          {
              "_id": "5e9f20177249e15da2fdc9b0",
              "course": "5e9dc8098ac82322efe9e203",
              "startTime": "08.00 am",
              "endTime": "10.00 am",
              "__v": 0
          },
          {
              "_id": "5e9f20177249e15da2fdc9b3",
              "course": "5e9dc8098ac82322efe9e203",
              "startTime": "01.00 pm",
              "endTime": "03.00 pm",
              "__v": 0
          },
          {
              "_id": "5e9f20177249e15da2fdc9b2",
              "course": "5e9dc7da8ac82322efe9e202",
              "startTime": "12.00 pm",
              "endTime": "01.00 pm",
              "__v": 0
          },
          {
              "_id": "5e9f20177249e15da2fdc9b1",
              "course": "5e9dc7da8ac82322efe9e202",
              "startTime": "10.00 am",
              "endTime": "11.40 pm",
              "__v": 0
          }
      ],
      "active": false,
      "_id": "5e9f20177249e15da2fdc9aa",
      "weekDay": 2,
      "timeTable": "5e9f20177249e15da2fdc9a8",
      "__v": 0
  },
  {
      "dayActions": [
          {
              "_id": "5e9f20177249e15da2fdc9b7",
              "course": "5e9dc8098ac82322efe9e203",
              "startTime": "08.00 am",
              "endTime": "10.00 am",
              "__v": 0
          },
          {
              "_id": "5e9f20177249e15da2fdc9b9",
              "course": "5e9dc7da8ac82322efe9e202",
              "startTime": "12.00 pm",
              "endTime": "01.00 pm",
              "__v": 0
          },
          {
              "_id": "5e9f20177249e15da2fdc9b8",
              "course": "5e9dc7da8ac82322efe9e202",
              "startTime": "10.00 am",
              "endTime": "11.40 pm",
              "__v": 0
          },
          {
              "_id": "5e9f20177249e15da2fdc9ba",
              "course": "5e9dc8098ac82322efe9e203",
              "startTime": "01.00 pm",
              "endTime": "03.00 pm",
              "__v": 0
          }
      ],
      "active": false,
      "_id": "5e9f20177249e15da2fdc9ab",
      "weekDay": 3,
      "timeTable": "5e9f20177249e15da2fdc9a8",
      "__v": 0
  },
  {
      "dayActions": [
          {
              "_id": "5e9f20177249e15da2fdc9c0",
              "course": "5e9dc7da8ac82322efe9e202",
              "startTime": "10.00 am",
              "endTime": "11.40 pm",
              "__v": 0
          },
          {
              "_id": "5e9f20177249e15da2fdc9c1",
              "course": "5e9dc7da8ac82322efe9e202",
              "startTime": "12.00 pm",
              "endTime": "01.00 pm",
              "__v": 0
          },
          {
              "_id": "5e9f20177249e15da2fdc9bf",
              "course": "5e9dc8098ac82322efe9e203",
              "startTime": "08.00 am",
              "endTime": "10.00 am",
              "__v": 0
          },
          {
              "_id": "5e9f20177249e15da2fdc9c2",
              "course": "5e9dc8098ac82322efe9e203",
              "startTime": "01.00 pm",
              "endTime": "03.00 pm",
              "__v": 0
          }
      ],
      "active": false,
      "_id": "5e9f20177249e15da2fdc9ac",
      "weekDay": 4,
      "timeTable": "5e9f20177249e15da2fdc9a8",
      "__v": 0
  },
  {
      "dayActions": [
          {
              "_id": "5e9f20177249e15da2fdc9bc",
              "course": "5e9dc7da8ac82322efe9e202",
              "startTime": "10.00 am",
              "endTime": "11.40 pm",
              "__v": 0
          },
          {
              "_id": "5e9f20177249e15da2fdc9bb",
              "course": "5e9dc8098ac82322efe9e203",
              "startTime": "08.00 am",
              "endTime": "10.00 am",
              "__v": 0
          },
          {
              "_id": "5e9f20177249e15da2fdc9bd",
              "course": "5e9dc7da8ac82322efe9e202",
              "startTime": "12.00 pm",
              "endTime": "01.00 pm",
              "__v": 0
          },
          {
              "_id": "5e9f20177249e15da2fdc9be",
              "course": "5e9dc8098ac82322efe9e203",
              "startTime": "01.00 pm",
              "endTime": "03.00 pm",
              "__v": 0
          }
      ],
      "active": false,
      "_id": "5e9f20177249e15da2fdc9ad",
      "weekDay": 5,
      "timeTable": "5e9f20177249e15da2fdc9a8",
      "__v": 0
  },
  {
      "dayActions": [],
      "active": false,
      "_id": "5e9f20177249e15da2fdc9ae",
      "weekDay": 6,
      "timeTable": "5e9f20177249e15da2fdc9a8",
      "__v": 0
  },
  {
      "dayActions": [],
      "active": false,
      "_id": "5e9f20177249e15da2fdc9af",
      "weekDay": 7,
      "timeTable": "5e9f20177249e15da2fdc9a8",
      "__v": 0
  }
]

 const convertTimeTable = (timeTable) =>{
     _.find(timeTable, {weekDay:moment().weekday()}).active = true
      console.log(moment().day())   
      console.log(moment().date())
      console.log( _.map(timeTable,(value, i)=>{
        
      }))
 }


 convertTimeTable(timeTable)