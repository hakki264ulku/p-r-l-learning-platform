import React from 'react'
import teacherkid from '../../assets/images/teacherkid.png'
import teacherkid1 from '../../assets/images/teacherkid1.png'
 const Teacher1= ()=> {
    const teachers=[
        {
            src:teacherkid,
            title:'Pre-School Class'
        },
        {
           src:teacherkid1,
           title:'Best Teachers'
       },
       {
           src:teacherkid,
           title:'Excellent Curses'
       },
       {
           src:teacherkid1,
           title:'Funny Games'
       }
    ]
    return (
        <div className="teacher1__wrapper padding__top__botton"> 
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-4 mx-auto ">
                    <div className="section__title__container text-center">
                        <h5 className="section__subtitle">Education For Everyone</h5>
                        <h2 className="section__title">Our Desiration On Kid Education</h2>
                        <p className="section__contnet section__margin__bottom">
                            As a word from our heart, we love to dedicate for Kids the valuable things in
                            Life. A great education is a must for a solid developments in both soul and mind
                            for kids. We go with kids to play, learn, and grow better.
                        </p>
                    </div>
                 </div>
            </div>
            <div className="row last__child_remove">
                {teachers.map((teacher,i)=>
                    <div className="col-lg-4 col-xl-3 mar__bottom_30" key={i}>
                        <div className="page__teacher__img">
                            <img src={teacher.src}alt={teacher.title}/>
                            <h4>{teacher.title}</h4>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
    )
}
export default Teacher1