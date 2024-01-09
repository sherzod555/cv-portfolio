import Avatar from "../../assets/portrait.png"

export const Profile = () => {
    return (
        <>
            <main className="container mx-auto w-[1300px]">
                <div>
                    <div className="flex flex-col items-center font-mono">
                        <img className="w-52 h-auto rounded-full border-4 border-blue-400" src={Avatar} alt="Sherzod" />
                        <h1 className="text-4xl font-bold pt-3">Sherzod Yodgorov</h1>
                        <p className="text-slate-500">24 years old</p>
                        <h3 className="text-2xl font-semibold">Front-end React JS Web developer</h3>
                    </div>


                    <div className="py-8">
                        <h2 className="text-3xl font-bold ">Profile</h2>

                        <div className="flex items-center justify-between py-5">

                            <p className="w-[45%] text-2xl">
                                Recent IT graduate with a concentration in Frontend React JS, having successfully completed comprehensive coursework and extra courses in web development. Adept at leveraging a strong academic foundation in IT and programming languages to create innovative and user-friendly applications. Eager to contribute to dynamic projects, showcasing dedication, technical proficiency, and a passion for staying abreast of industry trends.
                            </p>

                            <ul className="text-xs font-semibold w-[45%] flex flex-col gap-5">
                                <li className="bg-blue-400 flex items-start gap-x-2 p-2 rounded-lg">
                                    <p>&#10148;</p>
                                    <p>Technical Proficiency: Well-versed in JavaScript, HTML, and CSS, with a focus on the React JS framework. Completed practical exercises and projects, demonstrating the ability to translate theoretical knowledge into tangible results.</p>
                                </li>

                                <li className="bg-blue-400 flex items-start gap-x-2 p-2 rounded-lg">
                                    <p>&#10148;</p>
                                    <p>Problem-Solving Skills: Developed strong analytical and problem-solving skills through various coding challenges and real-world application of programming concepts. Excels at troubleshooting and finding creative solutions.</p>
                                </li>
                                <li className="bg-blue-400 flex items-start gap-x-2 p-2 rounded-lg">
                                    <p>&#10148;</p>
                                    <p>Adaptability and Eagerness to Learn: Proven ability to quickly grasp new technologies and programming languages. Demonstrated commitment to continuous learning, staying informed about the latest developments in the IT field.</p>
                                </li>
                                <li className="bg-blue-400 flex items-start gap-x-2 p-2 rounded-lg">
                                    <p>&#10148;</p>
                                    <p>Communication Skills: Possesses excellent verbal and written communication skills, cultivated through collaborative coursework and group projects. Able to effectively convey technical concepts to both technical and non-technical audiences.</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>


            </main>
        </>
    );

}
export default Profile