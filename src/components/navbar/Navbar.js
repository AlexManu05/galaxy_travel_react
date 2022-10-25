import React, { useState } from 'react'
import './Navbar.css'
import  {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'



const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick('!click')

  const [color, setColor] = useState(false)
    const changeColor = () => {
      if(window.scrollY >= 100) {
        setColor(true)
      }else {
        setColor(false)
      }
    }
    window.addEventListener('scroll', changeColor)


  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <Link to='/'><h1>GLC TRVL</h1></Link>
      <ul className={click ? 'navMenu active': 'navMenu'}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/pricing'>Pricing</Link>
        </li>
        <li>
          <Link to='/training'>Training</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
      <div className='hamburgerBtn' onClick={handleClick}>
        {click ? (<FaTimes size={20}  style={{color: '#fff'}} />) : (<FaBars size={20}  style={{color: '#fff'}} />)}
        
      </div>
    </div>
  )
}

export default Navbar