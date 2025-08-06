import React from 'react'
import './App.css'

import { Routes, Route } from 'react-router'

import { Home } from './pages/home/Home'
import { About } from './pages/about/About'
import { Articles } from './pages/articles/Articles'
import { Layout } from './components/layout/Layout'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/articles" element={<Articles />} />
                    <Route path="/articles/:id" element={<Articles />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
