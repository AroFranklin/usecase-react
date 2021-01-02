import React,{useState} from 'react'
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


function Navigation({name}) {
    const [activemenu, setactivemenu] = useState(false)
    return (
        <nav className="site-navigation">
            <span className='menu-title'>  <Link to='/'>Trends</Link></span>
           <div className={`menu-container ${activemenu&& 'active'}`}>
            <ul>
              { navlinks.map((nav,index)=>  
              <li key={index}>
                  <Link to={nav.path}>{nav.title}</Link>
                 </li>)

               }
            </ul>
            <span className='menu-avatar-container'>
            <Avatar className='avatar-style' src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={32} />
           <span className='menu-avatar-name'>{name}</span>
           </span>
            </div>
            <i className="ionicons icon ion-ios-menu" onClick={()=>setactivemenu(!activemenu)}/>
        </nav>
    )
}

export default Navigation
