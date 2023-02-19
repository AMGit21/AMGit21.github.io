import React, { useState, useRef, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Layout.css'
import { BsList } from "react-icons/bs";
import calligraphie from '../../assets/images/calligraphie.png'
const Layout = () => {
    const { t, i18n } = useTranslation();

    const handleLanguageChange = (lng) => {
        i18n.changeLanguage(lng);
    };
    const handleMouseOverEffect = (e) => {
        e.target.style.transform = "scale(1.1)";
    };
    const handleMouseLeaveEffect = (e) => {
        e.target.style.transform = "scale(1)";
    };
    const [active, setActive] = useState('welcome');
    const [activeLngSelector, setActiveLngSelector] = useState('fr');

    const [showNav, setShowNav] = useState(false);

    const navRef = useRef();
    const toggleNav = () => {
        setShowNav(!showNav);
    }
    useEffect(() => {
        function handleClickOutside(event) {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setShowNav(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [navRef]);

    return (
        <div className='layout'>
            <div className='textMiddleLine'>
                <img
                    src={calligraphie}
                    alt={t('image_description')}
                    className="calligraphie"
                />
            </div>
            <div className='layoutTitleSection'>
                <h1 className='sabineAndjulien'>{t('Sabine and Julien')}</h1>
            </div>
            <div className='navbar' ref={navRef}>
                <div>
                    <BsList className='listIcon' onClick={toggleNav} />
                </div>
                <nav className={showNav ? "show" : "nav"}>
                    <Link to='/'
                        className={`navItem ${active === 'welcome' ? 'active' : ''}`}
                        onClick={() => setActive('welcome')}
                        onMouseEnter={handleMouseOverEffect}
                        onMouseLeave={handleMouseLeaveEffect}
                    >{t('welcome')}
                    </Link>
                    <Link to='/practical-info'
                        className={`navItem ${active === 'practical info' ? 'active' : ''}`}
                        onClick={() => setActive('practical info')}
                        onMouseEnter={handleMouseOverEffect}
                        onMouseLeave={handleMouseLeaveEffect}
                    >{t('practical info')}
                    </Link>
                    <Link to='/program'
                        className={`navItem ${active === 'program' ? 'active' : ''}`}
                        onClick={() => setActive('program')}
                        onMouseEnter={handleMouseOverEffect}
                        onMouseLeave={handleMouseLeaveEffect}
                    >{t('program')}
                    </Link>
                    <Link to='/rsvp'
                        className={`navItem ${active === 'rsvp' ? 'active' : ''}`}
                        onClick={() => setActive('rsvp')}
                        onMouseEnter={handleMouseOverEffect}
                        onMouseLeave={handleMouseLeaveEffect}
                    >{t('rsvp')}
                    </Link>
                    <Link to='/weddinglist'
                        className={`navItem ${active === 'weddinglist' ? 'active' : ''}`}
                        onClick={() => setActive('weddinglist')}
                        onMouseEnter={handleMouseOverEffect}
                        onMouseLeave={handleMouseLeaveEffect}
                    >{t('weddingList')}
                    </Link>
                </nav>
                <div className="languageSelector">
                    <button
                        className={`languageSelectorButton ${activeLngSelector === 'en' ? 'activeLngSelector' : ''}`}
                        onClick={() => {
                            setActiveLngSelector('en');
                            handleLanguageChange('en')
                        }}
                    >EN</button>
                    <button
                        className={`languageSelectorButton ${activeLngSelector === 'fr' ? 'activeLngSelector' : ''}`}
                        onClick={() => {
                            setActiveLngSelector('fr');
                            handleLanguageChange('fr')
                        }}
                    >FR</button>
                </div>
            </div>
            <div className="contentPages">
                <Outlet />
            </div>
            <footer className='copyrightSection'>
                <p className='copyrightSectionText'>
                    Copyright © 2023 - done by <a className="copyrightSectionMail" href="mailto:alimantache1994@gmail.com">Ali Mantache</a>
                </p>
            </footer>
        </div>
    );
}

export default Layout;
