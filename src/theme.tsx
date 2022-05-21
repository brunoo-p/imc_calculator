import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
    colors: {
        primary: '#3659F0',
        secondary: '#1d1d21',
        tertiary: '#60A8F4',
        text: '#bfbfbf',
    },

};

type Props = {
    children: any
}
const Theme: React.FC<Props> = ({ children }) => (
    <ThemeProvider theme={theme}> { children } </ThemeProvider>
);

export default Theme;
