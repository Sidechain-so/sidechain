import React from "react";
import iconRef1 from "../../assets/ref-1.png";
import iconRef2 from "../../assets/ref-2.png";
import iconRef3 from "../../assets/ref-3.png";

import "./Reviews.scss";

const Reviews = () => {
  return (
    <div id="reviews" className="reviews page-width section-margin">
      <h2 className="reviews__title section-title">why top engineers from around the world trust sidechain</h2>

      <div className="reviews__cards grid__column-3">
        <div className="reviews__card">
          <p className="reviews__desc">The onboarding process on sidechain was smooth. This platform has truly optimized my working experience and allowed me to focus on what I do best – delivering high-quality work. Sidechain has made me feel like I'm part of something bigger.</p>
          <div className="reviews__profile">
            <div className="reviews__profile-image">
              <img loading="lazy" src={iconRef1} alt="person" />
            </div>
            <div className="reviews__profile-desc">
              <p>Patrick Loher</p>
              <span>Rust Developer</span>
            </div>
          </div>
        </div>
        <div className="reviews__card">
          <p className="reviews__desc">
            Finding reliable work can be tough. Thankfully, I stumbled upon sidechain. I receive personalized job recommendations that align with my skills. Sidechain has not only helped me find consistent work but has also connected me with clients who value my expertise.
          </p>
          <div className="reviews__profile">
            <div className="reviews__profile-image">
              <img loading="lazy" src={iconRef2} alt="person" />
            </div>
            <div className="reviews__profile-desc">
              <p>Paul Anderson</p>
              <span>Full Stack Developer</span>
            </div>
          </div>
        </div>
        <div className="reviews__card">
          <p className="reviews__desc">
            I have to say that sidechain has been a game-changer for me. The user interface is intuitive, making it easy for me to navigate through projects and communicate with clients. I've landed some great jobs, and I couldn't be happier with the consistent stream of
            opportunities it provides.
          </p>
          <div className="reviews__profile">
            <div className="reviews__profile-image">
              <img loading="lazy" src={iconRef3} alt="person" />
            </div>
            <div className="reviews__profile-desc">
              <p>Lindsay Murray</p>
              <span>Solidity Developer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
