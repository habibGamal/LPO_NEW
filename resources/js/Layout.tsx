import { Link } from '@inertiajs/inertia-react'
import React, { useContext, useEffect, useRef, useState } from 'react'
import useTranslate from './Hooks/useTranslate';
import { ContextApi } from './Contexts/AppContext';
import NavLink from './Components/NavLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Admin from './Components/Admin';
import NotAuth from './Components/NotAuth';
import { Inertia } from '@inertiajs/inertia';
import Auth from './Components/Auth';
import { faArrowUp, faClose, faEarth, faNavicon } from '@fortawesome/free-solid-svg-icons';
import { Button } from './lib/Antd';
// import Button from 'antd/lib/button';
import message from 'antd/lib/message';
import { Assets } from './Models/Assets';
import SemiAuth from './Components/SemiAuth';
export default function Layout(props: { children: JSX.Element }) {
    const toTopBtn = useRef<HTMLButtonElement>(null);
    const [showNav, setShowNav] = useState(false);
    const [appState, setAppState] = useContext(ContextApi)!;
    const hideNav = () => {
        if (showNav)
            setShowNav(false);
    }
    const toggleLanguage = () => {
        hideNav();
        setAppState(state => ({ ...state, lang: (state.lang === 'ar') ? 'en' : 'ar' }))
    }
    const t = useTranslate();
    useEffect(() => {
        window.onscroll = () => {
            if (window.scrollY > 0) {
                toTopBtn.current?.classList.remove('hidden');
            }

            if (window.scrollY === 0) {
                toTopBtn.current?.classList.add('hidden');
            }
        }
    }, []);
    return (
        <div className='flex flex-col justify-between min-h-screen'>
            <div className={`${t('rtl', '')} App relative overflow-hidden`}>
                {/* <FlashMessage /> */}
                <nav className="bg-ov-white ">
                    <div className="container flex items-center justify-between py-2">
                        <Link href='/'>
                            <img className='w-[50px]' src='/images/logo.png' />
                        </Link>
                        <div className="flex gap-4 items-center">
                            <div onClick={() => setShowNav(false)} className={`absolute top-0 left-0 w-screen ${showNav ? 'h-screen' : 'h-0'} bg-black opacity-40 z-40`}></div>
                            <ul className={`${showNav ? 'translate-x-0 opacity-100' : t('-translate-x-full opacity-0', 'translate-x-full opacity-0')}  ${t('left-0', 'right-0')} flex nav transition-all shadow 2xl:translate-x-0 2xl:opacity-100 2xl:shadow-none 2xl:items-center items-start 2xl:flex gap-6 font-bold`}>
                                <NavLink onClick={hideNav} href="/" name={t('????????????????', 'Home')} />
                                <NavLink onClick={hideNav} href="/about" name={t('??????', 'About')} />
                                <NavLink onClick={hideNav} href="/assets" name={t('?????? ??????????????????', 'Images & Videos')} />
                                <Auth>
                                    <NavLink onClick={hideNav} href="/books" name={t('????????????', 'Material')} />
                                    <NavLink onClick={hideNav} href="/articles" name={t('?????????????? ???? ??????????????', 'Piano Info')} />
                                    <NavLink onClick={hideNav} href="/meetings" name={t('??????????????', 'Meetings')} />
                                    <NavLink onClick={hideNav} href="/quiz" name={t('????????????????????', 'Quiz')} />
                                </Auth>
                                {/* <NavLink onClick={hideNav} href="/images_show" name={t('??????????', 'Images')} /> */}
                                <NavLink onClick={hideNav} href="/about-program" name={t('???? ????????????????', 'About Program')} />
                                <NavLink onClick={hideNav} href="/contact" name={t('?????????? ????????', 'Contact')} />
                                <NavLink onClick={hideNav} href="/feedback" name={t('??????????????', 'Feedback')} />
                                <Admin>
                                    <NavLink onClick={hideNav} href="/dashboard" name={t('???????? ????????????', 'Dashboard')} />
                                </Admin>
                                <SemiAuth>
                                    <NavLink onClick={hideNav} href="/logout" name={t('?????????? ????????????', 'Logout')} />
                                </SemiAuth>
                                <NotAuth>
                                    <NavLink onClick={hideNav} href="/login" name={t('?????????? ????????????', 'Login')} />
                                    <NavLink onClick={hideNav} href="/register" name={t('?????????? ????????', 'Register')} />
                                </NotAuth>
                            </ul>
                            <Button key={0} className={`absolute z-[60] top-2 ${t('left-6', 'right-6')} ${showNav || 'hidden'}`} onClick={() => setShowNav(false)} icon={<FontAwesomeIcon size='2x' icon={faClose} />} />
                            <div id="navbars" className="flex items-center gap-4">
                                <Button onClick={toggleLanguage} icon={<FontAwesomeIcon size='2x' icon={faEarth} />} />
                                <button id='n1avbars' className='2xl:hidden' onClick={() => setShowNav(!showNav)}>
                                    <FontAwesomeIcon icon={faNavicon} size="2x" />
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
                {props.children}
            </div>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} ref={toTopBtn} className="btn to-top hidden"><FontAwesomeIcon icon={faArrowUp} /></button>
            <footer className="bg-black text-white p-4 text-center">
                All Copyrights &copy; reserved for Dr. Maha Ahmed Qassem & Eng. Habib Gamal {(new Date()).getFullYear()}
            </footer>
        </div>
    )
}

