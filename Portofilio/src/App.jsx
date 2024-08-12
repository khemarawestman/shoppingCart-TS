
import { About } from './compoents/About/About'
import { Contact } from './compoents/contact/Contact'
import { Hero } from './compoents/Hero/Hero'
import MyWork from './compoents/MyWork/MyWork'
import Navbar from './compoents/Navbar/Navbar'
import Services from './compoents/Services/Services'
import { Footer } from './compoents/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <MyWork/>
      <Contact/>
      <Footer></Footer>
    </div>
    
  )
}

export default App