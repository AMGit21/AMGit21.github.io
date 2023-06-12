import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Program.css'
import { useTranslation } from 'react-i18next';
import { ActiveLinkContext } from '../../components/ActiveLinkContext/ActiveLinkContext.js';
import MenuChezFouadSabineJulien from '../../assets/pdf/Menu chez Fouad Sabine Julien.pdf';

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

                    <ul className='listTitle'>{t('Friday, September 15, 2023')}
                        <li className='listItem'>
                            <i>{t("Location: Bolero - Batroun, Lebanon")}
                            </i>
                        </li>
                        <li className='listItem'>{t('6:00 PM: Pre-wedding Gathering - Sunset')}</li>
                        <li className='listItem'>{t('Dress code: "All in White"')}</li>
                        <li className='listItem'>{t('We invite you to join us at Bolero, an iconic venue in Batroun, to enjoy a cocktail while watching the sunset. The idea is to gather everyone that is available and want to join, all dressed in white, before the festivities on Saturday. There is a minimum charge of $20/person (18€) that you can use for any drink and/or food.')}</li>
                    </ul>
                    <hr className='lineBetweenTimeLine' />

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
                        <li className='listItem'>{t('Tenue vestimentaire : chic léger (il risque de faire chaud)')}</li>
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
                        <li className='listItem'>{t('1pm: Lunch Chez Fouad')} - <a href={MenuChezFouadSabineJulien} rel="noreferrer" target="_blank">Menu</a>
                        </li>
                        <li className='listItem'>{t("Tenue vestimentaire : décontractée (n'oubliez pas vos maillots !) ")}</li>
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
