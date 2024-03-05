import ThemeProvider from './ThemeProvider';

export const withTheme = (Component: React.ComponentType) => {
    // eslint-disable-next-line react/display-name
    return () => {
        return (
            <ThemeProvider>
                <Component />
            </ThemeProvider>
        );
    };
};
