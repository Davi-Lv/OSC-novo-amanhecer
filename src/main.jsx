import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Campanhas from './assets/pages/Campanhas'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>,
)