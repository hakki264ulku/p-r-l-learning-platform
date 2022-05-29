import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 const EventInfo = ()=> {
    return (
        <div className="event__info_wr">
           <h4>Event Information</h4>
            <div className="info__list">
                <div className="info__list__single">
                    <span className="info__list__icon"><FontAwesomeIcon icon={['fas', 'sitemap']}/></span>
                    <span className="info__list__name">Organizer: </span>
                    <span className="info__list__con">7-12 Years</span> 
                </div>
                <div className="info__list__single">
                    <span className="info__list__icon"><FontAwesomeIcon icon={['fas', 'glass-cheers']}/></span>
                    <span className="info__list__name">Year Old: </span>
                    <span className="info__list__con">15</span> 
                </div>
                <div className="info__list__single">
                    <span className="info__list__icon"><FontAwesomeIcon icon={['fas', 'people-carry']}/></span>
                    <span className="info__list__name">Event Size: </span>
                    <span className="info__list__con">50</span> 
                </div>
                <div className="info__list__single">
                    <span className="info__list__icon"><FontAwesomeIcon icon={['fas', 'calendar-day']}/></span>
                    <span className="info__list__name">Start Date: </span>
                    <span className="info__list__con">30</span> 
                </div>
            </div>
            <div className="registra__location__wr">
                <Link className="register_btn">Register at $49</Link>
                <Link className="location_btn">Location</Link>
                {/* <a href="#" className="register_btn">Register at $49</a>
                <a href="#" className="location_btn">Location</a> */}
            </div>
        </div>
    )
}
export default EventInfo