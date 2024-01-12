import Gmail from "../../assets/gmail.svg"


export const Footer = () => {
    return (
        <>

            <main className="bg-blue-500">

                <div className="container mx-auto w-[1300px]">

                    <div className="py-10 text-white/50 flex items-baseline justify-around">
                        <div className="uppercase grid gap-y-5">
                            <p className="font-bold hover:text-white duration-500 cursor-pointer">home</p>
                            <ul className="grid gap-y-5">
                                <li className="hover:text-white duration-500 cursor-pointer">about</li>
                                <li className="hover:text-white duration-500 cursor-pointer">Education</li>
                                <li className="hover:text-white duration-500 cursor-pointer">Achievements</li>
                                <li className="hover:text-white duration-500 cursor-pointer">Skills</li>
                            </ul>
                        </div>

                        <div className="grid gap-y-5">
                            <p className="font-bold hover:text-white duration-500 cursor-pointer">PORTFOLIO</p>
                            <ul className="grid gap-y-5">
                                <li className="hover:text-white duration-500 cursor-pointer">Project 1</li>
                                <li className="hover:text-white duration-500 cursor-pointer">Project 2</li>
                                <li className="hover:text-white duration-500 cursor-pointer">Project 3</li>
                            </ul>
                        </div>

                        <div className="grid gap-y-5">
                            <p className="font-bold hover:text-white duration-500 cursor-pointer">CONTACTS</p>
                            <ul className="grid grid-cols-3 gap-x-10 gap-y-7">
                                <li className="cursor-pointer"><img className="h-7 w-auto" src={Gmail} alt="gmail" /></li>
                                <li className="cursor-pointer"><img className="h-7 w-auto" src={Gmail} alt="gmail" /></li>
                                <li className="cursor-pointer"><img className="h-7 w-auto" src={Gmail} alt="gmail" /></li>
                                <li className="cursor-pointer"><img className="h-7 w-auto" src={Gmail} alt="gmail" /></li>
                                <li className="cursor-pointer"><img className="h-7 w-auto" src={Gmail} alt="gmail" /></li>
                                <li className="cursor-pointer"><img className="h-7 w-auto" src={Gmail} alt="gmail" /></li>
                                <li className="cursor-pointer"><img className="h-7 w-auto" src={Gmail} alt="gmail" /></li>
                                <li className="cursor-pointer"><img className="h-7 w-auto" src={Gmail} alt="gmail" /></li>
                                <li className="cursor-pointer"><img className="h-7 w-auto" src={Gmail} alt="gmail" /></li>
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