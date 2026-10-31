import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/StudentPortal.css'

// basename "/student" để giữ nguyên đường dẫn của hệ thống gốc:
// /student/News, /student/News/Content/<slug>/, /student/TimeTable/Week ...
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/student">
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
