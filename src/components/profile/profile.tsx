import Avatar from "../../assets/portrait2.png"
import { useTheme } from '../../ThemeContext.tsx';
import mockDataProfile from "./mockdataProfile.tsx";
import { useLanguage } from '../../LanguageContext.tsx';



export const Profile = () => {
    const { isDarkMode } = useTheme();
    const { language } = useLanguage();
   


    return (
        <div className={`${isDarkMode ? "bg-slate-900 text-white" : ""}`}>
            <main className="container mx-auto px-7 xl:w-[1200px]" id="profile" >
                <div>

                    <div className=" py-5 flex flex-col md:flex-row md:gap-x-16 justify-center items-center font-mono">
                        <img className={`${isDarkMode ? "bg-slate-700 border-slate-400" : "bg-blue-100 border-blue-400"}  w-52 h-auto rounded-[50%] border-4 "`} src={Avatar} alt="Sherzod" />
                        <div className="items-center flex flex-col md:items-start gap-y-5">

                            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold pt-3">{`${language === "ru" ? "Шерзод Ёдгоров" : "Sherzod Yodgorov"}`}</h1>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">{`${language === "en" ? "Front-end React JS Web developer" : language === "uz" ? "Front-end React JS veb-dasturchisi" : "Веб-разработчик Front-end React JS"}`}</h3>
                            <div className="text-sm sm:text-base text-slate-500 flex items-center gap-x-5">
                                <p>{`${language === "en" ? "December 6, 1999" : language === "uz" ? "6-Dekabr, 1999-yil" : "6 декабря 1999 г."}`}</p>/<a target="_blank" href="mailto:sher55555yodgorov@gmail.com">sher55555yodgorov@gmail.com</a>
                            </div>
                        </div>
                    </div>


                    <div className="py-8">
                        <h2 className="text-3xl font-bold ">{`${language === "en" ? "Profile" : language === "uz" ? "Profil" : "Профиль"}`}</h2>

                        <div className="flex flex-col gap-y-5 md:flex md:flex-row md:items-center md:justify-between py-5">

                            <p className="w-full md:w-[45%] text-2xl">
                                {`${language === "en" ? "Recent IT graduate with a concentration in Frontend React JS, having successfully completed comprehensive coursework and extra courses in web development. Adept at leveraging a strong academic foundation in IT and programming languages to create innovative and user-friendly applications. Eager to contribute to dynamic projects, showcasing dedication, technical proficiency, and a passion for staying abreast of industry trends." 
                                : language === "uz" ? "Frontend React JS mutaxassisligi bo'yicha IT bitiruvchisi, keng qamrovli kurs ishlari va veb-dasturlash bo'yicha qo'shimcha kurslarni muvaffaqiyatli yakunlagan. Innovatsion va foydalanuvchilarga qulay ilovalarni yaratish uchun IT va dasturlash tillarida kuchli akademik ma'lumotlardan foydalanishga qodir. Fidoyilik, texnik mahorat va sanoat tendentsiyalaridan xabardor bo'lish istagini namoyish qilish orqali dinamik loyihalarga hissa qo'shishga intiladi." 
                                : "Недавний выпускник ИТ-отдела со специализацией Frontend React JS, успешно прошедший комплексную курсовую работу и дополнительные курсы по веб-разработке. Способен использовать прочную академическую базу в области ИТ и языков программирования для создания инновационных и удобных для пользователя приложений. Стремится внести свой вклад в динамичные проекты, демонстрируя преданность своему делу, техническое мастерство и стремление быть в курсе тенденций отрасли."}`}
                            </p>

                            <ul className="text-xs font-semibold w-full md:w-[45%] flex flex-col gap-5">
                                {mockDataProfile.map((data, index) => (
                                    <li key={index} className={`${isDarkMode ? "bg-slate-400 text-black" : "bg-blue-400"}  flex items-start gap-x-2 p-2 rounded-lg`}>
                                        <p>&#10148;</p>
                                        <p>{`${language === "en" ? data.Ability_eng : language === "uz" ? data.Ability_uzb : data.Ability_rus}`}</p>
                                    </li>
                                ))}

                            </ul>
                        </div>
                    </div>

                </div>


            </main>
        </div>
    );

}
export default Profile