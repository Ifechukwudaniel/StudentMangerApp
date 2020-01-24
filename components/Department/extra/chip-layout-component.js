import React from 'react';
import ClipComponent from './chip-component'
 
const ChipLayoutComponent = ({departments}) => {
   return departments.map((department,i)=>(
       <ClipComponent key={department._id} text={department.name}/>
   ))
}
 
export default ChipLayoutComponent;