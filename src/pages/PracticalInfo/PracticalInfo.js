import React from 'react';
import './PracticalInfo.css'
import 'animate.css';
import { useTranslation } from 'react-i18next';
const PracticalInfo = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div className="locationSectionText">
                <h2 className='title'>{t('practical info')}</h2>
                <div className='lineUnderTitle'></div>
                <p>{t('Here you will find some practical information to help you organize your stay and avoid any surprises.')}</p>
            </div>
            <div className='practicalInformationSection'>
                <h3>{t("Practical information")}</h3>
                <hr />
                <br />
                <h4>{t("Flights")}</h4>
                <hr />
                <p>{t("Direct flights to Beirut exist with departure from Paris and Lyon with the following companies: Transavia, Air France and Middle East Airlines. We recommend that you book your round trip directly on the company’s website and fast.")}</p>
                <h4>{t("Hotels")}</h4>
                <hr />
                <p>{t("You can use Airbnb or the website Booking.com for your reservations.")}</p>
                <p>{t("Beirut: we recommend you to say in the following areas: Achrafieh, Gemmayzeh, Mar Mikhael, Badaro, Sodeco or Hamra")}</p>
                <p>{t("Byblos: we recommend you to book a hotel close to the wedding location (you can easily find it on Google Map). If you need some help with finding a place, we managed to get some discounts in the following hotels: Aleph Boutique Hotel and Victory Byblos Hotel. Here are the email you can use for your booking")}</p>
                <p>{t("Aleph Boutique Hotel")}</p>
                <p>{t("Victory Byblos Hotel")}</p>
                <p>{t("For those who are lucky to stay a bit more in the country, you can check the following website to book a night or two in one of their guesthouses.")}</p>
                <a href="https://www.hotelibanais.com/fr/" rel="noreferrer" target="_blank">www.hotelibanais.com/fr</a>

                <h4>{t("Arrival at Beirut International Airport")}</h4>
                <hr />
                <p>{t("The visa is free of charge and is done at their airport at the security check")}</p>
                <p>{t("Please ensure your passport is valid for 6 months at least after your arrival to Lebanon")}</p>
                <p>{t("Please ensure you do not have an Israeli visa stamp in your passport (entrance to the country will be refused if you do)")}</p>
                <p>{t("Wifi at the airport is available at arrival")}</p>
                <p>{t("Resist to all taxi drivers that will jump on you at your arrival. The trip from Beirut airport to the center costs approximately 10$, not less, not more. The duration of the trip is between 15 and 20 minutes.")}</p>
                <p>{t("Please ensure you have deactivated your mobile data before the plane lands; otherwise you might start your trip with a 50$ bill for 15 seconds of internet connection (some will recognize themselves...)")}</p>

                <h4>{t("Transportation")}</h4>
                <hr />
                <p>{t("Uber works very well in the country with interesting prices. Payments are only made in cash. The Uber driver might request a price higher than what the application says, this is normal: the exchange rate might have changed suddenly and the application did not have time to take it into account. Don't forget that 65,000 Lebanese pounds is only equivalent to 1 dollar...")}</p>
                <p>{t("You can stop taxis on the street but it might be possible you share your ride with someone else. We recommend you to book your taxi in advance.")}</p>
                <p>{t('We recommend you book with "Safe Taxi". They are secure (given the name...), reliable and punctual. You can give the name of Sabine Habibian when you book, you will get the best prices.')}</p>
                <p>{t("This is their mobile number on WhatsApp: (24h/24) +961 3 646 314")}</p>

                <p>{t("The trip from Beirut to Byblos takes approximately 45 minutes by car (unless there is traffic... which is common in Lebanon). We recommend you take a cab (around 20$).")}</p>

                <h4>{t("Payments")}</h4>
                <hr />
                <p>{t("It is not possible to withdraw money on any ATM in Lebanon. Please do not even try! Their exchange rate is still the official one. We recommend you to come with a lot of cash ($ ou €) and to exchange at the reception of your hotel. In most places, it is not possible to pay by credit card, please ensure you have enough cash before going out.")}</p>

            </div>
        </div>
    );
}

export { PracticalInfo };
