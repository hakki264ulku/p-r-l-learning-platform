import React from 'react'
import avter from '../../assets/images/comment-p.jpg'
import { Link } from "react-router-dom";
 const Comment = ()=> {
    
    return (
        <div className="comment__wrapper">
            <h4 className="leave__comment">Leave a Reply</h4>
            <form>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Text Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                </div>
                <div className="form-row">
                    <div className="col-12 col-md-6">
                        <input type="text" class="form-control first__name" placeholder="First name" />
                    </div>
                    <div className="col-12 col-md-6">
                        <input type="text" class="form-control" placeholder="Last name"/>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary1 ">Post Comment</button>
            </form>

            <div className="all__comment">
                <h5 className="all__comment__title">All Comment</h5>
                <div className="comment__single">
                    <div className="comment__img">
                        <img src={avter}  alt="avater" />
                    </div>
                    <div className="comment__content">
                        <h4>Devil Roy Borman</h4>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing
                        consetetur sadipscing elitr, sed diam nonumy eirmod  elitr, sed diam nonumy eirmod </p>
                        <div className="comment__date__wr">
                            <div className="comment__date">Jan 22, 2021 at 7:54 am</div>
                            <div className="comment__replay">
                                <Link>Replay</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="comment__single">
                    <div className="comment__img">
                        <img src={avter}  alt="avater" />
                    </div>
                    <div className="comment__content">
                        <h4>Devil Roy Borman</h4>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod </p>
                        <div className="comment__date__wr">
                            <div className="comment__date">Jan 22, 2021 at 7:54 am</div>
                            <div className="comment__replay">
                              <Link>Replay</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Comment