import { Link } from "react-scroll";
import mockDataContact from "../contacts/mockdataContact.tsx"
import { useTheme } from '../../ThemeContext.tsx';


export const Footer = () => {
    const { isDarkMode } = useTheme();    


    return (
        <>

            <main className={` ${isDarkMode? "bg-slate-950":"bg-blue-500"}`}>

                <div className="container mx-auto xl:w-[1200px] px-7 md:text-base text-xs">

                    <div className="py-10 text-white/50 flex items-baseline justify-around">
                        <div className="uppercase grid gap-y-5">
                            <Link to='header' smooth={true} duration={1000}><p className="font-bold hover:text-white duration-500 cursor-pointer">home</p></Link>

                            <ul className="grid gap-y-5">
                                <li className="hover:text-white duration-500 cursor-pointer"><Link to="profile" smooth={true} duration={1000}>About</Link></li>
                                <li className="hover:text-white duration-500 cursor-pointer"><Link to="education" smooth={true} duration={1000}>Education</Link></li>
                                <li className="hover:text-white duration-500 cursor-pointer"><Link to="achievements" smooth={true} duration={1000}>Achievements</Link></li>
                                <li className="hover:text-white duration-500 cursor-pointer"><Link to="skills" smooth={true} duration={1000}>Skills</Link></li>
                            </ul>
                        </div>

                        <div className="grid gap-y-5">
                            <Link to="portfolio" smooth={true} duration={1000}><p className="font-bold hover:text-white duration-500 cursor-pointer">PORTFOLIO</p></Link>

                            <ul className="grid gap-y-5">
                                <li className="hover:text-white duration-500 cursor-pointer">Project 1</li>
                                <li className="hover:text-white duration-500 cursor-pointer">Project 2</li>
                                <li className="hover:text-white duration-500 cursor-pointer">Project 3</li>
                            </ul>
                        </div>

                        <div className="grid gap-y-5">
                            <Link to='contacts' smooth={true} duration={1000}><p className="font-bold hover:text-white duration-500 cursor-pointer">CONTACTS</p></Link>
                            <ul className="grid gap-y-3 grid-cols-1 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-4">

                                {mockDataContact.map((data, index) => (
                                    <li key={index} className="cursor-pointer p-0 sm:p-2 hover:scale-110 hover:text-white sm:hover:bg-white duration-500 sm:bg-white/50 rounded-[50%]"><a target="_blank" href={data.Link}><img className="hidden sm:block sm:h-5 md:h-7 w-auto" src={data.Icon} alt={data.Description} /><p className="block sm:hidden">{data.Description}</p></a></li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="pb-5 border-t text-gray-100/50 border-gray-400 flex items-center justify-around">
                        <p>&#169; Created by <span className="font-bold">Sherzod Yodgorov</span></p>
                        <p >All rights reserved 2024</p>
                    </div>

                </div>

            </main>

        </>
    );
};

export default Footer