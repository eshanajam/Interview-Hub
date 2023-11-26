import React from 'react'
import {Link} from "react-router-dom"

const Menu = () => {
  return (
    <div>
      <div className='flex justify-end px-3'>
      <ul className='flex gap-3 p-2 font-semibold '>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/hub"}>Hub</Link></li>
        <li><Link to={"/contact"}>Contact us</Link></li> 
        <li><Link to={"/about"}>About</Link></li> 
        <li><Link to={"/login"}><button>Login</button></Link></li>
      </ul>
      </div>
    </div>
  )
}

export default Menu