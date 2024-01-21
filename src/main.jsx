import React from 'react'
import ReactDOM from 'react-dom/client'
import Prueba1 from './prueba1.jsx'
import './index.css'
import Prueba2 from './prueba2.jsx';
import Practica3flexbox from './Practica3flexbox.jsx';
import Practica4navbar from './Practica4navbar.jsx';
import { BrowserRouter } from 'react-router-dom';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#512da8',
    },
    secondary: {
      main: '#ab47bc',
    },
    info: {
      main: '#03a9f4',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        {/* <ThemeProvider theme={theme}>
          <Prueba1 />
        </ThemeProvider> */}
        {/* <Prueba2/> */}
        {/* <Practica3flexbox/> */}
        <Practica4navbar/>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
