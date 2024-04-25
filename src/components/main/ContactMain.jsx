import React,{useState} from 'react'
import BreadcrumbSection from '../breadcrumb/BreadcrumbSection'
import ContactSection from '../contact/ContactSection'
import LocationSection from '../map/LocationSection'

const ContactMain = () => {
  const [currents, setItems] = useState([{label:"お問い合わせ",url:"./"}]);

  return (
    <>
        <BreadcrumbSection title={"Contact Page"} current={currents}/>
        <ContactSection/>
        <LocationSection/>
    </>
  )
}

export default ContactMain