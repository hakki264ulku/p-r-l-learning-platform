import React from 'react'
import Bradcrumb from '../../components/breadcrumb/breadcrumb'
import LearnAbout from '../../components/LearnAbout/LearnAbout'
import WhyRegister from '../../components/WhyRegister/WhyRegister'
import Teacher from '../../components/Teacher/Teacher'

 const AboutUs = ({title})=> {
    return (
        <>
        <Bradcrumb title={title}/>
        <div className="aboutus__wrapper"> 
            <div className="margin__bottom">
                <LearnAbout />
            </div>
            <WhyRegister />
            <Teacher />
        </div> 
        </>
    )
}
export default AboutUs