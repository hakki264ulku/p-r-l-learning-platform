import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter as Router,Link } from "react-router-dom";
import blog from '../../assets/images/blog.jpg'
import blog1 from '../../assets/images/blog1.jpg'
import blog2 from '../../assets/images/blog2.jpg'
import blog3 from '../../assets/images/blog3.jpg'
 const Blog= ()=> {

    const blogs=[
        {
            src:blog,
            title:'Helping Your Child',
            para:'While the unit economics were a driving factor, the company says its acquisition of lidar company'
        },
        {
            src:blog1,
            title:'Save the Children ',
            para:'company Blackmore and the integration of that tech in its self-driving stack has made the shift'
        },
        {
            src:blog2,
            title:'Visit the organization',
            para:' Aurora has said its FirstLight Lidar gives it a crucial competitive advantage in high-speed self-driving'
        },
        {
            src:blog3,
            title:'Children in International',
            para:'At the virtual two-day conference, we’re bringing together some of the most seasoned operators'
        }
    ]
    return (
        <div className="blog__wrapper">
             <div className="container">
                <div className="row">
                     <div className="col-lg-8 offset-lg-4 mx-auto ">
                        <div className="section__title__container text-center">
                            <h5 className="section__subtitle">Together We Can Create</h5>
                            <h2 className="section__title">Interesting Articles Updated Daily</h2>
                        </div>
                     </div>
                 </div>
                 <div className="row">
                     {blogs.map((blog,i)=>
                        <div className="col-lg-4 col-xl-3 col-md-6" key={i}>
                        <div className="blog__single">
                            <div className="blog__img">
                                <img src={blog.src} className="img-fluid" alt={blog.title}/>
                            </div>
                            <div className="blog__inner__content">
                                <h5 className="blog__title">
                                    <Router>
                                        <Link to="/details">{blog.title}</Link>
                                    </Router>
                                </h5>
                                <p className="blog__para">
                                {blog.para}
                                </p>
                                <ul className="blog__comment">
                                    <li> 12 Comments</li>
                                    <li> |  </li>
                                    <li>Dec 17, 2020 </li>    
                                </ul>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="more__teacher text-center">
                            <Router>
                                <Link to="/moreproject" className="teacher__quali">With 20+ Qualified Teacher?​</Link>
                            </Router>
                            <Router>
                                <Link to="/moreproject" className="teacher__btn">View All Here <FontAwesomeIcon icon={['fas', 'caret-right']} /></Link>
                            </Router>
                            <Router>
                                <Link to="/moreproject" className="teacher__car">Careers</Link>
                            </Router>
                        </div>
                    </div>
                </div>
             </div>
        </div>  
    )
}
export default Blog