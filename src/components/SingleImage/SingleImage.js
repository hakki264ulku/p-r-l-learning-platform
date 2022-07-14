import React from 'react'
import eventen from '../../assets/images/eventen.png'
 const SingleImage = ()=> {
    
    return (
        <div className="single__images">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <img src={eventen} className="img-fluid" alt="singleimg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SingleImage