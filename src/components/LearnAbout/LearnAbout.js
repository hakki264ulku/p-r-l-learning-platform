import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import Slider1 from "react-slick";
import learnabout from "../../assets/images/learnabout.jpg";
const LearnAbout = () => {
  const [isOpen, setOpen] = useState(true);
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const videos = [
    {
      src: learnabout,
      vid: "v7dSV6tyyYY",
    },
    {
      src: learnabout,
      vid: "v7dSV6tyyYY",
    },
    {
      src: learnabout,
      vid: "v7dSV6tyyYY",
    },
    {
      src: learnabout,
      vid: "v7dSV6tyyYY",
    },
  ];

  return (
    <div className="learn__about__wrapper padding__top">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="learn__about__img">
              <Slider1 {...settings}>
                {videos.map((video, i) => (
                  <div className="learn__about__img" key={i}>
                    <img src={video.src} alt="learnabout" />
                    {video.vid === "" ? (
                      0
                    ) : (
                      <>
                        <ModalVideo
                          channel="youtube"
                          youtube={{
                            autoplay: 0,
                          }}
                          isOpen={isOpen}
                          videoId={video.vid}
                          onClose={() => setOpen(false)}
                        />
                        <button
                          className="btn video__btn"
                          onClick={() => setOpen(true)}
                        >
                          <FontAwesomeIcon icon={["fas", "play"]} />
                        </button>
                      </>
                    )}
                  </div>
                ))}
              </Slider1>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="learn__right">
              <div className="up__art">
                <img src="/images/up.svg" alt="" />
              </div>
              <div className="section__title__container">
                <h5 className="section__subtitle">Education For Everyone</h5>
                <h2 className="section__title">
                  Learn About Our Work Culture Pırıl Campus
                </h2>
                <p className="section__contnet">
                  As a word from our heart, we love to dedicate for Kids the
                  valuable things in Life. A great education is a must for a
                  solid developments in both soul and mind for kids. We go with
                  kids to play, learn, and grow better.
                </p>
              </div>
              <ul className="list__content">
                <li>
                  <FontAwesomeIcon icon="check-circle" />
                  Mathematics
                </li>
                <li>
                  <FontAwesomeIcon icon="check-circle" />
                  English
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon icon="check-circle" />
                  Coding
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon icon="check-circle" />
                  Science
                </li>
              </ul>
              <p className="learn__contnet2">
                As a word from our heart, we love to dedicate for Kids the
                valuable things in Life . We go with kids to play, learn, and
                grow better.
              </p>
              <Router>
                <h5 className="have__q3">
                  Have a question?
                  <Link to="/" className="start__free">
                    Get Started Free
                  </Link>
                </h5>
              </Router>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LearnAbout;
