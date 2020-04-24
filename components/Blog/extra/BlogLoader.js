import React from 'react';
import {Dimensions} from 'react-native'
import ContentLoader,{Rect} from 'react-content-loader/native'
const entireScreenWidth = Dimensions.get('window').width;
const rem = entireScreenWidth/360
 
const BlogLoader = () => {
  return (
    <ContentLoader 
    speed={0.5}
    width={421*rem}
    height={250*rem}
    viewBox={`0 0 ${421*rem} ${250*rem}`}
    backgroundColor="#434242"
    foregroundColor="#d3d3d3"
    style={{marginBottom:1, marginTop:1}}
  >
         <Rect x="0" y="0" rx="0" ry="0" width={`${421*rem}`} height={`${250*rem}`} />
  </ContentLoader>
  );
}
 
export default BlogLoader;