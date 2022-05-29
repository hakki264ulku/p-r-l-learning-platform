import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link } from "react-router-dom";
import blog from '../../assets/images/blog.jpg'
import blog1 from '../../assets/images/blog1.jpg'
import blog2 from '../../assets/images/blog2.jpg'
import blog3 from '../../assets/images/blog3.jpg'
 const BlogEvents= ()=> {

    const blogs=[
        {
            src:blog,
            title1:'455 Washington, Jersey City, NJ, USA',
            title2:'Family Field Day',
            time:'2:30 pm - 7:30 pm',
            dolar:79,
        },
        {
            src:blog1,
            title1:'455 Washington, Jersey City, NJ, USA',
            title2:'Family Field Day',
            time:'2:30 pm - 7:30 pm',
            dolar:79,
        },
        {
            src:blog2,
            title1:'455 Washington, Jersey City, NJ, USA',
            title2:'Family Field Day',
            time:'2:30 pm - 7:30 pm',
            dolar:79,
        },
        {
            src:blog3,
            title1:'455 Washington, Jersey City, NJ, USA',
            title2:'Family Field Day',
            time:'2:30 pm - 7:30 pm',
            dolar:79,
        },
        {
            src:blog3,
            title1:'455 Washington, Jersey City, NJ, USA',
            title2:'Family Field Day',
            time:'2:30 pm - 7:30 pm',
            dolar:79,
        },
        {
            src:blog2,
            title1:'455 Washington, Jersey City, NJ, USA',
            title2:'Family Field Day',
            time:'2:30 pm - 7:30 pm',
            dolar:79,
        },
        {
            src:blog1,
            title1:'455 Washington, Jersey City, NJ, USA',
            title2:'Family Field Day',
            time:'2:30 pm - 7:30 pm',
            dolar:79,
        },
        {
            src:blog,
            title1:'455 Washington, Jersey City, NJ, USA',
            title2:'Family Field Day',
            time:'2:30 pm - 7:30 pm',
            dolar:79,
        }
    ]
    return (
        <div className="blog__events__wrapper">
             <div className="container">
                <div className="row">
                     <div className="col-lg-8 offset-lg-4 mx-auto ">
                        <div className="section__title__container text-center">
                            <h5 className="section__subtitle">Together We Can Create</h5>
                            <h2 className="section__title section__margin__bottom">Interesting Articles Updated Daily</h2>
                        </div>
                     </div>
                 </div>
                 <div className="row">
                     {blogs.map((blog,i)=>
                        <div className="col-md-6 col-lg-3" key={i}>
                        <div className="event__blog__single">
                            <div className="event__blog__img">
                                <img src={blog.src} className="img-fluid" alt={blog.title1}/>
                                <div className="event__date">
                                    <h6 className="event__date1">22</h6>
                                    <h6 className="event__date2">Dec</h6>
                                </div>
                            </div>
                            <div className="event__blog__content">
                                <h6 className="event__title1">
                                    <Link to="/event/details"> {blog.title1}</Link> 
                                </h6>
                                <h5 className="event__title2">
                                    {blog.title2}
                                </h5>
                                <p className="event__time"> {blog.time}</p>
                                <p className="event__dolar">${blog.dolar}</p>
                            </div>
                        </div>
                     </div>
                    )}
                </div>
             </div>
        </div>  
    )
}
export default BlogEvents