import EduListDots from "../../assets/eduhat.svg"
import mockDataEdu from "./mockEdu.tsx";
import { useTheme } from '../../ThemeContext.tsx';
import { useLanguage } from '../../LanguageContext.tsx';



export const Education = () => {
    const { isDarkMode } = useTheme();    
    const { language } = useLanguage();


    return (
        <>
            <main className={`${isDarkMode ? "bg-slate-700 text-white" : "bg-blue-100"}`} id="education">

                <div className="container mx-auto px-7 xl:w-[1200px]">

                    <div className="py-8">
                        <h2 className="text-3xl font-bold">{`${language === "en" ? "Education" : language === "uz" ? "Ta'lim" : "Образование"}`}</h2>



                        <div className="flex flex-col">

                            {mockDataEdu.map((data, index) => (
                                <div key={index} className="flex items-start justify-between text-base md:text-xl py-7 border-gray-400 border-b-2">
                                    <div className="flex items-start gap-x-4 w-[90%]">
                                        <img className={`${isDarkMode ? 'invert' : ""} h-5 md:h-7`} src={EduListDots} alt="list-dots" />
                                        <div>
                                            <p>{`${language === "en" ? data.UniverName_eng || data.UniverName : language === "uz" ? data.UniverName_uzb || data.UniverName : data.UniverName_rus || data.UniverName}`}</p>
                                            <p className="text-base text-gray-500 pt-1">{`${language === "en" ? data.FacultyName_eng || data.FacultyName : language === "uz" ? data.FacultyName_uzb || data.FacultyName : language ==="ru"? data.FacultyName_rus || data.FacultyName : ""}`}</p>
                                        </div>
                                    </div>
                                    <p className="ml-5 w-1/5 text-end">{`${language === "en" ? data.date_eng || data.date : language === "uz" ? data.date_uzb || data.date : data.date_rus || data.date}`}</p>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>

            </main>
        </>
    );
};

export default Education