import { useTheme } from '../../ThemeContext.tsx';
import { useLanguage } from "../../LanguageContext.tsx";


export const Contacts = () => {
    const { isDarkMode } = useTheme();   
    const { language } = useLanguage();
 

    return (
        <>
            <main className={`${isDarkMode ? "bg-slate-700 text-white" : "bg-blue-100"}`} id="contacts">

                <div className="container mx-auto xl:w-[1200px] px-7">

                    <div className="py-8">
                        <h2 className="text-3xl font-bold">{`${language === "en" ? "Contacts" : language === "uz" ? "Bog'lanish usullari" : "Контакты"}`}</h2>
                    </div>

                </div>
            </main>
        </>
    );
};

export default Contacts