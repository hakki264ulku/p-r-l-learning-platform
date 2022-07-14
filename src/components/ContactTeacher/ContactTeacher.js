import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 const ContactTeacher = ()=> {
    return (
        <div className="event__info_wr">
           <h4>Contact</h4>
            <div className="info__list contact__teacher">
                <div className="info__list__single">
                    <span className="info__list__icon"><FontAwesomeIcon icon={['fas', 'user-alt']}/></span>
                    <span className="info__list__name">Carolyn Jordan </span>
                </div>
                <div className="info__list__single">
                    <span className="info__list__icon"><FontAwesomeIcon icon={['fas', 'envelope']}/></span>
                    <span className="info__list__name">pirilcampus@gmail.com</span>
                </div>
                <div className="info__list__single">
                    <span className="info__list__icon"><FontAwesomeIcon icon={['fas', 'phone']}/></span>
                    <span className="info__list__name">Pırıl Phone</span>
                </div>
                <div className="info__list__single">
                    <span className="info__list__icon"><FontAwesomeIcon icon={['fab', 'skype']}/></span>
                    <span className="info__list__name">devdesign.studio_1</span>
                </div>
                <div className="info__list__single">
                    <span className="info__list__icon"><FontAwesomeIcon icon={['fas', 'calendar-day']}/></span>
                    <span className="info__list__name">devdesign.com</span>
                </div>
            </div>
        </div>
    )
}
export default ContactTeacher