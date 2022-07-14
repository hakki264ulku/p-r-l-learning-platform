import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter as Router,Link } from "react-router-dom";
 const JoinSession= ()=> {
    return (
        <div className="joinsession__wrapper margin__bottom">
             <div className="container">
                <div className="row">
                     <div className="col-sm-12 offset-sm-0 col-lg-6 text-center offset-lg-5 mx-auto">
                         <h5 className="session__sub">Join Our New Session</h5>
                         <h2 className="session__title">Click To Let Your Child Join To Pırıl Campus</h2>
                         <Router>
                            <a href="/login" className="session__join">Sign In/Up Now!<FontAwesomeIcon icon="caret-right"/></a>
                        </Router>
                     </div>
                 </div>
             </div>
        </div>  
    )
}
export default JoinSession