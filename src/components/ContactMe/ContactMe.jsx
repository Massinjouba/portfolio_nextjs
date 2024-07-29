import React from 'react'
import ContactForm from './ContactForm/ContactForm'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'

const ContactMe = () => {
  return (
    <section className='contact-container'>
      <h5>Contact Me</h5>
      <div className='contact-content'>
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            iconUrl="/assets/icons/linkedin.png"
            text="Contact me on linkedin"
            link="https://www.linkedin.com/in/massinissa-rahmani-4bbaab203?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          />

          <ContactInfoCard
            iconUrl="/assets/icons/github.png"
            text="Contact me on WhatsApp"
            link="https://wa.me/14388672909"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default ContactMe
