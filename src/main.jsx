import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import Curriculum from './pages/Curriculum'
import './index.css'

import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/curriculum" element={<Curriculum />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)