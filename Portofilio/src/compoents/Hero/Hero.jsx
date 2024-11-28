import './Hero.css'
import profile_img from '../../assets/profile.png'
import { Link as AnchorLink } from 'react-scroll';

export const Hero = () => {
  return (
    <div id ="home"className='hero'>
        <img src={profile_img} alt="" />
        <h1> <span>I'm Erik Khemara Westman, </span>frontend developer based   in Guthenburg,Sweden.</h1>
        <p>
        I am a final-year student specializing in front-end development
        </p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink 
          className="anchor-link" 
          to='contact' 
          smooth={true} 
          duration={500}
          offset={-50}
        >Conntect with me </AnchorLink></div>
<a href="/Erik Westman.pdf" className="hero-resume" download>
  My resume
</a>

        </div>
    </div>
  )
}
