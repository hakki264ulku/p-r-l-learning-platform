import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Bradcrumb from '../../components/breadcrumb/breadcrumb'
import EventSlider from '../../components/EventSlider/EventSlider' 
import EventInfo from '../../components/EventInfo/EventInfo' 
import Comment from '../../components/Comment/Comment'
import Calendar from '../../components/Calendar/Calendar'
import img1 from '../../assets/images/eventdetails1.jpg'
import 'react-calendar/dist/Calendar.css';

 const EventDetail = ({title,title1})=> {
    return (
        <>
        <Bradcrumb title={title} title1={title1}/>
        <div className="eventsdetails__wrapper padding__top__botton"> 
          <div className="container">
          <div className="row">
            <div className="col-lg-8">
                    <div className="events__detils__left">
                        <h3>Art Program For Kids</h3>
                        <p className="event_sub"><span className="event_sub__icon"><FontAwesomeIcon icon={['fas', 'map-marker-alt']}/></span>3366  Jefferson Street, NEW HAMPTON, IA</p>
                    <EventSlider/>
                        <div className="eventdetails__middle__content">
                            <p className="para1">
                                Currently he works as the Head of Data Science for Pierian Data Inc. and provides in-person data science and python programming training courses to employees working at top companies, including General Electric, Cigna, The New York Times, Credit Suisse, McKinsey and many more. Feel free to contact him on LinkedIn for more information on in-person</p>
                            <p className="para2">Jose Marcial Portilla has a BS and MS in Mechanical Engineering from Santa Clara University and years of experience as a professional instructor and trainer for Data Science and programming. of programming the ability to analyze data, as well as present the data in clear and beautiful visualizations. .</p>
                            <img src={img1} alt="img" className="img-fluid"/>
                            <div className="event__paradiv">
                                <p>Jose Marcial Portilla has a BS and MS in Mechanical Engineering from Santa Clara University and years of experience as a professional instructor and trainer for Data Science and programming. He has publications and patents in various fields such as microfluidics, materials science, and data science technologies. Over the course of his career he has</p>
                            </div>
                            <h4>Jose Marcial Portilla has a BS and MS in Mechanical Engineering.</h4>
                            <p className="para1">
                            Currently he works as the Head of Data Science for Pierian Data Inc. and provides in-person data science and python programming training courses to employees working at top companies, including General Electric, Cigna, The New York Times, Credit Suisse, McKinsey and many more. Feel free to contact him on LinkedIn for more information on in-person</p>
                            <p className="para2">Jose Marcial Portilla has a BS and MS in Mechanical Engineering from Santa Clara University and years of experience as a professional instructor and trainer for Data Science and programming. of programming the ability to analyze data, as well as present the data in clear and beautiful visualizations. .</p>
                        </div>
                        <Comment />
                    </div>
            </div>
            <div className="col-lg-4">
                <div className="events__detils__right">
                    <EventInfo/>
                    <Calendar />
                        
                </div>
            </div>
           </div>
          </div>
        </div> 
        </>
    )
}
export default EventDetail