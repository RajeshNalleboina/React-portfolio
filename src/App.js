import React from 'react';
import logo from './logo.svg';
import NavBar from './components/NavBar'
import Title from './components/Title'
import About from './components/About'
import Footer from './components/Footer'
import LatestBlog from './components/LatestBlog'
import Projects from './components/Project'
import TechSkills from './components/SkillsSection'
import Recommendation from './components/Recommendation'
import "./App.css"


function App() {
  return (
    <div className="App">
     <h1>Portfolio</h1>
     <NavBar/>
     <Title name="Rajesh Nalleboina" lead="I am freelancer from XYZ"/>
     <Projects />
     <Recommendation />
     <TechSkills />
     <LatestBlog />
     <About/>
     <Footer/>
    </div>
  );
}

export default App;
