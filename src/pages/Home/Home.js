import React,{useEffect} from 'react'
import Slider from '../../components/Slider/Slider'
import LearnAbout from '../../components/LearnAbout/LearnAbout'
import Service from '../../components/Service/Service'
import Teacher from '../../components/Teacher/Teacher'
import JoinSession from '../../components/JoinSession/JoinSession'
import Blog from '../../components/Blog/Blog'
import Subscriber from '../../components/Subscriber/Subscriber'
import WhyRegister from '../../components/WhyRegister/WhyRegister'
 const Home= ({title})=> {
    useEffect(() => {
        document.title = title
     });
    return (
        <div className="home__wrapper"> 
            <Slider/>
            <LearnAbout/>   
            <Service/> 
            <WhyRegister />   
            <JoinSession/>
            <Subscriber />  
        </div> 
    )
}
export default Home