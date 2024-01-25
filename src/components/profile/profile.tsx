import Avatar from "../../assets/portrait2.png"
import { useTheme } from '../../ThemeContext.tsx';
import mockDataProfile from "./mockdataProfile.tsx";


export const Profile = () => {
    const { isDarkMode } = useTheme();

    return (
        <div className={`${isDarkMode ? "bg-slate-950 text-white" : ""}`}>
            <main className="container mx-auto w-[1300px]" id="profile" >
                <div>

                    <div className="py-5 flex gap-x-16 justify-center items-center font-mono">
                        <img className={`${isDarkMode ? "bg-slate-700 border-slate-400" : "bg-blue-100 border-blue-400"}  w-52 h-auto rounded-[50%] border-4 "`} src={Avatar} alt="Sherzod" />
                        <div className="flex flex-col items-start gap-y-5">

                            <h1 className="text-6xl font-bold pt-3">Sherzod Yodgorov</h1>
                            <h3 className="text-3xl font-semibold">Front-end React JS Web developer</h3>
                            <p className="text-slate-500">24 years old</p>
                        </div>
                    </div>


                    <div className="py-8">
                        <h2 className="text-3xl font-bold ">Profile</h2>

                        <div className="flex items-center justify-between py-5">

                            <p className="w-[45%] text-2xl">
                                Recent IT graduate with a concentration in Frontend React JS, having successfully completed comprehensive coursework and extra courses in web development. Adept at leveraging a strong academic foundation in IT and programming languages to create innovative and user-friendly applications. Eager to contribute to dynamic projects, showcasing dedication, technical proficiency, and a passion for staying abreast of industry trends.
                            </p>

                            <ul className="text-xs font-semibold w-[45%] flex flex-col gap-5">
                                {mockDataProfile.map((data, index) => (
                                    <li key={index} className={`${isDarkMode? "bg-slate-400 text-black":"bg-blue-400"}  flex items-start gap-x-2 p-2 rounded-lg`}>
                                        <p>&#10148;</p>
                                        <p>{data.Ability}</p>
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