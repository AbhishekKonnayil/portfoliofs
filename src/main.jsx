import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App'
import ThemeContextProvider from './contexts/ThemeContext'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContextProvider>
      <HelmetProvider><App /></HelmetProvider> </ThemeContextProvider>

  </StrictMode>,
)
