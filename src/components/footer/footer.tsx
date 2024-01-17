import { Link, animateScroll as scroll } from "react-scroll";


import Phone from "../../assets/phone2.svg"
import Gmail from "../../assets/gmail.svg"
import Telegram from "../../assets/telegram.svg"
import LinkedIn from "../../assets/linkedin.svg"
import GitHub from "../../assets/github.svg"
import Facebook from "../../assets/facebook.svg"
import Instagram from "../../assets/instagram.svg"
import Youtube from "../../assets/youtube.svg"
import HeadHunter from "../../assets/hh.svg"



export const Footer = () => {

    const mockDataContact = [
        {
            Link: "tel:+998977584525",
            Icon: Phone,
            Description: "Phone-Number",
        },
        {
            Link: "mailto:sher55555yodgorov@gmail.com",
            Icon: Gmail,
            Description: "Gmail",
        },
        {
            Link: "https://t.me/sher_555",
            Icon: Telegram,
            Description: "Telegram",
        },
        {
            Link: "https://www.linkedin.com/in/sherzod-yodgorov-183085252",
            Icon: LinkedIn,
            Description: "LinkedIn",
        },
        {
            Link: "https://github.com/sherzod555",
            Icon: GitHub,
            Description: "GitHub",
        },
        {
            Link: "https://www.facebook.com/sherzod.yodgorov.507?mibextid=ZbWKwL",
            Icon: Facebook,
            Description: "Facebook",
        },
        {
            Link: "https://instagram.com/sher_555?igshid=OGQ5ZDc2ODk2ZA==",
            Icon: Instagram,
            Description: "Instagram",
        },
        {
            Link: "https://youtube.com/@sherzodyodgorov",
            Icon: Youtube,
            Description: "YouTube",
        },
        {
            Link: "https://hh.uz/resume/699ee205ff0c7e9ddb0039ed1f6b6368525659",
            Icon: HeadHunter,
            Description: "HeadHunter.uz",
        },
    ];


    return (
        <>

            <main className="bg-blue-500">

                <div className="container mx-auto w-[1300px]">

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
                            <p className="font-bold hover:text-white duration-500 cursor-pointer">CONTACTS</p>
                            <ul className="grid grid-cols-3 gap-x-10 gap-y-7">

                                {mockDataContact.map((data, index) => (
                                    <li key={index} className="cursor-pointer p-2 hover:bg-white duration-500 bg-white/50 rounded-[50%]"><a target="_blank" href={data.Link}><img className="h-7 w-auto" src={data.Icon} alt={data.Description} /></a></li>
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