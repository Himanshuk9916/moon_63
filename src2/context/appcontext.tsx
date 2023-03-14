import React,{createContext} from 'react';
import { darkTheme } from '../themes/dark';
import { lightTheme } from '../themes/light';

export const theme={
    darkTheme,
    lightTheme
}

const ThemeContext=createContext(lightTheme);

export default ThemeContext;