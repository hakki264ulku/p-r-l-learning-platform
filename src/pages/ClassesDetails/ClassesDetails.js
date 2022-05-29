import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Bradcrumb from '../../components/breadcrumb/breadcrumb'
import EventSlider from '../../components/EventSlider/EventSlider' 
import CourseInfo from '../../components/CourseInfo/CourseInfo' 
import Comment from '../../components/Comment/Comment'
import Calendar from '../../components/Calendar/Calendar'
import img1 from '../../assets/images/eventdetails1.jpg'
import teacher from '../../assets/images/teacherd.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from "react-router-dom";
import 'react-tabs/style/react-tabs.css';
import 'react-calendar/dist/Calendar.css';

 const ClassesDetails = ({title,title1})=> {
    return (
        <>
        <Bradcrumb title={title} title1={title1}/>
        <div className="eventsdetails__wrapper padding__top__botton"> 
          <div className="container">
          <div className="row">
            <div className="col-lg-8">
                    <div className="events__detils__left">
                        <h3>Match Class</h3>
                        <div className="teacher__category">
                            <div className="teacher__category__single">
                                <img src={teacher} alt="teacher" />
                                <div className="name__teacher">
                                    <h6>Teacher</h6>
                                    <span>Jenny Hilton</span>
                                </div>
                            </div>
                            <div className="teacher__category__single">
                                <div className="class__cate__icon">
                                <FontAwesomeIcon icon={['fas', 'object-group']}/>
                                </div>
                                <div className="name__teacher">
                                    <h6>Categories</h6>
                                    <span>Science</span>
                                </div>
                            </div>
                            <div className="teacher__category__print">
                                    <FontAwesomeIcon icon={['fas', 'print']}/>
                                </div>
                        </div>
                        
                    <EventSlider/>
                    <div className="course__details">
                    <Tabs>
                        <TabList>
                        <Tab>Description</Tab>
                        <Tab>Teacher</Tab>
                        <Tab>Lesson</Tab>
                        </TabList>

                        <TabPanel>
                        <p>1 Jose Marcial Portilla has a BS and MS in Mechanical Engineering from Santa Clara University and years of experience as a professional instructor and trainer for Data Science and programming. He has publications and patents in various fields such as microfluidics, materials science, and data science technologies. Over the course of his career he has developed a skill set in analyzing data and he hopes to use his experience in teaching and data science to help other people learn the power of programming the ability to analyze data, as well as present the data in clear and beautiful visualizations. </p>
                        </TabPanel>
                        <TabPanel>
                            <div className="row tab__pannel__row pt-3 pb-3">
                                <div className="col-lg-4 tab__teacher__clmn">
                                    <div className="teb__teacher__single">
                                        <img src={teacher} alt="teacher" />
                                        <h6><Link to="/teacher/details">Devil Roy Barman</Link></h6>
                                        <span>Computer Skills, Life Skills</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 tab__teacher__clmn">
                                    <div className="teb__teacher__single">
                                        <img src={teacher} alt="teacher" />
                                        <h6><Link to="/teacher/details">Devil Roy Barman</Link></h6>
                                        <span>Computer Skills, Life Skills</span>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="class__leason">
                                <div className="table-responsive">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                        <th scope="col"></th>
                                        <th scope="col">Open Time</th>
                                        <th scope="col">Closs Time</th>
                                        <th scope="col">Teacher</th>
                                        <th scope="col">Address</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="table-active">
                                            <th scope="row">Saturday</th>
                                            <td>6:50 pm</td>
                                            <td>8:00 pm</td>
                                            <td>@Jeremy Jordan</td>
                                            <td>429 Libby Street, Beverly, California</td>
                                        </tr>
                                        <tr class="table-light">
                                            <th scope="row">Sunday</th>
                                            <td>6:50 pm</td>
                                            <td>8:00 pm</td>
                                            <td>@Jeremy Jordan</td>
                                            <td>429 Libby Street, Beverly, California</td>
                                        </tr>
                                        <tr class="table-active">
                                            <th scope="row">Monday</th>
                                            <td>6:50 pm</td>
                                            <td>8:00 pm</td>
                                            <td>@Jeremy Jordan</td>
                                            <td>429 Libby Street, Beverly, California</td>
                                        </tr>
                                        <tr class="table-light">
                                            <th scope="row">Tuesdays</th>
                                            <td>6:50 pm</td>
                                            <td>8:00 pm</td>
                                            <td>@Jeremy Jordan</td>
                                            <td>429 Libby Street, Beverly, California</td>
                                        </tr>
                                        <tr class="table-active">
                                            <th scope="row">Wednesday</th>
                                            <td>6:50 pm</td>
                                            <td>8:00 pm</td>
                                            <td>@Jeremy Jordan</td>
                                            <td>429 Libby Street, Beverly, California</td>
                                        </tr>
                                        <tr class="table-light">
                                            <th scope="row">Thursdays</th>
                                            <td>6:50 pm</td>
                                            <td>8:00 pm</td>
                                            <td>@Jeremy Jordan</td>
                                            <td>429 Libby Street, Beverly, California</td>
                                        </tr>
                                        <tr class="table-active">
                                            <th scope="row">Fridays</th>
                                            <td>6:50 pm</td>
                                            <td>8:00 pm</td>
                                            <td>@Jeremy Jordan</td>
                                            <td>429 Libby Street, Beverly, California</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                            </div>
                        </TabPanel>
                    </Tabs>
                    <div className="course__details__mdlimg">
                        <img src={img1} alt="img" className="img-fluid"/>
                    </div>
                    </div>
                     <Comment />
                    </div>
            </div>
            <div className="col-lg-4">
                <div className="events__detils__right">
                    <CourseInfo/>
                    <Calendar />
                    
                        
                </div>
            </div>
           </div>
          </div>
        </div> 
        </>
    )
}
export default ClassesDetails