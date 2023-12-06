import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyle } from './style/globalStyle.ts'
import { TransactionProvider } from './context/TransactionProvider';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TransactionProvider>
    <App />
    </TransactionProvider>
    <GlobalStyle />
  </React.StrictMode>,
)
