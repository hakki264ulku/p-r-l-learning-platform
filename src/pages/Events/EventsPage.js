import React from 'react'
import Bradcrumb from '../../components/breadcrumb/breadcrumb'
import Activities from '../../components/Activities/Activities'
import BlogsEvents from '../../components/BlogEvents/BlogEvents'
import LearnAbout from '../../components/LearnAbout/LearnAbout'
import Counter from '../../components/Counter/Counter'
import SingleImage from '../../components/SingleImage/SingleImage'

 const AboutUs = ({title})=> {
    return (
        <>
        <Bradcrumb title={title}/>
        <div className="events__wrapper"> 
            <Activities />
            <SingleImage />
            <BlogsEvents />
            <LearnAbout/>
            <Counter/>
        </div> 
        </>
    )
}
export default AboutUs