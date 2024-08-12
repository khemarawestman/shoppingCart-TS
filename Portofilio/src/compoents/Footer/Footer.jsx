
import './Footer.css'
import footer_logo from '../../assets/logo1.png'
import user_icon from '../../assets/user_icon.svg'
export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>I like to craft solid and scalable frontend products with great user experiences.</p>

            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>  
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className='footer-bottom-left'>@2024 Erik Khemara Westman.All right reserved</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}
