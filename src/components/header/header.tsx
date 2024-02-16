import { Link } from "react-scroll";

import Banner from "../../assets/banner.jpg"
import Download from "../../assets/download.svg"
import Sun from "../../assets/sun.svg"
import Moon from "../../assets/moon.svg"
import Uzb from "../../assets/uzb.svg"
import Rus from "../../assets/rus.svg"
import Eng from "../../assets/eng.svg"
import Hamburger from "../../assets/hamburger.svg"
import Cross from "../../assets/cross.svg"
import { useTheme } from '../../ThemeContext.tsx';
import { useState } from "react";
import { useLanguage } from '../../LanguageContext.tsx';


export const Header = () => {

    const { isDarkMode, toggleTheme } = useTheme();

    const { language, setLanguage } = useLanguage();

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const [isLanguageMenuOpen, setLanguageMenuOpen] = useState(false);

    const toggleLanguageMenu = () => {
        setLanguageMenuOpen(!isLanguageMenuOpen);
    };

    const changeLanguage = (lang: string) => {
        setLanguage(lang);
    };

    return (
        <>
            <header className={`${isDarkMode ? "bg-slate-900 text-white" : ""}`} id="header">
                <img className="w-full" src={Banner} alt="banner" />
                <main className="container mx-auto xl:w-[1200px] px-7">

                    {/* navigation bar */}
                    <div className={`flex ${isLanguageMenuOpen ? "items-start" : "items-start lg:items-center"} gap-x-2 justify-between py-5 text-sm xl:text-lg font-semibold`}>

                        <div>
                            {/* navigation list */}
                            <ul className={`${isLanguageMenuOpen ? "py-[13px]" : ""} hidden lg:flex items-center gap-x-6 xl:gap-x-10 uppercase`}>
                                <li className="hover:text-blue-400 hover:scale-125 cursor-pointer duration-300">
                                    <Link to="profile" smooth={true} duration={1000}>{`${language === "en" ? "Profile" : language === "uz" ? "Profil" : "Профиль"}`}</Link>
                                </li>
                                <li className="hover:text-blue-400 hover:scale-125 cursor-pointer duration-300">
                                    <Link to="education" smooth={true} duration={1000}>{`${language === "en" ? "Education" : language === "uz" ? "Ta'lim" : "образование"}`}</Link>
                                </li>
                                <li className="hover:text-blue-400 hover:scale-125 cursor-pointer duration-300">
                                    <Link to="achievements" smooth={true} duration={1000}>{`${language === "en" ? "achievements" : language === "uz" ? "yutuqlar" : "достижения"}`}</Link>
                                </li>
                                <li className="hover:text-blue-400 hover:scale-125 cursor-pointer duration-300">
                                    <Link to="portfolio" smooth={true} duration={1000}>{`${language === "en" ? "portfolio" : language === "uz" ? "portfolio" : "портфолио"}`}</Link>
                                </li>
                                <li className="hover:text-blue-400 hover:scale-125 cursor-pointer duration-300">
                                    <Link to="skills" smooth={true} duration={1000}>{`${language === "en" ? "skills" : language === "uz" ? "ko'nikmalar" : "навыки"}`}</Link>
                                </li>
                                <li className="hover:text-blue-400 hover:scale-125 cursor-pointer duration-300">
                                    <Link to="contacts" smooth={true} duration={1000}>{`${language === "en" ? "contacts" : language === "uz" ? "bog'lanish usullari" : "контакты"}`}</Link>
                                </li>
                            </ul>

                            {/* Hamburger menu */}
                            <div className="border rounded-2xl p-2 lg:hidden">
                                <img onClick={toggleMobileMenu} className={`${isDarkMode ? "invert" : ""} h-5 block lg:hidden`} src={`${isMobileMenuOpen ? Cross : Hamburger}`} alt="hamburger menu" />
                                <ul className={`uppercase flex flex-col gap-y-4 pt-4 p-5 ${isMobileMenuOpen ? '' : 'hidden'}`}>
                                    <li className="hover:text-blue-400 cursor-pointer duration-300"><Link to="profile" smooth={true} duration={1000}>{`${language === "en" ? "Profile" : language === "uz" ? "Profil" : "Профиль"}`}</Link></li>
                                    <li className="hover:text-blue-400 cursor-pointer duration-300"><Link to="education" smooth={true} duration={1000}>{`${language === "en" ? "Education" : language === "uz" ? "Ta'lim" : "образование"}`}</Link></li>
                                    <li className="hover:text-blue-400 cursor-pointer duration-300"><Link to="achievements" smooth={true} duration={1000}>{`${language === "en" ? "achievements" : language === "uz" ? "yutuqlar" : "достижения"}`}</Link></li>
                                    <li className="hover:text-blue-400 cursor-pointer duration-300"><Link to="portfolio" smooth={true} duration={1000}>{`${language === "en" ? "portfolio" : language === "uz" ? "portfolio" : "портфолио"}`}</Link></li>
                                    <li className="hover:text-blue-400 cursor-pointer duration-300"><Link to="skills" smooth={true} duration={1000}>{`${language === "en" ? "skills" : language === "uz" ? "ko'nikmalar" : "навыки"}`}</Link></li>
                                    <li className="hover:text-blue-400 cursor-pointer duration-300"><Link to="contacts" smooth={true} duration={1000}>{`${language === "en" ? "contacts" : language === "uz" ? "bog'lanish usullari" : "контакты"}`}</Link></li>
                                </ul>
                            </div>

                        </div>

                        {/* Page settings */}
                        <div className={`flex ${isLanguageMenuOpen ? "items-start" : "items-center"} md:gap-x-6 sm:gap-x-4 gap-x-2 lg:gap-x-8`}>
                            <div className=" rounded-2xl border hover:scale-90 duration-300 px-3 py-2">
                                <a className="flex items-center gap-x-2" href="../../Resume.docx" download="Resume-Sherzod-Yodgorov.docx">
                                    <img className={`${isDarkMode ? "invert" : ""} h-5 lg:h-7 w-auto`} src={Download} alt="resume" />
                                    <p className={`${isMobileMenuOpen ? 'hidden' : ''}`}>{`${language === "en" ? "Resume" : language === "uz" ? "Rezyume" : "Резюме"}`}</p></a>
                            </div>

                            <div onClick={toggleTheme} className="flex items-center rounded-2xl border p-2 cursor-pointer">
                                <img className={`${isDarkMode ? "invert" : ""} h-5 lg:h-7 w-auto`} src={isDarkMode ? Sun : Moon} alt={isDarkMode ? "Light Mode" : "Dark Mode"} />
                            </div>

                            <div>
                                <img onClick={toggleLanguageMenu} className={`${isLanguageMenuOpen ? "mt-2" : ""} h-5 lg:h-7 w-auto cursor-pointer`} src={`${isLanguageMenuOpen ? Cross : `${language === "en" ? Eng : language === "uz" ? Uzb : Rus}`}`} alt="language" />
                                <ul className={`flex flex-col gap-y-3 pt-[13px] ${isLanguageMenuOpen ? '' : 'hidden'}`}>
                                    <li className={`cursor-pointer ${language === 'uz' ? 'border-b-2 border-blue-400' : ''}`}>
                                        <img
                                            onClick={() => changeLanguage('uz')}
                                            className="h-5 lg:h-7 w-auto"
                                            src={Uzb}
                                            alt="uzb"
                                        />
                                    </li>
                                    <li className={`cursor-pointer ${language === 'en' ? 'border-b-2 border-blue-400' : ''}`}>
                                        <img
                                            onClick={() => changeLanguage('en')}
                                            className="h-5 lg:h-7 w-auto"
                                            src={Eng}
                                            alt="eng"
                                        />
                                    </li>
                                    <li className={`cursor-pointer ${language === 'ru' ? 'border-b-2 border-blue-400' : ''}`}>
                                        <img
                                            onClick={() => changeLanguage('ru')}
                                            className="h-5 lg:h-7 w-auto"
                                            src={Rus}
                                            alt="rus"
                                        />
                                    </li>
                                </ul>

                            </div>

                        </div>

                    </div>
                </main>
            </header >
        </>
    );
};
export default Header