import React from 'react'
import HeadingSection from '../HeadingSection/HeadingSection'
import updates from "../../../Data/Blogs.json";


const BlogContent = ({key_id}) => {

    const title=[...updates];
    console.log("inside blog section     ",title);
    
  return (
    <div className="h-[100vh] w-full p-[5%]" >

     <HeadingSection type={"articles"} title={title}  />
    </div>
  )
}

export default BlogContent;