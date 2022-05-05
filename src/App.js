import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
// Regular Components

import NavBar from "./components/universal/NavBar"
import Footer from "./components/universal/Footer"

import Hero from "./components/Hero"
import AboutMeMini from "./components/AboutMeMini"
import MyProjectsMini from "./components/MyProjectsMini"

// Page Components

import AboutMePage from "./components/pages/AboutMePage"
import GospelPage from "./components/pages/GospelPage"
import MyProjectsPage from "./components/pages/MyProjectsPage"

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route 
          exact 
          path='/'
          element= {
            <>
              <Hero />
              <AboutMeMini />
              <MyProjectsMini />
            </>
          }>
        </Route>
        <Route 
          exact
          path='/aboutme'
          element={
            <AboutMePage />
          }>
        </Route>
        <Route 
          exact
          path='/myprojects'
          element={
            <MyProjectsPage />
          }>
        </Route>
        <Route 
          exact
          path='/gospel'
          element={
            <GospelPage />
          }>
        </Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App