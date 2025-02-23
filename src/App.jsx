
import About from "./Components/About"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import Header from "./Components/Header"
import Testimonails from "./Components/Testimonials"
import Footer from "./Components/Footer"


const App = () =>{
 return (
     <div className = "w-full overflow-hiddem">
      <Header/>
      
      <About/>
      <Projects/>
      <Testimonails/>
      <Contact/>
      <Footer/>
     </div>
  )
}
export default App
