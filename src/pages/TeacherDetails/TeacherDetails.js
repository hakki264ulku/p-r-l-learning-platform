import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Bradcrumb from '../../components/breadcrumb/breadcrumb'
import { BrowserRouter as Router,Link } from "react-router-dom";
import work1 from '../../assets/images/work1.jpg'
import work2 from '../../assets/images/work2.jpg'
import work3 from '../../assets/images/work3.jpg'
import work4 from '../../assets/images/work4.jpg'
import ProgressBar from "@ramonak/react-progress-bar";
import ContactTeacher from '../../components/ContactTeacher/ContactTeacher'
import teacher from '../../assets/images/teacherd.jpg'
import 'react-calendar/dist/Calendar.css';

 const TeacherDetails = ({title,title1})=> {
    const services=[
        {
            src:work1,
            title:'Pre-School Class',
            price:'$90'
        },
        {
            src:work2,
            title:'Bangla Class',
            price:'$90'
        },
        {
            src:work3,
            title:'English Class',
            price:'$90'
        },
        {
            src:work4,
            title:'Math Class',
            price:'$90'
        },
    ]
    return (
        <>
        <Bradcrumb title={title} title1={title1}/>
        <div className="teacherdetails__wrapper padding__top__botton"> 
          <div className="container">
          <div className="row">
            <div className="col-lg-8">
                <div className="events__detils__left">
                    <h3>Alice Bohm</h3>
                    <p className="event_sub1">Health, Life Skills</p> 

                    <div className="teachers__profile">
                        <div className="teachers__profile__img">
                            <img src={teacher} alt="teacher" />
                        </div>    
                        <div className="teachers__profile__content">
                            <h4>About me</h4>
                            <div className="activitics__list">
                                <div className="th__list__single">
                                    <span className="th__list__icon"><FontAwesomeIcon icon={['fas', 'book-open']}/></span>
                                    <span className="th__list__name">Degree: </span>
                                    <span className="th__list__con">Visual Design Master</span> 
                                </div>
                                <div className="th__list__single">
                                    <span className="th__list__icon"><FontAwesomeIcon icon={['fas', 'star']}/></span>
                                    <span className="th__list__name">Experience : </span>
                                    <span className="th__list__con">2 Years in High school</span> 
                                </div>
                                <div className="th__list__single">
                                    <span className="th__list__icon"><FontAwesomeIcon icon={['fas', 'heart']}/></span>
                                    <span className="th__list__name">Hobbies : </span>
                                    <span className="th__list__con">Picnic, music, game</span> 
                                </div>
                                <div className="th__list__single">
                                    <span className="th__list__icon"><FontAwesomeIcon icon={['fas', 'edit']}/></span>
                                    <span className="th__list__name">Project : </span>
                                    <span className="th__list__con">Agency UI Template, Crypto Currency </span> 
                                </div>
                                <div className="th__list__single">
                                    <span className="th__list__icon"><FontAwesomeIcon icon={['fas', 'globe-asia']}/></span>
                                    <span className="th__list__name">Language : </span>
                                    <span className="th__list__con">English, French </span> 
                                </div>
                            </div>
                        </div>    
                    </div> 
                    <div className="teacher__performance">
                        <div className="prograss__wr">
                            <span className="prograss__text">Fun</span>
                            <ProgressBar borderRadius="4px" height="40px" baseBgColor="#fafafb"  bgColor="#564fff" completed={30} />
                        </div>
                        <div className="prograss__wr">
                            <span className="prograss__text">Play</span>
                            <ProgressBar borderRadius="4px" height="40px" baseBgColor="#fafafb"  bgColor="#ff564f" completed={50} />
                        </div>
                        <div className="prograss__wr">
                            <span className="prograss__text">Creativity</span>
                            <ProgressBar borderRadius="4px" height="40px" baseBgColor="#fafafb"  bgColor="#ffab4a" completed={80} />
                        </div>     
                    </div> 
                    <div className="teacher__text__content">
                        <p>Jose Marcial Portilla has a BS and MS in Mechanical Engineering from Santa Clara University and years of experience as a professional instructor and trainer for Data Science and programming. He has publications and patents in various fields such as microfluidics, materials science, and data science technologies. Over the course of his career he has developed a skill set in analyzing data and he hopes to use his experience in teaching and data science to help other people learn the power of programming the ability to analyze data, as well as present the data in clear and beautiful visualizations. Currently he works as the Head of Data Science for Pierian Data Inc. and provides in-person data science and python programming training courses to employees working at top companies, including General Electric, Cigna, The New York Times, Credit Suisse, McKinsey and many more. Feel free to contact him on LinkedIn for more information on in-person training sessions or group training sessions in Las Vegas, NV. He has publications and patents in various fields such as microfluidics, materials science, and data science technologies. Over the course of his career he has developed a skill set in analyzing data and he hopes to use his experience in teaching and data science to help other people learn the</p>
                    </div>
                </div>
                <div className="realtive__course">
                    <h3 className="realtive__course__title">My courses (04)</h3>
                    <div className="row">
                    {services.map((service,i)=>
                        <div className="col-lg-6" key={i}>
                            <div className="single__service">
                                <div className="overly__shape"></div>
                                <div className="service__innerimg">
                                    <img src={service.src} className="img-fluid" alt={service.title}/>
                                </div>
                                <div className="service__inner__content">
                                    <div className="content__price">
                                        <p>{service.price}</p>
                                    </div>
                                    <h4 className="service__title">
                                        <Router>
                                            <Link to="/details">{service.title}</Link>
                                        </Router>
                                    </h4>
                                    <div className="service__blist__wr">
                                        <ul className="service__blist">
                                            <li><FontAwesomeIcon icon="book"/>13 Lessons</li>
                                            <li><FontAwesomeIcon icon="user"/>20 Students</li>
                                        </ul>
                                        <ul className="service__blist__one">
                                            <li><FontAwesomeIcon icon="map-marker"/>Alice Bohm , Linda Glendell</li>
                                        </ul>
                                    </div>
                                    <div className="service__enroll">
                                        <Router>
                                            <Link to="/enroll">Enroll Now<FontAwesomeIcon icon="angle-right"/></Link>
                                        </Router>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="events__detils__right">
                    <ContactTeacher />   
                </div>
            </div>
           </div>
          </div>
        </div> 
        </>
    )
}
export default TeacherDetails