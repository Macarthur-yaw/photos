
import './App.css'
import { Routes,Route } from 'react-router'
import MainHome from './Pages/MainHomePage'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Gallery } from './Pages/PhotoGallery'
import ServicesPage from './Pages/ServicesPage'
import BlogPage from './Pages/BlogPage'
import ContactPage from './Pages/ContactPage'
import BlogDetails from './Pages/DetailsBlog'
function App() {
  

  return (
    <div className=''>
    <Navbar/>
    <Routes>
      <Route index element={<MainHome/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/services' element={<ServicesPage/>}/>
      <Route path='/blog' element={<BlogPage/>}/>
<Route path='/blog/:id' element={<BlogDetails/>}/>
      
      <Route path='/contact' element={<ContactPage/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
