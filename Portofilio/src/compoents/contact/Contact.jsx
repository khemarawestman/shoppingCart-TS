import './Contact.css'
import theme_parttern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
export const Contact = () => {
  return (
    <div ClassName ='Contact'>
        <div className="contact-title">
            <h1>Get in Touch</h1>
            <img src={theme_parttern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea est provident aliquam optio perspiciatis fugiat libero, itaque consequatur inventore error, reiciendis aperiam cumque temporibus quidem ullam, accusantium odit cum similique!</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /> <p>erikkhemarawestman@hotmail.se</p>
                    </div>
                    <div className="contact-detail">
                    <img src={call_icon} alt="" /> <p>+46 70 727 30 72</p>
                    </div>
                    <div className="contact-detail">
                    <img src={location_icon} alt="" /> <p>Gothenburg</p>
                    </div>
                </div>
            </div>
            <form action="" className="contact-right"></form>
        </div>
    </div>
  )
}
