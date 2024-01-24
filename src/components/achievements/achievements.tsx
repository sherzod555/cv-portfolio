import { useTheme } from '../../ThemeContext.tsx';

export const Achievements = () => {
    const { isDarkMode } = useTheme();    

    return (
        <div className={`${isDarkMode ? "bg-slate-950 text-white" : ""}`}>
            <main className="container mx-auto w-[1300px]" id="achievements">



                <div className="py-8">
                    <h2 className="text-3xl font-bold">Achievements</h2>
                </div>

            </main>
        </div>
    );
};

export default Achievements