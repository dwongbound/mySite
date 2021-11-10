import React from 'react'
import { useMediaQuery } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';

export default function Theme() {

    const isDarkMode =  useMediaQuery('(prefers-color-scheme: dark)')

    const theme = React.useMemo(() => {
        return createTheme({
            palette: {
                primary: {
                    main: '#649ed',
                },
                secondary: {
                    main: '#c0c0c0',
                },
                type: isDarkMode ? 'dark' : 'light',
            }
        })
    }, [isDarkMode]);

    return theme
}