import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import TechPage from './pages/TechPage'
import FitnessPage from './pages/FitnessPage'
import ReadingPage from './pages/ReadingPage'
import ContactPage from './pages/ContactPage'
import TestImagePage from './pages/TestImagePage'
import LLMBlogPage from './pages/LLMBlogPage'
import RLBlogPage from './pages/RLBlogPage'
import LLMBlogPage2 from './pages/LLMBlogPage2'
import './styles/global.css'

const AppContainer = styled.div`
  min-height: 100vh;
  background: var(--bg-primary);
  color: var(--text-primary);
`

function App() {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/tech" element={<TechPage />} />
          <Route path="/fitness" element={<FitnessPage />} />
          <Route path="/reading" element={<ReadingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/test-image" element={<TestImagePage />} />
          <Route path="/blog/llm-agent" element={<LLMBlogPage />} />
          <Route path="/blog/reinforcement-learning" element={<RLBlogPage />} />
          <Route path="/blog/mainstream-llm" element={<LLMBlogPage2 />} />
        </Routes>
      </AppContainer>
    </Router>
  )
}

export default App