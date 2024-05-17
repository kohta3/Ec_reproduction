import React, { useState } from 'react'
import BreadcrumbSection from '../breadcrumb/BreadcrumbSection'
import ContactSection from '../contact/ContactSection'
import HeadSection from "../commonMeta/HeadSection";

const ContactMain = () => {
  const [currents, setItems] = useState([{ label: "お問い合わせ", url: "./" }]);

  return (
    <>
      <HeadSection title="お問い合わせ"/>
      <BreadcrumbSection title={"Contact Page"} current={currents} />
      <ContactSection />
      {/* <LocationSection/> */}
    </>
  )
}

export default ContactMain