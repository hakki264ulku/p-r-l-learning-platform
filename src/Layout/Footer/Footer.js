import React, {useState,useEffect}from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SRLWrapper } from "simple-react-lightbox";
import {Link } from "react-router-dom";
import footer1 from '../../assets/images/footer1.jpg'
import footer2 from '../../assets/images/footer2.jpg'
import footer3 from '../../assets/images/footer3.jpg'
import footer4 from '../../assets/images/footer4.jpg'
import footer5 from '../../assets/images/footer5.jpg'
import footer6 from '../../assets/images/footer6.jpg'
import footer7 from '../../assets/images/footer7.jpg'
import footer8 from '../../assets/images/footer8.jpg'
import service1 from '../../assets/images/service1.jpg'
import teacherkid1 from '../../assets/images/teacherkid.png'
import teacherkid2 from '../../assets/images/teacherkid1.png'
 const Footer= ()=> {
    const [bootomClass, setBootomClass] = useState(false)
    const scrollHandleScroll = () => {

        if (window.scrollY > 500) {
            setBootomClass(true)
        } else {
            setBootomClass(false)
        }
  
      }
      const footerImages = [
          {
              src:footer1,
              thumbnail: service1
          },
           {
              src:footer2,
              thumbnail: teacherkid1
          },
           {
              src:footer3,
              thumbnail: service1
          },
          {
              src:footer4,
              thumbnail: teacherkid1
          },
          {
              src:footer5,
              thumbnail: teacherkid2
          },
          {
              src:footer6,
              thumbnail: service1
          },
          {
              src:footer7,
              thumbnail: teacherkid1
          },
          {
              src:footer8,
              thumbnail: teacherkid2
          }
      ]
      const scrollTop = () => {
          window.scrollTo(0, 0);
      }
      useEffect(() => {
        window.addEventListener('scroll', scrollHandleScroll);
      },[]);

    return (
        <div className="footer__wrapper padding__top">
             <div className="container ">
                <div className="row">
                     <div className="col-lg-6">
                         <div className="footer__one">
                             <h3 className="footer__title">Contact Us</h3>
                             <ul className="footer__list1">
                                 <li><FontAwesomeIcon icon={['fas', 'phone-volume']}/>Phone: Pırıl Phone</li>
                                 <li><FontAwesomeIcon icon={['fas', 'envelope']}/>Mail: pirilcampus@gmail.com</li>
                                 <li><FontAwesomeIcon icon={['fas', 'home']}/>Address: 3366  Jefferson Street, NEW HAMPTON, IA</li>
                                 <li><FontAwesomeIcon icon={['fas', 'clock']}/>Working day: 9am - 5pm EST, Monday - Friday</li>
                             </ul>
                             <ul className="footer__social">
                                 <li><a href="https://www.facebook.com/trtcocukpiril/"><FontAwesomeIcon icon={['fab', 'facebook-f']}/></a></li>
                                 <li><a href="https://twitter.com/trtcocukpiril"><FontAwesomeIcon icon={['fab', 'twitter']}/></a></li>
                                 <li><a href="https://www.instagram.com/trtcocukpiril/"><FontAwesomeIcon icon={['fab', 'instagram']}/></a></li>
                             </ul>
                         </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="footer__one">
                             <h3 className="footer__title">Information</h3>
                             <ul className="footer__list2">
                                <li onClick={()=>scrollTop()}><Link to="/"> - Home</Link></li>
                                <li onClick={()=>scrollTop()}><Link to="/teachers"> - Teachers</Link></li>
                                <li onClick={()=>scrollTop()}><Link to="/aboutus"> - About Us</Link></li>
                                <li onClick={()=>scrollTop()}><Link to="/contact"> - Contact</Link></li>
                                <li onClick={()=>scrollTop()}><Link to="/error"> - Error</Link></li>
                             </ul>
                         </div>
                     </div>
                 </div>
                 <div className="row">
                     <div className="col-lg-12 text-center">
                         <p className="copy__right">
                         ©2022 Pırıl Campus is created by Hakkı, Ebru, Kaan
                         </p>
                     </div>
                 </div>
             </div>

             <div className={"bottom__top" +( bootomClass? ' bottom__fade': '' )} onClick={()=>scrollTop()}>
                <FontAwesomeIcon icon={['fas', 'angle-up']}/>
             </div>
        </div>  
    )
}
export default Footer