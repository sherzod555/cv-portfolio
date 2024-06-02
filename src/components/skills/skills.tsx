import { useTheme } from '../../ThemeContext.tsx';
import { useLanguage } from "../../LanguageContext.tsx";



export const Skills = () => {
    const { isDarkMode } = useTheme();   
    const { language } = useLanguage();
 

    return (
        <div className={`${isDarkMode ? "bg-slate-900 text-white" : ""}`}>
            <main className="container mx-auto xl:w-[1200px] px-7" id="skills">
                <div className="py-8">
                    <h2 className="text-3xl font-bold">{`${language === "en" ? "Skills" : language === "uz" ? "Ko'nikmalar" : "Навыки"}`}</h2>
                </div>

            </main>
        </div>
    );
};

export default Skills