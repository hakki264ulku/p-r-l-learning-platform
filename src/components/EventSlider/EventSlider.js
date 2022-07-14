
import Slider1 from "react-slick";
import img0 from '../../assets/images/eventdetails.jpg'
import img1 from '../../assets/images/eventdetails1.jpg'

 const Slider= ()=> {

      const SliderContents=[   
          {
              src:img0
          },
          {
            src:img1
         },
         {
            src:img0
        },
        {
          src:img1
        },
      ]
      const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        
        
      };
    return (
        <div className="slider__inne">
            <Slider1 {...settings}>
            {SliderContents.map((SliderContent,i)=>
                <div className="single__slider" key={i}>
                    <img src={SliderContent.src}  alt=""/>
                </div>

            )} 
            </Slider1>
        </div>
        
    )
}
export default Slider