import './Hero.css'
import profile_img from '../../assets/profile.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <h1> <span>I'm Erik Khemara Westman, </span>frontend developer base in Guthenburg,Sweden.</h1>
        <p>
        I am a final-year student specializing in front-end development
        </p>
        <div className="hero-action">
            <div className="hero-connect">Conntect with me </div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}
