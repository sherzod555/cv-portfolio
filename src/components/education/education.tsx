import EduListDots from "../../assets/eduhat.svg"
import mockDataEdu from "./mockEdu.tsx";
import { useTheme } from '../../ThemeContext.tsx';


export const Education = () => {
    const { isDarkMode } = useTheme();    

    return (
        <>
            <main className={`${isDarkMode ? "bg-slate-800 text-white" : "bg-blue-100"}`} id="education">

                <div className="container mx-auto w-[1300px]">

                    <div className="py-8">
                        <h2 className="text-3xl font-bold">Education</h2>



                        <div className="flex flex-col">

                            {mockDataEdu.map((data, index) => (
                                <div key={index} className="flex items-start justify-between text-xl py-7 border-gray-400 border-b-2">
                                    <div className="flex items-start gap-x-4">
                                        <img className={`${isDarkMode ? 'invert' : ""} h-7`} src={EduListDots} alt="list-dots" />
                                        <div className="max-w-[1000px]">
                                            <p>{data.UniverName}</p>
                                            <p className="text-base text-gray-500 pt-1">{data.FacultyName}</p>
                                        </div>
                                    </div>
                                    <p>{data.date}</p>
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