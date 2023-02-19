import React from 'react';
import './Program.css'
import { useTranslation } from 'react-i18next';
const Program = () => {
    const { t } = useTranslation();
    return (
        <div className='programSection'>
            <h2 className='title'>{t("program")}</h2>
            <div className='lineUnderTitle'></div>
            <div className='divWrapperProgram'>
                <div className="timelineContainer">
                    <ul className='listTitle'>{t('Saturday September 16, 2023')}
                        <li className='listItem'><i>{t("Location: Plage des Rois - Byblos, Lebanon")}</i></li>
                        <li className='listItem'>{t('4:30pm: Wedding ceremony')}</li>
                        <li className='listItem'>{t('6pm: Cocktail')}</li>
                        <li className='listItem'>{t('8pm: Dinner and Party')}</li>
                    </ul>
                    <hr className='lineBetweenTimeLine' />
                    <ul className='listTitle'>{t('Sunday, September 17, 2023')}
                        <li className='listItem'><i>{t("Location: Chez Fouad - Anfeh, Lebanon")}</i></li>
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
                    <a className='rsvpLink' href="https://www.sabineetjulien.com/rsvp">{t('RSVP')}</a>
                </p>
            </div>
        </div >
    );
}

export { Program };
