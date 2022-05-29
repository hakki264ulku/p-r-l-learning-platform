import React from 'react'
import Bradcrumb from '../../components/breadcrumb/breadcrumb'
import Contact from '../../components/Contact/Contact'
import Map from '../../components/Map/Map'

 const ContactPage = ({title})=> {
    return (
        <>
        <Bradcrumb title={title}/>
        <div className="contact__wrapper"> 
           <Contact />
           <Map />
        </div> 
        </>
    )
}
export default ContactPage