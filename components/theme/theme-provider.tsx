import {createTheme, ThemeProvider as MUIThemeProvider} from '@mui/material/styles';
import type {ThemeOptions} from '@mui/material/styles';
import type {ReactNode} from "react";
import {useMemo} from "react";
import {CssBaseline} from "@mui/material";
import {typography} from './typography.ts'

export function ThemeProvider({children}: { children: ReactNode }): ReactNode {

  const memoizedValue = useMemo<ThemeOptions>(
    () => ({
      typography,
    }),
    []
  );

  const theme = createTheme(memoizedValue);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline/>
      {children}
    </MUIThemeProvider>
  );
}