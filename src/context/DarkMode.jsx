import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const DarkModeContext = createContext();

const DarkModeContextProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>{children}</DarkModeContext.Provider>;
};

DarkModeContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const DarkMode = DarkModeContext;
export default DarkModeContextProvider;
