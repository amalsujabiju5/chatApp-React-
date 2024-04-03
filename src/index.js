import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/Login';
import "./style.scss"

import App from './App';
import Home from './pages/Home';
import Register from './pages/Register';
import { AuthContext, AuthContextProvider } from './context/AuthContext';
import { ChatContextProvider } from './context/ChatContext';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <ChatContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChatContextProvider>
  </AuthContextProvider>

);

