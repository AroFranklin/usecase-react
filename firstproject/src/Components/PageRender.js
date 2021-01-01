import React from 'react'
import { useParams } from 'react-router-dom'

const generatepage= page=>{
    const component=()=> require(`../pages/${page}`).default
  
     try{
        console.log(component())
         return React.createElement(component())
     }
     catch(err)
     {
         console.warn(err)
       
     }

}
function PageRender() {
    const {pages} =useParams()
    return generatepage(pages)
}

export default PageRender
