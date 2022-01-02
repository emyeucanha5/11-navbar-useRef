import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {

  const [showlinks, setShowlinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const handleClick = () => {
    setShowlinks(!showlinks);
  }
   useEffect(
      ()=> {
        const linkHeight = linksRef.current.getBoundingClientRect().height;
        console.log(linkHeight)
        if(showlinks){
          linksContainerRef.current.style.height = `${linkHeight}px`;
        }else{
          linksContainerRef.current.style.height = '0px'
        }    
      }
    ,[showlinks]);
  return <nav>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="logo" className="logo" />
        <button className="nav-toggle" onClick= {handleClick}>
          <FaBars />
        </button>
      </div>
      <div className="links-container" ref={linksContainerRef}>
        <ul className="links" ref={linksRef}>
          {links.map((item)=> {
            return <li key={item.id} >
              <a href={item.url}>{item.text}</a>
            </li>
          })}
        </ul>
      </div>
      <ul className="social-icons">
        {social.map((item)=> {
          return <li key={item.id}><a href={item.url}>{item.icon}</a></li>
        })}
      </ul>
    </div>
  </nav>  
}

export default Navbar
 