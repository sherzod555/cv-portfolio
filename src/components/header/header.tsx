import Banner from "../../assets/banner.jpg"
import Download from "../../assets/download.svg"
import Sun from "../../assets/sun.svg"
import Moon from "../../assets/moon.svg"
import Uzb from "../../assets/uzb.svg"



export const Header = () => {
    return (
        <>
            <header>
                <img className="w-full" src={Banner} alt="banner" />
                <main className="container mx-auto w-[1300px]">


                    {/* navigation bar */}
                    <div className="flex items-center justify-between py-5 text-lg font-semibold">

                        {/* navigation bar */}
                        <ul className="flex items-center gap-x-10 uppercase">
                            <li className="hover:text-blue-400 hover:scale-125 duration-300">
                                <a href="#">Profile</a>
                            </li>
                            <li className="hover:text-blue-400 hover:scale-125 duration-300">
                                <a href="#">Education</a>
                            </li>
                            <li className="hover:text-blue-400 hover:scale-125 duration-300">
                                <a href="#">Achievements</a>
                            </li>
                            <li className="hover:text-blue-400 hover:scale-125 duration-300">
                                <a href="#">Portfolio</a>
                            </li>
                            <li className="hover:text-blue-400 hover:scale-125 duration-300">
                                <a href="#">Skills</a>
                            </li>
                            <li className="hover:text-blue-400 hover:scale-125 duration-300">
                                <a href="#">Contacts</a>
                            </li>
                        </ul>



                        {/* Page settings */}
                        <div className="flex items-center gap-x-8">
                            <div className="flex items-center gap-x-2 rounded-2xl border hover:scale-90 duration-300 px-3 py-2">
                                <img className="h-7 w-auto" src={Download} alt="resume" />
                                <a href="../../../public/Resume.docx">Resume</a>
                            </div>

                            <div className="flex items-center rounded-2xl border  p-2">
                                <img className="h-7 w-auto" src={Sun} alt="light mode" />
                                <img className="h-7 w-auto" src={Moon} alt="dark mode" />
                            </div>


                            <div>
                                <img className="h-7 w-auto" src={Uzb} alt="uzb" />
                            </div>

                        </div>

                    </div>
                </main>
            </header >
        </>
    );
};
export default Header