
// LAYOUTS
import Navbar from "./components/layout/Navbar";
import Container from "./components/layout/Container";

// SECTIONS
import AboutMe from './components/sections/AboutMe'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Contacts from './components/sections/Contacts'

function App() {

  return (
    <div>
      <Navbar />
      <Container>
        <AboutMe />
        <Skills/>
        <Projects />
        <Contacts />
      </Container>
    </div>
  )
}

export default App
