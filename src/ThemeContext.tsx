
import React, { createContext, useContext, useState } from 'react';

interface ThemeProviderProps {
  children: React.ReactNode;
}
interface Theme {
  
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<Theme | undefined>(undefined);

// export const ThemeProvider: React.FC = ({ children }: {children: React.ReactNode}) => {
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };


  const contextValue: Theme = {
    isDarkMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): Theme => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
