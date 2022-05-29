import React from 'react'
import sidecolor from '../../assets/images/sidecolor.svg'
 const Subscriber= ()=> {
    return (
        <div className="subscriber__wrapper padding__top__botton margin__top">
             <div className="container">
                <div className="row">
                     <div className="col-lg-12 text-center">
                        <div className="subscriber__title__container">
                            <h2 className="subscriber__title">Subscribe Newsletter</h2>
                            <p className="subscriber__contnet">
                            Enter your email address to register to our newsletter delivered on a regular basis!
                            </p>
                        </div>
                        <form className="form-inline">
                            <div className="form-group">
                                <input type="email" className="form-control" id="inputPassword2" placeholder="Enter mail"/>
                                <button type="submit" className="btn">subscribe</button>
                            </div>
                        </form>
                     </div>
                 </div>
             </div>
             <div className="subscriber__con">
                 <img src={sidecolor} alt="sidecolor"/>
             </div>
        </div>  
    )
}
export default Subscriber