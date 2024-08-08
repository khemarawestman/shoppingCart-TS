
import { About } from './compoents/About/About'
import { Hero } from './compoents/Hero/Hero'
import MyWork from './compoents/MyWork/MyWork'
import Navbar from './compoents/Navbar/Navbar'
import Services from './compoents/Services/Services'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <MyWork/>
    </div>
  )
}

export default App