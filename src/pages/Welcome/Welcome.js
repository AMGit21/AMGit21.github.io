import React from 'react';
import { useTranslation } from 'react-i18next';
import './Welcome.css';
import sabine from '../../assets/images/sabine.jpg'
import alliancesCroisees from '../../assets/images/alliancesCroisees.png'

const Welcome = () => {
    const { t } = useTranslation();
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
                <p>{t("Welcome to our wedding website! We are so excited to see you all at our wedding in Lebanon! Here you will find all information and details about it. In case you have any question and do not find the answer, feel free to reach out to us on ")}
                    <a href="mailto:mariage.sabineetjulien@gmail.com">mariage.sabineetjulien@gmail.com</a>
                    {t(" We hope to see you all at our wedding!")}
                </p>
            </div>
        </div >
    );
}

export { Welcome };
