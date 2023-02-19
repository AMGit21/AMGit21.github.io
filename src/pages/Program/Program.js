import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Program.css'
import { useTranslation } from 'react-i18next';
import { ActiveLinkContext } from '../../components/ActiveLinkContext/ActiveLinkContext.js';

const Program = () => {
    const { t } = useTranslation();
    const { setActive } = useContext(ActiveLinkContext);

    const rsvpProgHandleClick = () => {
        setActive('rsvp');
    }
    return (
        <div className='programSection'>
            <h2 className='title'>{t("program")}</h2>
            <div className='lineUnderTitle'></div>
            <div className='divWrapperProgram'>
                <div className="timelineContainer">
                    <ul className='listTitle'>{t('Saturday September 16, 2023')}
                        <li className='listItem'>
                            <i>{t("Location: ")}
                                <a href="https://goo.gl/maps/GZP2A4y4kApzVkKx7" rel="noreferrer" target="_blank">
                                    Plage des Rois
                                </a> - Byblos,
                                {t(" Lebanon")}
                            </i>
                        </li>
                        <li className='listItem'>{t('4:30pm: Wedding ceremony')}</li>
                        <li className='listItem'>{t('6pm: Cocktail')}</li>
                        <li className='listItem'>{t('8pm: Dinner and Party')}</li>
                    </ul>
                    <hr className='lineBetweenTimeLine' />
                    <ul className='listTitle'>{t('Sunday, September 17, 2023')}
                        <li className='listItem'>
                            <i>
                                {t("Location: ")}
                                <a href="https://goo.gl/maps/JJhDYudGSM2d69Df6" rel="noreferrer" target="_blank">
                                    Chez Fouad
                                </a> - Anfeh,
                                {t(" Lebanon")}
                            </i>
                        </li>
                        <li className='listItem'>{t('1pm: Lunch Chez Fouad')}</li>
                    </ul>
                </div>
            </div>

            <div className='lineBetweenSection'></div>
            <div className='programSectionText'>
                <p>
                    {t('For Sunday, September 17, we are planning to book most of the place, please confirm your attendance.')}
                    <br />
                    {t('A unique menu will be offered at the price of 40$ per person.')}
                    <br /><br />
                    <Link to="/rsvp"
                        className="rsvpLink"
                        onClick={rsvpProgHandleClick}
                    >{t('RSVP')}</Link>
                </p>
            </div>
        </div >
    );
}

export { Program };
