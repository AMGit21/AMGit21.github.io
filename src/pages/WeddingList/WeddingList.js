import React from 'react';
import { useTranslation } from 'react-i18next';
import './WeddingList.css'
import giftIcon from '../../assets/images/giftIcon.png'
const WeddingList = () => {
    const { t } = useTranslation();
    return (
        <div className="weddingListSection">
            <h2 className='title'>{t('weddingList')}</h2>
            <div className='lineUnderTitle'></div>
            <div className="weddingListSectionText">
                <p>{t("Our best gift would be to see you at our wedding and celebrate that moment together. But if you wish to offer something, you can click on the gift below.")}</p>
            </div>
            <div>
                <a href="https://www.millemercismariage.com/sabineetjulien/liste.html" rel="noreferrer" target="_blank">
                    <img
                        src={giftIcon}
                        alt={t('image_description')}
                        className="weddingListSectionGiftIcon"
                    />
                </a>
            </div>
        </div>
    );
}

export { WeddingList };
