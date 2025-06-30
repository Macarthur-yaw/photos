
import './App.css'
import Navbar from './Components/Navbar'
import About from './Pages/About'
import Contact from './Pages/Contact-us'
import Home from './Pages/Home'
import Service from './Pages/Services'
import BlogPage from './Pages/Blog'

import FaqShow from './Pages/Faq'
import Footer from './Components/Footer'
function App() {
  

  return (
    <div className=''>
     <Navbar/>
     <Home/>
     <About/>
     <Service/>
     <Contact/>
     <BlogPage/>
     <FaqShow/>
     <Footer/>
    </div>
  )
}

export default App
