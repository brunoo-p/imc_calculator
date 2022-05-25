import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
    colors: {
        primary: '#3659F0',
        secondary: '#1d1d21',
        tertiary: '#60A8F4',
        text: '#8f8e8e',
        background: '#262626'
    },
    badgeMessage : {
        success: {
            background: '#d4edda',
            color: '#155724'
        },
        error: {
            background: '#f8d7da',
            color: '#960505'
        },
        signing: {
            background: '#297fff3e',
            color: '#3659F0'
        }
    },
    maxWidth: '1200px'

};

type Props = {
    children: React.ReactNode
}
const Theme: React.FC<Props> = ({ children }) => (
    <ThemeProvider theme={theme}> { children } </ThemeProvider>
);

export default Theme;
