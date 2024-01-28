import { Link } from "react-scroll";

import Banner from "../../assets/banner.jpg"
import Download from "../../assets/download.svg"
import Sun from "../../assets/sun.svg"
import Moon from "../../assets/moon.svg"
import Uzb from "../../assets/uzb.svg"
// import Rus from "../../assets/rus.svg"
// import Eng from "../../assets/eng.svg"
import Hamburger from "../../assets/hamburger.svg"
import { useTheme } from '../../ThemeContext.tsx';





export const Header = () => {



    const { isDarkMode, toggleTheme } = useTheme();
    return (
        <>
            <header className={`${isDarkMode ? "bg-slate-900 text-white" : ""}`} id="header">
                <img className="w-full" src={Banner} alt="banner" />
                <main className="container mx-auto xl:w-[1200px] px-7">


                    {/* navigation bar */}
                    <div className="flex items-center justify-between py-5 text-sm lg:text-lg font-semibold">


                        <div>
                            {/* navigation list */}
                            <ul className="hidden md:flex items-center md:gap-x-6 lg:gap-x-10 uppercase">
                                <li className="hover:text-blue-400 hover:scale-125 cursor-pointer duration-300">
                                    <Link to="profile" smooth={true} duration={1000}>Profile</Link>
                                </li>
                                <li className="hover:text-blue-400 hover:scale-125 cursor-pointer duration-300">
                                    <Link to="education" smooth={true} duration={1000}>Education</Link>
                                </li>
                                <li className="hover:text-blue-400 hover:scale-125 cursor-pointer duration-300">
                                    <Link to="achievements" smooth={true} duration={1000}>Achievements</Link>
                                </li>
                                <li className="hover:text-blue-400 hover:scale-125 cursor-pointer duration-300">
                                    <Link to="portfolio" smooth={true} duration={1000}>Portfolio</Link>
                                </li>
                                <li className="hover:text-blue-400 hover:scale-125 cursor-pointer duration-300">
                                    <Link to="skills" smooth={true} duration={1000}>Skills</Link>
                                </li>
                                <li className="hover:text-blue-400 hover:scale-125 cursor-pointer duration-300">
                                    <Link to="contacts" smooth={true} duration={1000}>Contacts</Link>
                                </li>
                            </ul>

                            {/* Hamburger menu */}
                            <img className={`${isDarkMode? "invert":""} h-5 block md:hidden`} src={Hamburger} alt="hamburger menu" />
                        </div>



                        {/* Page settings */}
                        <div className="flex items-center gap-x-8">
                            <div className="flex items-center gap-x-2 rounded-2xl border hover:scale-90 duration-300 px-3 py-2">
                                <img className={`${isDarkMode ? "invert" : ""} h-5 md:h-7 w-auto`} src={Download} alt="resume" />

                                <a href="../../Resume.docx" download="Resume-Sherzod-Yodgorov.docx">Resume</a>
                            </div>

                            <div onClick={toggleTheme} className="flex items-center rounded-2xl border p-2 cursor-pointer">
                                <img className={`${isDarkMode ? "invert" : ""} h-5 md:h-7 w-auto`} src={isDarkMode ? Sun : Moon} alt={isDarkMode ? "Light Mode" : "Dark Mode"} />
                            </div>


                            <div>
                                <img className="h-5 md:h-7 w-auto cursor-pointer" src={Uzb} alt="uzb" />
                                {/* <img className="h-5 md:h-7 w-auto cursor-pointer" src={Rus} alt="rus"/>
                                <img className="h-5 md:h-7 w-auto cursor-pointer" src={Eng} alt="eng"/> */}
                            </div>


                        </div>

                    </div>
                </main>
            </header >
        </>
    );
};
export default Header