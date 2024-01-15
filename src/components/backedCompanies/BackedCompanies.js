import React from "react";
import company1 from "../../assets/scroll-1.svg";
import company2 from "../../assets/scroll-3.svg";
import company3 from "../../assets/scroll-4.svg";
import company4 from "../../assets/scroll-5.png";
import company5 from "../../assets/scroll-6.png";
import company6 from "../../assets/scroll-7.png";
import company7 from "../../assets/scroll-8.png";
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from "./BackedCompanies.module.scss";

const BackedCompanies = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div id={styles.scrollingImages} className={`${styles.scrollingImages} ${styles.pageWidth} ${styles.sectionMargin}`}>
      <h2 className={`${styles.scrollingImagesTitle} ${styles.sectionTitle}`}>
        <span className={`${styles.titleUnderline}`}>joi<span className={`${styles.titleNeue}`}>n</span></span> companies backed by
      </h2>

      <Slider {...settings}>
        <div className={styles.swiperSlide}>
          <img
            loading="lazy"
            className={styles.scrollingImage}
            src={company1}
            alt="scroll-1"
          />
        </div>
        <div className={styles.swiperSlide}>
          <img
            loading="lazy"
            className={styles.scrollingImage}
            src={company2}
            alt="scroll-2"
          />
        </div>
        <div className={styles.swiperSlide}>
          <img
            loading="lazy"
            className={styles.scrollingImage}
            src={company3}
            alt="scroll-3"
          />
        </div>
        <div className={styles.swiperSlide}>
          <img
            loading="lazy"
            className={styles.scrollingImage}
            src={company4}
            alt="scroll-4"
          />
        </div>
        <div className={styles.swiperSlide}>
          <img
            loading="lazy"
            className={styles.scrollingImage}
            src={company5}
            alt="scroll-5"
          />
        </div>
        <div className={styles.swiperSlide}>
          <img
            loading="lazy"
            className={styles.scrollingImage}
            src={company6}
            alt="scroll-6"
          />
        </div>
        <div className={styles.swiperSlide}>
          <img
            loading="lazy"
            className={styles.scrollingImage}
            src={company7}
            alt="scroll-7"
          />
        </div>
      </Slider>
    </div>
  );
};

export default BackedCompanies;
