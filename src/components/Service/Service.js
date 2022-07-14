import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter as Router,Link } from "react-router-dom";
import english from '../../assets/images/piril-english-world.png'
import math from '../../assets/images/piril-math-world.png'
import science from '../../assets/images/piril-science-world.png'
import code from '../../assets/images/piril-code-world.png'
import work5 from '../../assets/images/piril-english-world.png'
import work6 from '../../assets/images/piril-english-world.png'
 const Service= ()=> {

    const services=[
        {
            src:english,
            title:'Learn English With Pırıl',
            price:'$80'
        },
        {
            src:math,
            title:'Learn Mathematics With Pırıl',
            price:'$90'
        },
        {
            src:code,
            title:'Learn Coding With Pırıl',
            price:'$100'
        },
        {
            src:science,
            title:'Learn Science With Pırıl',
            price:'$110'
        },
        {
            src:english,
            title:'Learn With Pırıl',
            price:'$80'
        },
        {
            src:english,
            title:'Learn With Pırıl',
            price:'$80'
        },
    ]
    return (
        <div className="service__wrapper padding__top__botton">
            <div className="side__img__wal">
                <img src="/images/side0.svg" alt=""/>
            </div>
             <div className="container">
                 <div className="row">
                     <div className="col-lg-8 offset-lg-4 mx-auto ">
                        <div className="section__title__container text-center">
                            <h5 className="section__subtitle">Education For Everyone</h5>
                            <h2 className="section__title">Learn About Our Work Culture Pırıl Campus</h2>
                            <p className="section__contnet section__margin__bottom">
                                As a word from our heart, we love to dedicate for Kids the valuable things in
                                Life. A great education is a must for a solid developments in both soul and mind
                                for kids. We go with kids to play, learn, and grow better.
                            </p>
                        </div>
                     </div>
                 </div>
                <div className="row">
                {services.map((service,i)=>
                    <div className="col-lg-4" key={i}>
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
                                </div>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
               
             </div>
        </div>  
    )
}
export default Service