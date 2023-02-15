import React from 'react';
import { useTranslation } from 'react-i18next';
// import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Welcome.css';
// import 'animate.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import sabine from '../../assets/images/sabine.jpg'
import alliancesCroisees from '../../assets/images/alliancesCroisees.png'

const Welcome = () => {
    const { t } = useTranslation();
    // const welcomeSlidesImgs = [
    //     { id: 0, welcomeSlideImg: welcomeSlide1 },
    //     { id: 1, welcomeSlideImg: welcomeSlide2 },
    //     { id: 2, welcomeSlideImg: welcomeSlide3 },
    //     { id: 3, welcomeSlideImg: welcomeSlide4 },
    //     { id: 4, welcomeSlideImg: welcomeSlide5 },
    //     { id: 5, welcomeSlideImg: welcomeSlide6 },
    // ];
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     pauseOnHover: true
    // };

    // <Slider {...settings} className="slider">
    //             {welcomeSlidesImgs.map(img =>
    //                 <div key={img.id} className='slide'>
    //                     <img src={img.welcomeSlideImg} alt={t('image_description')} className="sliderImg" />
    //                     <p>{t(`slide${img.id + 1}_description`)}</p>
    //                 </div>)}
    //         </Slider> 

    //  <ScrollAnimation animateIn="animate__fadeInRight">
    //                 <div className="welcomeSectionImage">
    //                     <img
    //                         // src={ }
    //                         alt={t('image_description')}
    //                         className="welcomeSectionImage1"
    //                     />
    //                 </div>
    //             </ScrollAnimation >
    return (
        <div className="welcomeSection" >
            <img
                src={sabine}
                alt={t('image_description')}
                className="welcomeSectionImage"
            />
            <div className="welcomeSectionText">
                <h2 className='title'>{t('welcome')}</h2>
                <img
                    src={alliancesCroisees}
                    alt="calligraphie"
                    className="alliancesCroiseesImgWelcomePage"
                />
                <p>{t("Welcome to our wedding website! We are so excited to see you all at our wedding in Lebanon! Here you will find all information and details about it. In case you have any question and do not find the answer, feel reach to reach out to us on ")}
                    <a href="mailto:mariage.sabineetjulien@gmail.com">mariage.sabineetjulien@gmail.com</a>
                    {t(" We hope to see you all at our wedding!")}
                </p>
            </div>
        </div >
    );
}

export { Welcome };
