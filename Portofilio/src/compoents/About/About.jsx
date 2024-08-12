import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile.jpg'

export const About = () => {
  return (
    <div id="about" className='about'>
        <div className='about-title'>
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                <p>I am a second-year frontend developer student. My passion lies in gaming, writing code, taking pictures, and continuously learning coding in my free time. I am dedicated to honing my skills and staying updated with the latest technologies to become a proficient developer.</p>

                </div>
                <div className="about-skills">
                    <div className="about-skill"> <p>HTML & CSS </p>  <hr style={{width:"50%"}} /> </div>
                    <div className="about-skill"> <p>React JS </p>  <hr style={{width:"50%"}} /> </div>
                    <div className="about-skill"> <p>JavaScript </p>  <hr style={{width:"50%"}} /> </div>
                    <div className="about-skill"> <p>Next.js </p>  <hr style={{width:"50%"}} /> </div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>1+</h1>
                <p>YEAR OF EXPERIENCE</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>20+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>5+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}
