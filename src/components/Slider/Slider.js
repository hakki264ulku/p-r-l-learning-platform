import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Slider1 from "react-slick";
import { BrowserRouter as Router } from "react-router-dom";
import ModalVideo from 'react-modal-video'
import slider from '../../assets/images/piril-home.png'
import kid1 from '../../assets/images/kid1.svg'
import kid2 from '../../assets/images/kid2.svg'

 const Slider= ()=> {
    // const [addClass, updateClass] = useState(false)
    const [isOpen, setOpen] = useState(false)
    const [clickVideo, setClickVideo] = useState('KFVdHDMcepw')
    const SampleNextArrow=(props)=>{
        const { onClick } = props;
        return (
           <div 
           className="slick__arrow__next"
           onClick={onClick}
           >
                <FontAwesomeIcon icon={['fas', 'arrow-right']}/>
           </div>
        )
    }
    const SamplePrevArrow=(props)=>{
        const { onClick } = props;
        return (
            <div 
            className="slick__arrow__prev"
            onClick={onClick}
            >
                <FontAwesomeIcon icon={['fas', 'arrow-left']}/>
            </div>
        )
    }
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
        
      };

      const SliderContents=[   
          {
              h1a:'Pırıl is a Child Care',
              h1:'Professional',
              p:'Every episode is a new adventure, every episode is a new fun!',
              vid:'v7dSV6tyyYY'
          },
        {
            h1a:'Pırıl is a learning',
            h1:'Professional',
            p:'Get ready to enter the colorful world of education with Pırıl!',
            vid:'CsuCzqzme0I'
        }
      ]
    const videoHandle =(vid)=>{
        setOpen(true)
       setClickVideo(vid)
    }
    return (
        <div className="slider__wrapper">
             <div className="container">
                <div className="row row__reverce">
                    <div className="col-lg-6">
                       <div className="slider__inner">
                       <ModalVideo 
                        channel='youtube' 
                        youtube={{
                            autoplay: 0
                            }}
                        isOpen={isOpen} 
                        videoId={clickVideo}
                        onClose={() => setOpen(false)}
                                            />
                           <Slider1 {...settings}>
                           {SliderContents.map((SliderContent,i)=>
                                <div className="single__slider" key={i}>
                                <div className="video__modal">
                                    {
                                        SliderContent.vid===''? '':
                                        <button className="btn video__btn" onClick={()=>videoHandle(SliderContent.vid)}>
                                            <FontAwesomeIcon icon={['fas', 'play']}/>
                                        </button>
                                    }
                                </div>
                                <h1><span className="above__title">{SliderContent.h1a} </span>
                                {SliderContent.h1}
                                </h1>
                                <p className="slider__para">{SliderContent.p}</p>
                                <div className="slider__btns">
                                    <Router>
                                        <a href="/login" className="cmn__btn">Apply Now<FontAwesomeIcon icon={['fas', 'arrow-right']}/></a>
                                        <a href="/aboutus" className="learn__btn cmn__btn">Learn More<FontAwesomeIcon icon={['fas', 'arrow-right']}/></a>
                                    </Router>
                                </div>
                                </div>

                           )} 
                           </Slider1>
                       </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="slider__image">
                            <img width="900" src={slider} alt=""/>
                        </div>
                    </div>
                </div>
             </div>
             <div className="slider__side__color">
                <img src={kid2} alt="kid2"/>
            </div>
        </div>
        
    )
}
export default Slider