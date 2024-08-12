import './Navbar.css'
import logo from '../../assets/logo1.png'
import { useRef, useState } from 'react'
import underline from '../../assets/nav_underline.svg'
import { Link as AnchorLink } from 'react-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = ()=>{
    menuRef.current.style.right="0"
  }
  const closeMenu = ()=>{
    menuRef.current.style.right="-350px"
  }

  return (
    <div className='navbar'>
      <img src={logo} className='mainlogo' alt="logo" />
      <img src={menu_open}  onClick={openMenu} alt=""  className='nav-mob-open'/>
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li>
          <AnchorLink 
            className="anchor-link" 
            to='home' 
            smooth={true} 
            duration={500}
            offset={-50} 
            onClick={() => setMenu("home")}
          >
            <p>HOME</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink 
            className="anchor-link" 
            to='about' 
            smooth={true} 
            duration={500}
            offset={-50} 
            onClick={() => setMenu("about")}
          >
            <p>ABOUT ME</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink 
            className="anchor-link" 
            to='services' 
            smooth={true} 
            duration={500}
            offset={-50} 
            onClick={() => setMenu("services")}
          >
            <p>SERVICES</p>
          </AnchorLink>
          {menu === "services" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink 
            className="anchor-link" 
            to='work' 
            smooth={true} 
            duration={500}
            offset={-50} 
            onClick={() => setMenu("work")}
          >
            <p>PORTFOLIO</p>
          </AnchorLink>
          {menu === "work" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink 
            className="anchor-link" 
            to='contact' 
            smooth={true} 
            duration={500}
            offset={-50} 
            onClick={() => setMenu("contact")}
          >
            <p>CONTACT</p>
          </AnchorLink>
          {menu === "contact" ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink 
          className="anchor-link" 
          to='contact' 
          smooth={true} 
          duration={500}
          offset={-50}
        >
          Connect with me
        </AnchorLink>
      </div>
    </div>
  )
}

export default Navbar;
