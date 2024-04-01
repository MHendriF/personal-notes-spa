import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const DarkModeContext = createContext();

const DarkModeContextProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('isDarkMode') || false);

    const toggleTheme = () => {
        setIsDarkMode((prevTheme) => {
            const newTheme = prevTheme === true ? false : true;
            localStorage.setItem('isDarkMode', newTheme);
            return newTheme;
        });
    };

    const contextValue = {
        isDarkMode,
        toggleTheme,
    };

    return <DarkModeContext.Provider value={contextValue}>{children}</DarkModeContext.Provider>;
};

DarkModeContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const DarkMode = DarkModeContext;
export default DarkModeContextProvider;
