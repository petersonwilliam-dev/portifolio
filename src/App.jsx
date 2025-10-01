// LAYOUTS
import Navbar from "./components/layout/Navbar";
import Container from "./components/layout/Container";

// SECTIONS
import AboutMe from './components/sections/AboutMe'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Contacts from './components/sections/Contacts'
import Experiences from "./components/sections/Experiences";

function App() {

  return (
    <div>
      <Navbar />
      <Container>
        <AboutMe />
        <Skills/>
        <Experiences />
        <Projects />
        <Contacts />
      </Container>
    </div>
  )
}

export default App
