import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import UserProvider from './context/UserProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <React.StrictMode>
    <App/>
  </React.StrictMode>,
  </UserProvider>
)
