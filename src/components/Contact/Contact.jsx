import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import email_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a Message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out to us anytime for more information.
                 Don't hesitate to contact us if you have any questions or inquiries.
                 We encourage you to get in touch with our team for personalized assistance.
                 Your satisfaction is our top priority. 
                 We value your feedback and believe that it plays a crucial role in helping us deliver exceptional photography.
                  Please let us know if you have any questions, suggestions, or comments</p>
                  <ul>
                    <li><img src={email_icon} alt="" /> deva.arcee@gmail.com</li>
                    <li><img src={phone_icon} alt="" />+91 8248277370</li>
                    <li><img src={location_icon} alt="" />32 Karur, TamilNadu - 639001</li>
                  </ul>
        </div>
        <div className="contact-col">
            <form action="">
                <label>Your Name</label>
                <input type="text" name="name" placeholder="Enter your name" required/>
                <label>Email</label>
                <input type="email" name="email" placeholder="Enter your email" />
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder="Enter your phone number" required/>
                <label>Message</label>
                <textarea name="message" rows="6" placeholder="Enter your message" required/>
                <button type="submit" className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
            </form>
            <span></span>
        </div>

    </div>
  )
}

export default Contact