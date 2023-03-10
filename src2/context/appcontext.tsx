import React,{createContext} from 'react';

export const theme={
    dark:{
        backgroundcolor:'black',
        textcolor:'white'
    },
    light:{
        backgroundcolor:'white',
        textcolor:'black'
    }
}

const ThemeContext=createContext(theme.light);

export default ThemeContext;