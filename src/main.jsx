import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Reset from './styles/Reset.jsx'
import GlobalStyle from './styles/GlobalStyle.jsx'
import { AuthProvider } from './providers/Auth.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Reset/>
    <GlobalStyle/>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
)
