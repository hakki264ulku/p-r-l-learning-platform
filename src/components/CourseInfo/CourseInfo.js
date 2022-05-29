import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 const TeacherInfo = ()=> {
    return (
        <div className="event__info_wr">
           <h4>Course Information</h4>
            <div className="info__list">
                <div className="info__list__single">
                    <span className="info__list__icon"><FontAwesomeIcon icon={['fas', 'sitemap']}/></span>
                    <span className="info__list__name">Years Old : </span>
                    <span className="info__list__con">7-12 Years</span> 
                </div>
                <div className="info__list__single">
                    <span className="info__list__icon"><FontAwesomeIcon icon={['fas', 'glass-cheers']}/></span>
                    <span className="info__list__name">Class Size: </span>
                    <span className="info__list__con">15</span> 
                </div>
                <div className="info__list__single">
                    <span className="info__list__icon"><FontAwesomeIcon icon={['fas', 'people-carry']}/></span>
                    <span className="info__list__name">Lesson : </span>
                    <span className="info__list__con">50</span> 
                </div>
                <div className="info__list__single">
                    <span className="info__list__icon"><FontAwesomeIcon icon={['fas', 'calendar-day']}/></span>
                    <span className="info__list__name">Difficulty : </span>
                    <span className="info__list__con">30</span> 
                </div>
            </div>
            <div className="registra__location__wr">
                <Link className="register_btn">Register</Link>
                <Link className="location_btn">Schedule</Link>
            </div>
        </div>
    )
}
export default TeacherInfo