import { useTheme } from '../../ThemeContext.tsx';
export const Portfolio = () => {
    const { isDarkMode } = useTheme();    

    return (
        <>
            <main className={`${isDarkMode ? "bg-slate-700 text-white" : "bg-blue-100"}`} id="portfolio">

                <div className="container mx-auto xl:w-[1200px] px-7">

                    <div className="py-8">
                        <h2 className="text-3xl font-bold">Portfolio</h2>
                    </div>

                </div>
            </main>
        </>
    );
};

export default Portfolio