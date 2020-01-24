import React from 'react';
import ClipComponent from './chip-component'
 
const ChipLayoutComponent = ({departments, handleClipClick}) => {
   return departments.map((department,i)=>(
       <ClipComponent 
       key={department._id} 
       text={department.name} 
       handleClipClick={handleClipClick}/>
   ))
}
 
export default ChipLayoutComponent;