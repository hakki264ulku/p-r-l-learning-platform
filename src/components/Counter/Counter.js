import React from 'react'
 const Counter= ()=> {

    const Counters = [
        {
            counter:870,
            title:'Teaching Hours'
        },
        {
            counter:940,
            title:'Meals Per Years'
        },
        {
            counter:454,
            title:'Awards'
        },
        {
            counter:852,
            title:'Lessons'
        }
    ]
    return (
        <div className="counter__wrapper margin__top__bottom">
             <div className="container">
                <div className="counter__container">
                    <div className="row">
                        {Counters.map((Counter,i)=>
                            <div className="col-md-3 col-lg-3">
                            <div className="cointer__single">
                                <h2>{Counter.counter}</h2>
                                <span>{Counter.title}</span>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
             </div>
        </div>  
    )
}
export default Counter