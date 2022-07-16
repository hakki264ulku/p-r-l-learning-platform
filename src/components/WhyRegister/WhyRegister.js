import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalVideo from "react-modal-video";
import whyregister from "../../assets/images/whyregister.jpg";
import school from "../../assets/images/school.png";
import teacher from "../../assets/images/teacher.png";
import book from "../../assets/images/book.png";
const WhyRegister = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    console.log("ll");
  }, []);
  return (
    <div className="why__register__wrapper padding__bottom">
      <div className="container-fluid p-0">
        <div className="row no-gutters">
          <div className="col-lg-6">
            <div className="why__img">
              <img src={whyregister} alt="" />
              <ModalVideo
                channel="youtube"
                youtube={{
                  autoplay: 0,
                }}
                isOpen={isOpen}
                videoId="v7dSV6tyyYY"
                onClose={() => setOpen(false)}
              />
              <button className="btn video__btn" onClick={() => setOpen(true)}>
                <FontAwesomeIcon icon={["fas", "play"]} />
              </button>
            </div>
          </div>
          <div className="col-lg-6 why__right__back">
            <div className="why__right">
              <div className="section__title__container">
                <h5 className="section__subtitle1">
                  Why Hesitate To Register?
                </h5>
                <h2 className="section__title">
                  We Are The Best Choice For Your Child
                </h2>
                <p className="section__contnet">
                  As a word from our heart, we love to dedicate for Kids the
                  valuable things in Life. A great education is a must for a
                  solid developments in both soul and mind for kids. We go with
                  kids to play, learn, and grow better.
                </p>
              </div>
              <div className="list__options">
                <div className="list__one">
                  <div className="list__one__half">
                    <img src={school} alt="school" />
                  </div>
                  <div className="list__one__content">
                    <h5>Well Trained Professionals</h5>
                    <p>
                      Enabling humanoid robot movement with imitation learning
                      and mimicking of animal behaviors
                    </p>
                  </div>
                </div>
                <div className="list__one">
                  <div className="list__one__half">
                    <img src={teacher} alt="teacher" />
                  </div>
                  <div className="list__one__content">
                    <h5>International Lesson Patterns</h5>
                    <p>
                      Summer of the SPAC, Adam Neumann returns and the Nissan
                      Ariya debuts
                    </p>
                  </div>
                </div>
                <div className="list__one">
                  <div className="list__one__half">
                    <img src={book} alt="book" />
                  </div>
                  <div className="list__one__content">
                    <h5>Awesome Infra-Structure</h5>
                    <p>
                      Ready, set, network! CrunchMatch is now open for Early
                      Stage 2020
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhyRegister;
