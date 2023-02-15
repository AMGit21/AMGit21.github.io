import React from 'react';
import './Rsvp.css'
import { useTranslation } from 'react-i18next';
const Rsvp = () => {
    const { t } = useTranslation();
    return (
        <div className='rsvpSection'>
            <h2 className='title'>You're invited</h2>
            <div className='lineUnderTitle'></div>
            <div className='fromWrapper'>
                <form
                    action="https://formspree.io/f/mbjednel"
                    method="POST"
                    enctype="multipart/form-data"
                >
                    <div className='inputText'>
                        <label className='fullName'>{t('Full Name')}</label>
                        <input type="text" name="fullName" required />
                    </div>
                    <p>{t('Full Name(s) of people coming with me')}</p>
                    <div className='inputText'>
                        <input type="text" name="First Person" />
                    </div>
                    <div className='inputText'>
                        <input type="text" name="Second Person" />
                    </div>
                    <div className='inputText'>
                        <input type="text" name="Third Person" />
                    </div>
                    <div className='inputText'>
                        <input type="text" name="Fourth Person" />
                    </div>
                    <br />
                    <div className='radioInput'>
                        <div>
                            <input
                                type="radio"
                                value="will attend the wedding"
                                name="Will he/she attend the wedding ??"
                            />
                            {t('Will attend the wedding')}
                        </div>
                        <div>
                            <input
                                type="radio"
                                value="will unfortunately not be able to attend the wedding"
                                name="Will he/she attend the wedding ??"
                            />
                            {t('Will unfortunately not be able to attend the wedding')}
                        </div>
                    </div>
                    <hr className='smallSeparatorLine' />
                    <div className='radioInput'>
                        <div>
                            <input
                                type="radio"
                                value="Will attend the lunch on September 17 (40$ per person)"
                                name="Will he/she attend the lunch ??"
                            />
                            {t('Will attend the lunch on September 17 (40$ per person)')}
                        </div>
                        <div>
                            <input
                                type="radio"
                                value="Will not be able to attend the lunch on September 17"
                                name="Will he/she attend the lunch ??"
                            />
                            {t('Will not be able to attend the lunch on September 17')}
                        </div>
                    </div>
                    <hr className='separatorLine' />
                    <button type="submit">{t('Send')}</button>
                </form>
            </div >
            <div className='lineBetweenSection'></div>
            <div className='contact'>
                <h2 className='title'>Contact</h2>
                <div className='lineUnderTitle'></div>
                <p className='contactName'>
                    Sabine Habibian<br />&<br />Julien Velud
                </p>
                <p>92 rue Baudin<br />
                    92300 Levallois Perret<br />
                    FRANCE<br />
                    <a href="mailto:mariage.sabineetjulien@gmail.com">mariage.sabineetjulien@gmail.com</a>
                </p>
            </div>
        </div>
    );
}

export { Rsvp };
