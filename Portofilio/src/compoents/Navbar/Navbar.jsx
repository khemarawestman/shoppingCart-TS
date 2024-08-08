
import './Navbar.css'
import logo from '../../assets/logo1.png'
const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul className="nav-menu">
            <li>HOME</li>
            <li>ABOUT ME</li>
            <li>SERVICES</li>
            <li>PORTFOLIO</li>
            <li>CONTACT</li>
        </ul>
        <div className="nav-connect">Connect with me </div>
    </div>
    
  )
}

export default Navbar