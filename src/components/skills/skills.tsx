import { useTheme } from '../../ThemeContext.tsx';
export const Skills = () => {
    const { isDarkMode } = useTheme();    

    return (
        <div className={`${isDarkMode ? "bg-slate-900 text-white" : ""}`}>
            <main className="container mx-auto w-[1300px]" id="skills">



                <div className="py-8">
                    <h2 className="text-3xl font-bold">Skills</h2>
                </div>

            </main>
        </div>
    );
};

export default Skills