import Navbar from "../Components/Navbar"
import Home from "./Home"
import About from "./About"
import Service from "./Services"
import Contact from "./Contact-us"
import BlogPage from "./Blog"
import FaqShow from "./Faq"
import Footer from "../Components/Footer"
export default function MainHome(){

    return (
        <div>
            
     <Home/>
     <About/>
     <Service/>
     <Contact/>
     <BlogPage/>
     <FaqShow/>
    
        </div>
    )
}