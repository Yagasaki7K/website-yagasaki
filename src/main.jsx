import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import Curriculum from './pages/Curriculum'
import Curriculo from './pages/Curriculo'
import CurriculoDownload from './pages/CurriculoDownload'
import CurriculumDownload from './pages/CurriculumDownload'
import './index.css'

import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/curriculum" element={<Curriculum />} exact />
                <Route path="/curriculum-download" element={<CurriculumDownload />} exact />
                <Route path="/curriculo" element={<Curriculo />} exact />
                <Route path="/curriculo-download" element={<CurriculoDownload />} exact />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)