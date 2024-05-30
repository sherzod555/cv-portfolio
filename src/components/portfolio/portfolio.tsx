import { useTheme } from "../../ThemeContext.tsx";
import { useLanguage } from "../../LanguageContext.tsx";
import mockDataPort from "./mockPort.tsx";

export const Portfolio = () => {
  const { isDarkMode } = useTheme();
  const { language } = useLanguage();

  return (
    <>
      <main
        className={`${isDarkMode ? "bg-slate-700 text-white" : "bg-blue-100"}`} id="portfolio">
        
        <div className="container mx-auto xl:w-[1200px] px-7">
        
          <div className="py-8">
        
            <h2 className="text-3xl font-bold">{`${language === "en" ? "Portfolio" : language === "uz" ? "Portfolio" : "Портфолио"}`}</h2>
        
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7 pt-7">
        
              {mockDataPort.map((data, index) => (
        
                <div key={index} className="flex flex-col text-base md:text-xl">
                
                  <a href={data.PortLink} target="_blank" className={`${isDarkMode ? "bg-slate-900 text-white hover:shadow-lg" : "bg-white hover:shadow-xl"} hover:shadow-gray-400/50 rounded-2xl duration-500`}>
                
                    <div>
                
                      <img className="rounded-t-2xl border-b" src={data.PortImg} alt={data.PortName} />
                
                      <div className="hidden bg-blue-400/50">
                        <p>{data.PortDesc}</p>
                      </div>
                
                    </div>

                    <p className="p-3 text-center">{data.PortName}</p>
                
                  </a>
                
                </div>
              
              ))}
            
            </div>
          
          </div>
        
        </div>
      
      </main>
    </>
  );
};

export default Portfolio;
