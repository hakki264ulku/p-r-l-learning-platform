import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 const Contact = ()=> {
    return (
        <div className="contact__container padding__top__botton"> 
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-2 mx-auto">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="contact__left">
                                    <div className="section__title__container mb-3">
                                        <h5 className="section__subtitle">Contact Us</h5>
                                        <h2 className="section__title">Keep in Touch</h2>
                                    </div>
                                    <form>
                                        <div className="form-group">
                                            <input type="text" className="form-control mb-4" id="name" aria-describedby="emailHelp" placeholder="Your Name"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control mb-4" id="email" placeholder="Your Email" />
                                        </div>
                                        <div className="form-group">
                                           <textarea className="form-control mb-4" name="textarea" id="textarea" cols="30" rows="5"></textarea>
                                        </div>
                                        <button type="submit" className="btn page__contact__btn">Send Message</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="contact__right">
                                    <div className="section__title__container mb-3">
                                        <h2 className="section__title">Address</h2>
                                        <p className="section__contnet">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
                                        </p>
                                    </div>
                                    <div className="address__contact">
                                        <div className="single__address">
                                            <FontAwesomeIcon icon={['fas', 'home']}/>
                                            <div className="address__content ml-3">
                                                <p>Address</p>
                                                <p>Melikşah, Beyşehir Cd. No:9, 42080 Meram/Konya</p>
                                            </div>
                                        </div>
                                        <div className="single__address">
                                            <FontAwesomeIcon icon={['fas', 'envelope']}/>
                                            <div className="address__content ml-3">
                                                <p>Email:</p>
                                                <p>pirilcampus@gmail.com</p>
                                            </div>
                                        </div>
                                        <div className="single__address">
                                            <FontAwesomeIcon icon={['fas', 'phone-volume']}/>
                                            <div className="address__content ml-3">
                                                <p>Phone Number:</p>
                                                <p>Pırıl Phone</p>
                                            </div>
                                        </div>
                                        <div className="single__address">
                                            <FontAwesomeIcon icon={['fas', 'clock']}/>
                                            <div className="address__content ml-3">
                                                <p>Working Time:</p>
                                                <p>Mon - Sat: 8am - 17.30pm</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}
export default Contact