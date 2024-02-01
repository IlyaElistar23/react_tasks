import { useState } from 'react';
import { lightTheme, darkTheme } from './Theme'
import ThemeContext from './ThemeContext';
import CustomLayout from './CustomLayout';


const LayoutComponent = () => {

    const [layoutTheme, setLayoutTheme] = useState('dark')

    const switchTheme = () => layoutTheme === 'dark' ? setLayoutTheme('light') : setLayoutTheme('dark')

    return (
        <ThemeContext.Provider value={layoutTheme === 'light' ? lightTheme : darkTheme}>
            <CustomLayout switchTheme={switchTheme}/>
        </ThemeContext.Provider>
    );
};



export default LayoutComponent;
