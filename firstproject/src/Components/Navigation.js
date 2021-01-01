import React from 'react'
import {Link} from 'react-router-dom'
import { Avatar } from 'antd'


const navlinks=[
    {
        title:'Home',
        path:'/home'
    },
    {
        title:'Blogs',
        path:'/blogs'
    },
    {
        title:'Laptops',
        path:'/laptops'
    },
    {
        title:'Mobile',
        path:'/mobiles'
    }
]


function Navigation() {
    return (
        <nav className="site-navigation">
            <span className='menu-title'>  <Link to='/'>Trends</Link></span>
           <div className='menu-container'>
            <ul>
              { navlinks.map((nav,index)=>  
              <li key={index}>
                  <Link to={nav.path}>{nav.title}</Link>
                 </li>)

               }
            </ul>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </div>
            
        </nav>
    )
}

export default Navigation
