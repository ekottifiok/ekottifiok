import React from 'react'
import ReactDOM from 'react-dom/client'
import {ThemeProvider} from "@components/theme";
import {App} from './app';
import './main.css'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- default for vite
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
