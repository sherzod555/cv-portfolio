import './App.css'
import Achievements from './components/achivements/achievements'
import Contacts from './components/contacts/contacts'
import Education from './components/education/education'
import Footer from './components/footer/footer'
import Header from "./components/header/header"
import Portfolio from './components/portfolio/portfolio'
import Profile from "./components/profile/profile"
import Skills from './components/skills/skills'

function App() {

  return (
    <>
      <Header />
      <Profile/>
      <Education/>
      <Achievements/>
      <Portfolio/>
      <Skills/>
      <Contacts/>
      <Footer/>
    </>
  )
}

export default App
