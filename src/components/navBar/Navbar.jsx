import React, { useState } from 'react'
import "./navbar.scss"
function Navbar() {
  const [isScrolled,setisScrolled] = useState(false)

  window.onscroll = ()=>{
    setisScrolled(window.pageYOffset === 0 ? false : true)
    return ()=> window.onscroll = null
  }

  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
        <div className='container'>
            <div className='left'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="logo" />
                <span>Home</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className='right'>
            <i className="fa-solid fa-magnifying-glass"></i>
            <span>KID</span>
            <i className="fa-solid fa-bell"></i>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
            <div className='profile'>
            <i className="fa-solid fa-sort-down"></i>
            <div className='options'>
            <span>Settings</span>
            <span>Logout</span>
            </div>
            </div>
            </div>
        </div>
        </div>
  )
}

export default Navbar