import { createContext, PropsWithChildren } from "react";

import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';


import { adaptNavigationTheme, PaperProvider } from 'react-native-paper';
import { useColorScheme } from "react-native";


const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});


export const thmemeContext = createContext({
  isDark: false,
  theme: LightTheme,
});

export const ThemeContextProvider = ({ children }: PropsWithChildren) => {

  const colorScheme = useColorScheme();

  const isDark = colorScheme === 'dark';
  const theme = isDark ? DarkTheme : LightTheme;



  return(
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <thmemeContext.Provider value={{
          isDark: isDark,
          theme: theme,
        }}>
          {children}
        </thmemeContext.Provider>
      </NavigationContainer>
    </PaperProvider>

  )
}