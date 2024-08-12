import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import { useState } from 'react';

export const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");

        const formData = new FormData(event.target);

        formData.append("access_key", "952ba9fe-6300-4bc3-a489-13f5eb8dc322");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully");
                alert(data.message);
                event.target.reset(); // Reset the form after successful submission
            } else {
                console.error("Error:", data);
                setResult(data.message);
            }
        } catch (error) {
            console.error("Error:", error);
            setResult("Something went wrong. Please try again later.");
        }
    };

    return (
        <div id="contact" className='contact'>
            <div className="contact-title">
                <h1>Get in Touch</h1>
                <img src={theme_pattern} alt="Pattern" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm passionate about bringing both the technical and visual aspects of digital products to life. User experience, beautiful pixels and writing clean accessible, human code matters to me.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="Mail Icon" /> 
                            <p>erikkhemarawestman@hotmail.se</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="Call Icon" /> 
                            <p>+46 70 727 30 72</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="Location Icon" /> 
                            <p>Gothenburg</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" name="name" placeholder='Enter your name' required />
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" name="email" placeholder='Enter your email' required />
                    <label htmlFor="message">Write your message here</label>
                    <textarea id="message" name="message" rows="8" placeholder='Enter your Message' required></textarea>
                    <button type="submit" className="contact-submit">Submit</button>
                    {result && <p className="form-result">{result}</p>} {/* Display submission status */}
                </form>
            </div>
        </div>
    );
}

export default Contact;
