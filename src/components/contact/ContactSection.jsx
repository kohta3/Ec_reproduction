import React from 'react'
import ContactFormSection from '../forms/ContactFormSection'

const ContactSection = () => {
  return (
    <div className="container">
        <div className="fz-inner-contact-details">
            <div className="fz-inner-contact-details__left">
                <div className="">
                    <ContactFormSection/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactSection