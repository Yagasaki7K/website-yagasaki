import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import Curriculum from './pages/Curriculum'
import Curriculo from './pages/Curriculo'
import CurriculoDownload from './pages/CurriculoDownload'
import CurriculumDownload from './pages/CurriculumDownload'
import './index.css'

import ReactDOM from "react-dom/client";

import Blog from './pages/Blog'
import AplicativoClone from './pages/post/AplicativoClone'
import MarketingTalks from './pages/post/MarketingTalks'
import ShaweeHackathon from './pages/post/ShaweeHackathon'
import ApresentarAnderson from './pages/post/ApresentarAnderson'
import ConseguirExperiencia from './pages/post/ConseguirExperiencia'
import ExperienciaNextJS from './pages/post/ExperienciaNextJS'
import FrontBackFull from './pages/post/FrontBackFull'
import DevRel from './pages/post/DevRel'
import JhennysBook from './pages/post/JhennysBook'
import HabitosDesenvolvedores from './pages/post/HabitosDesenvolvedores'

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

                <Route path="/blog" element={<Blog />} exact />
                <Route path="/blog/aplicativo-que-cria-clone-virtual-do-usuario-faz-sucesso-no-brasil"
                element={<AplicativoClone/>} exact />
                <Route path="/blog/marketing-talks-cps01-foi-marcado-por-clima-informal-e-conteudo-direto-ao-ponto"
                element={<MarketingTalks/>} exact /> 
                <Route path="/blog/3-lugar-no-hackathon-pela-ambev-em-parceria-com-a-shawee"
                element={<ShaweeHackathon/>} exact /> 
                <Route path="/blog/primeiramente-deixe-me-apresentar-eu-sou-anderson"
                element={<ApresentarAnderson/>} exact /> 
                <Route path="/blog/como-conseguir-experiencia-sendo-junior-iniciante"
                element={<ConseguirExperiencia/>} exact /> 
                <Route path="/blog/minha-experiencia-com-o-desenvolvimento-do-blog-com-nextjs"
                element={<ExperienciaNextJS/>} exact /> 
                <Route path="/blog/front-end-back-end-full-stack-o-que-e-e-para-onde-ir"
                element={<FrontBackFull/>} exact /> 
                <Route path="/blog/conheca-sobre-developer-relations"
                element={<DevRel/>} exact /> 
                <Route path="/blog/jhennys-book-uma-homenagem-em-app"
                element={<JhennysBook/>} exact /> 
                <Route path="/blog/habitos-desenvolvedores-produtivos"
                element={<HabitosDesenvolvedores/>} exact /> 
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)