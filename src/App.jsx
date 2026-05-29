// LAYOUTS
import Navbar from "./components/layout/Navbar";
import Container from "./components/layout/Container";

// SECTIONS
import Hero from './components/sections/Hero'
import AboutMe from './components/sections/AboutMe'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Contacts from './components/sections/Contacts'
import Experiences from "./components/sections/Experiences";

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Container>
        <Experiences />
        <Skills/>
        <Projects />
        <AboutMe />
        <Contacts />
      </Container>
    </div>
  )
}

export default App
