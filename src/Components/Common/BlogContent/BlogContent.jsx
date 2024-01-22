import React from 'react'
import HeadingSection from '../HeadingSection/HeadingSection'
import updates from "../../../Data/Blog.json";


const BlogContent = ({key_id}) => {

    const title=[...updates];
    console.log("inside blog section     ",);
    
  return (
    <div className="h-[100vh] w-full p-[5%]" >

     <HeadingSection type={"articles"} title={"Multiplayr: Forging a New Era in Esports - The Genesis and Vision"}  />
    </div>
  )
}

export default BlogContent;